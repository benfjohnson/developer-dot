
---
layout: post
title: AvaTax Errors - RateDependsTaxabilityError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# RateDependsTaxabilityError

## Summary

You created a tax rule with a RateDepends option, but that rule is not a TaxabilityRule.

## Example

    {
      "code": "RateDependsTaxabilityError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 132,
          "Summary": "RateDepends option only valid for TaxRuleType 4 (Taxability Rule).",
          "Details": "-0- -1- -2- -3- -4- -5-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/RateDependsTaxabilityError",
          "Name": "RateDependsTaxabilityError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

The "RateDepends" option is only valid for Tax Rules of type 4 - TaxabilityRule.  Please create this rule as a taxability rule or remove the RateDepends option.