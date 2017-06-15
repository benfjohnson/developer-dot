module.exports = {
    before: function(done) {
        if (process.env.BASEURL) {
            this.baseURL = process.env.BASEURL.replace(/\/$/, '');
        }

        if (!isNaN(parseInt(process.env.TIMEOUT, 10))) {
            this.waitForConditionTimeout = parseInt(process.env.TIMEOUT, 10);
        }

        done();
    }
};
