import React from 'react';

import PostBodySectionHeader from './postBodySectionHeader';
import PostBodyItem from './postBodyItem';

const PostBodyCollection = ({propertyName, endpointId, itemValue, itemSchema, uiState, displayName, onPostBodyInputChanged, onAddItemToPostbodyCollection, onRemovePostbodyCollectionItem}) => {
    return (
        <div>
            <PostBodySectionHeader canRemove={false} displayName={displayName} endpointId={endpointId} onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem} propertyName={propertyName}>
                {itemValue.map((itm, i) => {
                    return (
                        <PostBodyItem
                            canRemove={itemValue.length > 1}
                            displayName={`item ${i + 1}`}
                            endpointId={endpointId}
                            itemSchema={itemSchema}
                            itemValue={itm}
                            key={i}
                            name={`${propertyName ? propertyName + ':' : ''}[${i}]`}
                            onAddItemToPostbodyCollection={onAddItemToPostbodyCollection}
                            onPostBodyInputChanged={onPostBodyInputChanged}
                            onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem}
                            uiState={itemSchema.uiState}
                        />);
                })}
            </PostBodySectionHeader>
            <div className={'clickable'} onClick={onAddItemToPostbodyCollection.bind(null, propertyName, endpointId, itemSchema)}>
                <span className={'glyphicon glyphicon-plus'}></span><span className={''}>{`  Add ${displayName === 'Post Body' ? 'Item' : displayName}`}</span>
            </div>
        </div>
    );
};

PostBodyCollection.displayName = 'Post Body Collection';

PostBodyCollection.propTypes = {
    collection: React.PropTypes.array,
    displayName: React.PropTypes.string.isRequired,
    endpointId: React.PropTypes.number.isRequired,
    itemSchema: React.PropTypes.object.isRequired,
    itemValue: React.PropTypes.array.isRequired,
    onAddItemToPostbodyCollection: React.PropTypes.func.isRequired,
    onPostBodyInputChanged: React.PropTypes.func.isRequired,
    onRemovePostbodyCollectionItem: React.PropTypes.func.isRequired,
    propertyName: React.PropTypes.string.isRequired
};

export default PostBodyCollection;
