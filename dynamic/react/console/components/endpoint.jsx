import React from 'react';
import request from 'request';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';
import RequestParams from './requestParams';
import PostBody from './postBody';
import {replacePathParams, hasExampleData} from '../helpers';

const handleSubmit = (endpoint, id) => {
    // todo don't forget form validation!
    const url = (endpoint.pathParams ? replacePathParams(endpoint.path, endpoint.pathParams) : endpoint.path) + (endpoint.qsPath || '');

    const apiReq = {
        url: url,
        headers: {
            Authorization: 'Token ZXqnd8Q3pRH_eyyYrk5xqpJXOhcdpTFJ4saXIJsw'
        }
    };

    if (endpoint.postBody) {
        apiReq.headers = {'Content-Type': 'application/json'};
        apiReq.body = JSON.stringify(endpoint.postBodyData);
    }

    request[endpoint.action](apiReq, (error, response, body) => {
        if (error || response.statusCode !== 200) {
            store.dispatch({
                type: actionTypes.SUBMIT_DONE,
                endpointId: id,
                apiResponse: {body: {}, status: response ? response.statusCode.toString() : '', statusMessage: error ? error.message : response.statusMessage || ''}
            });
            return;
        }
        // todo try/catch around JSON.parse

        store.dispatch({
            type: actionTypes.SUBMIT_DONE,
            endpointId: id,
            apiResponse: {body: JSON.parse(body), status: response.statusCode.toString(), statusMessage: response.statusMessage}
        });
    });
};

const handleFillSampleData = (id) => {
    store.dispatch({
        type: actionTypes.FILL_REQUEST_SAMPLE_DATA,
        endpointId: id
    });
};

const toggleResponseModelExample = (id) => {
    store.dispatch({
        type: actionTypes.TOGGLE_RESPONSE_MODEL_EXAMPLE,
        endpointId: id
    });
};
const toggleRequestModelExample = (id) => {
    store.dispatch({
        type: actionTypes.TOGGLE_REQUEST_MODEL_EXAMPLE,
        endpointId: id
    });
};

// Give our endpoint an id based on its name for our clientside routing in jekyll
const EndPointComponent = (props) => (
    <div id={props.endpoint.name.replace(/\s/g, '_')}>
        <h2>{props.endpoint.name}</h2>
        <table>
            <tbody>
            <tr>
                <td><strong>{'Description'}</strong></td>
                <td>{props.endpoint.description}</td>
            </tr>
            <tr>
                <td><strong>{'Endpoint'}</strong></td>
                <td>{props.endpoint.path}</td>
            </tr>
            <tr>
                <td><strong>{'HTTP Method'}</strong></td>
                <td>{props.endpoint.action}</td>
            </tr>
            {props.endpoint.response ?
                <tr>
                    <td><strong>{'Response'}</strong></td>
                    <td>
                        <span
                            className={`${props.endpoint.response.currentVisibility === 'example' ? ' active-tab' : 'mouse'}`}
                            onClick={(e) => {
                                e.preventDefault();
                                if (props.endpoint.response.currentVisibility !== 'example') {
                                    toggleResponseModelExample(props.id);
                                }
                            }
                        }>{'Example'}</span>
                        <span
                            className={`m-l-1${props.endpoint.response.currentVisibility === 'model' ? ' active-tab' : ' mouse'}`}
                            onClick={(e) => {
                                e.preventDefault();
                                if (props.endpoint.response.currentVisibility !== 'model') {
                                    toggleResponseModelExample(props.id);
                                }
                            }
                        }>{'Model'}</span>
                        <br />
                        <textarea cols='50' readOnly={true} rows='15' value={JSON.stringify(props.endpoint.response[props.endpoint.response.currentVisibility], null, 2)}/>
                    </td>
                </tr> :
                null
            }
            {props.endpoint.request ?
                <tr>
                    <td><strong>{'Request'}</strong></td>
                    <td>
                        <span
                            className={`${props.endpoint.request.currentVisibility === 'example' ? ' active-tab' : 'mouse'}`}
                            onClick={(e) => {
                                e.preventDefault();
                                if (props.endpoint.request.currentVisibility !== 'example') {
                                    toggleRequestModelExample(props.id);
                                }
                            }
                            }>{'Example'}</span>
                        <span
                            className={`m-l-1${props.endpoint.request.currentVisibility === 'model' ? ' active-tab' : ' mouse'}`}
                            onClick={(e) => {
                                e.preventDefault();
                                if (props.endpoint.request.currentVisibility !== 'model') {
                                    toggleRequestModelExample(props.id);
                                }
                            }
                            }>{'Model'}</span>
                        <br />
                        <textarea cols='50' readOnly={true} rows='15' value={JSON.stringify(props.endpoint.request[props.endpoint.request.currentVisibility], null, 2)}/>

                    </td>
                </tr> :
                null
            }
            </tbody>
        </table>
        <form>
            {props.endpoint.pathParams ? <RequestParams endpointId={props.id} paramType={'PATH'} params={props.endpoint.pathParams}/> : null}
            {props.endpoint.queryString ? <RequestParams endpointId={props.id} paramType={'QUERY_STRING'} params={props.endpoint.queryString}/> : null}
            {props.endpoint.postBody ? <PostBody id={props.id} name={props.endpoint.name.toLowerCase() + '_' + props.endpoint.action} postBody={props.endpoint.postBody}/> : null}
            <p className={'curl'}>{props.endpoint.curl}</p>
            <button
                className='btn btn-success'
                onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(props.endpoint, props.id);
                }}
                type={'button'}
            >
                {'Submit'}
            </button>
            {hasExampleData('QUERY_STRING', props.endpoint.queryString) || hasExampleData('POST_BODY', props.endpoint.postBody) || hasExampleData('PATH_PARAM', props.endpoint.pathParams) ?
                <span>
                <button
                    className='btn btn-default m-l-1'
                    onClick={(e) => {
                        e.preventDefault();
                        handleFillSampleData(props.id);
                    }}
                    type={'button'}
                >
                {'Fill Sample Data'}
                </button>
            </span> : null}
            <button className='btn btn-default m-l-1' type='reset'>{'Reset'}</button>
        </form>
        {props.endpoint.apiResponse ?
            <table className={'responseBody'}>
                <tbody>
                <tr>
                    <td><strong>{'HTTP Response Code'}</strong></td>
                    <td>{props.endpoint.apiResponse.status + ' - ' + props.endpoint.apiResponse.statusMessage}</td>
                </tr>
                <tr>
                    <td><strong>{'HTTP Response Body'}</strong></td>
                    <td>
                        <textarea cols='50' readOnly={true} rows='15' value={JSON.stringify(props.endpoint.apiResponse.body, null, 2)}/>
                    </td>
                </tr>
                </tbody>
            </table> : null}
    </div>
);

EndPointComponent.displayName = 'EndPoint';
EndPointComponent.propTypes = {
    endpoint: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        curl: React.PropTypes.string.isRequired,
        path: React.PropTypes.string.isRequired,
        action: React.PropTypes.string.isRequired,
        queryString: React.PropTypes.object,
        postBody: React.PropTypes.object,
        apiResponse: React.PropTypes.shape({
            status: React.PropTypes.string.isRequired,
            statusMessage: React.PropTypes.string.isRequired,
            body: React.PropTypes.oneOfType([
                React.PropTypes.object, React.PropTypes.array
            ]).isRequired
        })
    }).isRequired,
    id: React.PropTypes.number.isRequired
};

export default EndPointComponent;
