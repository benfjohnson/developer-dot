import React from 'react';

import PostBodyDocsCollapseable from './PostBodyDocsCollapseable';

const PostBodyDocsItem = ({docType, name, item, endpointId, uiState, displayName, isRoot = false}) => {
    if (item.fieldType && item.fieldType !== 'array') {
        return (
            <div className={'row documentation-parameter-body'}>
                <div className={'col-md-2 documentation-parameter-name'}><div>{displayName}</div>{item.required ? <div className='small-required-text'>{'Required'}</div> : null}</div>
                <div className={'col-md-8'}>{item.description}</div>
                <div className={'col-md-2'}>{item.fieldType}</div>
            </div>
        );
    }

    if (item.fieldType === 'array') {
        return (<PostBodyDocsItem
                    displayName={displayName}
                    docType={docType}
                    endpointId={endpointId}
                    isRoot={isRoot}
                    item={item.items}
                    name={`${name ? name + ';' : ''}items`}
                    uiState={item.items.uiState || {visible: true}}
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
                            docType={docType}
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
        <PostBodyDocsCollapseable collapsed={!uiState.visible} displayName={displayName} docType={docType} endpointId={endpointId} fieldType={item.fieldType} propertyName={name}>
            {uiState.visible ? Object.keys(item).filter((n) => n !== 'uiState' && n !== 'required' && item[n]).map((itemKey, i) => {
                return (<PostBodyDocsItem
                    displayName={itemKey}
                    docType={docType}
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
    isRoot: React.PropTypes.bool,
    item: React.PropTypes.object.isRequired,
    name: React.PropTypes.string.isRequired,
    uiState: React.PropTypes.shape({
        visible: React.PropTypes.bool
    })
};

export default PostBodyDocsItem;
