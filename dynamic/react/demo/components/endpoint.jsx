import React from 'react';
import request from 'request';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';
import QueryString from './queryString';
import PostBody from './postBody';

const handleSubmit = (endpoint, id) => {
    // todo don't forget form validation!

    const apiReq = {
        url: endpoint.path + (endpoint.qsPath || '')
    };

    if (endpoint.postBody) {
        apiReq.headers = {'Content-Type': 'application/json'};
        apiReq.body = JSON.stringify(endpoint.postBody);
    }

    request[endpoint.action](apiReq, (error, response, body) => {
        if (error || response.statusCode !== 200) {
            store.dispatch({
                type: actionTypes.SUBMIT_DONE,
                apiId: id,
                apiResponse: {body: JSON.parse(body), status: response ? response.statusCode.toString() : '', statusMessage: error ? error.message : response.statusMessage || ''}
            });
            return;
        }
        // todo try/catch around JSON.parse

        store.dispatch({
            type: actionTypes.SUBMIT_DONE,
            apiId: id,
            apiResponse: {body: JSON.parse(body), status: response.statusCode.toString(), statusMessage: response.statusMessage}
        });
    });
};
const EndPointComponent = (props) => (
    <div>
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
            </tbody>
        </table>
        <form>
            {props.endpoint.queryString ? <QueryString id={props.id} name={props.endpoint.name.toLowerCase() + '_' + props.endpoint.action} queryString={props.endpoint.queryString}/> : null}
            {props.endpoint.postBody ? <PostBody id={props.id} name={props.endpoint.name.toLowerCase() + '_' + props.endpoint.action} postBody={props.endpoint.postBody}/> : null}
            <button
                className='btn btn-success'
                onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(props.endpoint, props.id);
                }}
            >
                {'Submit'}
            </button>
            {props.endpoint.queryString || props.endpoint.postBody ?
                <span>
                <button className='btn btn-default' onClick={(e) => {
                    e.preventDefault();
                }}>{'Fill Sample Data'}</button>
                <button className='btn btn-default' type='reset'>{'Reset'}</button>
            </span> : null}
        </form>
        <br/>
        <div>{props.endpoint.curl}</div>

        {props.endpoint.apiResponse ?
            <table>
                <tbody>
                <tr>
                    <td><strong>{'HTTP Response Code'}</strong></td>
                    <td>{props.endpoint.apiResponse.status + ' - ' + props.endpoint.apiResponse.statusMessage}</td>
                </tr>
                <tr>
                    <td style={{verticalAlign: 'top'}}><strong>{'HTTP Response Body'}</strong></td>
                    <td>
                        <textarea cols='50' readOnly={true} rows='15' style={{border: 'none'}} value={JSON.stringify(props.endpoint.apiResponse.body, null, 2)}/>
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
