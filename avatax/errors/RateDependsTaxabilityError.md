---
layout: page
title: RateDependsTaxabilityError
number: 132
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You created a tax rule with a RateDepends option, but that rule is not a TaxabilityRule.

## Example

```json
{
  "code": "RateDependsTaxabilityError",
  "target": "Unknown",
  "details": [
    {
      "code": "RateDependsTaxabilityError",
      "number": 132,
      "message": "RateDepends option is only valid for TaxRuleType 4 (Taxability Rule).",
      "description": "-0- -1- -2- -3- -4- -5-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/RateDependsTaxabilityError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The "RateDepends" option is only valid for Tax Rules of type `4 - TaxabilityRule`.  Please create this rule as a taxability rule or remove the RateDepends option.
