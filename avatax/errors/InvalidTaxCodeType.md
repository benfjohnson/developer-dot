
---
layout: post
title: AvaTax Errors - InvalidTaxCodeType
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# InvalidTaxCodeType

## Summary

You specified a tax code type that is not recognized by Avalara.

## Example

    {
      "code": "InvalidTaxCodeType",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 147,
          "Summary": "The TaxCodeType -0- is not valid.",
          "Details": "Please call /api/v2/definitions/taxcodetypes for a list of valid taxcodetypes.",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/InvalidTaxCodeType",
          "Name": "InvalidTaxCodeType",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

Please use the API endpoint GET "/api/v2/definitions/taxcodetypes" to get a list of defined tax code types.