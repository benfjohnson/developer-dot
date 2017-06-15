const NUMAPIS = 2;
let expectedNumberOfApiEndpoints;

module.exports = {
    'before': function(browser) {
        browser.maximizeWindow();
    },

    'after': function(browser) {
        browser.end();
    },

    'API Reference: Excise v5.18.0 (verify number of endpoints)': function(browser) {
        expectedNumberOfApiEndpoints = 3;

        browser
            .initialize(browser.globals.baseURL + '/api-reference/excise/5_18_0/methods/login/')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);
    },
    'API Reference: Excise v5.22.0 (verify number of endpoints)': function(browser) {
        expectedNumberOfApiEndpoints = 3;

        browser
            .initialize(browser.globals.baseURL + '/api-reference/excise/5_22_0/methods/processTransactions/')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);
    }
};
