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
const ApiDocumentationHeader = ({documentationFor, endpointId, isArray, isNested, propertyName, displayName, collapsed, children}) => {
    const style = isNested ? {border: '1px solid lightgrey'} : {border: '1px solid lightgrey', marginTop: '10px', marginBottom: '10px'};

    return (
        <div style={style}>
            <div className={'row api-documentation-section-header'} data-toggle={'collapse'} data-target={`#${endpointId}-${documentationFor}-${propertyName.replace(/:/g, '')}`} onClick={() => (handleToggleVisibility(documentationFor, propertyName, endpointId))}>
                <div className={'col-md-2 api-doc-parameter-name api-doc-left-col'}>{displayName}</div>
                <div className={'col-md-8'}></div>
                <div className={'col-md-2'}>
                    <span style={{fontWeight: 'bold'}}>{`${isArray ? 'Array[' : ''}${displayName.charAt(0).toUpperCase() + displayName.slice(1)}${isArray ? ']' : ''}`}</span>
                    <span className={'documentation-expand-icon glyphicon glyphicon-menu-down' + (collapsed ? '' : ' rotate')} style={{float: 'right', marginLeft: '9px'}}></span>
                </div>
            </div>
            <div className={'collapse'} id={`${endpointId}-${documentationFor}-${propertyName.replace(/:/g, '')}`}>
            {children}
            </div>
        </div>
    );
};

ApiDocumentationHeader.displayName = 'Post Item Section Header';
ApiDocumentationHeader.propTypes = {
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

export default ApiDocumentationHeader;
