import React from 'react';

import PostBodyDocsItem from './postBodyDocsItem';

const PostBodyDocs = (props) => (
    <div>
        <h3>{'Post Body Parameters'}</h3>
        <PostBodyDocsItem
            canRemove={false}
            displayName={'Post Body Parameters'}
            endpointId={props.id}
            item={props.postBody}
            name={''}
            uiState={props.postBody.uiState}
            isRoot={true}
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
