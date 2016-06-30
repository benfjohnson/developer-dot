/* global SwaggerUi */
import React from 'react';
import App from './app';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './reducers/reducer';

const store = createStore(reducer);

const staticState = {
    "apiInfo": [
        {
            "name": "Validate credentials",
            "description": "Convenience API to check credentials. This API is purposefully non-performant.",
            "path": "http://localhost:8082/v3/validate-creds",
            "action": "get",
            "curl": "curl -X GET \"http://localhost:8082/v3/validate-creds\" -H \"Accept: application/json\""
        },
        {
            "name": "Calculate landed cost",
            "description": "Returns the fully qualified landed cost calculation for a shipment",
            "path": "http://localhost:8082/v3/calculate",
            "action": "post",
            "postBody": {
                "uiState": {
                    "visible": false
                },
                "charges": {
                    "uiState": {
                        "visible": false
                    },
                    "fieldType": "array",
                    "items": {
                        "fieldType": "string",
                        "value": "",
                        "description": "Charges to include",
                        "enum": [
                            "duties",
                            "taxes",
                            "fees"
                        ]
                    },
                    "value": []
                },
                "date": {
                    "fieldType": "string",
                    "value": "",
                    "description": "Transaction date in ISO 8601 format",
                    "format": "date-time"
                },
                "incoterms": {
                    "fieldType": "string",
                    "value": "",
                    "description": "Terms of sale. Used to determine buyer obligations",
                    "enum": [
                        "DAP",
                        "DDP"
                    ]
                },
                "source": {
                    "uiState": {
                        "visible": false
                    },
                    "country": {
                        "fieldType": "string",
                        "value": "",
                        "example": "US",
                        "enum": [
                            "AX",
                            "AR",
                            "AT",
                            "BE",
                            "BR",
                            "BG",
                            "CA",
                            "IO",
                            "CN",
                            "HR",
                            "CY",
                            "CZ",
                            "DK",
                            "EE",
                            "FI",
                            "FR",
                            "DE",
                            "GR",
                            "GP",
                            "GG",
                            "GF",
                            "HU",
                            "IN",
                            "IE",
                            "IT",
                            "JP",
                            "JE",
                            "LV",
                            "LT",
                            "LU",
                            "MT",
                            "IM",
                            "MQ",
                            "MX",
                            "MC",
                            "NL",
                            "PY",
                            "PL",
                            "PT",
                            "RE",
                            "RO",
                            "SM",
                            "SK",
                            "SI",
                            "ES",
                            "SE",
                            "TK",
                            "GB",
                            "US",
                            "UY",
                            "VE",
                            "AU",
                            "CX",
                            "CC",
                            "NF",
                            "PR",
                            "SG"
                        ]
                    },
                    "region": {
                        "fieldType": "string",
                        "value": "",
                        "description": "Source region of the shipment, in ISO 3166-2 format"
                    }
                },
                "destination": {
                    "uiState": {
                        "visible": false
                    },
                    "country": {
                        "fieldType": "string",
                        "value": "",
                        "example": "CA",
                        "enum": [
                            "AX",
                            "AR",
                            "AU",
                            "AT",
                            "BE",
                            "BR",
                            "BG",
                            "CA",
                            "IO",
                            "CN",
                            "CX",
                            "CC",
                            "HR",
                            "CY",
                            "CZ",
                            "DK",
                            "EE",
                            "FI",
                            "FR",
                            "DE",
                            "GR",
                            "GP",
                            "GG",
                            "GF",
                            "HU",
                            "IN",
                            "IE",
                            "IT",
                            "JP",
                            "JE",
                            "LV",
                            "LT",
                            "LU",
                            "MT",
                            "IM",
                            "MQ",
                            "MX",
                            "MC",
                            "NL",
                            "NF",
                            "PY",
                            "PL",
                            "PT",
                            "PR",
                            "RE",
                            "RO",
                            "SM",
                            "SG",
                            "SK",
                            "SI",
                            "ES",
                            "SE",
                            "TK",
                            "GB",
                            "US",
                            "UY",
                            "VE"
                        ]
                    },
                    "region": {
                        "fieldType": "string",
                        "value": "",
                        "example": "CA-BC",
                        "enum": [
                            "CA-ON",
                            "CA-QC",
                            "CA-NS",
                            "CA-NB",
                            "CA-MB",
                            "CA-BC",
                            "CA-PE",
                            "CA-SK",
                            "CA-AB",
                            "CA-NL",
                            "CA-NT",
                            "CA-YT",
                            "CA-NU"
                        ]
                    }
                },
                "entityType": {
                    "fieldType": "string",
                    "value": "",
                    "example": "B2C",
                    "description": "Type of sale. Can be used to determine applicable tax types",
                    "enum": [
                        "B2C",
                        "B2B"
                    ]
                },
                "currency": {
                    "fieldType": "string",
                    "value": "",
                    "example": "USD",
                    "description": "Currency, in ISO 4217 format",
                    "enum": [
                        "ADF",
                        "ADP",
                        "AED",
                        "AFA",
                        "AFN",
                        "ALL",
                        "AMD",
                        "ANG",
                        "AOA",
                        "AON",
                        "AOR",
                        "ARA",
                        "ARL",
                        "ARP",
                        "ARS",
                        "ATS",
                        "AUD",
                        "AWG",
                        "AZM",
                        "AZN",
                        "BAM",
                        "BBD",
                        "BDT",
                        "BEF",
                        "BGL",
                        "BGN",
                        "BHD",
                        "BIF",
                        "BMD",
                        "BND",
                        "BOB",
                        "BOP",
                        "BOV",
                        "BRB",
                        "BRC",
                        "BRE",
                        "BRL",
                        "BRN",
                        "BRR",
                        "BRZ",
                        "BSD",
                        "BTC",
                        "BTN",
                        "BWP",
                        "BYB",
                        "BYR",
                        "BZD",
                        "CAD",
                        "CDF",
                        "CHE",
                        "CHF",
                        "CHW",
                        "CLE",
                        "CLF",
                        "CLP",
                        "CNH",
                        "CNY",
                        "COP",
                        "COU",
                        "CRC",
                        "CSD",
                        "CSK",
                        "CUC",
                        "CUP",
                        "CVE",
                        "CYP",
                        "CZK",
                        "DDM",
                        "DEM",
                        "DGC",
                        "DJF",
                        "DKK",
                        "DOP",
                        "DZD",
                        "ECS",
                        "ECV",
                        "EEK",
                        "EGP",
                        "ERN",
                        "ESA",
                        "ESB",
                        "ESP",
                        "ETB",
                        "EUR",
                        "FIM",
                        "FJD",
                        "FKP",
                        "FRF",
                        "GBP",
                        "GEL",
                        "GGP",
                        "GHC",
                        "GHS",
                        "GIP",
                        "GMD",
                        "GNE",
                        "GNF",
                        "GQE",
                        "GRD",
                        "GTQ",
                        "GWP",
                        "GYD",
                        "HKD",
                        "HNL",
                        "HRD",
                        "HRK",
                        "HTG",
                        "HUF",
                        "IDR",
                        "IEP",
                        "ILP",
                        "ILR",
                        "ILS",
                        "IMP",
                        "INR",
                        "IQD",
                        "IRR",
                        "ISJ",
                        "ISK",
                        "ITL",
                        "JEP",
                        "JMD",
                        "JOD",
                        "JPY",
                        "KES",
                        "KGS",
                        "KHR",
                        "KID",
                        "KMF",
                        "KPW",
                        "KRW",
                        "KWD",
                        "KYD",
                        "KZT",
                        "LAJ",
                        "LAK",
                        "LBP",
                        "LKR",
                        "LRD",
                        "LSL",
                        "LTC",
                        "LTL",
                        "LUF",
                        "LVL",
                        "LYD",
                        "MAD",
                        "MAF",
                        "MCF",
                        "MDL",
                        "MGA",
                        "MGF",
                        "MKD",
                        "MKN",
                        "MLF",
                        "MMK",
                        "MNT",
                        "MOP",
                        "MRO",
                        "MTL",
                        "MUR",
                        "MVQ",
                        "MVR",
                        "MWK",
                        "MXN",
                        "MXP",
                        "MXV",
                        "MYR",
                        "MZM",
                        "MZN",
                        "NAD",
                        "NFD",
                        "NGN",
                        "NIO",
                        "NLG",
                        "NOK",
                        "NPR",
                        "NZD",
                        "OMR",
                        "PAB",
                        "PEH",
                        "PEI",
                        "PEN",
                        "PGK",
                        "PHP",
                        "PKR",
                        "PLN",
                        "PLZ",
                        "PRB",
                        "PTE",
                        "PTP",
                        "PYG",
                        "QAR",
                        "ROL",
                        "RON",
                        "RSD",
                        "RUB",
                        "RUR",
                        "RWF",
                        "SAR",
                        "SBD",
                        "SCR",
                        "SDD",
                        "SDG",
                        "SDP",
                        "SEK",
                        "SGD",
                        "SHP",
                        "SIT",
                        "SKK",
                        "SLL",
                        "SLS",
                        "SML",
                        "SOS",
                        "SRD",
                        "SRG",
                        "SSP",
                        "STD",
                        "SUR",
                        "SVC",
                        "SYP",
                        "SZL",
                        "THB",
                        "TJR",
                        "TJS",
                        "TMM",
                        "TMT",
                        "TND",
                        "TNF",
                        "TOP",
                        "TPE",
                        "TRL",
                        "TRY",
                        "TTD",
                        "TVD",
                        "TWD",
                        "TZS",
                        "UAH",
                        "UAK",
                        "UGS",
                        "UGX",
                        "USD",
                        "USN",
                        "USS",
                        "UYI",
                        "UYN",
                        "UYU",
                        "UZS",
                        "VAL",
                        "VEB",
                        "VEF",
                        "VND",
                        "VUV",
                        "WST",
                        "XAF",
                        "XAG",
                        "XAU",
                        "XBA",
                        "XBB",
                        "XBC",
                        "XBD",
                        "XBT",
                        "XCD",
                        "XDG",
                        "XDR",
                        "XEU",
                        "XFO",
                        "XFU",
                        "XLT",
                        "XOF",
                        "XPD",
                        "XPF",
                        "XPT",
                        "XSU",
                        "XTS",
                        "XUA",
                        "XXX",
                        "YDD",
                        "YER",
                        "YUD",
                        "YUG",
                        "YUM",
                        "YUN",
                        "YUO",
                        "YUR",
                        "ZAL",
                        "ZAR",
                        "ZMK",
                        "ZMW",
                        "ZRN",
                        "ZRZ",
                        "ZWC",
                        "ZWD",
                        "ZWL",
                        "ZWN",
                        "ZWR"
                    ]
                },
                "shipping": {
                    "uiState": {
                        "visible": false
                    },
                    "cost": {
                        "fieldType": "number",
                        "value": "",
                        "example": 50,
                        "description": "Cost of shipping",
                        "format": "float",
                        "minimum": 0,
                        "maximum": 1000000
                    },
                    "insurance": {
                        "fieldType": "number",
                        "value": "",
                        "example": 50,
                        "description": "Cost of shipping insurance",
                        "format": "float",
                        "minimum": 0,
                        "maximum": 1000000
                    },
                    "mode": {
                        "fieldType": "string",
                        "value": "",
                        "example": "ground",
                        "description": "Shipping method.  Can be used to determine applicable tax types",
                        "enum": [
                            "ground",
                            "air",
                            "ocean"
                        ]
                    },
                    "express": {
                        "fieldType": "boolean",
                        "value": "",
                        "example": true,
                        "description": "Is Shipping method.  Can be used to determine applicable tax types"
                    }
                },
                "discount": {
                    "uiState": {
                        "visible": false
                    },
                    "type": {
                        "fieldType": "string",
                        "value": "",
                        "example": "sales",
                        "description": "The type of discount to apply. Currently, the system only supports sales discounts offered directly to consumers",
                        "enum": [
                            "sales"
                        ]
                    },
                    "rate": {
                        "fieldType": "number",
                        "value": "",
                        "example": 20,
                        "description": "A percentage to discount the shipment or item",
                        "format": "float"
                    },
                    "amount": {
                        "fieldType": "number",
                        "value": "",
                        "example": 8.9,
                        "description": "A flate amount to discount the shipment or item",
                        "format": "float"
                    }
                },
                "items": {
                    "uiState": {
                        "visible": false
                    },
                    "fieldType": "array",
                    "items": {
                        "uiState": {
                            "visible": false
                        },
                        "id": {
                            "fieldType": "string",
                            "value": "",
                            "example": "1",
                            "description": "Transaction line number"
                        },
                        "hsCode": {
                            "fieldType": "string",
                            "value": "",
                            "example": "930700",
                            "description": "The harmonized classification code of the product"
                        },
                        "description": {
                            "fieldType": "string",
                            "value": "",
                            "example": "Swords",
                            "description": "Description of the product"
                        },
                        "price": {
                            "fieldType": "number",
                            "value": "",
                            "example": 100,
                            "description": "Item price of the product",
                            "format": "float",
                            "minimum": 0,
                            "maximum": 1000000
                        },
                        "quantity": {
                            "fieldType": "number",
                            "value": "",
                            "example": 10,
                            "description": "Quantity of the item shipped",
                            "format": "float",
                            "minimum": 1,
                            "maximum": 1000000
                        },
                        "extendedPrice": {
                            "fieldType": "number",
                            "value": "",
                            "description": "Extended price (price * quantity) of the item shipped",
                            "format": "float",
                            "minimum": 0,
                            "maximum": 1000000000000
                        },
                        "units": {
                            "uiState": {
                                "visible": false
                            },
                            "fieldType": "array",
                            "items": {
                                "uiState": {
                                    "visible": false
                                },
                                "name": {
                                    "fieldType": "string",
                                    "value": "",
                                    "example": "kg",
                                    "description": "Name of the unit of measure"
                                },
                                "amount": {
                                    "fieldType": "number",
                                    "value": "",
                                    "example": 10,
                                    "description": "Value associated with this unit of measure",
                                    "format": "float",
                                    "minimum": 0,
                                    "maximum": 1000000
                                },
                                "total": {
                                    "fieldType": "number",
                                    "value": "",
                                    "example": 10,
                                    "description": "Total value associated with this unit of measure (amount * quantity)",
                                    "format": "float",
                                    "minimum": 0,
                                    "maximum": 1000000000000
                                }
                            },
                            "value": []
                        },
                        "discount": {
                            "uiState": {
                                "visible": false
                            },
                            "type": {
                                "fieldType": "string",
                                "value": "",
                                "example": "sales",
                                "description": "The type of discount to apply. Currently, the system only supports sales discounts offered directly to consumers",
                                "enum": [
                                    "sales"
                                ]
                            },
                            "rate": {
                                "fieldType": "number",
                                "value": "",
                                "example": 20,
                                "description": "A percentage to discount the shipment or item",
                                "format": "float"
                            },
                            "amount": {
                                "fieldType": "number",
                                "value": "",
                                "example": 8.9,
                                "description": "A flate amount to discount the shipment or item",
                                "format": "float"
                            }
                        },
                        "rates": {
                            "uiState": {
                                "visible": false
                            },
                            "fieldType": "array",
                            "items": {
                                "uiState": {
                                    "visible": false
                                },
                                "rate": {
                                    "fieldType": "string",
                                    "value": "",
                                    "example": "10%",
                                    "description": "The rate as written in the source material"
                                },
                                "formula": {
                                    "fieldType": "string",
                                    "value": "",
                                    "example": "rate(10%,costbasis())",
                                    "description": "The rate converted to landedCost DSL"
                                },
                                "rateSection": {
                                    "fieldType": "string",
                                    "value": "",
                                    "example": "Import VAT",
                                    "description": "The rate section",
                                    "enum": [
                                        "Import VAT",
                                        "Harmonized Sales Tax",
                                        "General Sales Tax",
                                        "Provincial Sales Tax",
                                        "Goods and Services Tax",
                                        "Consumption Tax"
                                    ]
                                },
                                "type": {
                                    "fieldType": "string",
                                    "value": "",
                                    "description": "The type of duty",
                                    "enum": [
                                        "ad valorem",
                                        "units"
                                    ]
                                }
                            },
                            "value": []
                        },
                        "taxExemptions": {
                            "uiState": {
                                "visible": false
                            },
                            "fieldType": "array",
                            "items": {
                                "fieldType": "string",
                                "value": "",
                                "example": "Import VAT",
                                "description": "The rate section",
                                "enum": [
                                    "Import VAT",
                                    "Harmonized Sales Tax",
                                    "General Sales Tax",
                                    "Provincial Sales Tax",
                                    "Goods and Services Tax",
                                    "Consumption Tax"
                                ]
                            },
                            "value": []
                        },
                        "preferenceProgram": {
                            "fieldType": "string",
                            "value": "",
                            "example": "NAFTA",
                            "description": "Included when a shipment item qualifies for a special rate, such as NAFTA",
                            "enum": [
                                "NAFTA"
                            ]
                        }
                    },
                    "value": []
                }
            },
            "curl": "curl -X POST \"http://localhost:8082/v3/calculate\" -H \"Accept: application/json\""
        },
        {
            "name": "Get rates",
            "description": "Returns rate information given an HS code, source country and destination country",
            "path": "http://localhost:8082/v3/rates",
            "action": "post",
            "postBody": {
                "uiState": {
                    "visible": false
                },
                "fieldType": "array",
                "items": {
                    "uiState": {
                        "visible": false
                    },
                    "hsCode": {
                        "fieldType": "string",
                        "value": "",
                        "example": "930700",
                        "description": "The harmonized classification code of the product"
                    },
                    "source": {
                        "uiState": {
                            "visible": false
                        },
                        "country": {
                            "fieldType": "string",
                            "value": "",
                            "example": "US",
                            "enum": [
                                "AX",
                                "AR",
                                "AT",
                                "BE",
                                "BR",
                                "BG",
                                "CA",
                                "IO",
                                "CN",
                                "HR",
                                "CY",
                                "CZ",
                                "DK",
                                "EE",
                                "FI",
                                "FR",
                                "DE",
                                "GR",
                                "GP",
                                "GG",
                                "GF",
                                "HU",
                                "IN",
                                "IE",
                                "IT",
                                "JP",
                                "JE",
                                "LV",
                                "LT",
                                "LU",
                                "MT",
                                "IM",
                                "MQ",
                                "MX",
                                "MC",
                                "NL",
                                "PY",
                                "PL",
                                "PT",
                                "RE",
                                "RO",
                                "SM",
                                "SK",
                                "SI",
                                "ES",
                                "SE",
                                "TK",
                                "GB",
                                "US",
                                "UY",
                                "VE",
                                "AU",
                                "CX",
                                "CC",
                                "NF",
                                "PR",
                                "SG"
                            ]
                        },
                        "region": {
                            "fieldType": "string",
                            "value": "",
                            "description": "Source region of the shipment, in ISO 3166-2 format"
                        }
                    },
                    "destination": {
                        "uiState": {
                            "visible": false
                        },
                        "country": {
                            "fieldType": "string",
                            "value": "",
                            "example": "CA",
                            "enum": [
                                "AX",
                                "AR",
                                "AU",
                                "AT",
                                "BE",
                                "BR",
                                "BG",
                                "CA",
                                "IO",
                                "CN",
                                "CX",
                                "CC",
                                "HR",
                                "CY",
                                "CZ",
                                "DK",
                                "EE",
                                "FI",
                                "FR",
                                "DE",
                                "GR",
                                "GP",
                                "GG",
                                "GF",
                                "HU",
                                "IN",
                                "IE",
                                "IT",
                                "JP",
                                "JE",
                                "LV",
                                "LT",
                                "LU",
                                "MT",
                                "IM",
                                "MQ",
                                "MX",
                                "MC",
                                "NL",
                                "NF",
                                "PY",
                                "PL",
                                "PT",
                                "PR",
                                "RE",
                                "RO",
                                "SM",
                                "SG",
                                "SK",
                                "SI",
                                "ES",
                                "SE",
                                "TK",
                                "GB",
                                "US",
                                "UY",
                                "VE"
                            ]
                        },
                        "region": {
                            "fieldType": "string",
                            "value": "",
                            "example": "CA-BC",
                            "enum": [
                                "CA-ON",
                                "CA-QC",
                                "CA-NS",
                                "CA-NB",
                                "CA-MB",
                                "CA-BC",
                                "CA-PE",
                                "CA-SK",
                                "CA-AB",
                                "CA-NL",
                                "CA-NT",
                                "CA-YT",
                                "CA-NU"
                            ]
                        }
                    }
                },
                "value": []
            },
            "curl": "curl -X POST \"http://localhost:8082/v3/rates\" -H \"Accept: application/json\""
        },
        {
            "name": "Get rate units",
            "description": "Returns units used in all rate formulas for given HS codes.\nCan optionally be filtered by providing source and destination country codes",
            "path": "http://localhost:8082/v3/units",
            "action": "post",
            "postBody": {
                "uiState": {
                    "visible": false
                },
                "fieldType": "array",
                "items": {
                    "uiState": {
                        "visible": false
                    },
                    "hsCode": {
                        "fieldType": "string",
                        "value": "",
                        "example": "1108199010",
                        "description": "The harmonized classification code of the product"
                    },
                    "source": {
                        "uiState": {
                            "visible": false
                        },
                        "country": {
                            "fieldType": "string",
                            "value": "",
                            "example": "US",
                            "enum": [
                                "AX",
                                "AR",
                                "AT",
                                "BE",
                                "BR",
                                "BG",
                                "CA",
                                "IO",
                                "CN",
                                "HR",
                                "CY",
                                "CZ",
                                "DK",
                                "EE",
                                "FI",
                                "FR",
                                "DE",
                                "GR",
                                "GP",
                                "GG",
                                "GF",
                                "HU",
                                "IN",
                                "IE",
                                "IT",
                                "JP",
                                "JE",
                                "LV",
                                "LT",
                                "LU",
                                "MT",
                                "IM",
                                "MQ",
                                "MX",
                                "MC",
                                "NL",
                                "PY",
                                "PL",
                                "PT",
                                "RE",
                                "RO",
                                "SM",
                                "SK",
                                "SI",
                                "ES",
                                "SE",
                                "TK",
                                "GB",
                                "US",
                                "UY",
                                "VE",
                                "AU",
                                "CX",
                                "CC",
                                "NF",
                                "PR",
                                "SG"
                            ]
                        },
                        "region": {
                            "fieldType": "string",
                            "value": "",
                            "description": "Source region of the shipment, in ISO 3166-2 format"
                        }
                    },
                    "destination": {
                        "uiState": {
                            "visible": false
                        },
                        "country": {
                            "fieldType": "string",
                            "value": "",
                            "example": "CA",
                            "enum": [
                                "AX",
                                "AR",
                                "AU",
                                "AT",
                                "BE",
                                "BR",
                                "BG",
                                "CA",
                                "IO",
                                "CN",
                                "CX",
                                "CC",
                                "HR",
                                "CY",
                                "CZ",
                                "DK",
                                "EE",
                                "FI",
                                "FR",
                                "DE",
                                "GR",
                                "GP",
                                "GG",
                                "GF",
                                "HU",
                                "IN",
                                "IE",
                                "IT",
                                "JP",
                                "JE",
                                "LV",
                                "LT",
                                "LU",
                                "MT",
                                "IM",
                                "MQ",
                                "MX",
                                "MC",
                                "NL",
                                "NF",
                                "PY",
                                "PL",
                                "PT",
                                "PR",
                                "RE",
                                "RO",
                                "SM",
                                "SG",
                                "SK",
                                "SI",
                                "ES",
                                "SE",
                                "TK",
                                "GB",
                                "US",
                                "UY",
                                "VE"
                            ]
                        },
                        "region": {
                            "fieldType": "string",
                            "value": "",
                            "example": "CA-BC",
                            "enum": [
                                "CA-ON",
                                "CA-QC",
                                "CA-NS",
                                "CA-NB",
                                "CA-MB",
                                "CA-BC",
                                "CA-PE",
                                "CA-SK",
                                "CA-AB",
                                "CA-NL",
                                "CA-NT",
                                "CA-YT",
                                "CA-NU"
                            ]
                        }
                    }
                },
                "value": []
            },
            "curl": "curl -X POST \"http://localhost:8082/v3/units\" -H \"Accept: application/json\""
        },
        {
            "name": "Get countries",
            "description": "Returns the countries we currently support, along with most common classification system for both import and export.\n No request parameters are required for this call. The method returns a full list of supported countries",
            "path": "http://localhost:8082/v2/countries",
            "action": "get",
            "curl": "curl -X GET \"http://localhost:8082/v2/countries\" -H \"Accept: application/json\""
        },
        {
            "name": "Get systems",
            "description": "Returns a pair of classification (import and export) systems for trade between two countries",
            "path": "http://localhost:8082/v2/systems",
            "action": "get",
            "queryString": {
                "description": "The two character ISO code for the destination country",
                "required": true,
                "value": "",
                "example": ""
            },
            "curl": "curl -X GET \"http://localhost:8082/v2/systems\" -H \"Accept: application/json\""
        },
        {
            "name": "Get hs code trees",
            "description": "Presents all of the available Harmonized Codes as a browesable tree. Each request specifies a parent node, and the response lists all child nodes of that parent. If no parent node is specified, all root-level nodes will be returned",
            "path": "http://localhost:8082/v2/browse",
            "action": "get",
            "queryString": {
                "description": "The name of the parent node. Note that it is important to use the <i>name<\/i> of the node, as not all nodes have a harmonized code, and the code itself is different than the name",
                "required": false,
                "value": "",
                "example": ""
            },
            "curl": "curl -X GET \"http://localhost:8082/v2/browse\" -H \"Accept: application/json\""
        },
        {
            "name": "Get hs code details including rates",
            "description": "Search for Duty Rates for a harmonized code. Rates are dependant on at least a destination country",
            "path": "http://localhost:8082/v2/hscodes",
            "action": "get",
            "queryString": {
                "description": "An optional filter for rates that limits results to a specific origin country",
                "required": false,
                "value": "",
                "example": ""
            },
            "curl": "curl -X GET \"http://localhost:8082/v2/hscodes\" -H \"Accept: application/json\""
        },
        {
            "name": "Get hs code details",
            "description": "Allows for the traversal of classification system, harmonized codes, and duty rates, allowing the user to browse the available content",
            "path": "http://localhost:8082/v2/hscodes/{system}/{code}",
            "action": "get",
            "queryString": {
                "description": "If present, the response will include the entire chapter, subchapter, etc. and description data for a code",
                "required": false,
                "value": "",
                "example": ""
            },
            "curl": "curl -X GET \"http://localhost:8082/v2/hscodes/{system}/{code}\" -H \"Accept: application/json\""
        }
    ]
};

const buildHtml = (reactHtml, initialState) => (
`---
layout: default
title: "Avalara Developer"
---
<div id="api-console">${reactHtml}</div>
<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>
<script src="public/javascript/build/demo-static.js"></script>
`
);

const staticHtml = renderToString(<Provider store={store}><App api={staticState.apiInfo} error={null}/></Provider>);

console.log(buildHtml(staticHtml, staticState));

