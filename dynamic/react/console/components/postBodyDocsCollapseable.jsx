import React from 'react';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';

const handleToggleVisibility = (documentationFor, propertyName, endpointId) => {
    store.dispatch({
        type: actionTypes.TOGGLE_DOCUMENTATION_ITEM_VISIBILITY,
        documentationFor: documentationFor,
        postBodyParamName: propertyName,
        endpointId: endpointId
    });
};

/*
 * Defines a wrapper to nest object properties or
 * array items in a PostBody
 * */
const PostBodyDocsCollapseable = ({documentationFor, endpointId, isArray, propertyName, displayName, collapsed, children}) => {
    return (
        <div style={{border: '1px solid lightgrey', marginTop: '10px', marginBottom: '10px'}}>
            <div className={'row postBodySectionHeaderName'} onClick={() => (handleToggleVisibility(documentationFor, propertyName, endpointId))}>
                <div className={'col-md-2 documentation-parameter-name'}>{displayName}</div>
                <div className={'col-md-8'}></div>
                <div className={'col-md-2'}>
                    <span style={{fontWeight: 'bold'}}>{`${isArray ? 'Array[' : ''}${displayName.charAt(0).toUpperCase() + displayName.slice(1)}${isArray ? ']' : ''}`}</span>
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
    documentationFor: React.PropTypes.oneOf(['REQUEST', 'RESPONSE']),
    endpointId: React.PropTypes.number.isRequired,
    isArray: React.PropTypes.bool.isRequired,
    propertyName: React.PropTypes.string.isRequired,
    uiState: React.PropTypes.shape({
        visible: React.PropTypes.bool
    })
};

export default PostBodyDocsCollapseable;
