const {nav} = require('../helpers/api-reference/generalTests');

const NUMAPIS = 3;

module.exports = {
    'baseURL': process.env.BASEURL ? process.env.BASEURL.replace(/\/$/, '') : 'http://localhost:4000',
    'waitTime': isNaN(parseInt(process.env.TIMEOUT, 10)) ? 5000 : parseInt(process.env.TIMEOUT, 10),
    'before': function(browser) {
        /* eslint-disable no-console */
        console.log('WaitTime set to', this.waitTime);
        console.log('BaseURL set to', this.baseURL);
        /* eslint-enable no-console */
        browser.maximizeWindow();
    },

    'after': function(browser) {
        browser.end();
    },

    'API Reference: TrustFile: Core (verify number of endpoints)': function(browser) {
        const expectedNumberOfApiEndpoints = 3;

        browser
            .url(this.baseURL + '/api-reference/trustfile/api/methods/GetItems/')
            .waitForElementVisible('[data-reactroot]', this.waitTime)

            .elements('css selector', '.endpoint-summary', function(result) {
                /* eslint-disable no-invalid-this */
                this.assert.equal(result.value.length, 1, 'expected 1 endpoints, received ' + result.value.length);
                /* eslint-enable no-invalid-this */
            })
            .elements('css selector', nav.APIS, nav.check(browser.verify, NUMAPIS))
            .elements('css selector', nav.TAGS, nav.check(browser.verify, expectedNumberOfApiEndpoints));
    },
    'API Reference: TrustFile: Provisioning (verify number of endpoints)': function(browser) {
        const expectedNumberOfApiEndpoints = 1;

        browser
            .url(this.baseURL + '/api-reference/trustfile/app/methods/PostCompanySignup/')
            .waitForElementVisible('[data-reactroot]', this.waitTime)

            .elements('css selector', '.endpoint-summary', function(result) {
                /* eslint-disable no-invalid-this */
                this.assert.equal(result.value.length, 1, 'expected 1 endpoints, received ' + result.value.length);
                /* eslint-enable no-invalid-this */
            })
            .elements('css selector', nav.APIS, nav.check(browser.verify, NUMAPIS))
            .elements('css selector', nav.TAGS, nav.check(browser.verify, expectedNumberOfApiEndpoints));
    },
    'API Reference: TrustFile: Connector (verify number of endpoints)': function(browser) {
        const expectedNumberOfApiEndpoints = 13;

        browser
            .url(this.baseURL + '/api-reference/trustfile/connector-microservice/methods/GetConnections/')
            .waitForElementVisible('[data-reactroot]', this.waitTime)

            .elements('css selector', '.endpoint-summary', function(result) {
                /* eslint-disable no-invalid-this */
                this.assert.equal(result.value.length, 1, 'expected 1 endpoints, received ' + result.value.length);
                /* eslint-enable no-invalid-this */
            })
            .elements('css selector', nav.APIS, nav.check(browser.verify, NUMAPIS))
            .elements('css selector', nav.TAGS, nav.check(browser.verify, expectedNumberOfApiEndpoints));
    }

};
