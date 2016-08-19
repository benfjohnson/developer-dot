/* Component to render an API description, request, and response (if any) */

import React from 'react';

const highlightPunctuation = (str) => {
    return str.replace(/"[^"]*"|([{}\[\],])/g, (m, group1) => {
        if (!group1) {
            return m;
        }

        return '<span class="punctuation">' + m + '</span>';
    });
};
const syntaxHighlight = (jsonObj) => {
    let json = JSON.stringify(jsonObj, null, 2);

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
        return '<span class="' + cls + '">' + match + '</span>';
    });

    return highlightPunctuation(json);
};

const ConsoleLiveData = ({endpoint}) => {
    return (
        <div>
            <h5 className={'console-output-header'}>{'API Endpoint'}</h5>
                <div className={'code-snippet-plaintext'}>{endpoint.path}</div>
                <h5 className={'console-output-header'}>{'Method'}</h5>
                <div className={'code-snippet-plaintext'}>{endpoint.action.toUpperCase()}</div>
                    {endpoint.pathParams || endpoint.queryString || endpoint.postBody ?
                    <div className={'row'} style={{marginBottom: '8px'}}>
                        <div className={'col-md-6 console-req-container'}>
                            <h5 className={'console-output-header'}>{'Request'}</h5>
                            {/* eslint-disable react/no-danger */}
                            {endpoint.postBodyData ? <div className={'code-snippet'}><pre dangerouslySetInnerHTML={{__html: endpoint.postBodyData ? syntaxHighlight(endpoint.postBodyData) : ' '}}></pre></div> : <div className={'code-snippet code-snippet-code-text'}>{endpoint.curl}</div>}
                        </div>
                        <div className={'col-md-6 console-res-container'}>
                            <h5 className={'console-output-header'}>{'Response'}</h5>
                            <div className={'code-snippet'}><pre dangerouslySetInnerHTML={{__html: endpoint.apiResponse ? syntaxHighlight(endpoint.apiResponse.body) : ' '}}></pre></div>
                        </div>
                    </div> :
                    <div>
                        <h5 className={'console-output-header'}>{'Response'}</h5>
                        <div className={'code-snippet'}><pre dangerouslySetInnerHTML={{__html: endpoint.apiResponse ? syntaxHighlight(endpoint.apiResponse.body) : ' '}}></pre></div>
                        {/* eslint-enable react/no-danger */}
                    </div>
                    }
                <div style={{background: 'blue', height: 'auto'}}></div>
        </div>
    );
};

ConsoleLiveData.displayName = 'Console Live Data';
ConsoleLiveData.propTypes = {
    endpoint: React.PropTypes.object.isRequired
};

export default ConsoleLiveData;
