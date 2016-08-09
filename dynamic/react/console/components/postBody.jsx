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
                itemSchema={props.postBody}
                itemValue={props.postBodyData}
                name={''}
                uiState={props.postBody.uiState}
                onPostBodyInputChanged={props.onPostBodyInputChanged}
                onAddItemToPostbodyCollection={props.onAddItemToPostbodyCollection}
                onRemovePostbodyCollectionItem={props.onRemovePostbodyCollectionItem}
            />
        }
        </form>
    </div>
);

PostBody.displayName = 'Post Body';
PostBody.propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    postBody: React.PropTypes.object,
    onPostBodyInputChanged: React.PropTypes.func
};

export default PostBody;
