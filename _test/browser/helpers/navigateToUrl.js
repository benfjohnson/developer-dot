exports.command = function navigateToUrl(selector, endpointIndicator, endpointUrl) {
    return this
        .navigateTo(selector)
        .waitForElementVisible(endpointIndicator)
        .url(function(url) {
            /* eslint-disable no-invalid-this */
            this.assert.equal(decodeURI(url.value), decodeURI(endpointUrl));
            /* eslint-disable no-invalid-this */
        });
};
