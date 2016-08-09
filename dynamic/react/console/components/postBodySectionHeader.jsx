import React from 'react';

/*
 * Defines a wrapper to nest object properties or
 * array items in a PostBodyå
 * */
const PostBodySectionHeader = ({endpointId, propertyName, displayName, children, canRemove, onRemovePostbodyCollectionItem}) => {    
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

PostBodySectionHeader.displayName = 'Post Item Section Header';
PostBodySectionHeader.propTypes = {
    canRemove: React.PropTypes.bool.isRequired,
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
