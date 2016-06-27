import React from 'react';

import PostBodyItem from './PostBodyItem';

const getPostBodyItems = (props) => (
    props.postBody.fieldType && props.postBody.fieldType === 'array' ?
        props.postBody.items :
        props.postBody
);

const PostBody = (props) => (
    <table>
        <tbody>
        <tr>
            <td colSpan='2'><h4>{'Post Body'}</h4></td>
        </tr>
        {
            Object.keys(getPostBodyItems(props)).filter((name) => name !== 'uiState').map((name, i) => {
                return (<PostBodyItem
                    endpointId={props.id}
                    item={getPostBodyItems(props)[name]}
                    itemName={name}
                    key={i}
                    parentName={null}
                    uiState={getPostBodyItems(props)[name].uiState}
                />);
            })
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
