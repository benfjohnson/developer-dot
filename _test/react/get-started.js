/* eslint-env mocha */

import {expect} from 'chai';
import R from 'ramda';

import actionTypes from '../../dynamic/react/shared/actionTypes';
import reducer from '../../dynamic/react/get-started/reducers/reducer';

describe('getStarted Reducer', () => {
    /* eslint-disable quotes */
    /* eslint-disable quote-props */
    const state = [
        {
            "operationId": "getTax",
            "name": "Calculate Tax",
            "description": "Calculates taxes on a document such as a sales order, sales invoice, purchase order, purchase invoice, or credit memo. To use an XML request/response, use the URL `/1.0/tax/get.xml`",
            "path": "https://development.avalara.net/1.0/tax/get",
            "action": "post",
            "sampleAuthHeader": "Basic aHR0cHdhdGNoOmY=",
            "showExcludedPostBodyFields": false,
            "proxy": {
                "route": "https://e3zwcxla5k.execute-api.us-west-2.amazonaws.com/prod/",
                "key": {
                    "name": "api-key",
                    "location": "api-proxy-key/key"
                }
            },
            "requestSchema": {
                "required": false,
                "isExcluded": false,
                "CustomerCode": {
                    "fieldType": "string",
                    "required": true,
                    "isExcluded": false,
                    "example": "ABC4335",
                    "description": "The case-sensitive client application customer reference code. This is required since it is the key to the Exemption Certificate Management Service in the Admin Console."
                },
                "Addresses": {
                    "fieldType": "array",
                    "required": true,
                    "isExcluded": false,
                    "items": {
                        "required": false,
                        "isExcluded": false,
                        "AddressCode": {
                            "fieldType": "string",
                            "required": true,
                            "isExcluded": false,
                            "example": "01",
                            "description": "Reference code uniquely identifying this address instance."
                        },
                        "Line1": {
                            "fieldType": "string",
                            "required": true,
                            "isExcluded": false,
                            "example": "45 Fremont Street",
                            "description": "Address line 1, required if Latitude and Longitude are not provided."
                        },
                        "City": {
                            "fieldType": "string",
                            "required": true,
                            "isExcluded": false,
                            "example": "Chicago",
                            "description": "City name, required unless PostalCode is specified and/or Latitude and Longitude are provided."
                        },
                        "Region": {
                            "fieldType": "string",
                            "required": true,
                            "isExcluded": false,
                            "example": "IL",
                            "description": "State, province, or region name. Required unless City is specified and/or Latitude and Longitude are provided."
                        },
                        "Country": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "example": "US",
                            "description": "Country code. If not provided, will default to 'US'."
                        },
                        "PostalCode": {
                            "fieldType": "string",
                            "required": true,
                            "isExcluded": false,
                            "example": "60602",
                            "description": "Postal or ZIP code, Required unless City and Region are specified, and/or Latitude and Longitude are provided."
                        }
                    }
                },
                "Lines": {
                    "fieldType": "array",
                    "required": true,
                    "isExcluded": false,
                    "items": {
                        "required": false,
                        "isExcluded": false,
                        "LineNo": {
                            "fieldType": "string",
                            "required": true,
                            "isExcluded": false,
                            "example": "1",
                            "description": "Line item identifier. LineId uniquely identifies the line item row."
                        },
                        "DestinationCode": {
                            "fieldType": "string",
                            "required": true,
                            "isExcluded": false,
                            "example": "01",
                            "description": "Destination (ship-to) address code.DestinationCode references an address from the Addresses collection."
                        },
                        "OriginCode": {
                            "fieldType": "string",
                            "required": true,
                            "isExcluded": false,
                            "example": "02",
                            "description": "Origination (ship-from) address code. OriginCode references an address from the Addresses collection."
                        },
                        "Qty": {
                            "fieldType": "number",
                            "required": true,
                            "isExcluded": false,
                            "example": "1",
                            "description": "Item quantity. The tax engine does NOT use this as a multiplier with price to get the Amount."
                        },
                        "Amount": {
                            "fieldType": "number",
                            "required": false,
                            "isExcluded": false,
                            "example": "10",
                            "description": "Total amount of item (extended amount, qty * unit price). If omitted, this value will default to 0"
                        }
                    }
                }
            },
            "postBody": {
                "Addresses": [
                    {}
                ],
                "Lines": [
                    {}
                ]
            },
            "curl": "curl\n    -X POST\n    -H 'Accept: application/json'\n    -H 'Authorization: Basic aHR0cHdhdGNoOmY='\n    -H 'Content-Type: application/json'\n    --data '{\n  \"Addresses\": [\n    {}\n  ],\n  \"Lines\": [\n    {}\n  ]\n}'\n    https://development.avalara.net/1.0/tax/get",
            "responseSchema": {
                "required": false,
                "isExcluded": false,
                "DocCode": {
                    "fieldType": "string",
                    "required": false,
                    "isExcluded": false,
                    "example": "INV001",
                    "description": "While this is an optional field, serious consideration should be given to using it. If no value is sent, AvaTax assigns a GUID value to keep the document unique, which can make reconciliation a challenge."
                },
                "DocDate": {
                    "fieldType": "string",
                    "required": false,
                    "isExcluded": false,
                    "description": "Date of invoice, sales order, purchase order, etc."
                },
                "TimeStamp": {
                    "fieldType": "string",
                    "required": false,
                    "isExcluded": false,
                    "description": "Server timestamp of request.",
                    "format": "date-time"
                },
                "TotalAmount": {
                    "fieldType": "number",
                    "required": false,
                    "isExcluded": false,
                    "description": "Sum of all line Amount values."
                },
                "TotalDiscount": {
                    "fieldType": "number",
                    "required": false,
                    "isExcluded": false,
                    "description": "Sum of all TaxLine discount amounts."
                },
                "TotalExemption": {
                    "fieldType": "number",
                    "required": false,
                    "isExcluded": false,
                    "description": "Total exemption amount."
                },
                "TotalTaxable": {
                    "fieldType": "number",
                    "required": false,
                    "isExcluded": false,
                    "description": "Total taxable amount."
                },
                "TotalTax": {
                    "fieldType": "number",
                    "required": false,
                    "isExcluded": false,
                    "description": "Sum of all TaxLine tax amounts."
                },
                "TotalTaxCalculated": {
                    "fieldType": "number",
                    "required": false,
                    "isExcluded": false,
                    "description": "TotalTaxCalculated indicates the total tax calculated by AvaTax. This is usually the same as the TotalTax, except when a tax override amount is specified. This is for informational purposes. The TotalTax will still be used for reporting."
                },
                "TaxDate": {
                    "fieldType": "string",
                    "required": false,
                    "isExcluded": false,
                    "description": "Date used to assess tax rates and jurisdictions.",
                    "format": "date"
                },
                "TaxLines": {
                    "fieldType": "array",
                    "required": false,
                    "isExcluded": false,
                    "items": {
                        "required": false,
                        "isExcluded": false,
                        "LineNo": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "description": "Line item identifier"
                        },
                        "TaxCode": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "description": "The tax code used in calculating tax"
                        },
                        "Taxability": {
                            "fieldType": "boolean",
                            "required": false,
                            "isExcluded": false,
                            "description": "Flag indicating item was taxable"
                        },
                        "Taxable": {
                            "fieldType": "number",
                            "required": false,
                            "isExcluded": false,
                            "description": "The amount that is taxable"
                        },
                        "Rate": {
                            "fieldType": "number",
                            "required": false,
                            "isExcluded": false,
                            "description": "Effective tax rate"
                        },
                        "Tax": {
                            "fieldType": "number",
                            "required": false,
                            "isExcluded": false,
                            "description": "Tax amount"
                        },
                        "Discount": {
                            "fieldType": "number",
                            "required": false,
                            "isExcluded": false,
                            "description": "Discount amount"
                        },
                        "TaxCalculated": {
                            "fieldType": "number",
                            "required": false,
                            "isExcluded": false,
                            "description": "Amount of tax calculated"
                        },
                        "Exemption": {
                            "fieldType": "number",
                            "required": false,
                            "isExcluded": false,
                            "description": "Exempt amount"
                        },
                        "BoundaryLevel": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "description": "The boundary level used to calculate tax: determined by the provided addresses"
                        },
                        "TaxDetails": {
                            "fieldType": "array",
                            "required": false,
                            "isExcluded": false,
                            "items": {
                                "required": false,
                                "isExcluded": false,
                                "Country": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "example": "US",
                                    "description": "Two character ISO country code."
                                },
                                "JurisName": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "example": "BAINBRIDGE ISLAND",
                                    "description": "Name of a tax jurisdiction"
                                },
                                "JurisCode": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "example": 29,
                                    "description": "State assigned code identifying the jurisdiction. Note that this is not necessarily a unique identifier of the jurisdiction."
                                },
                                "JurisType": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "enum": [
                                        "State",
                                        "County",
                                        "City",
                                        "Country",
                                        "Special Tax Jurisdiction"
                                    ]
                                },
                                "Rate": {
                                    "fieldType": "number",
                                    "required": false,
                                    "isExcluded": false,
                                    "example": 0.022,
                                    "description": "Effective tax rate for tax jurisdiction",
                                    "format": "decimal"
                                },
                                "Region": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "example": "WA",
                                    "description": "Region of tax jurisdiction"
                                },
                                "Tax": {
                                    "fieldType": "number",
                                    "required": false,
                                    "isExcluded": false,
                                    "example": 2.22,
                                    "description": "Tax amount",
                                    "format": "decimal"
                                },
                                "TaxName": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "example": "WA CITY TAX",
                                    "description": "Tax name"
                                }
                            }
                        }
                    }
                },
                "TaxSummary": {
                    "fieldType": "array",
                    "required": false,
                    "isExcluded": false,
                    "items": {
                        "required": false,
                        "isExcluded": false,
                        "Country": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "example": "US",
                            "description": "Two character ISO country code."
                        },
                        "JurisName": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "example": "BAINBRIDGE ISLAND",
                            "description": "Name of a tax jurisdiction"
                        },
                        "JurisCode": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "example": 29,
                            "description": "State assigned code identifying the jurisdiction. Note that this is not necessarily a unique identifier of the jurisdiction."
                        },
                        "JurisType": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "enum": [
                                "State",
                                "County",
                                "City",
                                "Country",
                                "Special Tax Jurisdiction"
                            ]
                        },
                        "Rate": {
                            "fieldType": "number",
                            "required": false,
                            "isExcluded": false,
                            "example": 0.022,
                            "description": "Effective tax rate for tax jurisdiction",
                            "format": "decimal"
                        },
                        "Region": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "example": "WA",
                            "description": "Region of tax jurisdiction"
                        },
                        "Tax": {
                            "fieldType": "number",
                            "required": false,
                            "isExcluded": false,
                            "example": 2.22,
                            "description": "Tax amount",
                            "format": "decimal"
                        },
                        "TaxName": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "example": "WA CITY TAX",
                            "description": "Tax name"
                        }
                    }
                },
                "TaxAddresses": {
                    "fieldType": "array",
                    "required": false,
                    "isExcluded": false,
                    "items": {
                        "required": false,
                        "isExcluded": false,
                        "Address": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "description": "Canonical street address"
                        },
                        "AddressCode": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "description": "Reference code uniquely identifying this address instance. AddressCode will always correspond to an address code supplied to in the address collection provided in the request."
                        },
                        "City": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "description": "City name"
                        },
                        "Region": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "description": "State or region name"
                        },
                        "Country": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "description": "Country code, as ISO 3166-1 (Alpha-2) country code (e.g. \"US\")"
                        },
                        "PostalCode": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "description": "Postal code"
                        },
                        "Latitude": {
                            "fieldType": "number",
                            "required": false,
                            "isExcluded": false,
                            "description": "Geographic latitude. If Latitude is defined, it is expected that the longitude field will also be provided. Failure to do so will result in operation error. Calculation by latitude/longitude is available for the United States only. If a latitude/longitude value outside of the US is provided, the service will return an error."
                        },
                        "Longitude": {
                            "fieldType": "number",
                            "required": false,
                            "isExcluded": false,
                            "description": "Geographic longitude. If Longitude is defined, it is expected that the latitude field will also be provided. Fail to do so will result in operation error. Calculation by latitude/longitude is available for the United States only. If a latitude/longitude value outside of the US is provided, the service will return an error."
                        },
                        "TaxRegionId": {
                            "fieldType": "number",
                            "required": false,
                            "isExcluded": false,
                            "description": "AvaTax tax region identifier"
                        },
                        "JurisCode": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "description": "Tax jurisdiction code"
                        }
                    }
                },
                "ResultCode": {
                    "fieldType": "string",
                    "required": false,
                    "isExcluded": false,
                    "example": "Success",
                    "description": "Classifies severity of message. One of: Success, Warning, Error, Exception"
                }
            },
            "id": 0
        },
        {
            "operationId": "validateAddress",
            "name": "Validate an Address",
            "description": "Normalizes a single US or Canadian address, providing a non-ambiguous USPS address match. To recieve an XML response, use the URL `/1.0/address/validate.xml` and set the request header `Content-Type: text/xml`",
            "path": "https://development.avalara.net/1.0/address/validate",
            "action": "get",
            "sampleAuthHeader": "Basic aHR0cHdhdGNoOmY=",
            "showExcludedPostBodyFields": false,
            "proxy": {
                "route": "https://e3zwcxla5k.execute-api.us-west-2.amazonaws.com/prod/",
                "key": {
                    "name": "api-key",
                    "location": "api-proxy-key/key"
                }
            },
            "queryString": {
                "Line1": {
                    "description": "Address line 1",
                    "required": true,
                    "value": "",
                    "example": "400 Broad St",
                    "fieldType": "string"
                },
                "City": {
                    "description": "City name. Optional unless PostalCode is not specified.",
                    "required": false,
                    "value": "",
                    "example": "Seattle",
                    "fieldType": "string"
                },
                "Region": {
                    "required": false,
                    "value": "",
                    "example": "WA",
                    "fieldType": "string"
                },
                "Country": {
                    "required": true,
                    "value": "",
                    "example": "",
                    "fieldType": "string"
                },
                "PostalCode": {
                    "required": false,
                    "value": "",
                    "example": 98109,
                    "fieldType": "string"
                }
            },
            "qsPath": "",
            "curl": "curl -X GET \"https://development.avalara.net/1.0/address/validate\" -H \"Accept: application/json\" -H \"Authorization: Basic aHR0cHdhdGNoOmY=\"",
            "responseSchema": {
                "required": false,
                "isExcluded": false,
                "Address": {
                    "required": false,
                    "isExcluded": false,
                    "Line1": {
                        "fieldType": "string",
                        "required": false,
                        "isExcluded": false,
                        "example": "45 Fremont Street",
                        "description": "Address line 1"
                    },
                    "Line2": {
                        "fieldType": "string",
                        "required": false,
                        "isExcluded": false,
                        "example": "Suite 100",
                        "description": "Address line 2"
                    },
                    "Line3": {
                        "fieldType": "string",
                        "required": false,
                        "isExcluded": false,
                        "example": "ATTN Accounts Payable",
                        "description": "Address line 3"
                    },
                    "City": {
                        "fieldType": "string",
                        "required": false,
                        "isExcluded": false,
                        "example": "Chicago",
                        "description": "City name"
                    },
                    "Region": {
                        "fieldType": "string",
                        "required": false,
                        "isExcluded": false,
                        "example": "IL",
                        "description": "State, province, or region name."
                    },
                    "Country": {
                        "fieldType": "string",
                        "required": false,
                        "isExcluded": false,
                        "example": "US",
                        "description": "Country code."
                    },
                    "PostalCode": {
                        "fieldType": "string",
                        "required": false,
                        "isExcluded": false,
                        "example": "60602",
                        "description": "Postal or ZIP code"
                    },
                    "AddressType": {
                        "fieldType": "string",
                        "required": false,
                        "isExcluded": false,
                        "description": "Address type code. One of:\\n * F - Firm or company address\\n * G - General Delivery address\\n * H - High-rise or business complex\\n * P - PO Box address\\n * R - Rural route address\\n * S - Street or residential address"
                    },
                    "FipsCode": {
                        "fieldType": "string",
                        "required": false,
                        "isExcluded": false,
                        "description": "FIPSCode is a unique 10-digit code representing each geographic combination of state, county, and city. The code is made up of the Federal Information Processing Code (FIPS) that uniquely identifies each state, county, and city in the U.S. Returned for US addresses only. Digits represent jurisdiction codes:\\n * 1-2 State code\\n * 3-5 County code\\n * 6-10 City code"
                    },
                    "CarrierRoute": {
                        "fieldType": "string",
                        "required": false,
                        "isExcluded": false,
                        "description": "CarrierRoute is a four-character string representing a US postal carrier route. The first character of this property, the term, is always alphabetic, and the last three numeric. For example, “R001” or “C027” would be typical carrier routes. The alphabetic letter indicates the type of delivery associated with this address. Returned for US addresses only.\\n * B - PO Box\\n * C - City delivery\\n * G - General delivery\\n * H - Highway contract\\n * R - Rural route"
                    },
                    "PostNet": {
                        "fieldType": "string",
                        "required": false,
                        "isExcluded": false,
                        "description": "POSTNet is a 12-digit barcode containing the ZIP Code, ZIP+4 Code, and the delivery point code, used by the USPS to direct mail. Returned for US addresses only digits represent delivery information:\\n * 1-5 ZIP code\\n * 6-9 Plus4 code\\n * 10-11 Delivery point\\n * 12 Check digit"
                    }
                },
                "ResultCode": {
                    "fieldType": "string",
                    "required": false,
                    "isExcluded": false,
                    "example": "Success",
                    "description": "Classifies severity of message. One of: Success, Warning, Error, Exception"
                }
            },
            "id": 1
        }
    ];
    /* eslint-enable quote-props */
    /* eslint-enable quotes */

    describe('Default', () => {
        it('Returns default state', () => {
            expect(reducer({}, {type: 'unknown'})).to.eql({});
        });
    });
    describe('RESET_CONSOLE', () => {
        it('returns expected state', () => {
            /* eslint-disable quotes */
            /* eslint-disable quote-props */
            const expectedState = R.clone(state);

            expectedState[0].apiResponse = undefined;
            expectedState[0].curl = "curl\n    -X POST\n    -H 'Accept: application/json'\n    -H 'Authorization: Basic aHR0cHdhdGNoOmY='\n    -H 'Content-Type: application/json'\n    --data '{\n  \"Addresses\": [\n    {}\n  ],\n  \"Lines\": [\n    {}\n  ]\n}'\n    https://development.avalara.net/1.0/tax/get";
            expectedState[0].qsPath = '';
            expectedState[0].postBody = {
                "Addresses": [
                    {
                        "AddressCode": undefined,
                        "City": undefined,
                        "Country": undefined,
                        "Line1": undefined,
                        "PostalCode": undefined,
                        "Region": undefined
                    }
                ],
                "Lines": [
                    {
                        "Amount": undefined,
                        "DestinationCode": undefined,
                        "LineNo": undefined,
                        "OriginCode": undefined,
                        "Qty": undefined
                    }
                ],
                "CustomerCode": undefined
            };
            /* eslint-enable quote-props */
            /* eslint-enable quotes */

            expect(reducer(state, {type: actionTypes.RESET_CONSOLE, endpointId: 0})).to.eql(expectedState);
        });
    });
    describe('SUBMIT_DONE', () => {
        /* eslint-disable quotes */
        /* eslint-disable quote-props */
        const apiResponse = {
            body: 'responseBody',
            status: 'status',
            statusMessage: 'statusMessage'
        };
        const action = {
            type: actionTypes.SUBMIT_DONE,
            endpointId: 0,
            apiResponse: apiResponse
        };
        const expectedState = R.clone(state);
        /* eslint-enable quote-props */
        /* eslint-enable quotes */

        expectedState[0].apiResponse = apiResponse;

        it('returns expected state for apiResponse', () => {
            expect(reducer(state, action)).to.eql(expectedState);
        });
        it('returns expected state for apiResponse.error', () => {
            const error = {};

            action.error = error;
            expectedState[0].error = error;
            expect(reducer(state, action)).to.eql(expectedState);
        });
    });
    describe('FILL_REQUEST_SAMPLE_DATA', () => {
        it('returns expected state', () => {
            /* eslint-disable quotes */
            /* eslint-disable quote-props */
            const expectedState = R.clone(state);

            expectedState[0].curl = "curl\n    -X POST\n    -H 'Accept: application/json'\n    -H 'Authorization: Basic aHR0cHdhdGNoOmY='\n    -H 'Content-Type: application/json'\n    --data '{\n  \"CustomerCode\": \"ABC4335\",\n  \"Addresses\": [\n    {\n      \"AddressCode\": \"01\",\n      \"Line1\": \"45 Fremont Street\",\n      \"City\": \"Chicago\",\n      \"Region\": \"IL\",\n      \"Country\": \"US\",\n      \"PostalCode\": \"60602\"\n    }\n  ],\n  \"Lines\": [\n    {\n      \"LineNo\": \"1\",\n      \"DestinationCode\": \"01\",\n      \"OriginCode\": \"02\",\n      \"Qty\": \"1\",\n      \"Amount\": \"10\"\n    }\n  ]\n}'\n    https://development.avalara.net/1.0/tax/get";
            expectedState[0].qsPath = '';
            expectedState[0].postBody = {
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
                        "Amount": "10",
                        "DestinationCode": "01",
                        "LineNo": "1",
                        "OriginCode": "02",
                        "Qty": "1"
                    }
                ]
            };
            /* eslint-enable quote-props */
            /* eslint-enable quotes */

            expect(reducer(state, {type: actionTypes.FILL_REQUEST_SAMPLE_DATA, endpointId: 0})).to.eql(expectedState);
        });
    });
    describe('QUERY_STRING_CHANGED', () => {
        it('single query param: returns expected state', () => {
            /* eslint-disable quotes */
            /* eslint-disable quote-props */
            const expectedState = R.clone(state);

            expectedState[1].curl = "curl\n    -X GET\n    -H 'Accept: application/json'\n    -H 'Authorization: Basic aHR0cHdhdGNoOmY='\n    https://development.avalara.net/1.0/address/validate?Line1=1";
            expectedState[1].qsPath = '?Line1=1';
            expectedState[1].queryString.Line1 = {
                description: 'Address line 1',
                example: '400 Broad St',
                fieldType: 'string',
                required: true,
                value: '1'
            };
            /* eslint-enable quote-props */
            /* eslint-enable quotes */

            expect(reducer(state, {type: actionTypes.QUERY_STRING_CHANGED, newValue: '1', paramName: 'Line1', endpointId: 1})).to.eql(expectedState);
        });
        it('multiple query param: returns expected state', () => {
            /* eslint-disable quotes */
            /* eslint-disable quote-props */
            const qsState = [
                {
                    "operationId": "getTax",
                    "name": "Calculate Tax",
                    "description": "Calculates taxes on a document such as a sales order, sales invoice, purchase order, purchase invoice, or credit memo. To use an XML request/response, use the URL `/1.0/tax/get.xml`",
                    "path": "https://development.avalara.net/1.0/tax/get",
                    "action": "post",
                    "sampleAuthHeader": "Basic aHR0cHdhdGNoOmY=",
                    "showExcludedPostBodyFields": false,
                    "proxy": {
                        "route": "https://e3zwcxla5k.execute-api.us-west-2.amazonaws.com/prod/",
                        "key": {
                            "name": "api-key",
                            "location": "api-proxy-key/key"
                        }
                    },
                    "requestSchema": {
                        "required": false,
                        "isExcluded": false,
                        "CustomerCode": {
                            "fieldType": "string",
                            "required": true,
                            "isExcluded": false,
                            "example": "ABC4335",
                            "description": "The case-sensitive client application customer reference code. This is required since it is the key to the Exemption Certificate Management Service in the Admin Console."
                        },
                        "Addresses": {
                            "fieldType": "array",
                            "required": true,
                            "isExcluded": false,
                            "items": {
                                "required": false,
                                "isExcluded": false,
                                "AddressCode": {
                                    "fieldType": "string",
                                    "required": true,
                                    "isExcluded": false,
                                    "example": "01",
                                    "description": "Reference code uniquely identifying this address instance."
                                },
                                "Line1": {
                                    "fieldType": "string",
                                    "required": true,
                                    "isExcluded": false,
                                    "example": "45 Fremont Street",
                                    "description": "Address line 1, required if Latitude and Longitude are not provided."
                                },
                                "City": {
                                    "fieldType": "string",
                                    "required": true,
                                    "isExcluded": false,
                                    "example": "Chicago",
                                    "description": "City name, required unless PostalCode is specified and/or Latitude and Longitude are provided."
                                },
                                "Region": {
                                    "fieldType": "string",
                                    "required": true,
                                    "isExcluded": false,
                                    "example": "IL",
                                    "description": "State, province, or region name. Required unless City is specified and/or Latitude and Longitude are provided."
                                },
                                "Country": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "example": "US",
                                    "description": "Country code. If not provided, will default to 'US'."
                                },
                                "PostalCode": {
                                    "fieldType": "string",
                                    "required": true,
                                    "isExcluded": false,
                                    "example": "60602",
                                    "description": "Postal or ZIP code, Required unless City and Region are specified, and/or Latitude and Longitude are provided."
                                }
                            }
                        },
                        "Lines": {
                            "fieldType": "array",
                            "required": true,
                            "isExcluded": false,
                            "items": {
                                "required": false,
                                "isExcluded": false,
                                "LineNo": {
                                    "fieldType": "string",
                                    "required": true,
                                    "isExcluded": false,
                                    "example": "1",
                                    "description": "Line item identifier. LineId uniquely identifies the line item row."
                                },
                                "DestinationCode": {
                                    "fieldType": "string",
                                    "required": true,
                                    "isExcluded": false,
                                    "example": "01",
                                    "description": "Destination (ship-to) address code.DestinationCode references an address from the Addresses collection."
                                },
                                "OriginCode": {
                                    "fieldType": "string",
                                    "required": true,
                                    "isExcluded": false,
                                    "example": "02",
                                    "description": "Origination (ship-from) address code. OriginCode references an address from the Addresses collection."
                                },
                                "Qty": {
                                    "fieldType": "number",
                                    "required": true,
                                    "isExcluded": false,
                                    "example": "1",
                                    "description": "Item quantity. The tax engine does NOT use this as a multiplier with price to get the Amount."
                                },
                                "Amount": {
                                    "fieldType": "number",
                                    "required": false,
                                    "isExcluded": false,
                                    "example": "10",
                                    "description": "Total amount of item (extended amount, qty * unit price). If omitted, this value will default to 0"
                                }
                            }
                        }
                    },
                    "postBody": {
                        "Addresses": [
                            {}
                        ],
                        "Lines": [
                            {}
                        ]
                    },
                    "curl": "curl -X POST \"https://development.avalara.net/1.0/tax/get\" -H \"Accept: application/json\" -H \"Authorization: Basic aHR0cHdhdGNoOmY=\" -H \"Content-Type: application/json\" --data '{\"Addresses\":[{}],\"Lines\":[{}]}'",
                    "responseSchema": {
                        "required": false,
                        "isExcluded": false,
                        "DocCode": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "example": "INV001",
                            "description": "While this is an optional field, serious consideration should be given to using it. If no value is sent, AvaTax assigns a GUID value to keep the document unique, which can make reconciliation a challenge."
                        },
                        "DocDate": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "description": "Date of invoice, sales order, purchase order, etc."
                        },
                        "TimeStamp": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "description": "Server timestamp of request.",
                            "format": "date-time"
                        },
                        "TotalAmount": {
                            "fieldType": "number",
                            "required": false,
                            "isExcluded": false,
                            "description": "Sum of all line Amount values."
                        },
                        "TotalDiscount": {
                            "fieldType": "number",
                            "required": false,
                            "isExcluded": false,
                            "description": "Sum of all TaxLine discount amounts."
                        },
                        "TotalExemption": {
                            "fieldType": "number",
                            "required": false,
                            "isExcluded": false,
                            "description": "Total exemption amount."
                        },
                        "TotalTaxable": {
                            "fieldType": "number",
                            "required": false,
                            "isExcluded": false,
                            "description": "Total taxable amount."
                        },
                        "TotalTax": {
                            "fieldType": "number",
                            "required": false,
                            "isExcluded": false,
                            "description": "Sum of all TaxLine tax amounts."
                        },
                        "TotalTaxCalculated": {
                            "fieldType": "number",
                            "required": false,
                            "isExcluded": false,
                            "description": "TotalTaxCalculated indicates the total tax calculated by AvaTax. This is usually the same as the TotalTax, except when a tax override amount is specified. This is for informational purposes. The TotalTax will still be used for reporting."
                        },
                        "TaxDate": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "description": "Date used to assess tax rates and jurisdictions.",
                            "format": "date"
                        },
                        "TaxLines": {
                            "fieldType": "array",
                            "required": false,
                            "isExcluded": false,
                            "items": {
                                "required": false,
                                "isExcluded": false,
                                "LineNo": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "Line item identifier"
                                },
                                "TaxCode": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "The tax code used in calculating tax"
                                },
                                "Taxability": {
                                    "fieldType": "boolean",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "Flag indicating item was taxable"
                                },
                                "Taxable": {
                                    "fieldType": "number",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "The amount that is taxable"
                                },
                                "Rate": {
                                    "fieldType": "number",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "Effective tax rate"
                                },
                                "Tax": {
                                    "fieldType": "number",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "Tax amount"
                                },
                                "Discount": {
                                    "fieldType": "number",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "Discount amount"
                                },
                                "TaxCalculated": {
                                    "fieldType": "number",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "Amount of tax calculated"
                                },
                                "Exemption": {
                                    "fieldType": "number",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "Exempt amount"
                                },
                                "BoundaryLevel": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "The boundary level used to calculate tax: determined by the provided addresses"
                                },
                                "TaxDetails": {
                                    "fieldType": "array",
                                    "required": false,
                                    "isExcluded": false,
                                    "items": {
                                        "required": false,
                                        "isExcluded": false,
                                        "Country": {
                                            "fieldType": "string",
                                            "required": false,
                                            "isExcluded": false,
                                            "example": "US",
                                            "description": "Two character ISO country code."
                                        },
                                        "JurisName": {
                                            "fieldType": "string",
                                            "required": false,
                                            "isExcluded": false,
                                            "example": "BAINBRIDGE ISLAND",
                                            "description": "Name of a tax jurisdiction"
                                        },
                                        "JurisCode": {
                                            "fieldType": "string",
                                            "required": false,
                                            "isExcluded": false,
                                            "example": 29,
                                            "description": "State assigned code identifying the jurisdiction. Note that this is not necessarily a unique identifier of the jurisdiction."
                                        },
                                        "JurisType": {
                                            "fieldType": "string",
                                            "required": false,
                                            "isExcluded": false,
                                            "enum": [
                                                "State",
                                                "County",
                                                "City",
                                                "Country",
                                                "Special Tax Jurisdiction"
                                            ]
                                        },
                                        "Rate": {
                                            "fieldType": "number",
                                            "required": false,
                                            "isExcluded": false,
                                            "example": 0.022,
                                            "description": "Effective tax rate for tax jurisdiction",
                                            "format": "decimal"
                                        },
                                        "Region": {
                                            "fieldType": "string",
                                            "required": false,
                                            "isExcluded": false,
                                            "example": "WA",
                                            "description": "Region of tax jurisdiction"
                                        },
                                        "Tax": {
                                            "fieldType": "number",
                                            "required": false,
                                            "isExcluded": false,
                                            "example": 2.22,
                                            "description": "Tax amount",
                                            "format": "decimal"
                                        },
                                        "TaxName": {
                                            "fieldType": "string",
                                            "required": false,
                                            "isExcluded": false,
                                            "example": "WA CITY TAX",
                                            "description": "Tax name"
                                        }
                                    }
                                }
                            }
                        },
                        "TaxSummary": {
                            "fieldType": "array",
                            "required": false,
                            "isExcluded": false,
                            "items": {
                                "required": false,
                                "isExcluded": false,
                                "Country": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "example": "US",
                                    "description": "Two character ISO country code."
                                },
                                "JurisName": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "example": "BAINBRIDGE ISLAND",
                                    "description": "Name of a tax jurisdiction"
                                },
                                "JurisCode": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "example": 29,
                                    "description": "State assigned code identifying the jurisdiction. Note that this is not necessarily a unique identifier of the jurisdiction."
                                },
                                "JurisType": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "enum": [
                                        "State",
                                        "County",
                                        "City",
                                        "Country",
                                        "Special Tax Jurisdiction"
                                    ]
                                },
                                "Rate": {
                                    "fieldType": "number",
                                    "required": false,
                                    "isExcluded": false,
                                    "example": 0.022,
                                    "description": "Effective tax rate for tax jurisdiction",
                                    "format": "decimal"
                                },
                                "Region": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "example": "WA",
                                    "description": "Region of tax jurisdiction"
                                },
                                "Tax": {
                                    "fieldType": "number",
                                    "required": false,
                                    "isExcluded": false,
                                    "example": 2.22,
                                    "description": "Tax amount",
                                    "format": "decimal"
                                },
                                "TaxName": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "example": "WA CITY TAX",
                                    "description": "Tax name"
                                }
                            }
                        },
                        "TaxAddresses": {
                            "fieldType": "array",
                            "required": false,
                            "isExcluded": false,
                            "items": {
                                "required": false,
                                "isExcluded": false,
                                "Address": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "Canonical street address"
                                },
                                "AddressCode": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "Reference code uniquely identifying this address instance. AddressCode will always correspond to an address code supplied to in the address collection provided in the request."
                                },
                                "City": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "City name"
                                },
                                "Region": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "State or region name"
                                },
                                "Country": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "Country code, as ISO 3166-1 (Alpha-2) country code (e.g. \"US\")"
                                },
                                "PostalCode": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "Postal code"
                                },
                                "Latitude": {
                                    "fieldType": "number",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "Geographic latitude. If Latitude is defined, it is expected that the longitude field will also be provided. Failure to do so will result in operation error. Calculation by latitude/longitude is available for the United States only. If a latitude/longitude value outside of the US is provided, the service will return an error."
                                },
                                "Longitude": {
                                    "fieldType": "number",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "Geographic longitude. If Longitude is defined, it is expected that the latitude field will also be provided. Fail to do so will result in operation error. Calculation by latitude/longitude is available for the United States only. If a latitude/longitude value outside of the US is provided, the service will return an error."
                                },
                                "TaxRegionId": {
                                    "fieldType": "number",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "AvaTax tax region identifier"
                                },
                                "JurisCode": {
                                    "fieldType": "string",
                                    "required": false,
                                    "isExcluded": false,
                                    "description": "Tax jurisdiction code"
                                }
                            }
                        },
                        "ResultCode": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "example": "Success",
                            "description": "Classifies severity of message. One of: Success, Warning, Error, Exception"
                        }
                    },
                    "id": 0
                },
                {
                    "operationId": "validateAddress",
                    "name": "Validate an Address",
                    "description": "Normalizes a single US or Canadian address, providing a non-ambiguous USPS address match. To recieve an XML response, use the URL `/1.0/address/validate.xml` and set the request header `Content-Type: text/xml`",
                    "path": "https://development.avalara.net/1.0/address/validate",
                    "action": "get",
                    "sampleAuthHeader": "Basic aHR0cHdhdGNoOmY=",
                    "showExcludedPostBodyFields": false,
                    "proxy": {
                        "route": "https://e3zwcxla5k.execute-api.us-west-2.amazonaws.com/prod/",
                        "key": {
                            "name": "api-key",
                            "location": "api-proxy-key/key"
                        }
                    },
                    "queryString": {
                        "Line1": {
                            "description": "Address line 1",
                            "required": true,
                            "value": "400 Broad St",
                            "example": "400 Broad St",
                            "fieldType": "string"
                        },
                        "City": {
                            "description": "City name. Optional unless PostalCode is not specified.",
                            "required": false,
                            "value": "Dalla",
                            "example": "Seattle",
                            "fieldType": "string"
                        },
                        "Region": {
                            "required": false,
                            "value": "WA",
                            "example": "WA",
                            "fieldType": "string"
                        },
                        "Country": {
                            "required": true,
                            "value": "",
                            "example": "",
                            "fieldType": "string"
                        },
                        "PostalCode": {
                            "required": false,
                            "value": 98109,
                            "example": 98109,
                            "fieldType": "string"
                        }
                    },
                    "qsPath": "?Line1=400 Broad St&City=Dalla&Region=WA&PostalCode=98109",
                    "curl": "curl -X GET \"https://development.avalara.net/1.0/address/validate?Line1=400 Broad St&City=Dalla&Region=WA&PostalCode=98109\" -H \"Accept: application/json\" -H \"Authorization: Basic aHR0cHdhdGNoOmY=\"",
                    "responseSchema": {
                        "required": false,
                        "isExcluded": false,
                        "Address": {
                            "required": false,
                            "isExcluded": false,
                            "Line1": {
                                "fieldType": "string",
                                "required": false,
                                "isExcluded": false,
                                "example": "45 Fremont Street",
                                "description": "Address line 1"
                            },
                            "Line2": {
                                "fieldType": "string",
                                "required": false,
                                "isExcluded": false,
                                "example": "Suite 100",
                                "description": "Address line 2"
                            },
                            "Line3": {
                                "fieldType": "string",
                                "required": false,
                                "isExcluded": false,
                                "example": "ATTN Accounts Payable",
                                "description": "Address line 3"
                            },
                            "City": {
                                "fieldType": "string",
                                "required": false,
                                "isExcluded": false,
                                "example": "Chicago",
                                "description": "City name"
                            },
                            "Region": {
                                "fieldType": "string",
                                "required": false,
                                "isExcluded": false,
                                "example": "IL",
                                "description": "State, province, or region name."
                            },
                            "Country": {
                                "fieldType": "string",
                                "required": false,
                                "isExcluded": false,
                                "example": "US",
                                "description": "Country code."
                            },
                            "PostalCode": {
                                "fieldType": "string",
                                "required": false,
                                "isExcluded": false,
                                "example": "60602",
                                "description": "Postal or ZIP code"
                            },
                            "AddressType": {
                                "fieldType": "string",
                                "required": false,
                                "isExcluded": false,
                                "description": "Address type code. One of:\\n * F - Firm or company address\\n * G - General Delivery address\\n * H - High-rise or business complex\\n * P - PO Box address\\n * R - Rural route address\\n * S - Street or residential address"
                            },
                            "FipsCode": {
                                "fieldType": "string",
                                "required": false,
                                "isExcluded": false,
                                "description": "FIPSCode is a unique 10-digit code representing each geographic combination of state, county, and city. The code is made up of the Federal Information Processing Code (FIPS) that uniquely identifies each state, county, and city in the U.S. Returned for US addresses only. Digits represent jurisdiction codes:\\n * 1-2 State code\\n * 3-5 County code\\n * 6-10 City code"
                            },
                            "CarrierRoute": {
                                "fieldType": "string",
                                "required": false,
                                "isExcluded": false,
                                "description": "CarrierRoute is a four-character string representing a US postal carrier route. The first character of this property, the term, is always alphabetic, and the last three numeric. For example, “R001” or “C027” would be typical carrier routes. The alphabetic letter indicates the type of delivery associated with this address. Returned for US addresses only.\\n * B - PO Box\\n * C - City delivery\\n * G - General delivery\\n * H - Highway contract\\n * R - Rural route"
                            },
                            "PostNet": {
                                "fieldType": "string",
                                "required": false,
                                "isExcluded": false,
                                "description": "POSTNet is a 12-digit barcode containing the ZIP Code, ZIP+4 Code, and the delivery point code, used by the USPS to direct mail. Returned for US addresses only digits represent delivery information:\\n * 1-5 ZIP code\\n * 6-9 Plus4 code\\n * 10-11 Delivery point\\n * 12 Check digit"
                            }
                        },
                        "ResultCode": {
                            "fieldType": "string",
                            "required": false,
                            "isExcluded": false,
                            "example": "Success",
                            "description": "Classifies severity of message. One of: Success, Warning, Error, Exception"
                        }
                    },
                    "id": 1
                }
            ];
            const expectedState = R.clone(qsState);

            expectedState[1].curl = "curl\n    -X GET\n    -H 'Accept: application/json'\n    -H 'Authorization: Basic aHR0cHdhdGNoOmY='\n    https://development.avalara.net/1.0/address/validate?Line1=1&City=Dalla&Region=WA&PostalCode=98109";
            expectedState[1].qsPath = '?Line1=1&City=Dalla&Region=WA&PostalCode=98109';
            expectedState[1].queryString.Line1 = {
                description: 'Address line 1',
                example: '400 Broad St',
                fieldType: 'string',
                required: true,
                value: '1'
            };
            /* eslint-enable quote-props */
            /* eslint-enable quotes */

            expect(reducer(qsState, {type: actionTypes.QUERY_STRING_CHANGED, newValue: '1', paramName: 'Line1', endpointId: 1})).to.eql(expectedState);
        });
    });
    describe('POST_BODY_CHANGED', () => {
        it('returns expected state when setting a new value', () => {
            /* eslint-disable quotes */
            /* eslint-disable quote-props */
            const expectedState = R.clone(state);

            expectedState[0].postBody.Addresses[0].AddressCode = 'GB';

            /* eslint-enable quote-props */
            /* eslint-enable quotes */

            expect(reducer(state, {type: actionTypes.POST_BODY_CHANGED, newValue: 'GB', postBodyParamName: 'Addresses:[0]:AddressCode', endpointId: 0})).to.eql(expectedState);
        });
        it('returns expected state when setting a new value to empty string', () => {
            /* eslint-disable quotes */
            /* eslint-disable quote-props */
            const expectedState = R.clone(state);

            expectedState[0].postBody.Addresses[0].AddressCode = undefined;

            /* eslint-enable quote-props */
            /* eslint-enable quotes */

            expect(reducer(state, {type: actionTypes.POST_BODY_CHANGED, newValue: '', postBodyParamName: 'Addresses:[0]:AddressCode', endpointId: 0})).to.eql(expectedState);
        });
        it('returns expected state when setting a new value to numeric', () => {
            /* eslint-disable quotes */
            /* eslint-disable quote-props */
            const expectedState = R.clone(state);

            expectedState[0].postBody.Lines[0].Qty = 5;

            /* eslint-enable quote-props */
            /* eslint-enable quotes */

            expect(reducer(state, {type: actionTypes.POST_BODY_CHANGED, newValue: '5', postBodyParamName: 'Lines:[0]:Qty', endpointId: 0})).to.eql(expectedState);
        });
    });
    describe('ADD_ITEM_TO_POST_BODY_COLLECTION', () => {
        it('returns expected state', () => {
            /* eslint-disable quotes */
            /* eslint-disable quote-props */
            const expectedStateWithAddedItemUnit = R.clone(state);

            expectedStateWithAddedItemUnit[0].postBody = Object.assign(expectedStateWithAddedItemUnit[0].postBody, {
                Lines: [
                    {Qty: 5},
                    {
                        Amount: undefined,
                        DestinationCode: undefined,
                        LineNo: undefined,
                        OriginCode: undefined,
                        Qty: undefined
                    }
                ]
            });
            /* eslint-enable quote-props */
            /* eslint-enable quotes */

            expect(reducer(state, {
                type: actionTypes.ADD_ITEM_TO_POST_BODY_COLLECTION,
                postBodyParamName: 'Lines',
                endpointId: 0,
                itemSchema: {
                    required: false,
                    isExcluded: false,
                    LineNo: {
                        fieldType: 'string',
                        required: true,
                        isExcluded: false,
                        example: '1',
                        description: 'Line item identifier. LineId uniquely identifies the line item row.'
                    },
                    DestinationCode: {
                        fieldType: 'string',
                        required: true,
                        isExcluded: false,
                        example: '01',
                        description: 'Destination (ship-to) address code.DestinationCode references an address from the Addresses collection.'
                    },
                    OriginCode: {
                        fieldType: 'string',
                        required: true,
                        isExcluded: false,
                        example: '02',
                        description: 'Origination (ship-from) address code. OriginCode references an address from the Addresses collection.'
                    },
                    Qty: {
                        fieldType: 'number',
                        required: true,
                        isExcluded: false,
                        example: '1',
                        description: 'Item quantity. The tax engine does NOT use this as a multiplier with price to get the Amount.'
                    },
                    Amount: {
                        fieldType: 'number',
                        required: false,
                        isExcluded: false,
                        example: '10',
                        description: 'Total amount of item (extended amount, qty * unit price). If omitted, this value will default to 0'
                    }
                }
            })).to.eql(expectedStateWithAddedItemUnit);
        });
    });
    describe('REMOVE_ITEM_FROM_POST_BODY_COLLECTION', () => {
        it('returns expected state', () => {
            /* eslint-disable quotes */
            /* eslint-disable quote-props */
            const expectedStateWithoutAddedItemUnit = R.clone(state);

            expectedStateWithoutAddedItemUnit[0].postBody.Lines = [
                {
                    Amount: undefined,
                    DestinationCode: undefined,
                    LineNo: undefined,
                    OriginCode: undefined,
                    Qty: undefined
                }
            ];
            /* eslint-enable quote-props */
            /* eslint-enable quotes */

            expect(reducer(state, {type: actionTypes.REMOVE_ITEM_FROM_POST_BODY_COLLECTION, postBodyParamName: 'Lines:[0]', endpointId: 0})).to.eql(expectedStateWithoutAddedItemUnit);
        });
    });
});
