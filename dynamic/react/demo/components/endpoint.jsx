import React from 'react';
import request from 'request';

import {store, actionTypes} from '../store';


const handleSubmit = (endpoint, id) => {
    // todo don't forget form validation!

    request(endpoint.path, (error, response, body) => {
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

const EndPoint = (props) => (
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
            <button className='btn btn-success' onClick={(e) => {
                e.preventDefault();
                handleSubmit(props.endpoint, props.id);
            }}>{'Submit'}</button>
            {props.endpoint.parameters.length ?
            <span>
                <button className='btn btn-default'>{'Fill Sample Data'}</button>
                <button className='btn btn-default' type='reset'>{'Reset'}</button>
            </span>
                : null}
        </form>
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

EndPoint.displayName = 'EndPoint';
EndPoint.propTypes = {
    endpoint: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        path: React.PropTypes.string.isRequired,
        action: React.PropTypes.string.isRequired,
        apiResponse: React.PropTypes.shape({
            status: React.PropTypes.string.isRequired,
            statusMessage: React.PropTypes.string.isRequired,
            body: React.PropTypes.object.isRequired
        })
    }).isRequired,
    id: React.PropTypes.number.isRequired
};

export default EndPoint;
