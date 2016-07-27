import React from 'react';
import RequestParams from './requestParams';
import PostBody from './postBody';

import request from 'request';
import {store} from '../store';
import {actionTypes} from '../reducers/reducer';
import {replacePathParams, hasExampleData, replaceSpacesInStr} from '../helpers';

const handleSubmit = (endpoint, id) => {
    /* If our endpoint has a defined proxy, use that to make our API console request
     * Otherwise, just use the path specified as `host` in Swagger file
     */
    const requestPath = endpoint.proxyRoute || endpoint.path;

    const url = (endpoint.pathParams ? replacePathParams(requestPath, endpoint.pathParams) : requestPath) + (endpoint.qsPath || '');
    const apiReq = {
        url: url,
        headers: {}
    };

    if (requestPath.indexOf('amazonaws') !== -1) {
        apiReq.headers['api-key'] = 'b24757b69083fa34d27a7d814ea3a59c';
    }

    if (endpoint.postBody) {
        apiReq.headers['Content-Type'] = 'application/json';
        apiReq.body = JSON.stringify(endpoint.postBodyData);
    }

    request[endpoint.action](apiReq, (error, response, body) => {
        let responseBody = {};

        try {
            responseBody = JSON.parse(body);
        } catch (err) {
            responseBody.error = err.message;
        }

        store.dispatch({
            type: actionTypes.SUBMIT_DONE,
            endpointId: id,
            apiResponse: {
                body: responseBody,
                status: response ? response.statusCode.toString() : '',
                statusMessage: error ? error.message : response.statusMessage || ''
            }
        });
    });
};

const toggleVisibility = (endpointId) => {
    store.dispatch({
        type: actionTypes.CONSOLE_VISIBILITY_TOGGLED,
        endpointId: endpointId
    });
};

const handleFillSampleData = (id) => {
    store.dispatch({
        type: actionTypes.FILL_REQUEST_SAMPLE_DATA,
        endpointId: id
    });
};

const ApiConsole = ({endpoint, id}) => (
    <div>
        <div id={replaceSpacesInStr(`${endpoint.name}-console`)} className={'try-it-now-header'} onClick={(e) => {
            toggleVisibility(id);
        }}>{'Try it now! '}<span className={'documentation-expand-icon glyphicon' + (endpoint.apiConsoleVisible ? ' glyphicon-menu-down' : ' glyphicon-menu-up')}></span></div>
        {endpoint.apiConsoleVisible ?
            <div className={'row api-console'}>
                <div className={'col-md-5 api-console-form-wrapper'}>
                    <h3>{'Input'}</h3>
                    {endpoint.pathParams ? <RequestParams endpointId={id} paramType={'PATH'} params={endpoint.pathParams}/> : null}
                    {endpoint.queryString ? <RequestParams endpointId={id} paramType={'QUERY_STRING'} params={endpoint.queryString}/> : null}
                    {endpoint.postBody ? <PostBody id={id} name={endpoint.name.toLowerCase() + '_' + endpoint.action} postBody={endpoint.postBody}/> : null}
                    <button
                        className='btn btn-success'
                        onClick={(e) => {
                            e.preventDefault();
                            handleSubmit(endpoint, id);
                        } }
                        type={'button'}
                        >
                        {'Submit'}
                    </button>
                    {hasExampleData('QUERY_STRING', endpoint.queryString) || hasExampleData('POST_BODY', endpoint.postBody) || hasExampleData('PATH_PARAM', endpoint.pathParams) ?
                        <span>
                            <button
                                className='btn btn-primary m-l-1'
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleFillSampleData(id);
                                } }
                                type={'button'}
                                >
                                {'Fill Sample Data'}
                            </button>
                        </span> : null}
                    <button className='btn btn-default m-l-1' type='reset'>{'Reset'}</button>
                </div>
                <div className={' api-console-output col-md-7'}>
                    <h4>{'API Endpoint'}</h4>
                    <div className={'api-console-metadata'}>{endpoint.path}</div>
                    <h4>{'Method'}</h4>
                    <div className={'api-console-metadata'}>{endpoint.action.toUpperCase()}</div>
                    <div className={'row'}>
                        <div className={'col-md-6'}>
                            <h4>{'Request'}</h4>
                            <div className={'api-console-metadata'}>{JSON.stringify(endpoint.postBodyData, null, 2) || ' '}</div>
                        </div>
                        <div className={'col-md-6'}>
                            <h4>{'Response'}</h4>
                            <div className={'api-console-metadata'}>{endpoint.apiResponse ? JSON.stringify(endpoint.apiResponse.body, null, 2) : ' '}</div>
                        </div>
                    </div>
                    <div className={'code-snippet'}>{endpoint.curl}</div>
                </div>
            </div> : null}
    </div>
);

ApiConsole.displayName = 'API Console';
ApiConsole.propTypes = {
    endpoint: React.PropTypes.shape({
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
        postBody: React.PropTypes.object,
        apiResponse: React.PropTypes.shape({
            status: React.PropTypes.string.isRequired,
            statusMessage: React.PropTypes.string.isRequired,
            body: React.PropTypes.oneOfType([
                React.PropTypes.object, React.PropTypes.array
            ]).isRequired
        }),
        apiConsoleVisible: React.PropTypes.bool.isRequired
    }).isRequired,
    id: React.PropTypes.number.isRequired
};

export default ApiConsole;
