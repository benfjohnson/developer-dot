import React from 'react';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';
import PostBodySectionHeader from './postBodySectionHeader';
import PostBodyItem from './postBodyItem';

const handleAddItem = (paramName, endpointId, itemSchema) => {
    store.dispatch({
        type: actionTypes.ADD_ITEM_TO_POST_BODY_COLLECTION,
        postBodyParamName: paramName,
        endpointId: endpointId,
        itemSchema: itemSchema
    });
};

const PostBodyCollection = ({propertyName, endpointId, collection, schema, uiState, displayName}) => {
    return (
        <div>
            <PostBodySectionHeader canRemove={false} displayName={displayName} endpointId={endpointId} propertyName={propertyName}>
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
                            />);
                })}
            </PostBodySectionHeader>
            <div className={'clickable'} onClick={() => {
                handleAddItem(propertyName, endpointId, schema);
            }}>
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
