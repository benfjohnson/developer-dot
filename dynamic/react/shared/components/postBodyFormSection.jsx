import React from 'react';
import PropTypes from 'prop-types';
/*
 * Defines a wrapper to nest object properties or
 * array items in a PostBody
 * */
const PostBodyFormSection = ({endpointId, propertyName, displayName, children, canRemove, onRemovePostbodyCollectionItem}) => {
    return (
        <div className={'api-console-input-section'}>
            <h4 className={'api-console-section-header s5'}>
                {displayName}
            </h4>
            {canRemove ?
                <div
                    className={'clickable hdr-btn-adj-text'}
                    onClick={onRemovePostbodyCollectionItem.bind(null, propertyName, endpointId)}
                    style={{display: 'inline-block'}}
                >
                    <span
                        className={'m-l-1 glyphicon glyphicon-remove'}
                        title={'Remove Item'}
                    />
                    <span>{' Remove'}</span>
                </div> : null
            }
            {children}
        </div>
    );
};

PostBodyFormSection.displayName = 'Post Item Section Header';
PostBodyFormSection.propTypes = {
    canRemove: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    displayName: PropTypes.string.isRequired,
    endpointId: PropTypes.number.isRequired,
    onRemovePostbodyCollectionItem: PropTypes.func.isRequired,
    propertyName: PropTypes.string.isRequired
};

export default PostBodyFormSection;
