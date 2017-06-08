const assert = require('../helpers/assert');
const {nav} = require('../helpers/api-reference/generalTests');

const NUMAPIS = 6;

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

    'API Reference: AvaTax: REST v1 (getTax fill sample data)': function(browser) {
        /* eslint-disable quotes */
        /* eslint-disable quote-props */
        const expectedRequest = {"Commit": "false", "Client": "AvaTaxSample", "CompanyCode": "CINC", "CustomerCode": "ABC4335", "DocCode": "INV001", "DocType": "SalesOrder", "DocDate": "2014-01-01", "Addresses": [{"AddressCode": "01", "Line1": "45 Fremont Street", "Line2": "Suite 100", "Line3": "ATTN Accounts Payable", "City": "Chicago", "Region": "IL", "Country": "US", "PostalCode": "60602"}], "Lines": [{"LineNo": "1", "DestinationCode": "01", "OriginCode": "02", "ItemCode": "N543", "TaxCode": "NT", "Description": "Red Size 7 Widget", "Qty": "1", "Amount": "10"}]};
        const expectedResponse = {"DocCode": "INV001", "DocDate": "2014-01-01", "TotalAmount": "10", "TotalDiscount": "0", "TotalExemption": "10", "TotalTaxable": "0", "TotalTax": "0", "TotalTaxCalculated": "0", "TaxDate": "2014-01-01", "TaxLines": [{"LineNo": "1", "TaxCode": "NT", "Taxability": "true", "BoundaryLevel": "Zip5", "Taxable": "0", "Rate": "0", "Tax": "0", "Discount": "0", "TaxCalculated": "0", "Exemption": "10", "TaxDetails": [{"Taxable": "0", "Rate": "0", "Tax": "0", "Region": "IL", "Country": "US", "JurisType": "State", "JurisName": "ILLINOIS", "JurisCode": "17", "TaxName": "IL STATE TAX"}]}], "TaxAddresses": [{"Address": "45 Fremont Street", "AddressCode": "01", "City": "Chicago", "Country": "US", "PostalCode": "60602", "Region": "IL", "TaxRegionId": "2062953", "JurisCode": "1703114000", "Latitude": "41.882906", "Longitude": "-87.629388"}], "ResultCode": "Success"};
        /* eslint-enable quotes */
        /* eslint-enable quote-props */

        const expectedNumberOfApiEndpoints = 4;

        browser
            .url(this.baseURL + '/api-reference/avatax/rest/v1/methods/getTax/')
            .waitForElementVisible('[data-reactroot]', this.waitTime)

            .waitForElementVisible('#getTax-console', this.waitTime)
            .click('#getTax-console')
            .waitForElementVisible('#getTax-console-body', this.waitTime)

            .click('#getTax-console-body .fill-sample-data')
            .waitForElementVisible('#getTax-console-body .console-req-container .code-snippet span:first-of-type', this.waitTime)
            .getText('#getTax-console-body .console-req-container .code-snippet', function(req) {
                /* eslint-disable no-invalid-this */
                const request = JSON.parse(req.value);

                this.assert.ok(assert.deepEqual(request, expectedRequest),
                    "request for 'try it now' matches expected request");
                /* eslint-enable no-invalid-this */
            })

            .click('#getTax-console-body .submit')
            .waitForElementVisible('#getTax-console-body .console-res-container .code-snippet span:first-of-type', this.waitTime)
            .getText('#getTax-console-body .console-res-container .code-snippet', function(res) {
                /* eslint-disable no-invalid-this */
                const response = JSON.parse(res.value);

                response.Timestamp = undefined;
                this.assert.ok(assert.deepEqual(response, expectedResponse),
                    "response for 'try it now' matches expected response");
                /* eslint-enable no-invalid-this */
            })

            .elements('css selector', '.endpoint-summary', function(result) {
                /* eslint-disable no-invalid-this */
                this.assert.equal(result.value.length, 1, 'expected 1 endpoints, received ' + result.value.length);
                /* eslint-enable no-invalid-this */
            })
            .elements('css selector', nav.APIS, nav.check(browser.verify, NUMAPIS))
            .elements('css selector', nav.TAGS, nav.check(browser.verify, expectedNumberOfApiEndpoints));
    },
    'API Reference: AvaTax: REST v2 (verify number of endpoints)': function(browser) {
        // NOTE: THESE NOW ALL EXIST ON SUB 'TAG' PAGES
        const expectedNumberOfApiEndpoints = 26;

        browser
            .url(this.baseURL + '/api-reference/avatax/rest/v2/methods/Accounts/AccountResetLicenseKey/')
            .waitForElementVisible('[data-reactroot]', this.waitTime)

            .elements('css selector', '.endpoint-summary', function(result) {
                /* eslint-disable no-invalid-this */
                this.verify.equal(result.value.length, 1, 'expected 1 endpoints, received ' + result.value.length);
                /* eslint-enable no-invalid-this */
            })
            .elements('css selector', nav.APIS, nav.check(browser.verify, NUMAPIS))
            .elements('css selector', nav.TAGS, nav.check(browser.verify, expectedNumberOfApiEndpoints))
            .elements('css selector', nav.SUBTAGS, nav.check(browser.verify, expectedNumberOfApiEndpoints + 5));
    },
    'API Reference: AvaTax: SOAP (verify number of endpoints)': function(browser) {
        const expectedNumberOfApiEndpoints = 11;

        browser
            .url(this.baseURL + '/api-reference/avatax/soap/methods/postTax/')
            .waitForElementVisible('[data-reactroot]', this.waitTime)

            .elements('css selector', '.endpoint-summary', function(result) {
                /* eslint-disable no-invalid-this */
                this.verify.equal(result.value.length, 1, 'expected 1 endpoints, received ' + result.value.length);
                /* eslint-enable no-invalid-this */
            })
            .elements('css selector', nav.APIS, nav.check(browser.verify, NUMAPIS))
            .elements('css selector', nav.TAGS, nav.check(browser.verify, expectedNumberOfApiEndpoints));
    },
    'API Reference: AvaTax: BatchSvc SOAP (verify number of endpoints)': function(browser) {
        const expectedNumberOfApiEndpoints = 9;

        browser
            .url(this.baseURL + '/api-reference/avatax/batch/soap/methods/batchFetch/')
            .waitForElementVisible('[data-reactroot]', this.waitTime)

            .elements('css selector', '.endpoint-summary', function(result) {
                /* eslint-disable no-invalid-this */
                this.verify.equal(result.value.length, 1, 'expected 1 endpoints, received ' + result.value.length);
                /* eslint-enable no-invalid-this */
            })
            .elements('css selector', nav.APIS, nav.check(browser.verify, NUMAPIS))
            .elements('css selector', nav.TAGS, nav.check(browser.verify, expectedNumberOfApiEndpoints));
    },
    'API Reference: AvaTax: AccountSvc SOAP (verify number of endpoints)': function(browser) {
        const expectedNumberOfApiEndpoints = 2;

        browser
            .url(this.baseURL + '/api-reference/avatax/account/soap/methods/isAuthorized/')
            .waitForElementVisible('[data-reactroot]', this.waitTime)

            .elements('css selector', '.endpoint-summary', function(result) {
                /* eslint-disable no-invalid-this */
                this.verify.equal(result.value.length, 1, 'expected 1 endpoints, received ' + result.value.length);
                /* eslint-enable no-invalid-this */
            })
            .elements('css selector', nav.APIS, nav.check(browser.verify, NUMAPIS))
            .elements('css selector', nav.TAGS, nav.check(browser.verify, expectedNumberOfApiEndpoints));
    },
    'API Reference: AvaTax: Onboarding (verify number of endpoints)': function(browser) {
        const expectedNumberOfApiEndpoints = 8;

        browser
            .url(this.baseURL + '/api-reference/onboarding/methods/getAccount/')
            .waitForElementVisible('[data-reactroot]', this.waitTime)

            .elements('css selector', '.endpoint-summary', function(result) {
                /* eslint-disable no-invalid-this */
                this.verify.equal(result.value.length, 1, 'expected 1 endpoints, received ' + result.value.length);
                /* eslint-enable no-invalid-this */
            })
            .elements('css selector', nav.APIS, nav.check(browser.verify, NUMAPIS))
            .elements('css selector', nav.TAGS, nav.check(browser.verify, expectedNumberOfApiEndpoints));
    }
};
