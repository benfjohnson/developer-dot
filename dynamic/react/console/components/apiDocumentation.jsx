import React from 'react';

import ApiDocumentationItem from './apiDocumentationItem';

const DOC_TYPES = {
    REQUEST: 'REQUEST',
    RESPONSE: 'RESPONSE'
};

const ApiDocumentation = (props) => (
    <div>
        <div className={'row'}>
            <div className='col-md-6'>
                <h3>{props.documentationFor === DOC_TYPES.REQUEST ? 'Post Body Parameters' : 'Response'}</h3>
            </div>
            <div className={'col-md-2'}></div>
            <div className='col-md-3'>
                <h3 className={'api-documentation-req-or-res-type'}>{props.postBody.fieldType && props.postBody.fieldType === 'array' ? 'Array of' : 'Object'}</h3>
            </div>
        </div>
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
    postBody: React.PropTypes.object,
    onToggleDocCollapse: React.PropTypes.func.isRequired
};

export default ApiDocumentation;
