import React from 'react';
import ApiConsole from './apiConsole';
import ReactMarkdown from 'react-markdown';
import RequestParamsDocs from './requestParamsDocs';
import PostBodyDocs from './PostBodyDocs';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';

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
        <a href={'#'}>{'Try it now!'}</a>
        <br />
        <ReactMarkdown source={props.endpoint.description} />
        <br />
        <div>
            <div>{'API ENDPOINT'}</div>
            <div className={'code-snippet-plaintext'}>{`${props.endpoint.action.toUpperCase()} ${props.endpoint.path}`}</div>
            {props.endpoint.postBody ? <div><br /><div>{'HEADERS'}</div><div className={'code-snippet-plaintext'}>{'Content-Type: application/json'}</div></div> : null}
        </div>
        <br />
        {props.endpoint.queryString ? <RequestParamsDocs paramType={'QUERY_STRING'} params={props.endpoint.queryString} /> : null}
        {props.endpoint.pathParams ? <RequestParamsDocs paramType={'PATH'} params={props.endpoint.pathParams} /> : null}
        {props.endpoint.postBody ? <PostBodyDocs id={props.id} name={props.endpoint.name.toLowerCase() + '_' + props.endpoint.action} postBody={props.endpoint.postBody} /> : null}

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
            {props.endpoint.request ?
                <tr>
                    <td><strong>{'Request'}</strong></td>
                    <td>
                        {props.endpoint.request.example ?
                            <span
                                className={`${props.endpoint.request.currentVisibility === 'example' ? ' active-tab' : 'mouse'}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (props.endpoint.request.currentVisibility !== 'example') {
                                        toggleRequestModelExample(props.id);
                                    }
                                }
                                }>{'Example'}
                            </span> :
                            null
                        }
                        {props.endpoint.request.model ?
                            <span
                                className={`m-l-1${props.endpoint.request.currentVisibility === 'model' ? ' active-tab' : ' mouse'}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (props.endpoint.request.currentVisibility !== 'model') {
                                        toggleRequestModelExample(props.id);
                                    }
                                }
                                }>{'Model'}
                            </span> :
                            null
                        }

                        <br />
                        <textarea cols='8' readOnly={true} rows='12' value={JSON.stringify(props.endpoint.request[props.endpoint.request.currentVisibility], null, 2)}/>

                    </td>
                </tr> :
                null
            }
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
                        <textarea cols='8' readOnly={true} rows='12' value={JSON.stringify(props.endpoint.response[props.endpoint.response.currentVisibility], null, 2)}/>
                    </td>
                </tr> :
                null
            }
            </tbody>
        </table>
        {props.apiType === 'REST' ? <ApiConsole endpoint={props.endpoint} id={props.id} /> : null}
    </div>
);

EndPointComponent.displayName = 'EndPoint';
EndPointComponent.propTypes = {
    apiType: React.PropTypes.oneOf(['REST', 'SOAP']).isRequired,
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
        request: React.PropTypes.shape({
            currentVisibility: React.PropTypes.string.isRequired,
            example: React.PropTypes.any,
            model: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]).isRequired
        }),
        response: React.PropTypes.shape({
            currentVisibility: React.PropTypes.string.isRequired,
            example: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
            model: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]).isRequired
        }),
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
