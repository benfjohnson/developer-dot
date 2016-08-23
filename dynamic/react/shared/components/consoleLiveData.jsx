/* Component to render a simple API description, request, and response */
/* Features dark color scheme and JSON syntax highlighting             */

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

const ConsoleLiveData = ({action, path, request, response}) => {
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
                            {typeof request === 'object' || Array.isArray(request) ? <div className={'code-snippet'}><pre dangerouslySetInnerHTML={{__html: syntaxHighlight(request)}}></pre></div> : <div className={'code-snippet code-snippet-code-text'}>{request}</div>}
                        </div>
                        <div className={'col-md-6 console-res-container'}>
                            <h5 className={'console-output-header'}>{'Response'}</h5>
                            <div className={'code-snippet'}><pre dangerouslySetInnerHTML={{__html: response ? syntaxHighlight(response.body) : ' '}}></pre></div>
                        </div>
                    </div> :
                    <div>
                        <h5 className={'console-output-header'}>{'Response'}</h5>
                        <div className={'code-snippet'}><pre dangerouslySetInnerHTML={{__html: response ? syntaxHighlight(response.body) : ' '}}></pre></div>
                        {/* eslint-enable react/no-danger */}
                    </div>
                    }
                <div style={{background: 'blue', height: 'auto'}}></div>
        </div>
    );
};

ConsoleLiveData.displayName = 'Console Live Data';
ConsoleLiveData.propTypes = {
    action: React.PropTypes.string.isRequired,
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
