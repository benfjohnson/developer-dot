---
layout: page
title: PointOfSaleSetup
number: 251
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Invalid parameter provided in the Point-Of-Sale file request.

## Example

```json
{
  "code": "PointOfSaleSetup",
  "target": "Unknown",
  "details": [
    {
      "code": "PointOfSaleSetup",
      "number": 251,
      "message": "Invalid point-of-sale data file request.",
      "description": "The value -0- in your data file request was invalid or unrecognized.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/PointOfSaleSetup",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The value you provided in your point-of-sale file request was invalid or unrecognized.  Please check the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/">online developer documentation</a> for more information about acceptable values.
