import React from 'react';

import PostBodyItem from './PostBodyItem';

const PostBody = (props) => (
    <table>
        <tbody>
        {
            <PostBodyItem
                displayName={'Post Body'}
                endpointId={props.id}
                item={props.postBody}
                name={''}
                uiState={props.postBody.uiState}
            />
        }
        </tbody>
    </table>
);

PostBody.displayName = 'Post Body';
PostBody.propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    postBody: React.PropTypes.object
};

export default PostBody;
