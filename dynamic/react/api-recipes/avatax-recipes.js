export default {
    getTax: {
        description: 'Blah blah blah you just completed a transaction in Chicago, IL. Choose the amount to calculate sales tax for.',
        sampleRequest: {
            CustomerCode: 'ABC4335',
            Addresses: [
                {
                    AddressCode: '01',
                    Line1: '45 Fremont Street',
                    City: 'Chicago',
                    Region: 'IL',
                    Country: 'US',
                    PostalCode: '60602'
                }
            ],
            Lines: [
                {
                    LineNo: '1',
                    DestinationCode: '01',
                    OriginCode: '02',
                    Qty: '1',
                    Amount: ''
                }
            ]
        },
        recipeSchema: {
            Lines: {
                fieldType: 'array',
                isExcluded: false,
                items: {
                    Amount: {
                        description: 'Total amount of item (extended amount, qty * unit price). If omitted, this value will default to 0',
                        example: '10',
                        fieldType: 'number',
                        isExcluded: false,
                        required: false
                    }
                }
            }
        }
    }
};
