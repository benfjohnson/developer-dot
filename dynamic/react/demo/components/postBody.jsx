import React from 'react';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';

const handleInputChange = (e, pbName, id) => {
    store.dispatch({
        type: actionTypes.POST_BODY_CHANGED,
        inputVal: e.target.value,
        postBodyParamName: pbName,
        apiId: id
    });
};

const renderPostBodyItem = (parentName, itemName, item, itemIndex, endpointName, endpointId) => {
    if (item.fieldType) {
        return (<tr key={itemIndex}>
            <td><label htmlFor={endpointName.replace(/ /g, '_') + '_' + itemName + '_' + endpointId}>{itemName}</label></td>
            <td>
                {item.enum && item.enum.length ?
                    <select
                        id={endpointName.replace(/ /g, '_') + '_' + itemName + '_' + endpointId}
                        onChange={
                        (e) => {
                            handleInputChange(e, parentName + ';' + itemName, endpointId);
                        }
                    }
                    >
                        {item.enum.map((option, i) => (<option key={i} value={option}>{option}</option>))}
                    </select> : <input
                    defaultValue={''}
                    id={endpointName.replace(/ /g, '_') + '_' + itemName + '_' + endpointId}
                    onChange={
                        (e) => {
                            handleInputChange(e, parentName + ';' + itemName, endpointId);
                        }
                    }
                    placeholder={item.example}
                />
                }
            </td>
        </tr>);
    }

    return (
        <tr key={itemIndex}>
            <td colSpan='2'>
                <table style={{width: '100%'}}>
                    <tbody>
                    <tr>
                        <td colSpan='2'><label>{itemName}</label></td>
                    </tr>
                    {Object.keys(item).map((itemKey, itemKeyIdx) => {
                        return renderPostBodyItem(itemName, itemKey, item[itemKey], itemIndex + '_' + itemKeyIdx, endpointName, endpointId);
                    })}
                    </tbody>
                </table>
            </td>
        </tr>
    );
};

const PostBody = (props) => (
    <table>
        <tbody>
        <tr>
            <td colSpan='2'><h4>{'Post Body'}</h4></td>
        </tr>
        {
            props.postBody.fieldType && props.postBody.fieldType === 'array' ?
                Object.keys(props.postBody.items).map((name, i) => {
                    return (renderPostBodyItem(null, name, props.postBody.items[name], i, props.name, props.id));
                }) :
                Object.keys(props.postBody).map((name, i) => {
                    return (renderPostBodyItem(null, name, props.postBody[name], i, props.name, props.id));
                })
        }
        </tbody>
    </table>
);

PostBody.displayName = 'Post Body';
PostBody.propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    postBody: React.PropTypes.object
};

export default PostBody;
