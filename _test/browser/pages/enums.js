const enumSummary = {
    elements: {
        description: 'main h2#description + p',
        enumType: 'main h5',
        valueTable: 'main table tbody tr'
    },

    commands: [
        {
            pageIsValid: function(attrName, enumType, desc, numValues) {
                return this
                    .assert.containsText('h1', attrName)
                    .assert.containsText('@enumType', enumType)
                    .assert.containsText('@description', desc)
                    .assert.elementNumTimes('@valueTable', numValues, 'enums');
            }
        }
    ]
};

module.exports = enumSummary;
