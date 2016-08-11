import React from 'react';

import PostBodySectionHeader from './postBodySectionHeader';
import PostBodyCollection from './postBodyCollection';

const PostBodyItem = ({name, itemSchema, itemValue, endpointId, uiState, displayName, canRemove, onPostBodyInputChanged, onAddItemToPostbodyCollection, onRemovePostbodyCollectionItem}) => {
    const uid = `${endpointId}-${displayName}-${name}`;

    if (itemSchema.fieldType && itemSchema.fieldType !== 'array') {
        return (
            <div className={'form-group'}>
                    <label className={'api-label-text'} htmlFor={uid}>{displayName}</label>
                    {canRemove ?
                        <div
                            className={'clickable'}
                            onClick={onRemovePostbodyCollectionItem.bind(null, name, endpointId)}
                            style={{display: 'inline-block'}}
                        >
                            <span
                                className={'m-l-1 glyphicon glyphicon-remove'}
                                title={'Remove Item'}
                            />
                            <span>{' Remove'}</span>
                        </div> : null
                    }
                    {itemSchema.enum && itemSchema.enum.length ?
                        <select
                            className={'form-control'}
                            id={uid}
                            onChange={(e) => {
                                onPostBodyInputChanged(endpointId, name, e.target.value);
                            }}
                            value={itemValue || '*select*'}
                        >
                            <option disabled={true} value={'*select*'}>{''}</option>
                            {itemSchema.enum.map((option, i) => (<option key={i} value={option}>{option}</option>))}
                        </select> :
                        <input
                            className={'form-control'}
                            id={uid}
                            onChange={(e) => {
                                onPostBodyInputChanged(endpointId, name, e.target.value);
                            }}
                            value={itemValue}
                        />
                    }
            </div>
        );
    }

    if (itemSchema.fieldType === 'array') {
        return (
            <PostBodyCollection
                displayName={displayName}
                endpointId={endpointId}
                itemSchema={itemSchema.items}
                itemValue={itemValue}
                onAddItemToPostbodyCollection={onAddItemToPostbodyCollection}
                onPostBodyInputChanged={onPostBodyInputChanged}
                onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem}
                propertyName={name}
                uiState={uiState}
            />
        );
    }

    return (
        <PostBodySectionHeader canRemove={canRemove} displayName={displayName} endpointId={endpointId} onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem} propertyName={name}>
            {Object.keys(itemSchema).filter((n) => n !== 'uiState' && n !== 'required' && itemSchema[n]).map((itemKey, i) => {
                return (<PostBodyItem
                    canRemove={false}
                    displayName={itemKey}
                    endpointId={endpointId}
                    itemName={itemKey}
                    itemSchema={itemSchema[itemKey]}
                    itemValue={itemValue[itemKey]}
                    key={i}
                    name={`${name ? name + ':' : ''}` + itemKey}
                    onAddItemToPostbodyCollection={onAddItemToPostbodyCollection}
                    onPostBodyInputChanged={onPostBodyInputChanged}
                    onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem}
                    uiState={itemSchema[itemKey].uiState}
                />);
            })}
        </PostBodySectionHeader>
    );
};

PostBodyItem.displayName = 'Post Body Item';
// TODO: itemValue should be required, but in calc region sometimes is undefined? Should be string object or array
PostBodyItem.propTypes = {
    canRemove: React.PropTypes.bool.isRequired,
    displayName: React.PropTypes.string.isRequired,
    endpointId: React.PropTypes.number.isRequired,
    itemSchema: React.PropTypes.object,
    itemValue: React.PropTypes.any,
    name: React.PropTypes.string.isRequired,
    onAddItemToPostbodyCollection: React.PropTypes.func.isRequired,
    onPostBodyInputChanged: React.PropTypes.func.isRequired,
    onRemovePostbodyCollectionItem: React.PropTypes.func.isRequired,
    uiState: React.PropTypes.shape({
        visible: React.PropTypes.bool
    })
};

export default PostBodyItem;
