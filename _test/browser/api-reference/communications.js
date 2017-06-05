module.exports = {
    'baseURL': process.env.BASEURL ? process.env.BASEURL.replace(/\/$/, '') : 'http://localhost:4000',
    'waitTime': isNaN(parseInt(process.env.TIMEOUT, 10)) ? 5000 : parseInt(process.env.TIMEOUT, 10),
    'before': function() {
        /* eslint-disable no-console */
        console.log('WaitTime set to', this.waitTime);
        console.log('BaseURL set to', this.baseURL);
        /* eslint-enable no-console */
    },

    'API Reference: Communications: SOAP (verify number of endpoints)': function(browser) {
        const expectedNumberOfApiEndpoints = 41;

        browser
            .maximizeWindow()
            .url(this.baseURL + '/communications/api-reference/saas/soap/')
            .waitForElementVisible('[data-reactroot]', this.waitTime)

            .elements('css selector', '.endpoint-summary', function(result) {
                /* eslint-disable no-invalid-this */
                this.assert.equal(result.value.length, expectedNumberOfApiEndpoints, 'expected ' + expectedNumberOfApiEndpoints + ' endpoints, received ' + result.value.length);
                /* eslint-enable no-invalid-this */
            })
            .end();
    },
    'API Reference: Communications: Geocoding SOAP (verify number of endpoints)': function(browser) {
        const expectedNumberOfApiEndpoints = 4;

        browser
            .maximizeWindow()
            .url(this.baseURL + '/communications/api-reference/geocode/soap/')
            .waitForElementVisible('[data-reactroot]', this.waitTime)

            .elements('css selector', '.endpoint-summary', function(result) {
                /* eslint-disable no-invalid-this */
                this.assert.equal(result.value.length, expectedNumberOfApiEndpoints, 'expected ' + expectedNumberOfApiEndpoints + ' endpoints, received ' + result.value.length);
                /* eslint-enable no-invalid-this */
            })
            .end();
    }
};
