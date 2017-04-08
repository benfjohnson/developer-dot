---
layout: page
title: TaxRateNotAvailableForFreeInThisCountry
number: 800
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The Free TaxRates API is only available in the US.

## Example

```json
{
  "code": "TaxRateNotAvailableForFreeInThisCountry",
  "target": "Unknown",
  "details": [
    {
      "code": "TaxRateNotAvailableForFreeInThisCountry",
      "number": 800,
      "message": "You are trying to get tax rate for free at -0-. It is only available at US for now",
      "description": "Tax rate is not available for free for this countries",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/TaxRateNotAvailableForFreeInThisCountry",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The Free TaxRates API is only available in the United States.
