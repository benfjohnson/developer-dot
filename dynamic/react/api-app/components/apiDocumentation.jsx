import React from 'react';

import ApiDocumentationItem from './apiDocumentationItem';

const DOC_TYPES = {
    REQUEST: 'REQUEST',
    RESPONSE: 'RESPONSE'
};

const ApiDocumentation = (props) => (
    <div>
        <h4 className={'api-doc-header'}>{props.documentationFor === DOC_TYPES.REQUEST ? 'Post Body Parameters' : 'Response'}<span>{props.requestOrResponseSchema.fieldType && props.requestOrResponseSchema.fieldType === 'array' ? '[Array]' : ''}</span></h4>
        <ApiDocumentationItem
            canRemove={false}
            displayName={'Post Body Parameters'}
            documentationFor={props.documentationFor}
            endpointId={props.endpointId}
            isRoot={true}
            item={props.requestOrResponseSchema}
            name={''}
            nestingLevel={0}
        />
    </div>
);

ApiDocumentation.displayName = 'API Documentation';
ApiDocumentation.propTypes = {
    documentationFor: React.PropTypes.oneOf([DOC_TYPES.REQUEST, DOC_TYPES.RESPONSE]),
    endpointId: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    requestOrResponseSchema: React.PropTypes.object.isRequired
};

export default ApiDocumentation;
