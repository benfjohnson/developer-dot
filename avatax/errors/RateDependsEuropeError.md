
---
layout: post
title: AvaTax Errors - RateDependsEuropeError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# RateDependsEuropeError

## Summary

The RateDepends option is only valid for countries in the European Union.

## Example

    {
      "code": "RateDependsEuropeError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 133,
          "Summary": "RateDepends option only valid for countries in the European Union.",
          "Details": "-0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/RateDependsEuropeError",
          "Name": "RateDependsEuropeError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

You attempted to create a TaxRule using the RateDepends option for a country that is outside of the European Union.

Please remove the RateDepends option or change the country code to be within the EU.