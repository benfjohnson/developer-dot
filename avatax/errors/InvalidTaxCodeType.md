---
layout: page
title: AvaTax Errors - InvalidTaxCodeType
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
          "number": 147,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/InvalidTaxCodeType",
          "severity": "Error"
        }
      ]
    }

## Explanation

Please use the API endpoint GET "/api/v2/definitions/taxcodetypes" to get a list of defined tax code types.
