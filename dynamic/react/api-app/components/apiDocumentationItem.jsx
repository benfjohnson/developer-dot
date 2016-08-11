import React from 'react';
import ReactMarkdown from 'react-markdown';

import ApiDocumentationHeader from './apiDocumentationHeader';

const ApiDocumentationItem = ({documentationFor, name, item, isArray = false, nestingLevel, onToggleDocCollapse, endpointId, uiState, displayName, isRoot = false}) => {
    if (item.fieldType && item.fieldType !== 'array') {
        // return (
        //     <div className={'row documentation-parameter-body'}>
        //         <div className={'col-md-2 api-doc-left-col'}><div className={'api-doc-parameter-name s5'} title={displayName}>{displayName}</div>{item.required ? <div className='t2 small-required-text'>{'Required'}</div> : null}</div>
        //         <div className={'col-md-8 t1'}><ReactMarkdown source={item.description || ''} /></div>
        //         <div className={'col-md-2 t3'}>{`${isArray ? 'Array[' : ''}${item.fieldType}${isArray ? ']' : ''}`}</div>
        //     </div>
        // );

        return (
            <div className={'documentation-parameter-body'}>
                <div><div className={'api-doc-parameter-name s5'} title={displayName}>{displayName}</div>{item.required ? <div className='t2 small-required-text'>{'Required'}</div> : null}</div>
                <div className={'t1'}><ReactMarkdown source={item.description || ''} /></div>
                <div className={'t3'}>{`${isArray ? 'Array[' : ''}${item.fieldType}${isArray ? ']' : ''}`}</div>
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
                    isRoot={isRoot}
                    item={item.items}
                    name={`${name ? name + ':' : ''}items`}
                    nestingLevel={nestingLevel}
                    onToggleDocCollapse={onToggleDocCollapse}
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
                            nestingLevel={nestingLevel + 1}
                            onToggleDocCollapse={onToggleDocCollapse}
                            uiState={item[itemKey].uiState}
                        />
                    );
                })}
            </div>
        );
    }

    return (
        <ApiDocumentationHeader displayName={displayName} documentationFor={documentationFor} endpointId={endpointId} isArray={isArray} nestingLevel={nestingLevel} onToggleDocCollapse={onToggleDocCollapse} propertyName={name} uiState={uiState}>
            {Object.keys(item).filter((n) => n !== 'uiState' && n !== 'required' && item[n]).map((itemKey, i) => {
                return (<ApiDocumentationItem
                    displayName={itemKey}
                    documentationFor={documentationFor}
                    endpointId={endpointId}
                    item={item[itemKey]}
                    itemName={itemKey}
                    key={i}
                    name={`${name ? name + ':' : ''}` + itemKey}
                    nestingLevel={nestingLevel + 1}
                    onToggleDocCollapse={onToggleDocCollapse}
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
    isRoot: React.PropTypes.bool,
    item: React.PropTypes.object.isRequired,
    name: React.PropTypes.string.isRequired,
    nestingLevel: React.PropTypes.number.isRequired,
    onToggleDocCollapse: React.PropTypes.func.isRequired,
    uiState: React.PropTypes.shape({
        visible: React.PropTypes.bool
    })
};

export default ApiDocumentationItem;
