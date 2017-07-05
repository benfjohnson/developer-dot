module.exports = {
    'before': function(browser) {
        browser.maximizeWindow();
    },

    'after': function(browser) {
        browser.end();
    },

    'Enums: REST v2: Methods - Query String': function(browser) {
        const methodURL = `${browser.globals.baseURL}/api-reference/avatax/rest/v2/methods/Addresses/ResolveAddress/`;
        const enumURL = `${browser.globals.baseURL}/api-reference/avatax/rest/v2/methods/Addresses/enums/ResolveAddress%20>%20textCase/`;
        const attr = 'textCase';

        browser
            .initialize(methodURL)
            .navigateToUrl(`.endpoint-summary a[href~="${attr}"]`, '.enum-summary', enumURL);

        browser.page.enums()
            .pageIsValid(attr, 'Query String Parameter - Enum', 'selectable text case for address validation', 2);

        browser
            .navigateToUrl('h1 a', '.endpoint-summary', methodURL);
    },

    'Enums: REST v2: Models - Request Body': function(browser) {
        const modelURL = `${browser.globals.baseURL}/api-reference/avatax/rest/v2/models/AccountModel/`;
        const enumURL = `${browser.globals.baseURL}/api-reference/avatax/rest/v2/models/enums/AccountStatusId/`;
        const attr = 'AccountStatusId';

        browser
            .initialize(modelURL, '.model-summary')
            .navigateToUrl(`.model-summary a[href="../enums/${attr}"]`, '.enum-summary', enumURL);

        browser.page.enums()
            .pageIsValid(attr, 'Request Body Parameter - Enum', 'The current status of this account.', 4)
            .getText('main table tbody tr:nth-child(2) td:nth-child(2)', function(element) {
                browser.assert.ok(element.value.length > 0);
            });
    },

    'Enums: REST v2: Methods - Path Parameter': function(browser) {
        const methodURL = `${browser.globals.baseURL}/api-reference/avatax/rest/v2/methods/Transactions/GetTransactionByCodeAndType/`;
        const enumURL = `${browser.globals.baseURL}/api-reference/avatax/rest/v2/methods/Transactions/enums/GetTransactionByCodeAndType%20>%20documentType/`;
        const attr = 'documentType';

        browser
            .initialize(methodURL, '.endpoint-summary')
            .navigateToUrl(`.endpoint-summary a[href~="${attr}"]`, '.enum-summary', enumURL);

        browser.page.enums()
            .pageIsValid(attr, 'URL Path Parameter - Enum', 'The transaction type to retrieve', 11);
    },

    'Enums: REST v1: Models - Path Parameter': function(browser) {
        const modelURL = `${browser.globals.baseURL}/api-reference/avatax/rest/v1/models/TaxDetail/`;
        const enumURL = `${browser.globals.baseURL}/api-reference/avatax/rest/v1/models/enums/TaxDetail%20>%20JurisType/`;
        const attr = 'JurisType';

        browser
            .initialize(modelURL, '.model-summary')
            .navigateToUrl(`.model-summary a[href~="${attr}"]`, '.enum-summary', enumURL);

        // description is not present on this page
        browser.page.enums()
            .assert.containsText('h1', attr)
            .assert.containsText('@enumType', 'Request Body Parameter - Enum')
            .assert.elementNumTimes('@valueTable', 5, 'enums')
            .api.element('css selector', 'main h2#description + p', function(element) {
                browser.assert.equal(element.error,
                    'An element could not be located on the page using the given search parameters.');
            });

        browser
            .navigateToUrl('h1 a', '.model-summary', modelURL);
    },

    'Enums: Landedcost: Model with sole property as enum': function(browser) {
        const modelURL = `${browser.globals.baseURL}/api-reference/landedcost/models/Source/`;
        const subModelURL = `${browser.globals.baseURL}/api-reference/landedcost/models/CountryList/`;
        const enumURL = `${browser.globals.baseURL}/api-reference/landedcost/models/enums/CountryList%20>%20CountryList/`;
        const attr = 'CountryList';

        browser
            .initialize(modelURL, '.model-summary')
            .navigateToUrl(`.model-summary a[href="../${attr}"]`, 'div#CountryList', subModelURL)
            .navigateToUrl(`.model-summary a[href~="${attr}"]`, '.enum-summary', enumURL);

        // description is not present on this page
        browser.page.enums()
            .assert.containsText('h1', attr)
            .assert.containsText('@enumType', 'Request Body Parameter - Enum')
            .assert.elementNumTimes('@valueTable', 57, 'enums')
            .api.element('css selector', 'main h2#description + p', function(element) {
                browser.assert.equal(element.error,
                    'An element could not be located on the page using the given search parameters.');
            });

        browser
            .navigateToUrl('h1 a', '.model-summary', subModelURL);
    }
};
