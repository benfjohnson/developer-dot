import React from 'react';

import ApiDocumentationHeader from './apiDocumentationHeader';

const ApiDocumentationItem = ({documentationFor, name, item, isArray = false, isNested = false, endpointId, uiState, displayName, isRoot = false}) => {
    if (item.fieldType && item.fieldType !== 'array') {
        return (
            <div className={'row documentation-parameter-body'}>
                <div className={'col-md-2 api-doc-left-col'}><div className={'api-doc-parameter-name'}>{displayName}</div>{item.required ? <div className='small-required-text'>{'Required'}</div> : null}</div>
                <div className={'col-md-8'}>{item.description}</div>
                <div className={'col-md-2'}>{`${isArray ? 'Array[' : ''}${item.fieldType}${isArray ? ']' : ''}`}</div>
            </div>
        );
    }

    if (item.fieldType === 'array') {
        return (
            <ApiDocumentationItem
                    displayName={displayName}
                    documentationFor={documentationFor}
                    endpointId={endpointId}
                    isArray={true}
                    isNested={isNested}
                    isRoot={isRoot}
                    item={item.items}
                    name={`${name ? name + ':' : ''}items`}
                    uiState={item.items.uiState || {visible: true}}
            />
        );
    }

    // Don't want root of 'try it out' to be collapseable!
    if (isRoot) {
        return (
            <div>
                {Object.keys(item).filter((n) => n !== 'uiState' && n !== 'required' && item[n]).map((itemKey, i) => {
                    return (
                        <ApiDocumentationItem
                            displayName={itemKey}
                            documentationFor={documentationFor}
                            endpointId={endpointId}
                            item={item[itemKey]}
                            itemName={itemKey}
                            key={i}
                            name={`${name ? name + ':' : ''}${itemKey}`}
                            uiState={item[itemKey].uiState}
                        />
                    );
                })}
            </div>
        );
    }

    return (
        <ApiDocumentationHeader collapsed={!uiState.visible} displayName={displayName} documentationFor={documentationFor} endpointId={endpointId} isArray={isArray} isNested={isNested} propertyName={name}>
            {Object.keys(item).filter((n) => n !== 'uiState' && n !== 'required' && item[n]).map((itemKey, i) => {
                return (<ApiDocumentationItem
                    displayName={itemKey}
                    documentationFor={documentationFor}
                    endpointId={endpointId}
                    isNested={true}
                    item={item[itemKey]}
                    itemName={itemKey}
                    key={i}
                    name={`${name ? name + ':' : ''}` + itemKey}
                    uiState={item[itemKey].uiState}
                    />);
            })}
        </ApiDocumentationHeader>
    );
};

ApiDocumentationItem.displayName = 'Post Body Docs Item';
ApiDocumentationItem.propTypes = {
    displayName: React.PropTypes.string.isRequired,
    documentationFor: React.PropTypes.oneOf(['REQUEST', 'RESPONSE']),
    endpointId: React.PropTypes.number.isRequired,
    isArray: React.PropTypes.bool,
    isNested: React.PropTypes.bool,
    isRoot: React.PropTypes.bool,
    item: React.PropTypes.object.isRequired,
    name: React.PropTypes.string.isRequired,
    uiState: React.PropTypes.shape({
        visible: React.PropTypes.bool
    })
};

export default ApiDocumentationItem;
