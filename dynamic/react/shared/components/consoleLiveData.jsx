/* Component to render a simple API description, request, and response
 * Features dark color scheme and JSON syntax highlighting
 */

import React from 'react';
import PropTypes from 'prop-types';
import userManager from '../../api-app/user-manager';

const highlightPunctuation = (str) => {
    return str.replace(/"[^"]*"|([{}\[\],])/g, (m, group1) => {
        if (!group1) {
            return m;
        }

        return '<span class="punctuation">' + m + '</span>';
    });
};

const syntaxHighlight = (jsonObj) => {
    // Need to prevent changes to our postBody we want to stringify don't affect actual postBody
    let json = JSON.stringify(jsonObj, null, 2);

    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    json = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
        let cls = 'number';

        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        // if we want to highlight this field, do so now
        if (/__HIGHLIGHT__/.test(match)) {
            return `<span class="${cls} highlighted-field">${match.replace('__HIGHLIGHT__', '')}</span>`;
        }
        return `<span class="${cls}">${match}</span>`;
    });
    return highlightPunctuation(json);
};

const PostHelper = ({action, endpoint, onConsoleToggledFreeEdit, onConsoleToggledReadOnly, onRequestChanged, request}) => {
    if (action === 'post' && (typeof request === 'object' || Array.isArray(request))) {
        return (
            <div>
                <ul className={'nav nav-tabs'} id={'console-tabs'}>
                    <li className={'nav'} id={'FE'}><a data-toggle={'tab'} href={'#console_input_freeEdit'} onClick={() => {
                        onConsoleToggledFreeEdit(endpoint.id);
                    }}><i className={'glyphicon glyphicon-pencil'}/>{' Editor'}</a></li>
                    <li className={'nav active'} id={'RO'}><a data-toggle={'tab'} href={'#console_input_readOnly'} onClick={() => {
                        onConsoleToggledReadOnly(endpoint.id);
                    }}><i className={'glyphicon'}/>{'Console'}</a></li>
                </ul>
                <div className={'tab-content'}>
                    <div className={'code-snippet code-snippet-tabcontent reqScroll active'} id={'console_input_readOnly'}><pre dangerouslySetInnerHTML={{__html: syntaxHighlight(request)}} /></div>
                    <div className={'code-snippet code-snippet-tabcontent reqScroll'} id={'console_input_freeEdit'}><textarea className={'code-snipet-console'} id={'console_input'} onChange={() => {
                        onRequestChanged(endpoint.id, document.getElementById('console_input').value);
                    }} value={endpoint.requestInput} /></div>
                </div>
            </div>
        );
    } else if (typeof request === 'object' || Array.isArray(request)) {
        return (
            <div className={'code-snippet reqScroll'} id={'console_input'}><pre dangerouslySetInnerHTML={{__html: syntaxHighlight(request)}} /></div>
        );
    }
    return (
        <div className={'code-snippet code-snippet-code-text reqScroll'} dangerouslySetInnerHTML={{__html: request}} />
    );
};

PostHelper.displayName = 'Console Helper';
PostHelper.propTypes = {
    action: PropTypes.string.isRequired,
    endpoint: PropTypes.object.isRequired,
    onConsoleToggledFreeEdit: PropTypes.func.isRequired,
    onConsoleToggledReadOnly: PropTypes.func.isRequired,
    onRequestChanged: PropTypes.func.isRequired,
    request: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string])
};

const ConsoleLiveData = ({action, consoleLoading, endpoint, onConsoleToggledFreeEdit, onConsoleToggledReadOnly, onRequestChanged, onToggleAiForRequest, path, request, response, userProfile}) => {
    return (
        <div>
            <h5 className={'console-output-header'}>
                <span>{'API Endpoint'}</span>
                {endpoint.path.includes('https://sandbox-rest.avatax.com/api/v2') ?
                    <span>
                        {userProfile ?
                            <span className={'pull-right'}>
                                {`Use ${userProfile.profile.given_name} ${userProfile.profile.family_name} credentials`}&nbsp;
                                <input className={'toggle-ai-creds'} onClick={onToggleAiForRequest} type={'checkbox'} value={''} />
                                &nbsp;{'|'}&nbsp;
                                <span>
                                    <button className={'ai-authorize btn-lg btn btn-secondary'} onClick={() => {
                                        sessionStorage.devdotRedirectUrl = window.location.href;
                                        userManager.signoutRedirect();
                                    }}>{'Logout'}</button>
                                </span>
                            </span> :
                            <span className={'pull-right'}>
                                <button className={'ai-authorize btn-lg btn btn-primary'} onClick={() => {
                                    sessionStorage.devdotRedirectUrl = window.location.href;
                                    userManager.signinRedirect();
                                }}>{'Authorize'}
                                </button>
                            </span>
                        }
                    </span> : null
                }
            </h5>
                <div className={'code-snippet-plaintext'}>{path}</div>
                <h5 className={'console-output-header'}>{'Method'}</h5>
                <div className={'code-snippet-plaintext'}>{action.toUpperCase()}</div>
                    {request ?
                        <div className={'row'} style={{marginBottom: '8px'}}>
                            <div className={'col-md-6 console-req-container'}>
                                <h5 className={'console-output-header'}>{'Request'}</h5>
                                {/* eslint-disable react/no-danger */}
                                <PostHelper action={action}
                                    endpoint={endpoint}
                                    onConsoleToggledFreeEdit={onConsoleToggledFreeEdit}
                                    onConsoleToggledReadOnly={onConsoleToggledReadOnly}
                                    onRequestChanged={onRequestChanged}
                                    request={request}
                                />
                            </div>
                            <div className={'col-md-6 console-res-container'}>
                                {action === 'post' ? <h5 className={'console-output-header response-post'}>{'Response'}</h5> :
                                <h5 className={'console-output-header'}>{'Response'}</h5>}
                                {endpoint.consoleError ?
                                    <div className={'json_error'}>
                                        <h5>{'Incorrect JSON format'}</h5>
                                    </div> : null}
                                <div className={'code-snippet respScroll'}>{consoleLoading ? <div className={'loading-pulse'} /> : <pre dangerouslySetInnerHTML={{__html: response ? syntaxHighlight(response.body) : ' '}} />}</div>
                            </div>
                        </div> :
                        <div>
                            <h5 className={'console-output-header'}>{'Response'}</h5>
                            <div className={'code-snippet respScroll'}>{consoleLoading ? <div className={'loading-pulse'} /> : <pre dangerouslySetInnerHTML={{__html: response ? syntaxHighlight(response.body) : ' '}} />}</div>
                            {/* eslint-enable react/no-danger */}
                        </div>
                    }
        </div>
    );
};

ConsoleLiveData.displayName = 'Console Live Data';
ConsoleLiveData.propTypes = {
    action: PropTypes.string.isRequired,
    consoleLoading: PropTypes.bool.isRequired,
    endpoint: PropTypes.object.isRequired,
    onConsoleToggledFreeEdit: PropTypes.func.isRequired,
    onConsoleToggledReadOnly: PropTypes.func.isRequired,
    onRequestChanged: PropTypes.func.isRequired,
    onToggleAiForRequest: PropTypes.func.isRequest,
    path: PropTypes.string.isRequired,
    /* Not required, as a GET might not require any input (e.g. LandedCost `validateCredentials` route) */
    request: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
    /* Not required, as a blank response might visually indicate that a request hasn't been sent yet */
    response: PropTypes.shape({
        status: PropTypes.string.isRequired,
        statusMessage: PropTypes.string.isRequired,
        body: PropTypes.oneOfType([
            PropTypes.object, PropTypes.array
        ]).isRequired
    }),
    userProfile: PropTypes.object
};

export default ConsoleLiveData;
