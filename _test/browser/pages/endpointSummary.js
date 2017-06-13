const endpointSummary = {
    elements: {
        'summary': '.endpoint-summary',
        'requestConsole': '.console-req-container .code-snippet',
        'responseConsole': '.console-res-container .code-snippet',
        'responseConsole-GET': '.api-console-output .code-snippet',
        'consoleText': 'span:first-of-type'
    },

    commands: [
        {
            getConsoleText: function(method, type, callback) {
                const consoleBody = `#${method}-console-body ${this.elements[type].selector}`;
                const firstText = `${consoleBody} ${this.elements.consoleText.selector}`;

                this
                    .waitForElementVisible(firstText, this.api.globals.waitTime)
                    .api.getText(consoleBody, function(res) {
                        const response = JSON.parse(res.value);

                        response.Timestamp = undefined;
                        response.date = undefined;
                        callback(response);
                    });

                return this;
            }
        }
    ]
};

module.exports = endpointSummary;
