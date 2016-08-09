import React from 'react';

import PostBodySectionHeader from './postBodySectionHeader';
import PostBodyCollection from './postBodyCollection';

const PostBodyItem = ({name, item, endpointId, uiState, displayName, canRemove, onPostBodyInputChanged, onAddItemToPostbodyCollection, onRemovePostbodyCollectionItem}) => {
    const uid = `${endpointId}-${displayName}-${name}`;

    if (item.fieldType && item.fieldType !== 'array') {
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
                    {item.enum && item.enum.length ?
                        <select
                            className={'form-control'}
                            id={uid}
                            onChange={(e) => {
                                onPostBodyInputChanged(endpointId, name, e.target.value);
                            }}
                            value={item.value || '*select*'}
                        >
                            <option disabled={true} value={'*select*'}>{''}</option>
                            {item.enum.map((option, i) => (<option key={i} value={option}>{option}</option>))}
                        </select> :
                        <input
                            className={'form-control'}
                            id={uid}
                            onChange={(e) => {
                                onPostBodyInputChanged(endpointId, name, e.target.value);
                            }}
                            placeholder={item.example}
                            value={item.value}
                        />
                    }
            </div>
        );
    }

    if (item.fieldType === 'array') {
        return (
            <PostBodyCollection
                collection={item.value}
                displayName={displayName}
                endpointId={endpointId}
                propertyName={name}
                schema={item.items}
                uiState={uiState}
                onPostBodyInputChanged={onPostBodyInputChanged}
                onAddItemToPostbodyCollection={onAddItemToPostbodyCollection}
                onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem}
            />
        );
    }

    return (
        <PostBodySectionHeader canRemove={canRemove} displayName={displayName} endpointId={endpointId} propertyName={name} onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem}>
            {Object.keys(item).filter((n) => n !== 'uiState' && n !== 'required' && item[n]).map((itemKey, i) => {
                return (<PostBodyItem
                    canRemove={false}
                    displayName={itemKey}
                    endpointId={endpointId}
                    item={item[itemKey]}
                    itemName={itemKey}
                    key={i}
                    name={`${name ? name + ':' : ''}` + itemKey}
                    uiState={item[itemKey].uiState}
                    onPostBodyInputChanged={onPostBodyInputChanged}
                    onAddItemToPostbodyCollection={onAddItemToPostbodyCollection}
                    onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem}
                />);
            })}
        </PostBodySectionHeader>
    );
};

PostBodyItem.displayName = 'Post Body Item';
PostBodyItem.propTypes = {
    canRemove: React.PropTypes.bool.isRequired,
    displayName: React.PropTypes.string.isRequired,
    endpointId: React.PropTypes.number.isRequired,
    item: React.PropTypes.object.isRequired,
    name: React.PropTypes.string.isRequired,
    uiState: React.PropTypes.shape({
        visible: React.PropTypes.bool
    })
};

export default PostBodyItem;
