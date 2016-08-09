import React from 'react';

import PostBodySectionHeader from './postBodySectionHeader';
import PostBodyItem from './postBodyItem';

const PostBodyCollection = ({propertyName, endpointId, collection, schema, uiState, displayName, onPostBodyInputChanged, onAddItemToPostbodyCollection, onRemovePostbodyCollectionItem}) => {
    return (
        <div>
            <PostBodySectionHeader canRemove={false} displayName={displayName} endpointId={endpointId} propertyName={propertyName} onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem}>
                {collection.map((itm, i) => {
                    return (
                        <PostBodyItem
                            canRemove={collection.length > 1}
                            displayName={`item ${i + 1}`}
                            endpointId={endpointId}
                            item={itm}
                            key={i}
                            name={`${propertyName ? propertyName + ':' : ''}[${i}]`}
                            uiState={itm.uiState}
                            onPostBodyInputChanged={onPostBodyInputChanged}
                            onAddItemToPostbodyCollection={onAddItemToPostbodyCollection}
                            onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem}
                            />);
                })}
            </PostBodySectionHeader>
            <div className={'clickable'} onClick={onAddItemToPostbodyCollection.bind(null, propertyName, endpointId, schema)}>
                <span className={'glyphicon glyphicon-plus'}></span><span className={''}>{`  Add ${displayName === 'Post Body' ? 'Item' : displayName}`}</span>
            </div>
        </div>
    );
};

PostBodyCollection.displayName = 'Post Body Collection';

PostBodyCollection.propTypes = {
    collection: React.PropTypes.array.isRequired,
    displayName: React.PropTypes.string.isRequired,
    endpointId: React.PropTypes.number.isRequired,
    propertyName: React.PropTypes.string.isRequired,
    schema: React.PropTypes.object.isRequired,
    uiState: React.PropTypes.shape({
        visible: React.PropTypes.bool
    })
};

export default PostBodyCollection;
