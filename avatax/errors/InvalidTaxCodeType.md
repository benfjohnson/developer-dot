---
layout: page
title: InvalidTaxCodeType
number: 147
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You specified a tax code type that is not recognized by Avalara.

## Example

    {
      "code": "InvalidTaxCodeType",
      "target": "Unknown",
      "details": [
        {
          "code": "InvalidTaxCodeType",
          "number": 0,
          "message": "The TaxCodeType -0- is not valid.",
          "description": "Please call /api/v2/definitions/taxcodetypes for a list of valid taxcodetypes.",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/InvalidTaxCodeType",
          "severity": "Error"
        }
      ]
    }

## Explanation

Please use the API endpoint GET "/api/v2/definitions/taxcodetypes" to get a list of defined tax code types.
