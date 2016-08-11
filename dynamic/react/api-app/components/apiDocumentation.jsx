import React from 'react';

import ApiDocumentationItem from './apiDocumentationItem';

const DOC_TYPES = {
    REQUEST: 'REQUEST',
    RESPONSE: 'RESPONSE'
};

const ApiDocumentation = (props) => (
    <div>
        <h4 className={'api-doc-header'}>{props.documentationFor === DOC_TYPES.REQUEST ? 'Post Body Parameters' : 'Response'}<span>{props.postBody.fieldType && props.postBody.fieldType === 'array' ? '[Array]' : ''}</span></h4>
        <ApiDocumentationItem
            canRemove={false}
            displayName={'Post Body Parameters'}
            documentationFor={props.documentationFor}
            endpointId={props.id}
            isRoot={true}
            item={props.postBody}
            name={''}
            nestingLevel={0}
            onToggleDocCollapse={props.onToggleDocCollapse}
            uiState={props.postBody.uiState}
        />
    </div>
);

ApiDocumentation.displayName = 'API Documentation';
ApiDocumentation.propTypes = {
    documentationFor: React.PropTypes.oneOf([DOC_TYPES.REQUEST, DOC_TYPES.RESPONSE]),
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    onToggleDocCollapse: React.PropTypes.func.isRequired,
    postBody: React.PropTypes.object
};

export default ApiDocumentation;
