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
        <PostBodySectionHeader canRemove={false} displayName={displayName} endpointId={endpointId} propertyName={propertyName}>
            {uiState.visible ? collection.map((itm, i) => {
                return (
                    <PostBodyItem
                        canRemove={collection.length > 1}
                        displayName={i.toString()}
                        endpointId={endpointId}
                        item={itm}
                        key={i}
                        name={`${propertyName ? propertyName + ';' : ''}[${i}]`}
                        uiState={itm.uiState}
                    />);
            }) : null}
            <tr>
                <td className={'mouse'}
                    onClick={
                        (e) => {
                            e.preventDefault();
                            handleAddItem(propertyName, endpointId, schema);
                        }
                    }
                >
                    <span className={'glyphicon glyphicon-plus-sign'}
                          title={'Add Item'}/>
                </td>
            </tr>
        </PostBodySectionHeader>
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
