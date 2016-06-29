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

const PostBodyItem = ({name, item, endpointId, uiState, displayName}) => {
    const uid = shortid.generate();

    if (item.fieldType && item.fieldType !== 'array') {
        return (
            <tr>
                <td>
                    <label htmlFor={uid}>{displayName}</label>
                </td>
                <td>
                    {item.enum && item.enum.length ?
                        <select
                            id={uid}
                            onChange={(e) => {handleInputChange(e, name, endpointId);}}
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
                                    handleInputChange(e, name, endpointId);
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
                propertyName={name}
                schema={item.items}
                uiState={uiState}
            />
        );
    }

    return (
        <PostBodySectionHeader endpointId={endpointId} propertyName={name}>
            {uiState.visible ? Object.keys(item).filter((n) => n !== 'uiState').map((itemKey, i) => {
                return (<PostBodyItem
                    displayName={itemKey}
                    endpointId={endpointId}
                    item={item[itemKey]}
                    itemName={itemKey}
                    key={i}
                    name={name + ';' + itemKey}
                    uiState={item[itemKey].uiState}
                />);
            }) : null}
        </PostBodySectionHeader>
    );
};

PostBodyItem.displayName = 'Post Body Item';
PostBodyItem.propTypes = {
    endpointId: React.PropTypes.number.isRequired,
    item: React.PropTypes.object.isRequired,
    name: React.PropTypes.string.isRequired,
    uiState: React.PropTypes.shape({
        visible: React.PropTypes.bool
    })
};

export default PostBodyItem;
