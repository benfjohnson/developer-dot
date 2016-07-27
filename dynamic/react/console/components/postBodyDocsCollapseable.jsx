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
const PostBodyDocsCollapseable = ({documentationFor, endpointId, isArray, isNested, propertyName, displayName, collapsed, children}) => {
    const style = isNested ? {border: '1px solid lightgrey'} : {border: '1px solid lightgrey', marginTop: '10px', marginBottom: '10px'};

    // if (!isNested) {
    //     style.marginTop = '10px';
    //     style.marginBottom = '10px';
    // }

    return (
        <div style={style}>
            <div className={'row api-documentation-section-header'} onClick={() => (handleToggleVisibility(documentationFor, propertyName, endpointId))}>
                <div className={'col-md-2 documentation-parameter-name'}>{displayName}</div>
                <div className={'col-md-8'}></div>
                <div className={'col-md-2'}>
                    <span style={{fontWeight: 'bold'}}>{`${isArray ? 'Array[' : ''}${displayName.charAt(0).toUpperCase() + displayName.slice(1)}${isArray ? ']' : ''}`}</span>
                    <span className={'documentation-expand-icon glyphicon' + (collapsed ? ' glyphicon-menu-down' : ' glyphicon-menu-up')} style={{float: 'right', marginLeft: '9px'}}></span>
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
    isNested: React.PropTypes.bool.isRequired,
    propertyName: React.PropTypes.string.isRequired,
    uiState: React.PropTypes.shape({
        visible: React.PropTypes.bool
    })
};

export default PostBodyDocsCollapseable;
