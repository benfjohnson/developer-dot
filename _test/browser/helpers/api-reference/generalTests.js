const nav = {
    APIS: '#the-nav .api-ref-side-nav > li',
    TAGS: '#the-nav .api-ref-side-nav ul.sub-nav > li',
    SUBTAGS: '#the-nav .api-ref-side-nav ul.sub-nav > div li',
    check: function(verify, val) {
        return function(element) {
            verify.equal(element.value.length, val, `expect navbar to have ${val} links/sublinks`);
        };
    }
};

module.exports = {
    nav
};
