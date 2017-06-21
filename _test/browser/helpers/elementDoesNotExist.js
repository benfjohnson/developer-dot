exports.command = function elementDoesNotExist(selector) {
    return this.element('css selector', selector, (element) => {
        this.assert.equal(element.error,
            'An element could not be located on the page using the given search parameters.');
    });
};
