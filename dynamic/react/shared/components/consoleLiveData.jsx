/* Component to render a simple API description, request, and response
 * Features dark color scheme and JSON syntax highlighting
 * Note that the `highlightedFields` prop is optional and currently only used by the recipe app
 */

import React from 'react';
import R from 'ramda';

// TODO: Reuse the reducer version of this?
const getPropertyName = (name) => {
    if (name.indexOf('[') !== -1) {
        // accessing an array element
        const index = parseInt(name.substring(1, name.length - 1), 10);

        if (isNaN(index)) {
            throw new Error(`Bad call to accessPropertyByName in recipeForm.js\nExpected: [<int>]\nReceived: ${name}`);
        }
        return index;
    }

    return name;
};

const addHighlightPlaceholderToPostBody = (propertyPath, data) => {
    const propNameArray = propertyPath.split(':');
    const newData = {...data};
    let currDataSlice = newData;

    propNameArray.forEach((propName, i) => {
        /* Have to check if accessor is the last */
        if (i === propNameArray.length - 1) {
            // TODO: This may error if using an array of primitive values as recipe input
            // Maybe there's a better way? -BJ
            const highlightPropVal = currDataSlice[getPropertyName(propName)] + '__HIGHLIGHT__';

            delete currDataSlice[getPropertyName(propName)];
            currDataSlice[getPropertyName(propName) + '__HIGHLIGHT__'] = highlightPropVal;
        } else {
            currDataSlice = currDataSlice[getPropertyName(propName)];
        }
    });

    return newData;
};

const highlightPunctuation = (str) => {
    return str.replace(/"[^"]*"|([{}\[\],])/g, (m, group1) => {
        if (!group1) {
            return m;
        }

        return '<span class="punctuation">' + m + '</span>';
    });
};
const syntaxHighlight = (jsonObj, highlightedFields) => {
    // Need to prevent changes to our postBody we want to stringify don't affect actual postBody
    let JsonObjCopy = R.clone(jsonObj);

    if (highlightedFields) {
        // put highlight keyword in property name?
        highlightedFields.forEach((field) => {
            JsonObjCopy = addHighlightPlaceholderToPostBody(field, JsonObjCopy);
        });
    }

    let json = JSON.stringify(JsonObjCopy, null, 2);

    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    json = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
        let cls = 'number';

        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        // if we want to highlight this field, do so now
        if (/__HIGHLIGHT__/.test(match)) {
            return `<span class="${cls} highlighted-field">${match.replace('__HIGHLIGHT__', '')}</span>`;
        }
        return `<span class="${cls}">${match}</span>`;
    });
    return highlightPunctuation(json);
};

const ConsoleLiveData = ({action, highlightedFields, path, request, response}) => {
    return (
        <div>
            <h5 className={'console-output-header'}>{'API Endpoint'}</h5>
                <div className={'code-snippet-plaintext'}>{path}</div>
                <h5 className={'console-output-header'}>{'Method'}</h5>
                <div className={'code-snippet-plaintext'}>{action.toUpperCase()}</div>
                    {request ?
                        <div className={'row'} style={{marginBottom: '8px'}}>
                            <div className={'col-md-6 console-req-container'}>
                                <h5 className={'console-output-header'}>{'Request'}</h5>
                                {/* eslint-disable react/no-danger */}
                                {typeof request === 'object' || Array.isArray(request) ? <div className={'code-snippet'}><pre dangerouslySetInnerHTML={{__html: syntaxHighlight(request, highlightedFields)}} /></div> : <div className={'code-snippet code-snippet-code-text'}>{request}</div>}
                            </div>
                            <div className={'col-md-6 console-res-container'}>
                                <h5 className={'console-output-header'}>{'Response'}</h5>
                                <div className={'code-snippet'}><pre dangerouslySetInnerHTML={{__html: response ? syntaxHighlight(response.body) : ' '}} /></div>
                            </div>
                        </div> :
                        <div>
                            <h5 className={'console-output-header'}>{'Response'}</h5>
                            <div className={'code-snippet'}><pre dangerouslySetInnerHTML={{__html: response ? syntaxHighlight(response.body) : ' '}} /></div>
                            {/* eslint-enable react/no-danger */}
                        </div>
                    }
        </div>
    );
};

ConsoleLiveData.displayName = 'Console Live Data';
ConsoleLiveData.propTypes = {
    action: React.PropTypes.string.isRequired,
    highlightedFields: React.PropTypes.arrayOf(React.PropTypes.string),
    path: React.PropTypes.string.isRequired,
    /* Not required, as a GET might not require any input (e.g. LandedCost `validateCredentials` route) */
    request: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array, React.PropTypes.string]),
    /* Not required, as a blank response might visually indicate that a request hasn't been sent yet */
    response: React.PropTypes.shape({
        status: React.PropTypes.string.isRequired,
        statusMessage: React.PropTypes.string.isRequired,
        body: React.PropTypes.oneOfType([
            React.PropTypes.object, React.PropTypes.array
        ]).isRequired
    })
};

export default ConsoleLiveData;
