import React from 'react';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';

const handleToggleVisibility = (propertyName, endpointId) => {
    store.dispatch({
        type: actionTypes.TOGGLE_POST_BODY_ITEM_VISIBILITY,
        postBodyParamName: propertyName,
        endpointId: endpointId
    });
};

/*
 * Defines a wrapper to nest object properties or
 * array items in a PostBodyå
 * */
const PostBodyDocsCollapseable = ({endpointId, propertyName, displayName, collapsed, children}) => {
    return (
        <div style={{border: '1px solid lightgrey', marginTop: '10px', marginBottom: '10px'}}>
            <label className={'postBodySectionHeaderName'} onClick={() => (handleToggleVisibility(propertyName, endpointId))} style={{borderBottom: '1px solid lightgrey'}}>
            {displayName}{<i className={'fi-arrows-expand'}></i>}
            </label>
            {children}
        </div>
    );
};

PostBodyDocsCollapseable.displayName = 'Post Item Section Header';
PostBodyDocsCollapseable.propTypes = {
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

export default PostBodyDocsCollapseable;
