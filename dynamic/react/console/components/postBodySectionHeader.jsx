import React from 'react';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';

// const handleToggleVisibility = (propertyName, endpointId) => {
//     store.dispatch({
//         type: actionTypes.TOGGLE_POST_BODY_ITEM_VISIBILITY,
//         postBodyParamName: propertyName,
//         endpointId: endpointId
//     });
// };

const handleRemoveItem = (pbName, endpointId) => {
    store.dispatch({
        type: actionTypes.REMOVE_ITEM_FROM_POST_BODY_COLLECTION,
        postBodyParamName: pbName,
        endpointId: endpointId
    });
};

/*
 * Defines a wrapper to nest object properties or
 * array items in a PostBodyå
 * */
const PostBodySectionHeader = ({endpointId, propertyName, displayName, children, canRemove}) => {
    return (
        <div className={'api-console-input-section'}>
            <h4
                style={{cursor: 'pointer', display: 'inline-block'}}
            >
                {displayName}
            </h4>
            {canRemove ?
                <div
                    className={'clickable hdr-btn-adj-text'}
                    onClick={() => {
                        handleRemoveItem(propertyName, endpointId);
                    }}
                    style={{display: 'inline-block'}}
                >
                    <span
                        className={'m-l-1 glyphicon glyphicon-remove'}
                        title={'Remove Item'}
                    />
                    <span>{' Remove'}</span>
                </div> : null
            }
            {children}
        </div>
    );
};

PostBodySectionHeader.displayName = 'Post Item Section Header';
PostBodySectionHeader.propTypes = {
    canRemove: React.PropTypes.bool.isRequired,
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.array
    ]),
    displayName: React.PropTypes.string.isRequired,
    endpointId: React.PropTypes.number.isRequired,
    propertyName: React.PropTypes.string.isRequired,
    uiState: React.PropTypes.shape({
        visible: React.PropTypes.bool
    })
};

export default PostBodySectionHeader;
