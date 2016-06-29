import React from 'react';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';
import shortid from 'shortid';

import PostBodySectionHeader from './PostBodySectionHeader';
import PostBodyCollection from './PostBodyCollection';

const handleInputChange = (e, pbName, endpointId) => {
    store.dispatch({
        type: actionTypes.POST_BODY_CHANGED,
        inputVal: e.target.value,
        postBodyParamName: pbName,
        endpointId: endpointId
    });
};

const handleInputChangeArray = (e, pbName, endpointId, array, arrayIndex) => {
    const newArray = [...array];

    newArray[arrayIndex] = e.target.value;

    store.dispatch({
        type: actionTypes.POST_BODY_CHANGED,
        inputVal: newArray,
        postBodyParamName: pbName,
        endpointId: endpointId
    });
};

const PostBodyItem = ({parentName, itemName, item, endpointId, uiState}) => {
    const uid = shortid.generate();

    if (item.fieldType && item.fieldType !== 'array') {
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
                                if (itemName.indexOf('[') !== -1) {
                                    const index = parseInt(itemName.slice(itemName.indexOf('[') + 1, itemName.indexOf(']')), 10);

                                    handleInputChangeArray(e, 'null;' + parentName, endpointId, item, index);
                                } else {
                                    handleInputChange(e, parentName + ';' + itemName, endpointId);
                                }
                            }}
                            defaultValue={'*select*'}
                            >
                            <option disabled={true} value={'*select*'}>{''}</option>
                            {item.enum.map((option, i) => (<option key={i} value={option}>{option}</option>)) }
                        </select> :
                        <input
                            defaultValue={''}
                            id={uid}
                            onChange={
                                (e) => {
                                    handleInputChange(e, parentName + ';' + itemName, endpointId);
                                } }
                            placeholder={item.example}
                            />
                    }
                </td>
            </tr>
        );
    }

    if (item.fieldType === 'array') {
        return (
            <PostBodyCollection
                collection={item.value}
                endpointId={endpointId}
                parentName={parentName}
                propertyName={`${parentName};${itemName}`}
                schema={item.items}
                uiState={uiState}
            />
        );
    }

    return (
        <PostBodySectionHeader endpointId={endpointId} propertyName={`${parentName};${itemName}`}>
            {uiState.visible ? Object.keys(item).filter((name) => name !== 'uiState').map((itemKey, i) => {
                return (<PostBodyItem
                    endpointId={endpointId}
                    item={item[itemKey]}
                    itemName={itemKey}
                    key={i}
                    parentName={itemName}
                    uiState={item[itemKey].uiState}
                />);
            }) : null}
       </PostBodySectionHeader>
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
