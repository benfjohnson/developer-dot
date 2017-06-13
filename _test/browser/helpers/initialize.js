exports.command = function navigateTo(url) {
    return this
        .url(url)
        .waitForElementVisible('[data-reactroot]');
};
