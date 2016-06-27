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

const handleToggleVisibility = (e, pbName, id) => {
    store.dispatch({
        type: actionTypes.TOGGLE_POST_BODY_ITEM_VISIBILITY,
        postBodyParamName: pbName,
        apiId: id
    });
};

const PostBodyItem = ({parentName, itemName, item, endpointId, uiState}) => {
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
                            defaultValue={'*select*'}
                        >
                        <option disabled={true} value={'*select*'}>{''}</option>
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
                        <td
                            colSpan='2'
                            onClick={
                                (e) => {
                                    handleToggleVisibility(e, parentName + ';' + itemName, endpointId);
                                }
                            }
                        ><label>{itemName}</label></td>
                    </tr>
                    {uiState.visible ? Object.keys(item).filter((name) => name !== 'uiState').map((itemKey, i) => {
                        return (<PostBodyItem
                            endpointId={endpointId}
                            item={item[itemKey]}
                            itemName={itemKey}
                            key={i}
                            parentName={itemName}
                        />);
                    }) : null
                    }
                    </tbody>
                </table>
            </td>
        </tr>
    );
};

PostBodyItem.displayName = 'Post Body Item';
PostBodyItem.propTypes = {
    parentName: React.PropTypes.string,
    endpointId: React.PropTypes.number.isRequired,
    item: React.PropTypes.object.isRequired,
    itemName: React.PropTypes.string.isRequired,
    uiState: React.PropTypes.shape({
        visible: React.PropTypes.bool
    })
};

export default PostBodyItem;
