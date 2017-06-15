exports.command = function navigateTo(url, endpointIndicator = '[data-reactroot]') {
    return this
        .url(url)
        .waitForElementVisible(endpointIndicator);
};
