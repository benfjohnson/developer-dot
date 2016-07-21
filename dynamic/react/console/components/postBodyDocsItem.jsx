import React from 'react';

import PostBodyDocsCollapseable from './PostBodyDocsCollapseable';

const PostBodyDocsItem = ({name, item, endpointId, uiState, displayName, isRoot = false}) => {
    if (item.fieldType && item.fieldType !== 'array') {
        return (
            <div>
                <div className={'row'}>
                    <div className={'medium-2 columns'}>{displayName}{item.required ? <div>{'Required'}</div> : null}</div>
                    <div className={'medium-8 columns'}>{item.description}</div>
                    <div className={'medium-2 columns'}>{item.fieldType}</div>
                </div>
            </div>
        );
    }

    if (item.fieldType === 'array') {
        return (
                <PostBodyDocsItem
                    displayName={displayName}
                    endpointId={endpointId}
                    item={item.items}
                    name={`${name ? name + ';' : ''}items`}
                    uiState={uiState}
                />
        );
    }

    // Don't want root of 'try it out to be collapseable!
    if (isRoot) {
        return (
            <div>
            {Object.keys(item).filter((n) => n !== 'uiState' && n !== 'required' && item[n]).map((itemKey, i) => {
                return (
                    <PostBodyDocsItem
                        displayName={itemKey}
                        endpointId={endpointId}
                        item={item[itemKey]}
                        itemName={itemKey}
                        key={i}
                        name={`${name ? name + ';' : ''}${itemKey}`}
                        uiState={item[itemKey].uiState}
                    />
                );
            })}
            </div>
        );
    }

    return (
        <PostBodyDocsCollapseable displayName={displayName} endpointId={endpointId} propertyName={name} collapsed={!uiState.visible}>
            {uiState.visible ? Object.keys(item).filter((n) => n !== 'uiState' && n !== 'required' && item[n]).map((itemKey, i) => {
                return (<PostBodyDocsItem
                    displayName={itemKey}
                    endpointId={endpointId}
                    item={item[itemKey]}
                    itemName={itemKey}
                    key={i}
                    name={`${name ? name + ';' : ''}` + itemKey}
                    uiState={item[itemKey].uiState}
                />);
            }) : null}
        </PostBodyDocsCollapseable>
    );
};

PostBodyDocsItem.displayName = 'Post Body Docs Item';
PostBodyDocsItem.propTypes = {
    displayName: React.PropTypes.string.isRequired,
    endpointId: React.PropTypes.number.isRequired,
    item: React.PropTypes.object.isRequired,
    name: React.PropTypes.string.isRequired,
    uiState: React.PropTypes.shape({
        visible: React.PropTypes.bool
    })
};

export default PostBodyDocsItem;
