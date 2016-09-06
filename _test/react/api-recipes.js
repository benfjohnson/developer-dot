/* eslint-env mocha */
import {expect} from 'chai';
import R from 'ramda';

import {actions} from '../../dynamic/react/api-recipes/actions';
import reducer from '../../dynamic/react/api-recipes/reducers/reducer';

describe('apiRecipes Actions', () => {
    describe('INPUT_CHANGED', () => {
        it('returns expected object', () => {
            const recipeId = 1;
            const inputName = 'inputName';
            const requestBody = 'requestBody';
            const newValue = 'newValue';
            const expectedAction = {
                type: 'INPUT_CHANGED',
                recipeId: recipeId,
                inputName: inputName,
                requestBody: requestBody,
                newValue: newValue
            };

            expect(actions.inputChange(recipeId, inputName, requestBody, newValue)).to.eql(expectedAction);
        });
    });
    describe('SUBMIT_REQUEST', () => {
        it('returns expected object', () => {
            const recipeId = 1;
            const responseBody = 'responseBody';
            const status = 'status';
            const statusMessage = 'statusMessage';
            const expectedAction = {
                type: 'SUBMIT_REQUEST',
                recipeId: recipeId,
                apiResponse: {
                    body: responseBody,
                    status: status,
                    statusMessage: statusMessage
                }
            };

            expect(actions.submitRequest(recipeId, responseBody, status, statusMessage)).to.eql(expectedAction);
        });
    });
});

describe('apiRecipes Reducer', () => {
    describe('Default', () => {
        it('Returns default state', () => {
            expect(reducer([], {type: 'unknown'})).to.eql([]);
        });
    });
    describe('INPUT_CHANGED', () => {
        it('returns expected state', () => {
            /* eslint-disable quotes */
            /* eslint-disable quote-props */
            const action = {
                "type": "INPUT_CHANGED",
                "recipeId": 1,
                "inputName": "Sale Amount ($)",
                "requestBody": {
                    "postBody": null,
                    "queryString": {
                        "saleamount": ""
                    },
                    "pathParams": {
                        "latitude": "47.6205",
                        "longitude": "-122.3493"
                    }
                },
                "newValue": "1"
            };
            const state = [
                {
                    "id": 0,
                    "action": "post",
                    "path": "https://development.avalara.net/1.0/tax/get",
                    "proxy": {
                        "route": "https://e3zwcxla5k.execute-api.us-west-2.amazonaws.com/prod/",
                        "key": {
                            "name": "api-key",
                            "location": "api-proxy-key/key"
                        }
                    },
                    "operationId": "getTax",
                    "recipeName": "Calculate Sales Tax Owed On Customer Transaction",
                    "recipeDescription": "You're a small business selling t-shirts in Chicago. How many are you selling, and for how much?",
                    "request": {
                        "postBody": {
                            "CustomerCode": "ABC4335",
                            "Addresses": [
                                {
                                    "AddressCode": "01",
                                    "Line1": "45 Fremont Street",
                                    "City": "Chicago",
                                    "Region": "IL",
                                    "Country": "US",
                                    "PostalCode": "60602"
                                }
                            ],
                            "Lines": [
                                {
                                    "LineNo": "1",
                                    "DestinationCode": "01",
                                    "OriginCode": "02",
                                    "Qty": "",
                                    "Amount": ""
                                }
                            ]
                        },
                        "queryString": null,
                        "pathParams": null
                    },
                    "inputs": [
                        {
                            "name": "# of T-shirts",
                            "description": "How many Tshirts you sold",
                            "in": "postBody",
                            "field": "Lines:[0]:Qty",
                            "value": ""
                        },
                        {
                            "name": "T-shirt price ($)",
                            "description": "How much each Tshirt costs",
                            "in": "postBody",
                            "field": "Lines:[0]:Amount",
                            "value": ""
                        }
                    ]
                },
                {
                    "id": 1,
                    "action": "get",
                    "path": "https://development.avalara.net/1.0/tax/{latitude},{longitude}/get",
                    "proxy": {
                        "route": "https://e3zwcxla5k.execute-api.us-west-2.amazonaws.com/prod/",
                        "key": {
                            "name": "api-key",
                            "location": "api-proxy-key/key"
                        }
                    },
                    "operationId": "estimateTax",
                    "recipeName": "Estimating Tax",
                    "recipeDescription": "You're selling stuff in Seattle, WA. Enter a dollar amount to see how much tax you'll pay.",
                    "request": {
                        "postBody": null,
                        "queryString": {
                            "saleamount": ""
                        },
                        "pathParams": {
                            "latitude": "47.6205",
                            "longitude": "-122.3493"
                        }
                    },
                    "inputs": [
                        {
                            "name": "Sale Amount ($)",
                            "description": "How much money to estimate taxes for!",
                            "in": "queryString",
                            "field": "saleamount",
                            "value": ""
                        }
                    ]
                }
            ];
            const expectedState = R.clone(state);

            expectedState[1].inputs[0].value = '1';
            expectedState[1].request.queryString.saleamount = '1';
            /* eslint-enable quote-props */
            /* eslint-enable quotes */

            expect(reducer(state, action)).to.eql(expectedState);
        });
        it('returns expected state for input NOT in postBody', () => {
            /* eslint-disable quotes */
            /* eslint-disable quote-props */
            const action = {
                "type": "INPUT_CHANGED",
                "recipeId": 0,
                "inputName": "Destination Country",
                "requestBody": {
                    "postBody": {
                        "date": "2016-01-01T00:00:00.000Z",
                        "incoterms": "DAP",
                        "source": {
                            "country": "DE"
                        },
                        "destination": {
                            "country": ""
                        },
                        "entityType": "B2C",
                        "currency": "EUR",
                        "shipping": {
                            "cost": 50,
                            "insurance": 50,
                            "mode": "ground",
                            "express": true
                        },
                        "items": [
                            {
                                "id": "1",
                                "hsCode": "930700",
                                "description": "Swords",
                                "price": 179.99,
                                "quantity": 25,
                                "units": [
                                    {
                                        "name": "kg",
                                        "amount": 10,
                                        "total": 10
                                    }
                                ]
                            }
                        ]
                    },
                    "queryString": null,
                    "pathParams": null
                },
                "newValue": "US"
            };
            const state = [
                {
                    "id": 0,
                    "action": "post",
                    "path": "http://sandbox.landedcost.api.avalara.com/v3/calculate",
                    "operationId": "calculate",
                    "recipeName": "Ship Swords to a Destination of your Choice!",
                    "recipeDescription": "You're a German blacksmith and have just sold a shipment of your finest swords to a customer internationally.\nPick a destination country and see how much landed cost is owed!",
                    "request": {
                        "postBody": {
                            "date": "2016-01-01T00:00:00.000Z",
                            "incoterms": "DAP",
                            "source": {
                                "country": "DE"
                            },
                            "destination": {
                                "country": ""
                            },
                            "entityType": "B2C",
                            "currency": "EUR",
                            "shipping": {
                                "cost": 50,
                                "insurance": 50,
                                "mode": "ground",
                                "express": true
                            },
                            "items": [
                                {
                                    "id": "1",
                                    "hsCode": "930700",
                                    "description": "Swords",
                                    "price": 179.99,
                                    "quantity": 25,
                                    "units": [
                                        {
                                            "name": "kg",
                                            "amount": 10,
                                            "total": 10
                                        }
                                    ]
                                }
                            ]
                        },
                        "queryString": null,
                        "pathParams": null
                    },
                    "inputs": [
                        {
                            "name": "Destination Country",
                            "description": "Where you are sending your sweet swords",
                            "in": "postBody",
                            "field": "destination:country",
                            "value": "",
                            "enum": [
                                {
                                    "show": "United States",
                                    "value": "US"
                                },
                                {
                                    "show": "France",
                                    "value": "FR"
                                },
                                {
                                    "show": "China",
                                    "value": "CN"
                                },
                                {
                                    "show": "South Korea",
                                    "value": "KR"
                                },
                                {
                                    "show": "Argentina",
                                    "value": "AR"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 1,
                    "action": "get",
                    "path": "http://sandbox.landedcost.api.avalara.com/v2/hscodes/{system}/{code}",
                    "operationId": "Get Rate Data_",
                    "recipeName": "Get HS Code Details",
                    "recipeDescription": "You're trying to classify a product and want to get a better understanding of its place in the Harmonized Code system. Pick one of the codes to get started!",
                    "request": {
                        "postBody": null,
                        "queryString": {
                            "fullpath": "false"
                        },
                        "pathParams": {
                            "system": "TARIC",
                            "code": ""
                        }
                    },
                    "inputs": [
                        {
                            "name": "Harmonized Category for TARIC (EU)",
                            "description": "How much money to estimate taxes for!",
                            "in": "pathParams",
                            "field": "code",
                            "value": "",
                            "enum": [
                                {
                                    "show": "Equine [010130]",
                                    "value": "010130"
                                },
                                {
                                    "show": "Champagne [22041011]",
                                    "value": "22041011"
                                },
                                {
                                    "show": "Deep Fat Fryers [85167920]",
                                    "value": "85167920"
                                }
                            ]
                        }
                    ]
                }
            ];
            const expectedState = R.clone(state);

            expectedState[0].inputs[0].value = 'US';
            expectedState[0].request.postBody.destination.country = 'US';
            /* eslint-enable quote-props */
            /* eslint-enable quotes */

            expect(reducer(state, action)).to.eql(expectedState);
        });
    });

    describe('SUBMIT_REQUEST', () => {
        it('returns expected state', () => {
            /* eslint-disable quotes */
            /* eslint-disable quote-props */
            const action = {
                "type": "SUBMIT_REQUEST",
                "recipeId": 1,
                "apiResponse": {
                    "body": {
                        "Rate": 0.096,
                        "Tax": 0.1,
                        "TaxDetails": [
                            {
                                "Rate": 0.065,
                                "Tax": 0.07,
                                "Region": "WA",
                                "Country": "US",
                                "JurisType": "State",
                                "JurisName": "WASHINGTON",
                                "JurisCode": "53",
                                "TaxName": "WA STATE TAX"
                            },
                            {
                                "Country": "US",
                                "Region": "WA",
                                "JurisType": "County",
                                "JurisCode": "033",
                                "Rate": 0,
                                "Tax": 0,
                                "JurisName": "KING",
                                "TaxName": "WA COUNTY TAX"
                            },
                            {
                                "Country": "US",
                                "Region": "WA",
                                "JurisType": "City",
                                "JurisCode": "63000",
                                "Rate": 0.031,
                                "Tax": 0.03,
                                "JurisName": "SEATTLE",
                                "TaxName": "WA CITY TAX"
                            }
                        ],
                        "ResultCode": "Success"
                    },
                    "status": "200",
                    "statusMessage": "OK"
                }
            };
            const state = [
                {
                    "id": 0,
                    "action": "post",
                    "path": "https://development.avalara.net/1.0/tax/get",
                    "proxy": {
                        "route": "https://e3zwcxla5k.execute-api.us-west-2.amazonaws.com/prod/",
                        "key": {
                            "name": "api-key",
                            "location": "api-proxy-key/key"
                        }
                    },
                    "operationId": "getTax",
                    "recipeName": "Calculate Sales Tax Owed On Customer Transaction",
                    "recipeDescription": "You're a small business selling t-shirts in Chicago. How many are you selling, and for how much?",
                    "request": {
                        "postBody": {
                            "CustomerCode": "ABC4335",
                            "Addresses": [
                                {
                                    "AddressCode": "01",
                                    "Line1": "45 Fremont Street",
                                    "City": "Chicago",
                                    "Region": "IL",
                                    "Country": "US",
                                    "PostalCode": "60602"
                                }
                            ],
                            "Lines": [
                                {
                                    "LineNo": "1",
                                    "DestinationCode": "01",
                                    "OriginCode": "02",
                                    "Qty": "",
                                    "Amount": ""
                                }
                            ]
                        },
                        "queryString": null,
                        "pathParams": null
                    },
                    "inputs": [
                        {
                            "name": "# of T-shirts",
                            "description": "How many Tshirts you sold",
                            "in": "postBody",
                            "field": "Lines:[0]:Qty",
                            "value": ""
                        },
                        {
                            "name": "T-shirt price ($)",
                            "description": "How much each Tshirt costs",
                            "in": "postBody",
                            "field": "Lines:[0]:Amount",
                            "value": ""
                        }
                    ]
                },
                {
                    "id": 1,
                    "action": "get",
                    "path": "https://development.avalara.net/1.0/tax/{latitude},{longitude}/get",
                    "proxy": {
                        "route": "https://e3zwcxla5k.execute-api.us-west-2.amazonaws.com/prod/",
                        "key": {
                            "name": "api-key",
                            "location": "api-proxy-key/key"
                        }
                    },
                    "operationId": "estimateTax",
                    "recipeName": "Estimating Tax",
                    "recipeDescription": "You're selling stuff in Seattle, WA. Enter a dollar amount to see how much tax you'll pay.",
                    "request": {
                        "postBody": null,
                        "queryString": {
                            "saleamount": "1"
                        },
                        "pathParams": {
                            "latitude": "47.6205",
                            "longitude": "-122.3493"
                        }
                    },
                    "inputs": [
                        {
                            "name": "Sale Amount ($)",
                            "description": "How much money to estimate taxes for!",
                            "in": "queryString",
                            "field": "saleamount",
                            "value": "1"
                        }
                    ]
                }
            ];
            const expectedState = R.clone(state);

            expectedState[1].response = action.apiResponse;

            /* eslint-enable quote-props */
            /* eslint-enable quotes */

            expect(reducer(state, action)).to.eql(expectedState);
        });
    });
});
