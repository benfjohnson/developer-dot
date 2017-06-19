const deepEqual = require('../helpers/deepEqual');

module.exports = {
    'before': function(browser) {
        /* eslint-disable no-console */
        console.log('WaitTime set to');
        console.log('BaseURL set to', browser.globals.baseURL);
        /* eslint-enable no-console */
        browser.maximizeWindow();
    },

    'after': function(browser) {
        browser.end();
    },

    'Get Started: AvaTax (verify number of endpoints)': function(browser) {
        const expectedNumberOfApiEndpoints = 2;

        browser
            .initialize(browser.globals.baseURL + '/avatax/get-started/')

            .elements('css selector', '[role=tab]', function(result) {
                /* eslint-disable no-invalid-this */
                this.verify.equal(result.value.length, expectedNumberOfApiEndpoints, 'expected ' + expectedNumberOfApiEndpoints + ' endpoints, received ' + result.value.length);
                /* eslint-enable no-invalid-this */
            });
    },
    'Get Started: AvaTax (verify tabs)': function(browser) {
        browser
            .initialize(browser.globals.baseURL + '/avatax/get-started/')

            .waitForElementVisible('#CalculateTaxtab')
            .click('#CalculateTaxtab')
            .waitForElementVisible('#CalculateTax .console-output-header+.code-snippet-plaintext')
            .getText('#CalculateTax .console-output-header+.code-snippet-plaintext', function(req) {
                /* eslint-disable no-invalid-this */
                this.verify.equal(req.value, 'https://sandbox-rest.avatax.com/api/v2/transactions/create');
                /* eslint-enable no-invalid-this */
            })

            .waitForElementVisible('#ValidateanAddresstab')
            .click('#ValidateanAddresstab')
            .waitForElementVisible('#ValidateanAddress .console-output-header+.code-snippet-plaintext')
            .getText('#ValidateanAddress .console-output-header+.code-snippet-plaintext', function(req) {
                /* eslint-disable no-invalid-this */
                this.verify.equal(req.value, 'https://sandbox-rest.avatax.com/api/v2/addresses/resolve');
                /* eslint-enable no-invalid-this */
            });
    },
    'Get Started: AvaTax (ValidateanAddress, fill sample data)': function(browser) {
        const expectedResponseValidateAnAddress = {address: {line1: '123 Main Street', city: 'Irvine', region: 'CA', country: 'US', postalCode: '92615'}, validatedAddresses: [{addressType: 'UnknownAddressType', line1: '123 Main Street', line2: '', line3: '', city: 'Irvine', region: 'CA', country: 'US', postalCode: '92615', latitude: 33.657808, longitude: -117.968489}], coordinates: {latitude: 33.657808, longitude: -117.968489}, resolutionQuality: 'NotCoded', messages: [{summary: 'The address is not deliverable.', details: 'The physical location exists but there are no homes on this street. One reason might be railroad tracks or rivers running alongside this street, as they would prevent construction of homes in this location.', refersTo: 'Address', severity: 'Error', source: 'Avalara.AvaTax.Services.Address'}]};

        browser
            .initialize(browser.globals.baseURL + '/avatax/get-started/')

            .waitForElementVisible('#ValidateanAddresstab')
            .click('#ValidateanAddresstab')
            .waitForElementVisible('#ValidateanAddress .console-output-header+.code-snippet-plaintext')
            .getText('#ValidateanAddress .console-output-header+.code-snippet-plaintext', function(req) {
                /* eslint-disable no-invalid-this */
                this.assert.equal(req.value, 'https://sandbox-rest.avatax.com/api/v2/addresses/resolve');
                /* eslint-enable no-invalid-this */
            })

            .click('#ValidateanAddress .fill-sample-data')
            .getText('#ValidateanAddress .console-req-container .code-snippet', function(req) {
                /* eslint-disable no-invalid-this */
                this.assert.equal(req.value, "curl -X GET -H 'Accept: application/json' -H 'Authorization: Basic aHR0cHdhdGNoOmY=' https://sandbox-rest.avatax.com/api/v2/addresses/resolve?line1=123 Main Street&city=Irvine®ion=CA&postalCode=92615&country=US");
                /* eslint-enable no-invalid-this */
            })

            .click('#ValidateanAddress .submit')
            .waitForElementVisible('#ValidateanAddress .console-res-container .code-snippet span:first-of-type')
            .getText('#ValidateanAddress .console-res-container .code-snippet', function(res) {
                /* eslint-disable no-invalid-this */
                const response = JSON.parse(res.value);

                this.verify.equal(JSON.stringify(response), JSON.stringify(expectedResponseValidateAnAddress));
                /* eslint-enable no-invalid-this */
            });
    },
    'Get Started: AvaTax (CalculateTax, fill sample data)': function(browser) {
        /* eslint-disable quotes */
        /* eslint-disable quote-props */
        const expectedRequestCalcTax = {"type": "SalesInvoice", "companyCode": "DEFAULT", "date": "2017-05-16", "customerCode": "ABC", "purchaseOrderNo": "2017-05-16-001", "addresses": {"singleLocation": {"line1": "123 Main Street", "city": "Irvine", "region": "CA", "country": "US", "postalCode": "92615"}}, "lines": [{"number": "1", "quantity": 1, "amount": 100, "taxCode": "PS081282", "itemCode": "Y0001", "description": "Yarn"}], "commit": true, "currencyCode": "USD", "description": "Yarn"};
        /* eslint-enable quotes */
        /* eslint-enable quote-props */

        browser
            .initialize(browser.globals.baseURL + '/avatax/get-started/')

            .waitForElementVisible('#CalculateTaxtab')
            .click('#CalculateTaxtab')
            .waitForElementVisible('#CalculateTax .console-output-header+.code-snippet-plaintext')
            .getText('#CalculateTax .console-output-header+.code-snippet-plaintext', function(req) {
                /* eslint-disable no-invalid-this */
                this.assert.equal(req.value, 'https://sandbox-rest.avatax.com/api/v2/transactions/create');
                /* eslint-enable no-invalid-this */
            })

            .click('#CalculateTax .fill-sample-data')
            .waitForElementVisible('#CalculateTax .console-req-container .code-snippet')
            .getText('#CalculateTax .console-req-container .code-snippet', function(req) {
                /* eslint-disable no-invalid-this */
                const request = JSON.parse(req.value);

                this.assert.ok(deepEqual(request, expectedRequestCalcTax),
                    "request for 'try it now' matches expected request");
                /* eslint-enable no-invalid-this */
            })

            .click('#CalculateTax .submit')
            .waitForElementVisible('#CalculateTax .console-res-container .code-snippet span:first-of-type')
            .getText('#CalculateTax .console-res-container .code-snippet', function(res) {
                /* eslint-disable no-invalid-this */
                const response = JSON.parse(res.value);

                /* id's of response change on every request, so it
                 * doesn't make sense to assert strictly
                 */
                this.assert.ok(Object.keys(response).length > 10,
                    'substantial amount of keys (> 10) in response json');
                /* eslint-enable no-invalid-this */
            });
    }
};
