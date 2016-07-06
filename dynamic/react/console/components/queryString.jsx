import React from 'react';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';
import shortid from 'shortid';

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
            {Object.keys(props.queryString).map((name, i) => {
                const uid = shortid.generate();

                return (
                    <tr key={i}>
                        <td><label htmlFor={uid}>{name}</label></td>
                        <td>
                            <input
                                value={props.queryString[name].value}
                                id={uid}
                                onChange={
                                    (e) => {
                                        handleInputChange(e, name, props.id);
                                    }
                                }
                                placeholder={props.queryString[name] ? props.queryString[name].example : null}
                            />
                        </td>
                    </tr>
                );
            })}
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
