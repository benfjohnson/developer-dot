/* Stateless component for either a querystring or
 * path parameter that comes in an api request
 */

import React from 'react';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';

const PARAM_TYPES = {
    QUERY_STRING: 'QUERY_STRING',
    PATH: 'PATH'
};

const handleInputChange = (e, paramType, paramName, endpointId) => {
    store.dispatch({
        type: paramType === PARAM_TYPES.QUERY_STRING ? actionTypes.QUERY_PARAM_CHANGED : actionTypes.PATH_PARAM_CHANGED,
        inputVal: e.target.value,
        paramName: paramName,
        endpointId: endpointId
    });
};

const RequestParams = ({endpointId, paramType, params}) => {
    return (
        <table>
            <tbody>
            <tr>
                <td colSpan='2'><h4>{paramType === PARAM_TYPES.QUERY_STRING ? 'Query String' : 'Path Parameters'}</h4></td>
            </tr>
            {Object.keys(params).map((key, i) => {
                return (
                    <tr key={i}>
                        <td>
                            <label htmlFor={`${endpointId}-qs-${i}`}>{key}</label>
                            {params[key].description && params[key].description.length ? <span className={'m-l-1 glyphicon glyphicon-info-sign'} style={{color: 'lightgrey'}} title={params[key].description}/> : null}
                        </td>
                        <td>
                        {params[key].enum && params[key].enum.length ?
                            <select
                                id={`${endpointId}-qs-${i}`}
                                onChange={(e) => (handleInputChange(e, paramType, key, endpointId))}
                                value={params[key].value || '*select*'}
                            >
                                <option disabled={true} value={'*select*'}>{''}</option>
                                {params[key].enum.map((option, ii) => (<option key={ii} value={option}>{option}</option>))}
                            </select> :
                            <input id={`${endpointId}-qs-${i}`}
                                   onChange={
                                    (e) => {
                                        handleInputChange(e, paramType, key, endpointId);
                                    }
                                }
                                   placeholder={params[key].example || null}
                                   value={params[key].value}
                            />
                        }
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

RequestParams.displayName = 'Request Parameters';
RequestParams.propTypes = {
    endpointId: React.PropTypes.number.isRequired,
    paramType: React.PropTypes.oneOf(['QUERY_STRING', 'PATH']).isRequired,
    params: React.PropTypes.objectOf(
        React.PropTypes.shape({
            description: React.PropTypes.string,
            example: React.PropTypes.any,
            required: React.PropTypes.bool,
            value: React.PropTypes.any.isRequired
        })
    )
};

export default RequestParams;
