const NUMAPIS = 3;
let expectedNumberOfApiEndpoints;

module.exports = {
    'before': function(browser) {
        browser.maximizeWindow();
    },

    'after': function(browser) {
        browser.end();
    },

    'API Reference: TrustFile: Core (verify number of endpoints)': function(browser) {
        expectedNumberOfApiEndpoints = 4;

        browser
            .initialize(browser.globals.baseURL + '/api-reference/trustfile/api/methods/GetItems/')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);
    },
    'API Reference: TrustFile: Provisioning (verify number of endpoints)': function(browser) {
        expectedNumberOfApiEndpoints = 3;

        browser
            .initialize(browser.globals.baseURL + '/api-reference/trustfile/app/methods/PostCompanySignup/')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);
    },
    'API Reference: TrustFile: Connector (verify number of endpoints)': function(browser) {
        expectedNumberOfApiEndpoints = 14;

        browser
            .initialize(browser.globals.baseURL + '/api-reference/trustfile/connector-microservice/methods/GetConnections/')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);
    }

};
