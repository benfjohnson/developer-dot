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
 * array items in a PostBody
 * */
const PostBodyDocsCollapseable = ({endpointId, fieldType, propertyName, displayName, collapsed, children}) => {
    return (
        <div style={{border: '1px solid lightgrey', marginTop: '10px', marginBottom: '10px'}}>
            <div className={'row postBodySectionHeaderName'} onClick={() => (handleToggleVisibility(propertyName, endpointId))}>
                <div className={'medium-2 columns documentation-parameter-name'}>{displayName}</div>
                <div className={'medium-8 columns'}></div>
                <div className={'medium-2 columns'}>
                    <span style={{fontWeight: 'bold'}}>{`${fieldType === 'array' ? '[Array]' : ''}${displayName.charAt(0).toUpperCase() + displayName.slice(1)}`}</span>
                    <i className={collapsed ? 'fi-arrows-expand' : 'fi-arrows-compress'} style={{float: 'right', marginLeft: '9px'}}></i>
                </div>
            </div>
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
    collapsed: React.PropTypes.bool,
    displayName: React.PropTypes.string.isRequired,
    endpointId: React.PropTypes.number.isRequired,
    propertyName: React.PropTypes.string.isRequired,
    uiState: React.PropTypes.shape({
        visible: React.PropTypes.bool
    })
};

export default PostBodyDocsCollapseable;
