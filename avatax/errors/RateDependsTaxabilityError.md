---
layout: page
title: RateDependsTaxabilityError
number: 132
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You created a tax rule with a RateDepends option, but that rule is not a TaxabilityRule.

## Example

    {
      "code": "RateDependsTaxabilityError",
      "target": "Unknown",
      "details": [
        {
          "code": "RateDependsTaxabilityError",
          "number": 132,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/RateDependsTaxabilityError",
          "severity": "Error"
        }
      ]
    }

## Explanation

The "RateDepends" option is only valid for Tax Rules of type 4 - TaxabilityRule.  Please create this rule as a taxability rule or remove the RateDepends option.
