---
layout: page
title: LinesNotSpecified
number: 1103
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to create a transaction with zero lines.

## Example

```json
{
  "code": "LinesNotSpecified",
  "target": "Unknown",
  "details": [
    {
      "code": "LinesNotSpecified",
      "number": 1103,
      "message": "No lines specified.",
      "description": "You must provide at least one line to the API.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/LinesNotSpecified",
      "severity": "Error"
    }
  ]
}
```

## Explanation

You called the API with no lines.  Please specify some lines.
