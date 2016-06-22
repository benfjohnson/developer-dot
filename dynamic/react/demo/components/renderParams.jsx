import React from 'react';

import {store, actionTypes} from '../store';

const handleInputChange = (e, qpName, id) => {
    store.dispatch({
        type: actionTypes.INPUT_CHANGE,
        inputVal: e.target.value,
        queryParamName: qpName,
        apiId: id
    });
};
const RenderParamsComponent = (props) => (
    <table>
        <tbody>
        <tr><td colSpan='2'><h4>{'Request'}</h4></td></tr>
        {Object.keys(props.queryString).map((name, i) => (
            <tr key={i}>
                <td><label htmlFor={props.queryString[name].name}>{props.queryString[name].name}</label></td>
                <td>
                    <input
                        id={props.queryString[name].name}
                        onChange={
                                (e) => {
                                    handleInputChange(e, props.queryString[name].name, props.id);
                                }
                            }
                        placeholder={props.queryString[name].placeholder}
                        value={props.queryString[name].value}
                    />
                </td>
            </tr>)
        )}
        </tbody>
    </table>
);

RenderParamsComponent.displayName = 'Render Endpoint Parameters';
RenderParamsComponent.propTypes = {
    id: React.PropTypes.number.isRequired,
    queryString: React.PropTypes.object
};

export default RenderParamsComponent;
