import React from 'react';
import PropTypes from 'prop-types';
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
    endpoint: PropTypes.shape({
        id: PropTypes.number.isRequired,
        apiResponse: PropTypes.shape({
            status: PropTypes.string.isRequired,
            statusMessage: PropTypes.string.isRequired,
            body: PropTypes.oneOfType([
                PropTypes.object, PropTypes.array
            ]).isRequired
        }),
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        curl: PropTypes.string.isRequired,
        sampleAuthHeader: PropTypes.string,
        path: PropTypes.string.isRequired,
        action: PropTypes.string.isRequired,
        queryString: PropTypes.objectOf(
            PropTypes.shape({
                description: PropTypes.string,
                example: PropTypes.any,
                required: PropTypes.bool,
                value: PropTypes.any.isRequired
            })
        ),
        pathParams: PropTypes.objectOf(
            PropTypes.shape({
                description: PropTypes.string,
                example: PropTypes.any,
                required: PropTypes.bool,
                value: PropTypes.any.isRequired
            })
        ),
        requestSchema: PropTypes.object,
        postBody: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        showExcludedPostBodyFields: PropTypes.bool.isRequired
    }).isRequired,
    name: PropTypes.string.isRequired,
    onAddItemToPostbodyCollection: PropTypes.func.isRequired,
    onPostBodyInputChanged: PropTypes.func.isRequired,
    onRemovePostbodyCollectionItem: PropTypes.func.isRequired,
    onSubmitConsoleRequest: PropTypes.func.isRequired,
    onToggleShowExcludedPostBodyProps: PropTypes.func.isRequired
};

export default PostBodyForm;
