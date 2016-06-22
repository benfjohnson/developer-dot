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

const handleInputChange = (e, qpName, id) => {
    console.log('handling input!', e);

    store.dispatch({
        type: actionTypes.INPUT_CHANGE,
        inputVal: e.target.value,
        queryParamName: qpName,
        apiId: id
    });
};

const renderParams = (queryParams, id) => (
    <table>
        <tbody>
            <tr><td colSpan='2'><h4>{'Request'}</h4></td></tr>
            {Object.keys(queryParams).map((name, i) => (
                <tr key={i}>
                    <td><label htmlFor={queryParams[name].name}>{queryParams[name].name}</label></td>
                    <td><input id={queryParams[name].name} onChange={(e) => {handleInputChange(e, queryParams[name].name, id);}} placeholder={queryParams[name].placeholder} value={queryParams[name].value}/></td>
                </tr>)
            )}
        </tbody>
    </table>
);

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
            {props.endpoint.parameters && props.endpoint.parameters.queryString ? renderParams(props.endpoint.parameters.queryString, props.id) : null}
            <button className='btn btn-success' onClick={(e) => {
                e.preventDefault();
                handleSubmit(props.endpoint, props.id);
            }}>{'Submit'}</button>
            {props.endpoint.parameters ?
            <span>
                <button className='btn btn-default'>{'Fill Sample Data'}</button>
                <button className='btn btn-default' type='reset'>{'Reset'}</button>
            </span>
                : null}
        </form>

        <textarea cols='50' readOnly={true} rows='5' style={{border: 'none'}} value={props.endpoint.curl}/>

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
        curl: React.PropTypes.string.isRequired,
        path: React.PropTypes.string.isRequired,
        action: React.PropTypes.string.isRequired,
        parameters: React.PropTypes.shape({
            queryString: React.PropTypes.object
        }),
        apiResponse: React.PropTypes.shape({
            status: React.PropTypes.string.isRequired,
            statusMessage: React.PropTypes.string.isRequired,
            body: React.PropTypes.object.isRequired
        })
    }).isRequired,
    id: React.PropTypes.number.isRequired
};

export default EndPoint;
