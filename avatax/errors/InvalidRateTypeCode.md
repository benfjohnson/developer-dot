---
layout: page
title: InvalidRateTypeCode
number: 134
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This rate type is not valid in the country provided.

## Example

```json
{
  "code": "InvalidRateTypeCode",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidRateTypeCode",
      "number": 134,
      "message": "You specified an invalid rateTypeCode.",
      "description": "The rateTypeCode '-1-' was not found in country '-0-'.  For a full list of RateType objects, call `/api/v2/definitions/ratetypes`.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidRateTypeCode",
      "severity": "Error"
    }
  ]
}
```

## Explanation

You provided a rate type value that is not valid in the country you specified.

To find a full list of rate types, please call the RateType Definitions API.
