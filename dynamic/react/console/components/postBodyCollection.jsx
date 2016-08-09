import React from 'react';

import PostBodySectionHeader from './postBodySectionHeader';
import PostBodyItem from './postBodyItem';

const PostBodyCollection = ({propertyName, endpointId, itemValue, itemSchema, uiState, displayName, onPostBodyInputChanged, onAddItemToPostbodyCollection, onRemovePostbodyCollectionItem}) => {
    return (
        <div>
            <PostBodySectionHeader canRemove={false} displayName={displayName} endpointId={endpointId} propertyName={propertyName} onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem}>
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
                            uiState={itemSchema.uiState}
                            onPostBodyInputChanged={onPostBodyInputChanged}
                            onAddItemToPostbodyCollection={onAddItemToPostbodyCollection}
                            onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem}
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
    propertyName: React.PropTypes.string.isRequired,
    schema: React.PropTypes.object,
    uiState: React.PropTypes.shape({
        visible: React.PropTypes.bool
    })
};

export default PostBodyCollection;
