export default [
    {
        id: 0,
        action: 'post',
        path: 'https://development.avalara.net/1.0/tax/get',
        proxy: {
            route: 'https://swn36zl7ba.execute-api.us-west-2.amazonaws.com/prod/tax/get',
            key: {
                name: 'api-key',
                value: 'b24757b69083fa34d27a7d814ea3a59c'
            }
        },
        operationId: 'getTax',
        recipeName: 'Blah',
        recipeDescription: "You're a small business selling t-shirts in Chicago. How many are you selling, and for how much?",
        request: {
            postBody: {
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
                        Qty: '',
                        Amount: ''
                    }
                ]
            },
            queryString: null,
            pathParams: null
        },
        inputs: [
            {
                name: 'Quantity',
                description: 'How many Tshirts you sold',
                in: 'postBody',
                field: 'Lines:[0]:Qty',
                value: ''
            },
            {
                name: 'Amount',
                description: 'How much each Tshirt costs',
                in: 'postBody',
                field: 'Lines:[0]:Amount',
                value: ''
            }
        ]
    }
];
