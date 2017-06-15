const deepEqual = require('../helpers/deepEqual');

const NUMAPIS = 1;
const expectedNumberOfApiEndpoints = 9;

module.exports = {
    'before': function(browser) {
        browser.maximizeWindow();
    },

    'after': function(browser) {
        browser.end();
    },

    'API Reference: LandedCost (verify number of endpoints)': function(browser) {
        browser
            .initialize(browser.globals.baseURL + '/api-reference/landedcost/methods/units/')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);
    },
    'API Reference: LandedCost: validateCreds': function(browser) {
        const expectedResponse = {
            status: 'okay'
        };

        browser
            .initialize(browser.globals.baseURL + '/api-reference/landedcost/methods/validateCreds/')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);

        browser.page.endpointSummary()
            .navigateTo('#validateCreds-console')
            .navigateTo('#validateCreds-console-body .submit')

            .getConsoleText('validateCreds', 'responseConsole-GET', function(res) {
                browser.assert.ok(deepEqual(res, expectedResponse),
                    "request for 'try it now' matches expected request");
            });
    },
    'API Reference: LandedCost: calculate (fill sample data)': function(browser) {
        const expectedRequest = {
            incoterms: 'DAP',
            source: {
                country: 'US'
            },
            destination: {
                country: 'CA',
                region: 'CA-BC'
            },
            entityType: 'B2C',
            currency: 'USD',
            shipping: {
                cost: 50,
                insurance: 50,
                mode: 'ground',
                express: true
            },
            items: [
                {
                    id: '1',
                    hsCode: '930700',
                    description: 'Swords',
                    price: 100,
                    quantity: 10,
                    units: [
                        {
                            name: 'kg',
                            amount: 10,
                            total: 10
                        }
                    ]
                }
            ]
        };
        const expectedResponse = {
            incoterms: 'DAP',
            source: {
                country: 'US'
            },
            destination: {
                country: 'CA',
                region: 'CA-BC'
            },
            entityType: 'B2C',
            currency: 'USD',
            shipping: {
                cost: 50,
                insurance: 50,
                mode: 'ground',
                express: true
            },
            items: [
                {
                    id: '1',
                    hsCode: '930700',
                    description: 'Swords',
                    price: 100,
                    quantity: 10,
                    units: [
                        {
                            name: 'kg',
                            amount: 10,
                            total: 10
                        }
                    ],
                    netPrice: 1000,
                    regulations: [],
                    taxesAndFees: {
                        duties: {
                            amount: 70,
                            details: [
                                {
                                    amount: 70,
                                    name: 'Import Duty',
                                    taxBasis: 1000
                                }
                            ]
                        },
                        taxes: {
                            amount: 128.4,
                            details: [
                                {
                                    amount: 53.5,
                                    name: 'General Sales Tax',
                                    taxBasis: 1070
                                },
                                {
                                    amount: 74.9,
                                    name: 'Provincial Sales Tax',
                                    taxBasis: 1070
                                }
                            ]
                        }
                    },
                    rates: {
                        taxes: [
                            {
                                type: 'General Sales Tax',
                                rate: '5%',
                                currency: 'CAD',
                                jurisdiction: {
                                    country: 'CA',
                                    region: 'CA-BC'
                                }
                            },
                            {
                                type: 'Provincial Sales Tax',
                                rate: '7%',
                                currency: 'CAD',
                                jurisdiction: {
                                    country: 'CA',
                                    region: 'CA-BC'
                                }
                            }
                        ],
                        duties: [
                            {
                                hsCode: '9307000000',
                                type: 'Import Duty',
                                rate: '7%',
                                currency: 'CAD',
                                jurisdiction: {
                                    country: 'CA',
                                    region: 'CA-BC'
                                }
                            }
                        ]
                    }
                }
            ],
            status: {
                result: 'success'
            },
            taxesAndFees: {},
            landedCost: {
                details: {
                    items: {
                        amount: 1000
                    },
                    shipping: {
                        amount: 100
                    },
                    duties: {
                        amount: 70,
                        details: [
                            {
                                name: 'Import Duty',
                                amount: 70
                            }
                        ]
                    },
                    taxes: {
                        amount: 128.4,
                        details: [
                            {
                                name: 'General Sales Tax',
                                amount: 53.5
                            },
                            {
                                name: 'Provincial Sales Tax',
                                amount: 74.9
                            }
                        ]
                    }
                },
                messages: [
                    'Shipment meets CA import duty de minimis threshold. Therefore, import duty applies.',
                    'Estimated import customs duty & tax calculated. Buyer is the importer of record and will pay import customs duty & tax upon arrival in destination country.'
                ],
                isCrossBorder: true,
                amount: 1298.4,
                costInsuranceFreight: 1100,
                dutiesTaxesAndFees: 198.4,
                obligations: {
                    buyer: [
                        {
                            currency: 'USD',
                            amount: 198.4
                        },
                        {
                            currency: 'CAD',
                            amount: 263.00281
                        }
                    ]
                }
            }
        };

        browser
            .initialize(browser.globals.baseURL + '/api-reference/landedcost/methods/calculate')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);

        browser.page.endpointSummary()
            .navigateTo('#calculate-console')
            .navigateTo('#calculate-console-body .fill-sample-data')

            .getConsoleText('calculate', 'requestConsole', function(req) {
                browser.assert.ok(deepEqual(req, expectedRequest),
                    "request for 'try it now' matches expected request");
            })

            .click('#calculate-console-body .submit')

            .getConsoleText('calculate', 'responseConsole', function(res) {
                browser.assert.ok(deepEqual(res, expectedResponse),
                    "request for 'try it now' matches expected request");
            });
    },
    'API Reference: LandedCost: rates (fill sample data)': function(browser) {
        const expectedRequest = [
            {
                hsCode: '930700',
                source: {
                    country: 'US'
                },
                destination: {
                    country: 'CA',
                    region: 'CA-BC'
                }
            }
        ];
        const expectedResponse = [
            {
                hsCode: '930700',
                source: {
                    country: 'US'
                },
                destination: {
                    country: 'CA',
                    region: 'CA-BC'
                },
                rates: {
                    taxes: [
                        {
                            currency: 'CAD',
                            type: 'General Sales Tax',
                            rate: '5%',
                            jurisdiction: {
                                country: 'CA',
                                region: 'CA-BC'
                            }
                        },
                        {
                            currency: 'CAD',
                            type: 'Provincial Sales Tax',
                            rate: '7%',
                            jurisdiction: {
                                country: 'CA',
                                region: 'CA-BC'
                            }
                        }
                    ],
                    duties: [
                        {
                            hsCode: '9307000000',
                            rate: '7%',
                            type: 'Import Duty',
                            currency: 'CAD',
                            jurisdiction: {
                                country: 'CA',
                                region: 'CA-BC'
                            }
                        }
                    ]
                },
                status: {
                    result: 'success'
                }
            }
        ];

        browser
            .initialize(browser.globals.baseURL + '/api-reference/landedcost/methods/rates')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);

        browser.page.endpointSummary()
            .navigateTo('#rates-console')
            .navigateTo('#rates-console-body .fill-sample-data')

            .getConsoleText('rates', 'requestConsole', function(req) {
                browser.assert.ok(deepEqual(req, expectedRequest),
                    "request for 'try it now' matches expected request");
            })

            .click('#rates-console-body .submit')

            .getConsoleText('rates', 'responseConsole', function(res) {
                browser.assert.ok(deepEqual(res, expectedResponse),
                    "request for 'try it now' matches expected request");
            });
    },
    'API Reference: LandedCost: units (fill sample data)': function(browser) {
        const expectedRequest = [
            {
                hsCode: '040110',
                source: {
                    country: 'US'
                },
                destination: {
                    country: 'CA',
                    region: 'CA-BC'
                }
            }
        ];
        const expectedResponse = [
            {
                hsCode: '040110',
                source: {
                    country: 'US'
                },
                destination: {
                    country: 'CA',
                    region: 'CA-BC'
                },
                units: [],
                status: {
                    result: 'success'
                }
            }
        ];

        browser
            .initialize(browser.globals.baseURL + '/api-reference/landedcost/methods/units')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);

        browser.page.endpointSummary()
            .navigateTo('#units-console')
            .navigateTo('#units-console-body .fill-sample-data')

            .getConsoleText('units', 'requestConsole', function(req) {
                browser.assert.ok(deepEqual(req, expectedRequest),
                    "request for 'try it now' matches expected request");
            })

            .click('#units-console-body .submit')

            .getConsoleText('units', 'responseConsole', function(res) {
                browser.assert.ok(deepEqual(res, expectedResponse),
                    "request for 'try it now' matches expected request");
            });
    },
    'API Reference: LandedCost: getCountries': function(browser) {
        const expectedResponse = {destination: [{code: 'AX', name: 'Aland', system: 'TARIC'}, {code: 'AR', name: 'Argentina', system: 'MCN'}, {code: 'AW', name: 'Aruba', system: 'CTAW'}, {code: 'AU', name: 'Australia', system: 'HTISC'}, {code: 'AT', name: 'Austria', system: 'TARIC'}, {code: 'BH', name: 'Bahrain', system: 'UCTGCC'}, {code: 'BD', name: 'Bangladesh', system: 'CTBD'}, {code: 'BB', name: 'Barbados', system: 'CETCC'}, {code: 'BY', name: 'Belarus', system: 'UCTEEU'}, {code: 'BE', name: 'Belgium', system: 'TARIC'}, {code: 'BM', name: 'Bermuda', system: 'BCT'}, {code: 'BO', name: 'Bolivia', system: 'CETCAN'}, {code: 'BR', name: 'Brazil', system: 'MCN'}, {code: 'BG', name: 'Bulgaria', system: 'TARIC'}, {code: 'CA', name: 'Canada', system: 'CTCA'}, {code: 'KY', name: 'Cayman Islands', system: 'CTKY'}, {code: 'IO', name: 'Chagos Islands', system: 'TARIC'}, {code: 'CL', name: 'Chile', system: 'CTCL'}, {code: 'CN', name: 'China', system: 'TSCN'}, {code: 'CX', name: 'Christmas Island', system: 'HTISC'}, {code: 'CC', name: 'Cocos Islands', system: 'HTISC'}, {code: 'CO', name: 'Colombia', system: 'CETCAN'}, {code: 'CR', name: 'Costa Rica', system: 'CTCACU'}, {code: 'HR', name: 'Croatia', system: 'TARIC'}, {code: 'CY', name: 'Cyprus', system: 'TARIC'}, {code: 'CZ', name: 'Czech', system: 'TARIC'}, {code: 'DK', name: 'Denmark', system: 'TARIC'}, {code: 'DO', name: 'Dominican Republic', system: 'CETDO'}, {code: 'EC', name: 'Ecuador', system: 'CETCAN'}, {code: 'EG', name: 'Egypt', system: 'COMESA'}, {code: 'SV', name: 'El Salvador', system: 'CTCACU'}, {code: 'EE', name: 'Estonia', system: 'TARIC'}, {code: 'FI', name: 'Finland', system: 'TARIC'}, {code: 'FR', name: 'France', system: 'TARIC'}, {code: 'DE', name: 'Germany', system: 'TARIC'}, {code: 'GH', name: 'Ghana', system: 'HSCTGH'}, {code: 'GR', name: 'Greece', system: 'TARIC'}, {code: 'GP', name: 'Guadeloupe', system: 'TARIC'}, {code: 'GT', name: 'Guatemala', system: 'CTCACU'}, {code: 'GG', name: 'Guernsey', system: 'TARIC'}, {code: 'GF', name: 'Guiana', system: 'TARIC'}, {code: 'HN', name: 'Honduras', system: 'CTCACU'}, {code: 'HK', name: 'Hong Kong', system: 'HKSAR'}, {code: 'HU', name: 'Hungary', system: 'TARIC'}, {code: 'IS', name: 'Iceland', system: 'CTIS'}, {code: 'IN', name: 'India', system: 'CTIN'}, {code: 'ID', name: 'Indonesia', system: 'AHTN'}, {code: 'IE', name: 'Ireland', system: 'TARIC'}, {code: 'IL', name: 'Israel', system: 'CTIL'}, {code: 'IT', name: 'Italy', system: 'TARIC'}, {code: 'JM', name: 'Jamaica', system: 'CETCC'}, {code: 'JP', name: 'Japan', system: 'TSJP'}, {code: 'JE', name: 'Jersey', system: 'TARIC'}, {code: 'JO', name: 'Jordan', system: 'CTJO'}, {code: 'KZ', name: 'Kazakhstan', system: 'UCTEEU'}, {code: 'KW', name: 'Kuwait', system: 'UCTGCC'}, {code: 'KG', name: 'Kyrgyzstan', system: 'UCTEEU'}, {code: 'LV', name: 'Latvia', system: 'TARIC'}, {code: 'LB', name: 'Lebanon', system: 'HSCTLB'}, {code: 'LI', name: 'Liechtenstein', system: 'CTCH'}, {code: 'LT', name: 'Lithuania', system: 'TARIC'}, {code: 'LU', name: 'Luxembourg', system: 'TARIC'}, {code: 'MO', name: 'Macao', system: 'CTMO'}, {code: 'MY', name: 'Malaysia', system: 'AHTN'}, {code: 'MT', name: 'Malta', system: 'TARIC'}, {code: 'IM', name: 'Mann', system: 'TARIC'}, {code: 'MQ', name: 'Martinique', system: 'TARIC'}, {code: 'MX', name: 'Mexico', system: 'CTMX'}, {code: 'MC', name: 'Monaco', system: 'TARIC'}, {code: 'MA', name: 'Morocco', system: 'CTMA'}, {code: 'NL', name: 'Netherlands', system: 'TARIC'}, {code: 'NZ', name: 'New Zealand', system: 'TSNZ'}, {code: 'NG', name: 'Nigeria', system: 'CTNG'}, {code: 'NF', name: 'Norfolk Island', system: 'HTISC'}, {code: 'NO', name: 'Norway', system: 'HSNO'}, {code: 'OM', name: 'Oman', system: 'UCTGCC'}, {code: 'PK', name: 'Pakistan', system: 'CTPK'}, {code: 'PA', name: 'Panama', system: 'ITPA'}, {code: 'PY', name: 'Paraguay', system: 'MCN'}, {code: 'PE', name: 'Peru', system: 'CETCAN'}, {code: 'PH', name: 'Philippines', system: 'AHTN'}, {code: 'PL', name: 'Poland', system: 'TARIC'}, {code: 'PT', name: 'Portugal', system: 'TARIC'}, {code: 'PR', name: 'Puerto Rico', system: 'HTS'}, {code: 'QA', name: 'Qatar', system: 'UCTGCC'}, {code: 'RE', name: 'Reunion', system: 'TARIC'}, {code: 'RO', name: 'Romania', system: 'TARIC'}, {code: 'RU', name: 'Russia', system: 'UCTEEU'}, {code: 'LC', name: 'Saint Lucia', system: 'CARICOM'}, {code: 'SM', name: 'San Marino', system: 'TARIC'}, {code: 'SA', name: 'Saudi Arabia', system: 'UCTGCC'}, {code: 'RS', name: 'Serbia', system: 'HNCTRS'}, {code: 'SG', name: 'Singapore', system: 'STCCED'}, {code: 'SK', name: 'Slovakia', system: 'TARIC'}, {code: 'SI', name: 'Slovenia', system: 'TARIC'}, {code: 'ZA', name: 'South Africa', system: 'SACU'}, {code: 'KR', name: 'South Korea', system: 'HTSKR'}, {code: 'ES', name: 'Spain', system: 'TARIC'}, {code: 'LK', name: 'Sri Lanka', system: 'CTLK'}, {code: 'SE', name: 'Sweden', system: 'TARIC'}, {code: 'CH', name: 'Switzerland', system: 'CTCH'}, {code: 'TW', name: 'Taiwan', system: 'CTCN'}, {code: 'TJ', name: 'Tajikistan', system: 'UCTEEU'}, {code: 'TH', name: 'Thailand', system: 'AHTN'}, {code: 'TT', name: 'Trinidad and Tobago', system: 'CETCC'}, {code: 'TR', name: 'Turkey', system: 'TARIC'}, {code: 'UA', name: 'Ukraine', system: 'CTUA'}, {code: 'AE', name: 'United Arab Emirates', system: 'UCTGCC'}, {code: 'GB', name: 'United Kingdom', system: 'TARIC'}, {code: 'US', name: 'United States', system: 'HTS'}, {code: 'UY', name: 'Uruguay', system: 'MCN'}, {code: 'VE', name: 'Venezuela', system: 'MCN'}, {code: 'VN', name: 'Viet Nam', system: 'AHTN'}, {code: null, name: null, system: 'CTBO'}, {code: null, name: null, system: 'CTKH'}, {code: null, name: null, system: 'CTCO'}, {code: null, name: null, system: 'CTID'}, {code: null, name: null, system: 'CTPE'}, {code: null, name: null, system: 'CTPH'}, {code: null, name: null, system: 'CTTH'}], source: [{code: null, name: null, system: 'CTBO'}, {code: null, name: null, system: 'CTKH'}, {code: null, name: null, system: 'CTCO'}, {code: null, name: null, system: 'CTID'}, {code: null, name: null, system: 'CTPE'}, {code: null, name: null, system: 'CTPH'}, {code: null, name: null, system: 'CTTH'}, {code: 'AX', name: 'Aland', system: 'TARIC'}, {code: 'AR', name: 'Argentina', system: 'MCN'}, {code: 'AW', name: 'Aruba', system: 'CTAW'}, {code: 'AT', name: 'Austria', system: 'TARIC'}, {code: 'BH', name: 'Bahrain', system: 'UCTGCC'}, {code: 'BD', name: 'Bangladesh', system: 'CTBD'}, {code: 'BB', name: 'Barbados', system: 'CETCC'}, {code: 'BY', name: 'Belarus', system: 'UCTEEU'}, {code: 'BE', name: 'Belgium', system: 'TARIC'}, {code: 'BM', name: 'Bermuda', system: 'BCT'}, {code: 'BO', name: 'Bolivia', system: 'CETCAN'}, {code: 'BR', name: 'Brazil', system: 'MCN'}, {code: 'BG', name: 'Bulgaria', system: 'TARIC'}, {code: 'CA', name: 'Canada', system: 'CTCA'}, {code: 'KY', name: 'Cayman Islands', system: 'CTKY'}, {code: 'IO', name: 'Chagos Islands', system: 'TARIC'}, {code: 'CL', name: 'Chile', system: 'CTCL'}, {code: 'CN', name: 'China', system: 'TSCN'}, {code: 'CO', name: 'Colombia', system: 'CETCAN'}, {code: 'CR', name: 'Costa Rica', system: 'CTCACU'}, {code: 'HR', name: 'Croatia', system: 'TARIC'}, {code: 'CY', name: 'Cyprus', system: 'TARIC'}, {code: 'CZ', name: 'Czech', system: 'TARIC'}, {code: 'DK', name: 'Denmark', system: 'TARIC'}, {code: 'DO', name: 'Dominican Republic', system: 'CETDO'}, {code: 'EC', name: 'Ecuador', system: 'CETCAN'}, {code: 'EG', name: 'Egypt', system: 'COMESA'}, {code: 'SV', name: 'El Salvador', system: 'CTCACU'}, {code: 'EE', name: 'Estonia', system: 'TARIC'}, {code: 'FI', name: 'Finland', system: 'TARIC'}, {code: 'FR', name: 'France', system: 'TARIC'}, {code: 'DE', name: 'Germany', system: 'TARIC'}, {code: 'GH', name: 'Ghana', system: 'HSCTGH'}, {code: 'GR', name: 'Greece', system: 'TARIC'}, {code: 'GP', name: 'Guadeloupe', system: 'TARIC'}, {code: 'GT', name: 'Guatemala', system: 'CTCACU'}, {code: 'GG', name: 'Guernsey', system: 'TARIC'}, {code: 'GF', name: 'Guiana', system: 'TARIC'}, {code: 'HN', name: 'Honduras', system: 'CTCACU'}, {code: 'HK', name: 'Hong Kong', system: 'HKSAR'}, {code: 'HU', name: 'Hungary', system: 'TARIC'}, {code: 'IS', name: 'Iceland', system: 'CTIS'}, {code: 'IN', name: 'India', system: 'CTIN'}, {code: 'ID', name: 'Indonesia', system: 'AHTN'}, {code: 'IE', name: 'Ireland', system: 'TARIC'}, {code: 'IL', name: 'Israel', system: 'CTIL'}, {code: 'IT', name: 'Italy', system: 'TARIC'}, {code: 'JM', name: 'Jamaica', system: 'CETCC'}, {code: 'JP', name: 'Japan', system: 'TSJP'}, {code: 'JE', name: 'Jersey', system: 'TARIC'}, {code: 'JO', name: 'Jordan', system: 'CTJO'}, {code: 'KZ', name: 'Kazakhstan', system: 'UCTEEU'}, {code: 'KW', name: 'Kuwait', system: 'UCTGCC'}, {code: 'KG', name: 'Kyrgyzstan', system: 'UCTEEU'}, {code: 'LV', name: 'Latvia', system: 'TARIC'}, {code: 'LB', name: 'Lebanon', system: 'HSCTLB'}, {code: 'LI', name: 'Liechtenstein', system: 'CTCH'}, {code: 'LT', name: 'Lithuania', system: 'TARIC'}, {code: 'LU', name: 'Luxembourg', system: 'TARIC'}, {code: 'MO', name: 'Macao', system: 'CTMO'}, {code: 'MY', name: 'Malaysia', system: 'AHTN'}, {code: 'MT', name: 'Malta', system: 'TARIC'}, {code: 'IM', name: 'Mann', system: 'TARIC'}, {code: 'MQ', name: 'Martinique', system: 'TARIC'}, {code: 'MX', name: 'Mexico', system: 'CTMX'}, {code: 'MC', name: 'Monaco', system: 'TARIC'}, {code: 'MA', name: 'Morocco', system: 'CTMA'}, {code: 'NL', name: 'Netherlands', system: 'TARIC'}, {code: 'NZ', name: 'New Zealand', system: 'TSNZ'}, {code: 'NG', name: 'Nigeria', system: 'CTNG'}, {code: 'NO', name: 'Norway', system: 'HSNO'}, {code: 'OM', name: 'Oman', system: 'UCTGCC'}, {code: 'PK', name: 'Pakistan', system: 'CTPK'}, {code: 'PA', name: 'Panama', system: 'ITPA'}, {code: 'PY', name: 'Paraguay', system: 'MCN'}, {code: 'PE', name: 'Peru', system: 'CETCAN'}, {code: 'PH', name: 'Philippines', system: 'AHTN'}, {code: 'PL', name: 'Poland', system: 'TARIC'}, {code: 'PT', name: 'Portugal', system: 'TARIC'}, {code: 'QA', name: 'Qatar', system: 'UCTGCC'}, {code: 'RE', name: 'Reunion', system: 'TARIC'}, {code: 'RO', name: 'Romania', system: 'TARIC'}, {code: 'RU', name: 'Russia', system: 'UCTEEU'}, {code: 'LC', name: 'Saint Lucia', system: 'CARICOM'}, {code: 'SM', name: 'San Marino', system: 'TARIC'}, {code: 'SA', name: 'Saudi Arabia', system: 'UCTGCC'}, {code: 'RS', name: 'Serbia', system: 'HNCTRS'}, {code: 'SK', name: 'Slovakia', system: 'TARIC'}, {code: 'SI', name: 'Slovenia', system: 'TARIC'}, {code: 'ZA', name: 'South Africa', system: 'SACU'}, {code: 'KR', name: 'South Korea', system: 'HTSKR'}, {code: 'ES', name: 'Spain', system: 'TARIC'}, {code: 'LK', name: 'Sri Lanka', system: 'CTLK'}, {code: 'SE', name: 'Sweden', system: 'TARIC'}, {code: 'CH', name: 'Switzerland', system: 'CTCH'}, {code: 'TW', name: 'Taiwan', system: 'CTCN'}, {code: 'TJ', name: 'Tajikistan', system: 'UCTEEU'}, {code: 'TH', name: 'Thailand', system: 'AHTN'}, {code: 'TT', name: 'Trinidad and Tobago', system: 'CETCC'}, {code: 'TR', name: 'Turkey', system: 'TARIC'}, {code: 'UA', name: 'Ukraine', system: 'CTUA'}, {code: 'AE', name: 'United Arab Emirates', system: 'UCTGCC'}, {code: 'GB', name: 'United Kingdom', system: 'TARIC'}, {code: 'US', name: 'United States', system: 'HTSB'}, {code: 'UY', name: 'Uruguay', system: 'MCN'}, {code: 'VE', name: 'Venezuela', system: 'MCN'}, {code: 'VN', name: 'Viet Nam', system: 'AHTN'}]};

        browser
            .initialize(browser.globals.baseURL + '/api-reference/landedcost/methods/Getcountrieslistings_')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);

        browser.page.endpointSummary()
            .navigateTo('#Getcountrieslistings_-console')
            .navigateTo('#Getcountrieslistings_-console-body .submit')

            .getConsoleText('Getcountrieslistings_', 'responseConsole-GET', function(res) {
                browser.assert.ok(deepEqual(res, expectedResponse),
                    "request for 'try it now' matches expected request");
            });
    },
    'API Reference: LandedCost: getSystems (fill sample data)': function(browser) {
        const expectedRequest = "curl -X GET -H 'Accept: application/json' http://sandbox.landedcost.api.avalara.com/v2/systems?source=FR&destination=US";
        const expectedResponse = {
            export: {
                system: 'TARIC'
            },
            import: {
                system: 'HTS'
            }
        };

        browser
            .initialize(browser.globals.baseURL + '/api-reference/landedcost/methods/GettheSystemforaCountry_')

            .waitForElementVisible('#GettheSystemforaCountry_-console')
            .click('#GettheSystemforaCountry_-console')
            .waitForElementVisible('#GettheSystemforaCountry_-console-body')

            .click('#GettheSystemforaCountry_-console-body .fill-sample-data')
            .waitForElementVisible('#GettheSystemforaCountry_-console-body .console-req-container .code-snippet-code-text')
            .getText('#GettheSystemforaCountry_-console-body .console-req-container .code-snippet-code-text', function(req) {
                /* eslint-disable no-invalid-this */
                this.assert.equal(req.value, expectedRequest);
                /* eslint-enable no-invalid-this */
            })

            .click('#GettheSystemforaCountry_-console-body .submit')
            .waitForElementVisible('#GettheSystemforaCountry_-console-body .console-res-container .code-snippet span:first-of-type')
            .getText('#GettheSystemforaCountry_-console-body .console-res-container .code-snippet', function(res) {
                /* eslint-disable no-invalid-this */
                const response = JSON.parse(res.value);

                this.assert.equal(JSON.stringify(response), JSON.stringify(expectedResponse));
                /* eslint-enable no-invalid-this */
            });
    },
    'API Reference: LandedCost: getHsCodeTrees (fill sample data)': function(browser) {
        const expectedRequest = "curl -X GET -H 'Accept: application/json' http://sandbox.landedcost.api.avalara.com/v2/browse?system=TARIC&parent=TARIC_0102";
        const expectedResponse = [
            {
                hsCode: '',
                description: '- Cattle :',
                name: 'TARIC_0102-1'
            },
            {
                hsCode: '',
                description: '- Buffalo :',
                name: 'TARIC_0102-2'
            }
        ];

        browser
            .initialize(browser.globals.baseURL + '/api-reference/landedcost/methods/Get_BrowseHSData_')

            .waitForElementVisible('#Get_BrowseHSData_-console')
            .click('#Get_BrowseHSData_-console')
            .waitForElementVisible('#Get_BrowseHSData_-console-body')

            .click('#Get_BrowseHSData_-console-body .fill-sample-data')
            .waitForElementVisible('#Get_BrowseHSData_-console-body .console-req-container .code-snippet-code-text')
            .getText('#Get_BrowseHSData_-console-body .console-req-container .code-snippet-code-text', function(req) {
                /* eslint-disable no-invalid-this */
                this.assert.equal(req.value, expectedRequest);
                /* eslint-enable no-invalid-this */
            })

            .click('#Get_BrowseHSData_-console-body .submit')
            .waitForElementVisible('#Get_BrowseHSData_-console-body .console-res-container .code-snippet span:first-of-type')
            .getText('#Get_BrowseHSData_-console-body .console-res-container .code-snippet', function(res) {
                /* eslint-disable no-invalid-this */
                const response = JSON.parse(res.value);

                this.assert.equal(JSON.stringify(response), JSON.stringify(expectedResponse));
                /* eslint-enable no-invalid-this */
            });
    },
    'API Reference: LandedCost: getHsCodeDetailsWithRates (fill sample data)': function(browser) {
        const expectedRequest = "curl -X GET -H 'Accept: application/json' http://sandbox.landedcost.api.avalara.com/v2/hscodes?code=01022940&system=CTCA&destination=CA&source=MX";
        const expectedResponse = [
            {
                codePath: [
                    {
                        hsCode: '01',
                        description: 'LIVE ANIMALS',
                        name: 'HS_01'
                    },
                    {
                        hsCode: '01',
                        description: 'Live animals.',
                        name: 'CTCA_01'
                    },
                    {
                        hsCode: '0102',
                        description: 'Live bovine animals',
                        name: 'HS_0102'
                    },
                    {
                        hsCode: '0102',
                        description: 'Live bovine animals.',
                        name: 'CTCA_0102'
                    },
                    {
                        hsCode: '010229',
                        description: 'Other',
                        name: 'HS_010229'
                    },
                    {
                        hsCode: '010229',
                        description: '-- Other',
                        name: 'CTCA_010229'
                    }
                ]
            }
        ];

        browser
            .initialize(browser.globals.baseURL + '/api-reference/landedcost/methods/GetRateDetails_')

            .waitForElementVisible('#GetRateDetails_-console')
            .click('#GetRateDetails_-console')
            .waitForElementVisible('#GetRateDetails_-console-body')

            .click('#GetRateDetails_-console-body .fill-sample-data')
            .waitForElementVisible('#GetRateDetails_-console-body .console-req-container .code-snippet-code-text')
            .getText('#GetRateDetails_-console-body .console-req-container .code-snippet-code-text', function(req) {
                /* eslint-disable no-invalid-this */
                this.assert.equal(req.value, expectedRequest);
                /* eslint-enable no-invalid-this */
            })

            .click('#GetRateDetails_-console-body .submit')
            .waitForElementVisible('#GetRateDetails_-console-body .console-res-container .code-snippet span:first-of-type')
            .getText('#GetRateDetails_-console-body .console-res-container .code-snippet', function(res) {
                /* eslint-disable no-invalid-this */
                const response = JSON.parse(res.value);

                this.assert.ok(deepEqual(response, expectedResponse),
                    "request for 'try it now' matches expected request");
                /* eslint-enable no-invalid-this */
            });
    },
    'API Reference: LandedCost: getHsCodeDetails (fill sample data)': function(browser) {
        const expectedRequest = "curl -X GET -H 'Accept: application/json' http://sandbox.landedcost.api.avalara.com/v2/hscodes/TARIC/010229?fullpath=true";
        const expectedResponse = [
            {
                hsCode: '01',
                description: 'LIVE ANIMALS',
                name: 'HS_01'
            },
            {
                hsCode: '01',
                description: 'Live animals.',
                name: 'TARIC_01'
            },
            {
                hsCode: '0102',
                description: 'Live bovine animals',
                name: 'HS_0102'
            },
            {
                hsCode: '0102',
                description: 'Live bovine animals.',
                name: 'TARIC_0102'
            },
            {
                hsCode: '010229',
                description: 'Other',
                name: 'HS_010229'
            },
            {
                hsCode: '010229',
                description: '-- Other',
                name: 'TARIC_010229'
            }
        ];

        browser
            .initialize(browser.globals.baseURL + '/api-reference/landedcost/methods/GetRateData_')

            .waitForElementVisible('#GetRateData_-console')
            .click('#GetRateData_-console')
            .waitForElementVisible('#GetRateData_-console-body')

            .click('#GetRateData_-console-body .fill-sample-data')
            .waitForElementVisible('#GetRateData_-console-body .console-req-container .code-snippet-code-text')
            .getText('#GetRateData_-console-body .console-req-container .code-snippet-code-text', function(req) {
                /* eslint-disable no-invalid-this */
                this.assert.equal(req.value, expectedRequest);
                /* eslint-enable no-invalid-this */
            })

            .click('#GetRateData_-console-body .submit')
            .waitForElementVisible('#GetRateData_-console-body .console-res-container .code-snippet span:first-of-type')
            .getText('#GetRateData_-console-body .console-res-container .code-snippet', function(res) {
                /* eslint-disable no-invalid-this */
                const response = JSON.parse(res.value);

                this.assert.ok(deepEqual(response, expectedResponse),
                    "request for 'try it now' matches expected request");
                /* eslint-enable no-invalid-this */
            });
    }
};
