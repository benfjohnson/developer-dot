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
                onAddItemToPostbodyCollection={props.onAddItemToPostbodyCollection}
                onPostBodyInputChanged={props.onPostBodyInputChanged}
                onRemovePostbodyCollectionItem={props.onRemovePostbodyCollectionItem}
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
    onAddItemToPostbodyCollection: React.PropTypes.func.isRequired,
    onPostBodyInputChanged: React.PropTypes.func.isRequired,
    onRemovePostbodyCollectionItem: React.PropTypes.func.isRequired,
    postBody: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
    postBodyData: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array])
};

export default PostBody;
