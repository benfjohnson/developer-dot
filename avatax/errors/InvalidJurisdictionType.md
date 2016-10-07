---
layout: page
title: InvalidJurisdictionType
number: 140
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You specified a jurisdiction type that is not recognized.

## Example

    {
      "code": "InvalidJurisdictionType",
      "target": "Unknown",
      "details": [
        {
          "code": "InvalidJurisdictionType",
          "number": 140,
          "message": "The value '-0-' is not a valid Avalara-recognized jurisdiction type.",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/InvalidJurisdictionType",
          "severity": "Error"
        }
      ]
    }

## Explanation

For a list of recognized jurisdiction types, please see the Swagger documentation.
