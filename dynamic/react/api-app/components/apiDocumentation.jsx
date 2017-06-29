import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import ApiDocumentationParam from './apiDocumentationParam';
import ApiDocModelLink from './apiDocModelLink';


function getPath(path) {
    let sandboxPath = path;

    sandboxPath = sandboxPath.replace(/{/g, '<code>{');
    sandboxPath = sandboxPath.replace(/}/g, '}</code>');
    return sandboxPath;
}


const ApiDocumentation = ({endpoint}) => (
    <div>
        <div className='endpoint-header'>
            <h1 id={endpoint.operationId}>{endpoint.operationId}</h1>
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
                    <th>{(endpoint.productionPath) ? 'URL (SANDBOX)' : 'URL'}</th>
                    <td dangerouslySetInnerHTML= {{__html: getPath(endpoint.path)}}/>
                </tr>
                {(endpoint.productionPath) ?
                    <tr>
                        <th>{'URL (PRODUCTION)'}</th>
                        <td dangerouslySetInnerHTML= {{__html: getPath(endpoint.productionPath)}}/>
                    </tr> : null
                }
                {(endpoint.queryString) ?
                <tr>
                    <th>{'Query String'}</th>
                    <td>{(endpoint.queryString) ? '?' : ''}{Object.keys(endpoint.queryString || {}).join('&')}</td>
                </tr> : null}
                <tr>
                    <th>{'Content-Type'}</th>
                    <td>{endpoint.produces.join(', ')}</td>
                </tr>
                <tr>
                    <th>{'Response Type'}</th>
                    <td>
                        <ApiDocModelLink refSchema={endpoint.responseSchemaWithRefs} />
                    </td>
                </tr>
            </thead>
        </table>
        <h3 id='description'>{'Description'}</h3>
        <ReactMarkdown className={'markdown-description'} source={endpoint.description || ''} />
        {(endpoint.pathParams || endpoint.headerParams || endpoint.queryString || endpoint.requestSchemaWithRefs) ?
            <div>
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
            </div> : null
        }
    </div>
);

ApiDocumentation.displayName = 'API Documentation';
ApiDocumentation.propTypes = {
    endpoint: PropTypes.object
};

export default ApiDocumentation;
