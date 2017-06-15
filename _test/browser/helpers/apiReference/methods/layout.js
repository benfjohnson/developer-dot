exports.command = function navigateTo(NUMAPIS, expectedNumberOfApiEndpoints) {
    this.page.endpointSummary()
        .assert.elementNumTimes('@summary', 1, 'endpoint-summary');

    this.page.navigationBar()
        .assert.elementNumTimes('@apis', NUMAPIS, 'navigationBar')
        .assert.elementNumTimes('@tags', expectedNumberOfApiEndpoints, 'navigationBar');
};
