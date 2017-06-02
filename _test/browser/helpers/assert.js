const _ = require('lodash');

/* home built solution in case lodash doesn't work out
 *
 * solution above also has advantage to tell you exactly
 * which fields are missing/incorrect whereas lodash only
 * gives you true/false
 */
function deepEqualVerbose(_a, _b) {
    if (Array.isArray(_a)) {
        _a.map((v, i) => deepEqualVerbose(_a[i], _b[i]));
    } else if (typeof _a === 'object' && Boolean(_a)) {
        Object.keys(_a).forEach((i) => deepEqualVerbose(_a[i], _b[i]));
    } else if (_a !== null && _a !== _b) {
        console.log(`${_a} !== ${_b}`); // eslint-disable-line no-console
    }
}

module.exports = {
    deepEqual: function(a, b) {
        const isEqual = _.isEqual(
            _(a).omitBy(_.isUndefined).omitBy(_.isNil).value(),
            _(b).omitBy(_.isUndefined).omitBy(_.isNil).value()
        );

        if (!isEqual) {
            deepEqualVerbose(a, b);
        }

        return isEqual;
    },
    deepEqualVerbose: deepEqualVerbose
};
