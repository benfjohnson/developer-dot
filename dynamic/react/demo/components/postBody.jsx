import React from 'react';

import PostBodyItem from './PostBodyItem';

const PostBody = (props) => (
    <table>
        <tbody>
        <tr>
            <td colSpan='2'><h4>{'Post Body'}</h4></td>
        </tr>
        {
            props.postBody.fieldType && props.postBody.fieldType === 'array' ?
                Object.keys(props.postBody.items).map((name, i) => {
                    return (<PostBodyItem
                        endpointId={props.id}
                        item={props.postBody.items[name]}
                        itemName={name}
                        key={i}
                        parentName={null}
                    />);
                }) :
                Object.keys(props.postBody).map((name, i) => {
                    return (<PostBodyItem
                        endpointId={props.id}
                        item={props.postBody[name]}
                        itemName={name}
                        key={i}
                        parentName={null}
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
