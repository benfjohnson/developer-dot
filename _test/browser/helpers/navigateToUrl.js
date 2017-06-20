exports.command = function navigateToUrl(selector, endpointIndicator, endpointUrl) {
    return this
        .navigateTo(selector)
        .waitForElementVisible(endpointIndicator)
        .url((url) => {
            if (endpointUrl instanceof RegExp) {
                this.expect(url.value).to.match(endpointUrl);
            } else {
                this.assert.equal(decodeURI(url.value), decodeURI(endpointUrl));
            }
        });
};
