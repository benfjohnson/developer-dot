/* (String, HashMap<String, String>) -> String
 * Replaces {}-delimited placeholder values in a string with their equiv values
 * from a key-value reference object
 */
const replaceStringPlaceholders = (path, map = {}) => {
    return Object.keys(map).reduce((accum, key) => {
        return map[key] ? accum.replace(`{${key}}`, map[key]) : accum;
    }, path);
};

/* (HashMap<String, String>) -> String
 * Given a key-value store, builds a URL query string
 * Returns an empty string if invalid map provided
 */
const buildQueryString = (map = {}) => {
    const queryString = Object.keys(map).map((key) => map[key] ? `${key}=${map[key]}` : '').filter((keyValStr) => keyValStr !== '').join('&');

    return queryString ? `?${queryString}` : '';
};

export {replaceStringPlaceholders, buildQueryString};
