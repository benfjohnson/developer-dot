import React from 'react';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';

const handleToggleVisibility = (e, propertyName, endpointId) => {
    store.dispatch({
        type: actionTypes.TOGGLE_POST_BODY_ITEM_VISIBILITY,
        postBodyParamName: propertyName,
        endpointId: endpointId
    });
};

/*
 * Defines a wrapper to nest object properties or
 * array items in a PostBodyå
 * */
const PostBodySectionHeader = ({endpointId, propertyName, displayName, children}) => {
    return (
        <tr>
            <td colSpan='2'>
                <table style={{width: '100%'}}>
                    <tbody>
                    <tr>
                        <td
                            colSpan='2'
                            onClick={
                                    (e) => {
                                        handleToggleVisibility(e, propertyName, endpointId);
                                    }
                                }
                            style={{cursor: 'pointer'}}
                        >
                            <label style={{cursor: 'pointer'}}>{displayName}</label>
                        </td>
                    </tr>
                    {children}
                    </tbody>
                </table>
            </td>
        </tr>
    );
};

PostBodySectionHeader.displayName = 'Post Item Section Header';
PostBodySectionHeader.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.array
    ]),
    displayName: React.PropTypes.string.isRequired,
    endpointId: React.PropTypes.number.isRequired,
    propertyName: React.PropTypes.string.isRequired,
    uiState: React.PropTypes.shape({
        visible: React.PropTypes.bool
    })
};

export default PostBodySectionHeader;
