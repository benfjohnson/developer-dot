import React from 'react';
import ExpanderIcon from './expanderIcon';

const getSectionHighlightFromNestingLevel = (nestingLevel) => {
    const nestedClass = 'doc-section-header-nested';

    switch (nestingLevel) {
    case 0:
        return `${nestedClass} doc-section-header-root`;
    case 1:
        return `${nestedClass} doc-section-header-nest-1`;
    case 2:
        return `${nestedClass} doc-section-header-nest-2`;
    case 3:
    default:
        return `${nestedClass} doc-section-header-nest-3`;
    }
};

/*
 * Defines a wrapper to nest object properties or
 * array items in a PostBody
 * */
const ApiDocumentationHeader = ({documentationFor, endpointId, isArray, nestingLevel, propertyName, displayName, uiState, children}) => {
    const style = nestingLevel > 1 ? {} : {marginTop: '10px', marginBottom: '10px'};

    return (
        <div className={'documentation-collapseable-section'} style={style}>
            <div className={`row api-documentation-section-header ${getSectionHighlightFromNestingLevel(nestingLevel)}`} data-target={`#${endpointId}-${documentationFor}-${propertyName.replace(/:/g, '')}`} data-toggle={'collapse'} onClick={() => {
                $(`#${endpointId}-${documentationFor}-${propertyName.replace(/:/g, '')}-icon`).toggleClass('rotate');
                const intervalId = setInterval(() => {
                    $('#the-nav').affix('checkPosition');
                }, 20);

                setTimeout(() => clearInterval(intervalId), 350);
            }}>
                <div className={'col-md-11 col-xs-10'}>
                    <span className={'api-doc-parameter-name'}>{`${isArray ? 'Array[' : ''}${displayName.charAt(0).toUpperCase() + displayName.slice(1)}${isArray ? ']' : ''}`}</span>
                </div>
                <div className={'col-md-1 col-xs-2 documentation-expand-icon'} id={`${endpointId}-${documentationFor}-${propertyName.replace(/:/g, '')}-icon`}>
                        <ExpanderIcon startPosition={'UP'} />
                </div>
            </div>
            <div>
            </div>
            <div className={'collapse in'} id={`${endpointId}-${documentationFor}-${propertyName.replace(/:/g, '')}`}>
            {children}
            </div>
        </div>
    );
};

ApiDocumentationHeader.displayName = 'Post Item Section Header';
ApiDocumentationHeader.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.array
    ]),
    collapsed: React.PropTypes.bool,
    displayName: React.PropTypes.string.isRequired,
    documentationFor: React.PropTypes.oneOf(['REQUEST', 'RESPONSE']),
    endpointId: React.PropTypes.number.isRequired,
    isArray: React.PropTypes.bool.isRequired,
    nestingLevel: React.PropTypes.number.isRequired,
    propertyName: React.PropTypes.string.isRequired,
    uiState: React.PropTypes.shape({
        visible: React.PropTypes.bool
    })
};

export default ApiDocumentationHeader;
