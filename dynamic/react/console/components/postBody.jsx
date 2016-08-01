import React from 'react';

import PostBodyItem from './postBodyItem';

const PostBody = (props) => (
    <div>
        <form className={'api-console-post-form'}>
        {
            <PostBodyItem
                canRemove={false}
                displayName={'Post Body'}
                endpointId={props.id}
                item={props.postBody}
                name={''}
                uiState={props.postBody.uiState}
            />
        }
        </form>
    </div>
);

PostBody.displayName = 'Post Body';
PostBody.propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    postBody: React.PropTypes.object
};

export default PostBody;
