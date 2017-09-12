---
layout: page
title: RateTypeNotSupported
number: 135
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to choose a rate type that is not supported for the country you selected.

## Example

```json
{
  "code": "RateTypeNotSupported",
  "target": "Unknown",
  "details": [
    {
      "code": "RateTypeNotSupported",
      "number": 135,
      "message": "RateType not supported in this country.",
      "description": "The RateTypeId -1- is not supported for country '-0-'.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/RateTypeNotSupported",
      "severity": "Error"
    }
  ]
}
```

## Explanation

AvaTax recognizes certain rate types for certain countries.  If you attempt to create a tax code or tax rule for a country that does not permit a specific rate type, you will see this error.
