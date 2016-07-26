import React from 'react';

import PostBodyDocsItem from './postBodyDocsItem';

const DOC_TYPES = {
    REQUEST: 'REQUEST',
    RESPONSE: 'RESPONSE'
};

const PostBodyDocs = (props) => (
    <div>
        <div className={'row'}>
            <div className='col-md-6'>
                <h3>{props.documentationFor === DOC_TYPES.REQUEST ? 'Post Body Parameters' : 'Response'}</h3>
            </div>
            <div className={'col-md-2'}></div>
            <div className='col-md-3'>
                <h3 style={{textAlign: 'center'}}>{props.postBody.fieldType && props.postBody.fieldType === 'array' ? 'Array of' : 'Object'}</h3>
            </div>
        </div>
        <PostBodyDocsItem
            canRemove={false}
            displayName={'Post Body Parameters'}
            documentationFor={props.documentationFor}
            endpointId={props.id}
            isRoot={true}
            item={props.postBody}
            name={''}
            uiState={props.postBody.uiState}
        />
    </div>
);

PostBodyDocs.displayName = 'Post Body Docs';
PostBodyDocs.propTypes = {
    documentationFor: React.PropTypes.oneOf([DOC_TYPES.REQUEST, DOC_TYPES.RESPONSE]),
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    postBody: React.PropTypes.object
};

export default PostBodyDocs;
