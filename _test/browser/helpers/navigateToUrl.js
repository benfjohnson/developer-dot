exports.command = function navigateToUrl(selector, endpointIndicator, endpointUrl) {
    return this
        .navigateTo(selector)
        // if EXTERNAL_HOST_WAITFOR is NaN it will default to
        //   waitForConditionTimeout defined in nightwatch globals.js
        .waitForElementVisible(endpointIndicator, parseInt(process.env.EXTERNAL_HOST_WAITFOR, 10))
        .url((url) => {
            if (endpointUrl instanceof RegExp) {
                this.expect(url.value).to.match(endpointUrl);
            } else {
                this.assert.equal(decodeURI(url.value), decodeURI(endpointUrl));
            }
        });
};
