import React from 'react';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';
import shortid from 'shortid';

const handleInputChange = (e, pbName, id) => {
    store.dispatch({
        type: actionTypes.POST_BODY_CHANGED,
        inputVal: e.target.value,
        postBodyParamName: pbName,
        apiId: id
    });
};

const PostBodyItem = ({parentName, itemName, item, endpointId}) => {
    const uid = shortid.generate();

    if (item.fieldType) {
        return (
            <tr>
                <td>
                    <label htmlFor={uid}>{itemName}</label>
                </td>
                <td>
                    {item.enum && item.enum.length ?
                        <select
                            id={uid}
                            onChange={(e) => {
                                handleInputChange(e, parentName + ';' + itemName, endpointId);
                            }}
                        >
                        {item.enum.map((option, i) => (<option key={i} value={option}>{option}</option>))}
                        </select> :
                        <input
                            defaultValue={''}
                            id={uid}
                            onChange={
                                (e) => {
                                    handleInputChange(e, parentName + ';' + itemName, endpointId);
                                }}
                            placeholder={item.example}
                        />
                    }
                </td>
            </tr>
        );
    }

    return (
        <tr>
            <td colSpan='2'>
                <table style={{width: '100%'}}>
                    <tbody>
                    <tr>
                        <td colSpan='2'><label>{itemName}</label></td>
                    </tr>
                    {Object.keys(item).map((itemKey, i) => {
                        return (<PostBodyItem
                            endpointId={endpointId}
                            item={item[itemKey]}
                            itemName={itemKey}
                            key={i}
                            parentName={itemName}
                        />);
                    })}
                    </tbody>
                </table>
            </td>
        </tr>
    );
};

PostBodyItem.displayName = 'Post Body Item';
PostBodyItem.propTypes = {
    parentName: React.PropTypes.string,
    itemName: React.PropTypes.string.isRequired,
    item: React.PropTypes.object.isRequired,
    endpointId: React.PropTypes.number.isRequired
};

export default PostBodyItem;
