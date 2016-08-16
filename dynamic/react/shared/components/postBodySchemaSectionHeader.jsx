import React from 'react';

/*
 * Defines a wrapper to nest object properties or
 * array items in a PostBodyå
 * */
const PostBodySchemaSectionHeader = ({endpointId, propertyName, displayName, children, canRemove, onRemovePostbodyCollectionItem}) => {
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

PostBodySchemaSectionHeader.displayName = 'Post Item Section Header';
PostBodySchemaSectionHeader.propTypes = {
    canRemove: React.PropTypes.bool.isRequired,
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.array
    ]),
    displayName: React.PropTypes.string.isRequired,
    endpointId: React.PropTypes.number.isRequired,
    onRemovePostbodyCollectionItem: React.PropTypes.func.isRequired,
    propertyName: React.PropTypes.string.isRequired
};

export default PostBodySchemaSectionHeader;
