import React from 'react';
import RequestParams from './requestParams';
import PostBody from './postBody';

import {hasExampleData} from '../helpers';

const highlightPunctuation = (str) => {
    return str.replace(/"[^"]*"|([{}\[\],])/g, (m, group1) => {
        if (!group1) {
            return m;
        }

        return '<span class="punctuation">' + m + '</span>';
    });
};

const syntaxHighlight = (jsonObj) => {
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
        return '<span class="' + cls + '">' + match + '</span>';
    });

    return highlightPunctuation(json);
};

const ApiConsole = ({endpoint, id, onFillConsoleSampleData, onSubmitConsoleRequest, onPostBodyInputChanged, onResetConsole, onQueryParamChanged, onPathParamChanged, onAddItemToPostbodyCollection, onRemovePostbodyCollectionItem}) => {
    return (
        <div className={'row api-console'}>
            <div className={'col-md-4 col-xs-12 api-console-form-wrapper'}>
                <div>
                        <h3 style={{display: 'inline-block'}}>{'Input'}</h3>
                        {hasExampleData('QUERY_STRING', endpoint.queryString) || hasExampleData('POST_BODY', endpoint.postBody) || hasExampleData('PATH_PARAM', endpoint.pathParams) ?
                        <span
                            className='m-l-1 clickable hdr-btn-adj-text'
                            onClick={onFillConsoleSampleData.bind(null, id)}
                        >
                        {' Fill with Sample Data'}
                        </span> : null}
                </div>
                <div style={{marginBottom: '10px'}}>
                        <button
                            className='btn btn-primary'
                            onClick={
                                (e) => {
                                    e.preventDefault();
                                    onSubmitConsoleRequest(endpoint, id);
                                }
                            }
                            type={'button'}
                        >
                        {'Submit'}
                        </button>
                        <span
                            className='m-l-1 clickable hdr-btn-adj-text'
                            onClick={onResetConsole.bind(null, id)}
                            type='reset'>
                        {'Reset'}
                        </span>
                    </div>
                {endpoint.pathParams ? <RequestParams endpointId={id} onInputChange={onPathParamChanged} paramType={'PATH'} params={endpoint.pathParams}/> : null}
                {endpoint.queryString ? <RequestParams endpointId={id} onInputChange={onQueryParamChanged} paramType={'QUERY_STRING'} params={endpoint.queryString}/> : null}
                {endpoint.postBody ? <PostBody id={id} name={endpoint.name.toLowerCase() + '_' + endpoint.action} onAddItemToPostbodyCollection={onAddItemToPostbodyCollection} onPostBodyInputChanged={onPostBodyInputChanged} onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem} postBody={endpoint.postBody} postBodyData={endpoint.postBodyData}/> : null}
                {endpoint.postBody ?
                    <div style={{marginBottom: '10px'}}>
                        <button
                            className='btn btn-primary'
                            onClick={
                                (e) => {
                                    e.preventDefault();
                                    onSubmitConsoleRequest(endpoint, id);
                                }
                            }
                            type={'button'}
                        >
                        {'Submit'}
                        </button>
                        <span
                            className='m-l-1 hdr-btn-adj-text clickable'
                            onClick={onResetConsole.bind(null, id)}
                            type='reset'>
                            {'Reset'}
                        </span>
                    </div> : null}
                    <div style={{background: 'blue', height: 'auto'}}></div>
            </div>
            <div className={'api-console-output col-md-8 col-xs-12'}>
                <h5 className={'console-output-header'}>{'API Endpoint'}</h5>
                <div className={'code-snippet-plaintext'}>{endpoint.path}</div>
                <h5 className={'console-output-header'}>{'Method'}</h5>
                <div className={'code-snippet-plaintext'}>{endpoint.action.toUpperCase()}</div>
                    {endpoint.pathParams || endpoint.queryString || endpoint.postBody ?
                    <div className={'row'} style={{marginBottom: '8px'}}>
                        <div className={'col-md-6 console-req-container'}>
                            <h5 className={'console-output-header'}>{'Request'}</h5>
                            {/* eslint-disable react/no-danger */}
                            {endpoint.postBodyData ? <div className={'code-snippet'}><pre dangerouslySetInnerHTML={{__html: endpoint.postBodyData ? syntaxHighlight(endpoint.postBodyData) : ' '}}></pre></div> : <div className={'code-snippet code-snippet-code-text'}>{endpoint.curl}</div>}
                        </div>
                        <div className={'col-md-6 console-res-container'}>
                            <h5 className={'console-output-header'}>{'Response'}</h5>
                            <div className={'code-snippet'}><pre dangerouslySetInnerHTML={{__html: endpoint.apiResponse ? syntaxHighlight(endpoint.apiResponse.body) : ' '}}></pre></div>
                        </div>
                    </div> :
                    <div>
                            <h5 className={'console-output-header'}>{'Response'}</h5>
                            <div className={'code-snippet'}><pre dangerouslySetInnerHTML={{__html: endpoint.apiResponse ? syntaxHighlight(endpoint.apiResponse.body) : ' '}}></pre></div>
                            {/* eslint-enable react/no-danger */}
                    </div>
                    }
                <div style={{background: 'blue', height: 'auto'}}></div>
            </div>
        </div>
    );
};

ApiConsole.displayName = 'API Console';
ApiConsole.propTypes = {
    endpoint: React.PropTypes.shape({
        apiResponse: React.PropTypes.shape({
            status: React.PropTypes.string.isRequired,
            statusMessage: React.PropTypes.string.isRequired,
            body: React.PropTypes.oneOfType([
                React.PropTypes.object, React.PropTypes.array
            ]).isRequired
        }),
        name: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        curl: React.PropTypes.string.isRequired,
        isAuthenticated: React.PropTypes.bool.isRequired,
        path: React.PropTypes.string.isRequired,
        action: React.PropTypes.string.isRequired,
        queryString: React.PropTypes.objectOf(
            React.PropTypes.shape({
                description: React.PropTypes.string,
                example: React.PropTypes.any,
                required: React.PropTypes.bool,
                value: React.PropTypes.any.isRequired
            })
        ),
        pathParams: React.PropTypes.objectOf(
            React.PropTypes.shape({
                description: React.PropTypes.string,
                example: React.PropTypes.any,
                required: React.PropTypes.bool,
                value: React.PropTypes.any.isRequired
            })
        ),
        postBody: React.PropTypes.object
    }).isRequired,
    id: React.PropTypes.number.isRequired,
    onAddItemToPostbodyCollection: React.PropTypes.func.isRequired,
    onFillConsoleSampleData: React.PropTypes.func.isRequired,
    onPathParamChanged: React.PropTypes.func.isRequired,
    onPostBodyInputChanged: React.PropTypes.func.isRequired,
    onQueryParamChanged: React.PropTypes.func.isRequired,
    onRemovePostbodyCollectionItem: React.PropTypes.func.isRequired,
    onResetConsole: React.PropTypes.func.isRequired,
    onSubmitConsoleRequest: React.PropTypes.func.isRequired
};

export default ApiConsole;
