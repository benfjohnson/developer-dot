import React from 'react';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';

const handleInputChange = (e, qpName, id) => {
    store.dispatch({
        type: actionTypes.QUERY_STRING_CHANGED,
        inputVal: e.target.value,
        queryParamName: qpName,
        apiId: id
    });
};
const QueryString = (props) => (
    <table>
        <tbody>
        <tr>
            <td colSpan='2'><h4>{'Query String'}</h4></td>
        </tr>
        {Object.keys(props.queryString).map((name, i) => (
            <tr key={i}>
                <td><label htmlFor={props.name.replace(/ /g, '_') + '_' + name + '_' + props.id}>{name}</label></td>
                <td>
                    <input
                        defaultValue={''}
                        id={props.name.replace(/ /g, '_') + '_' + name + '_' + props.id}
                        onChange={
                            (e) => {
                                handleInputChange(e, name, props.id);
                            }
                        }
                        placeholder={props.queryString[name].example}
                    />
                </td>
            </tr>)
        )}
        </tbody>
    </table>
);

QueryString.displayName = 'Query String';
QueryString.propTypes = {
    id: React.PropTypes.number.isRequired,
    queryString: React.PropTypes.object
};

export default QueryString;
