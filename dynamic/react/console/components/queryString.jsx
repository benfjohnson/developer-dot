import React from 'react';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';

const handleInputChange = (e, qpName, endpointId) => {
    store.dispatch({
        type: actionTypes.QUERY_STRING_CHANGED,
        inputVal: e.target.value,
        queryParamName: qpName,
        endpointId: endpointId
    });
};
const QueryString = (props) => {
    return (
        <table>
            <tbody>
            <tr>
                <td colSpan='2'><h4>{'Query String'}</h4></td>
            </tr>
            {Object.keys(props.queryString).map((name, i) => (
                <tr key={i}>
                    <td>
                        <label htmlFor={`${props.id}-qs-${i}`}>{name}</label>&nbsp;
                        {props.queryString[name].description && props.queryString[name].description.length ? <span className={'glyphicon glyphicon-info-sign'} title={props.queryString[name].description}/> : null}
                    </td>
                    <td>
                        {props.queryString[name].enum && props.queryString[name].enum.length ?
                            <select
                                defaultValue={props.queryString[name].value || '*select*'}
                                id={`${props.id}-qs-${i}`}
                                onChange={(e) => (handleInputChange(e, name, props.id))}
                            >
                                <option disabled={true} value={'*select*'}>{''}</option>
                                {props.queryString[name].enum.map((option, ii) => (<option key={ii} value={option}>{option}</option>))}
                            </select> :


                            <input id={`${props.id}-qs-${i}`}
                                   onChange={(e) => (handleInputChange(e, name, props.id))}
                                   placeholder={props.queryString[name] ? props.queryString[name].example : null}
                                   value={props.queryString[name].value}
                            />
                        }


                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

QueryString.displayName = 'Query String';
QueryString.propTypes = {
    id: React.PropTypes.number.isRequired,
    queryString: React.PropTypes.object
};

export default QueryString;
