import React from 'react';

import PostBodyFormItem from './postBodyFormItem';
import {hasExcludedProperties} from '../helpers';

const PostBodyForm = (props) => (
    <div>
        {hasExcludedProperties(props.endpoint.requestSchema) ?
            <div className={'clickable'} onClick={props.onToggleShowExcludedPostBodyProps.bind(null, props.endpoint.id)}>
                <span className={`glyphicon glyphicon-${props.endpoint.showExcludedPostBodyFields ? 'minus' : 'plus'}`} /><span>{` ${props.endpoint.showExcludedPostBodyFields ? 'Hide advanced' : 'Show all'} request attributes`}</span>
            </div> : null}
        <form className={'api-console-post-form'} onSubmit={
            (e) => {
                e.preventDefault();
                props.onSubmitConsoleRequest(props.endpoint);
            }
        }>
            {
                <PostBodyFormItem
                    canRemove={false}
                    displayName={'Post Body'}
                    endpointId={props.endpoint.id}
                    itemSchema={props.endpoint.requestSchema}
                    itemValue={props.endpoint.postBody}
                    name={''}
                    onAddItemToPostbodyCollection={props.onAddItemToPostbodyCollection}
                    onPostBodyInputChanged={props.onPostBodyInputChanged}
                    onRemovePostbodyCollectionItem={props.onRemovePostbodyCollectionItem}
                    showExcludedPostBodyFields={props.endpoint.showExcludedPostBodyFields}
                />
            }
            <input style={{display: 'none'}} type={'submit'} value={'submit'}/>
        </form>
    </div>
);

PostBodyForm.displayName = 'Post Body';
PostBodyForm.propTypes = {
    endpoint: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        apiResponse: React.PropTypes.shape({
            status: React.PropTypes.string.isRequired,
            statusMessage: React.PropTypes.string.isRequired,
            body: React.PropTypes.oneOfType([
                React.PropTypes.object, React.PropTypes.array
            ]).isRequired
        }),
        name: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        curl: React.PropTypes.string.isRequired,
        sampleAuthHeader: React.PropTypes.string,
        path: React.PropTypes.string.isRequired,
        action: React.PropTypes.string.isRequired,
        queryString: React.PropTypes.objectOf(
            React.PropTypes.shape({
                description: React.PropTypes.string,
                example: React.PropTypes.any,
                required: React.PropTypes.bool,
                value: React.PropTypes.any.isRequired
            })
        ),
        pathParams: React.PropTypes.objectOf(
            React.PropTypes.shape({
                description: React.PropTypes.string,
                example: React.PropTypes.any,
                required: React.PropTypes.bool,
                value: React.PropTypes.any.isRequired
            })
        ),
        requestSchema: React.PropTypes.object,
        postBody: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
        showExcludedPostBodyFields: React.PropTypes.bool.isRequired
    }).isRequired,
    name: React.PropTypes.string.isRequired,
    onAddItemToPostbodyCollection: React.PropTypes.func.isRequired,
    onPostBodyInputChanged: React.PropTypes.func.isRequired,
    onRemovePostbodyCollectionItem: React.PropTypes.func.isRequired,
    onSubmitConsoleRequest: React.PropTypes.func.isRequired
};

export default PostBodyForm;
