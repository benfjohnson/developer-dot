import React from 'react';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';
import shortid from 'shortid';

const handleInputChange = (e, pbName, endpointId) => {
    store.dispatch({
        type: actionTypes.POST_BODY_CHANGED,
        inputVal: e.target.value,
        postBodyParamName: pbName,
        endpointId: endpointId
    });
};

const handleInputChangeArray = (e, pbName, endpointId, arrayIndex) => {
    store.dispatch({
        type: actionTypes.POST_BODY_CHANGED,
        inputVal: e.target.value,
        postBodyParamName: pbName,
        endpointId: endpointId
    });
};


const handleToggleVisibility = (e, pbName, endpointId) => {
    store.dispatch({
        type: actionTypes.TOGGLE_POST_BODY_ITEM_VISIBILITY,
        postBodyParamName: pbName,
        endpointId: endpointId
    });
};

const handleAddItem = (paramName, endpointId, itemSchema) => {
    store.dispatch({
        type: actionTypes.ADD_ITEM_TO_POST_BODY_COLLECTION,
        postBodyParamName: paramName,
        endpointId: endpointId,
        itemSchema: itemSchema
    });
};

const PostBodyItem = ({parentName, itemName, item, endpointId, uiState}) => {
    const uid = shortid.generate();

    if (item.fieldType) {
        if (item.fieldType !== 'array') {
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
        // If here, then item has a fieldtype of ARRAY
        return (
            <tr>
                <td
                colSpan='2'
                onClick={
                    (e) => {
                        handleToggleVisibility(e, parentName + ';' + itemName, endpointId);
                    }
                }>
                    <label htmlFor={uid}>{itemName + ' (Collection)'}</label>
                    <button onClick={
                        (e) => {
                            e.preventDefault();
                            handleAddItem(parentName + ';' + itemName, endpointId, item.items);
                        }
                    }>
                    {'Add Item'}
                    </button>
                    <table style={{width: '100%'}}>
                        <tbody>
                            {item.value.map((collectionItem, i) => {
                                // return (collectionItem.enum && collectionItem.enum.length ?
                                //     <select
                                //         id={uid}
                                //         key={i}
                                //         onChange={(e) => {
                                //             handleInputChangeArray(e, parentName + ';' + itemName, endpointId);
                                //         }}
                                //         defaultValue={'*select*'}
                                //     >
                                //         <option disabled={true} value={'*select*'}>{''}</option>
                                //         {collectionItem.enum.map((option, i) => (<option key={i} value={option}>{option}</option>))}
                                //     </select> :
                                //     <input
                                //         defaultValue={''}
                                //         id={uid}
                                //         key={i}
                                //         onChange={
                                //             (e) => {
                                //                 handleInputChangeArray(e, parentName + ';' + itemName, endpointId);
                                //             }}
                                //         placeholder={item.example}
                                //     />);
                                console.log('ARRAY ITEM', collectionItem);
                                return (<PostBodyItem
                                    endpointId={endpointId}
                                    item={collectionItem}
                                    itemName={`${itemName}[${i}]`}
                                    key={i}
                                    parentName={itemName}
                                />);
                            })}
                        </tbody>
                    </table>
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
                            style={{cursor: 'pointer'}}
                        ><label style={{cursor: 'pointer'}}>{itemName}</label></td>
                    </tr>
                    {uiState.visible ? Object.keys(item).filter((name) => name !== 'uiState').map((itemKey, i) => {
                        return (<PostBodyItem
                            endpointId={endpointId}
                            item={item[itemKey]}
                            itemName={itemKey}
                            key={i}
                            parentName={itemName}
                        />);
                    }) : null}
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
