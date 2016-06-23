import React from 'react';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';

const handleInputChange = (e, pbName, id) => {
    store.dispatch({
        type: actionTypes.POST_BODY_CHANGED,
        inputVal: e.target.value,
        postBodyParamName: pbName,
        apiId: id
    });
};
const PostBody = (props) => (
    <table>
        <tbody>
        <tr>
            <td colSpan='2'><h4>{'Request'}</h4></td>
        </tr>
        {Object.keys(props.postBody).map((name, i) => (
            <tr key={i}>
                <td><label htmlFor={props.name.replace(/ /g, '_') + '_' + name + '_' + props.id}>{name}</label></td>
                <td>
                    <input
                        defaultValue={''}
                        id={props.name.replace(/ /g, '_') + '_' + name + '_' + props.id}
                        onChange={
                            (e) => {
                                handleInputChange(e, name, props.id);
                            }
                        }
                        placeholder={props.postBody[name].example}
                    />
                </td>
            </tr>)
        )}
        </tbody>
    </table>
);

PostBody.displayName = 'Post Body';
PostBody.propTypes = {
    id: React.PropTypes.number.isRequired,
    postBody: React.PropTypes.object
};

export default PostBody;
