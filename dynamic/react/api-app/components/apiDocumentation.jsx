import React from 'react';
import PropTypes from 'prop-types';
import url from 'url';
import ReactMarkdown from 'react-markdown';
import ApiDocumentationParam from './apiDocumentationParam';
import ApiDocModelLink from './apiDocModelLink';
import userManager from '../user-manager';

const ApiDocumentation = ({endpoint, userProfile}) => (
    <div>
        <div className='endpoint-header'>
            <h1 id={endpoint.operationId}>{endpoint.operationId}</h1>
            {userProfile ?
                <span style={{display: 'none'}}>
                    <span>{`Welcome, ${userProfile.profile.given_name} ${userProfile.profile.family_name}!`}</span>
                    <button className={'btn btn-secondary'} onClick={() => {
                        sessionStorage.devdotRedirectUrl = window.location.href;
                        userManager.signoutRedirect();
                    }} style={{margin: '8px'}}>{'Logout'}</button>
                </span> :
                <button className={'btn btn-primary'} onClick={() => {
                    sessionStorage.devdotRedirectUrl = window.location.href;
                    userManager.signinRedirect();
                }} style={{margin: '8px', display: 'none'}}>{'Authorize'}
                </button>
            }
        </div>
        <table className='styled-table'>
            <thead>
                <tr>
                    <th>{'Purpose'}</th>
                    <td>{endpoint.name}</td>
                </tr>
                <tr>
                    <th>{'HTTP Verb'}</th>
                    <td>{endpoint.action.toUpperCase()}</td>
                </tr>
                <tr>
                    <th>{'REST Path'}</th>
                    <td>{decodeURI(url.parse(endpoint.path).pathname)}</td>
                </tr>
                <tr>
                    <th>{(endpoint.productionPath) ? 'URL (SANDBOX)' : 'URL'}</th>
                    <td>{endpoint.path}</td>
                </tr>
                {(endpoint.productionPath) ?
                    <tr>
                        <th>{'URL (PRODUCTION)'}</th>
                        <td>{endpoint.productionPath}</td>
                    </tr> : null
                }
                <tr>
                    <th>{'Query String'}</th>
                    <td>{(endpoint.queryString) ? '?' : ''}{Object.keys(endpoint.queryString || {}).join('&')}</td>
                </tr>
                <tr>
                    <th>{'Response Type'}</th>
                    <td>
                        <ApiDocModelLink refSchema={endpoint.responseSchemaWithRefs} />
                    </td>
                </tr>
                <tr>
                    <th>{'Content-Type'}</th>
                    <td>{endpoint.produces.join(', ')}</td>
                </tr>
            </thead>
        </table>
        <h3 id='description'>{'Description'}</h3>
        <ReactMarkdown className={'markdown-description'} source={endpoint.description || ''} />
        <h3 id='parameters'>{'Parameters'}</h3>
        <table className='styled-table'>
            <thead>
                <tr>
                    <th>{'Location'}</th>
                    <th>{'Parameter'}</th>
                    <th>{'Attributes'}</th>
                    <th>{'Summary'}</th>
                </tr>
            </thead>
            <ApiDocumentationParam currentOperation={endpoint.operationId} params={endpoint.pathParams} type={'UriPath'} />
            <ApiDocumentationParam currentOperation={endpoint.operationId} params={endpoint.headerParams} type={'Header'} />
            <ApiDocumentationParam currentOperation={endpoint.operationId} params={endpoint.queryString} type={'QueryString'} />
            {endpoint.requestSchemaWithRefs ?
                <tbody>
                    <tr>
                        <td>{'RequestBody'}</td>
                        <td>{'Model'}</td>
                        <td>
                            <ApiDocModelLink refSchema={endpoint.requestSchemaWithRefs} />
                        </td>
                        <td>
                            {endpoint.requestSchemaWithRefs.description || null}
                        </td>
                    </tr>
                </tbody> :
                null
            }
        </table>
    </div>
);

ApiDocumentation.displayName = 'API Documentation';
ApiDocumentation.propTypes = {
    endpoint: PropTypes.object,
    userProfile: PropTypes.object
};

export default ApiDocumentation;
