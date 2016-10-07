---
layout: page
title: RateTypeNotSupported
number: 135
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You attempted to choose a rate type that is not supported for the country you selected.

## Example

    {
      "code": "RateTypeNotSupported",
      "target": "Unknown",
      "details": [
        {
          "code": "RateTypeNotSupported",
          "number": 135,
          "message": "RateTypeId -1- not supported for country '-0-'.",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/RateTypeNotSupported",
          "severity": "Error"
        }
      ]
    }

## Explanation

AvaTax recognizes certain rate types for certain countries.  If you attempt to create a tax code or tax rule for a country that does not permit a specific rate type, you will see this error.
