module.exports = {
    'before': function(browser) {
        browser.maximizeWindow();
    },

    'after': function(browser) {
        browser.end();
    },

    'Test Oauth Flow': function(browser) {
        const endpointUrl = `${browser.globals.baseURL}/api-reference/avatax/rest/v2/methods/Addresses/ResolveAddressPost/`;

        browser
            .initialize(endpointUrl)

            .execute("document.querySelector('.endpoint-summary .endpoint-header button').style.display = 'block';")
            .navigateToUrl('.endpoint-summary .endpoint-header button', '.login-page', /^https:\/\/ai-ci\.avlr\.sh/)

            .setValue('#Username', process.env.OAUTH_EMAIL)
            .setValue('#Password', process.env.OAUTH_PASSWORD)
            .navigateToUrl('#loading', '.endpoint-summary', endpointUrl);

        browser
            .execute("document.querySelector('.endpoint-summary .endpoint-header span').style.display = 'block';")
            .expect.element('.endpoint-summary .endpoint-header span span').text.to.contain('regression admin');
        browser
            .expect.element('.endpoint-summary .endpoint-header button').text.to.contain('Logout');
        browser
            .navigateTo('.endpoint-summary .endpoint-header button');

        browser
            .execute("document.querySelector('.endpoint-summary .endpoint-header button').style.display = 'block';")
            .expect.element('.endpoint-summary .endpoint-header button').text.to.contain('Authorize');
    }
};
