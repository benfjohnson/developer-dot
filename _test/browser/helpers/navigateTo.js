exports.command = function navigateTo(page) {
    return this.waitForElementVisible(page).click(page);
};
