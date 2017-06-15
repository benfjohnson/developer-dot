const NUMAPIS = 3;
let expectedNumberOfApiEndpoints;

module.exports = {
    'before': function(browser) {
        browser.maximizeWindow();
    },

    'after': function(browser) {
        browser.end();
    },

    'API Reference: Communications: SOAP (verify number of endpoints)': function(browser) {
        expectedNumberOfApiEndpoints = 41;

        browser
            .initialize(browser.globals.baseURL + '/api-reference/communications/afc/methods/CalcAdjWithFipsCode/')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);
    },
    'API Reference: Communications: Geocoding SOAP (verify number of endpoints)': function(browser) {
        expectedNumberOfApiEndpoints = 4;

        browser
            .initialize(browser.globals.baseURL + '/api-reference/communications/afc-geo/methods/GeocodeLatLong/')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);
    },
    'API Reference: Communications: REST (verify number of endpoints)': function(browser) {
        expectedNumberOfApiEndpoints = 28;

        browser
            .initialize(browser.globals.baseURL + '/api-reference/communications/afc-rest/methods/ApiV1CalculateAdjustmentsPost/')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);
    }
};
