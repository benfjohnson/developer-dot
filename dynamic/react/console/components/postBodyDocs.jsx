import React from 'react';

import PostBodyDocsItem from './postBodyDocsItem';

const DOC_TYPES = {
    REQUEST: 'REQUEST',
    RESPONSE: 'RESPONSE'
};

const PostBodyDocs = (props) => (
    <div>
        <div className={'row'}>
            <div className='medium-6 columns'>
                <h3>{props.docType === DOC_TYPES.REQUEST ? 'Post Body Parameters' : 'Response'}</h3>
            </div>
            <div className={'medium-2 columns'}></div>
            <div className='medium-3 columns'>
                <h3 style={{textAlign: 'center'}}>{props.postBody.fieldType && props.postBody.fieldType === 'array' ? 'Array of' : 'Object'}</h3>
            </div>
        </div>
        <PostBodyDocsItem
            canRemove={false}
            displayName={'Post Body Parameters'}
            docType={props.docType}
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
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    postBody: React.PropTypes.object
};

export default PostBodyDocs;
