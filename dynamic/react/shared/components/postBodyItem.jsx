import React from 'react';

import PostBodySectionHeader from './postBodySectionHeader';
import PostBodyCollection from './postBodyCollection';

const PostBodyItem = ({name, itemSchema, itemValue, endpointId, displayName, canRemove, onPostBodyInputChanged, onAddItemToPostbodyCollection, onRemovePostbodyCollectionItem, showExcludedPostBodyFields}) => {
    const uid = `${endpointId}-${displayName}-${name}`;

    if (itemSchema.fieldType && itemSchema.fieldType !== 'array') {
        return !itemSchema.isExcluded || (itemSchema.isExcluded && showExcludedPostBodyFields) ? (
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
                            value={itemValue || ''}
                        >
                            <option value={''}>{''}</option>
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
        ) : null;
    }

    if (itemSchema.fieldType === 'array') {
        return (
            <PostBodyCollection
                displayName={displayName}
                endpointId={endpointId}
                itemSchema={{...itemSchema.items, isExcluded: itemSchema.isExcluded}}
                itemValue={itemValue}
                onAddItemToPostbodyCollection={onAddItemToPostbodyCollection}
                onPostBodyInputChanged={onPostBodyInputChanged}
                onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem}
                propertyName={name}
                showExcludedPostBodyFields={showExcludedPostBodyFields}
            />
        );
    }

    return !itemSchema.isExcluded || (itemSchema.isExcluded && showExcludedPostBodyFields) ?
            <PostBodySectionHeader canRemove={canRemove} displayName={displayName} endpointId={endpointId} onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem} propertyName={name}>
                {Object.keys(itemSchema).filter((n) => n !== 'required' && n !== 'isExcluded' && itemSchema[n]).map((itemKey, i) => {
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
                        showExcludedPostBodyFields={showExcludedPostBodyFields}
                    />);
                })}
            </PostBodySectionHeader> : null;
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
    showExcludedPostBodyFields: React.PropTypes.bool.isRequired
};

export default PostBodyItem;
