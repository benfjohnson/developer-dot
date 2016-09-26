
---
layout: post
title: AvaTax Errors - RateTypeNotSupported
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# RateTypeNotSupported

## Summary

You attempted to choose a rate type that is not supported for the country you selected.

## Example

    {
      "code": "RateTypeNotSupported",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 135,
          "Summary": "RateTypeId -1- not supported for country '-0-'.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/RateTypeNotSupported",
          "Name": "RateTypeNotSupported",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

AvaTax recognizes certain rate types for certain countries.  If you attempt to create a tax code or tax rule for a country that does not permit a specific rate type, you will see this error.
