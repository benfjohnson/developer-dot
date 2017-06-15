exports.assertion = function elementNumTimes(selector, expected, messageType) {
    const messages = {
        'endpoint-summary': `expect element ${selector} to appear ${expected} number of times`,
        'navigationBar': `expect navbar to have ${expected} links/sublinks`,
        'enums': `expect enum to have ${expected} possible values`
    };

    this.message = messages[messageType] || messageType;

    this.expected = expected;

    this.pass = function(value) {
        return value === expected;
    };

    this.value = function(result) {
        return result.value.length;
    };

    this.command = function(callback) {
        return this.api.elements('css selector', selector, callback);
    };
};
