---
layout: page
title: PointOfSaleFileSize
number: 250
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The Point-Of-Sale API cannot build this file dynamically.

## Example

```json
{
  "code": "PointOfSaleFileSize",
  "target": "Unknown",
  "details": [
    {
      "code": "PointOfSaleFileSize",
      "number": 250,
      "message": "File too large to calculate.",
      "description": "You have requested a file with -0- records; this file is too large to calculate via the API.  Please contact support to request a periodic data feed.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/PointOfSaleFileSize",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The Point-Of-Sale API you used is limited to building files dynamically.  This API is limited to a maximum number of scenarios; to obtain a file with more scenarios than this limit, please contact support to request a larger data feed.
