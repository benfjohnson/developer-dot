---
layout: page
title: RangeCompareError
number: 7
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You specified an out-of-bounds field value.

## Example

```json
{
  "code": "RangeCompareError",
  "target": "Unknown",
  "details": [
    {
      "code": "RangeCompareError",
      "number": 7,
      "message": "Field -1- is out of bounds.",
      "description": "-1- is expected to be -2- -3-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/RangeCompareError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

AvaTax requires that the field obey certain bounds rules.  You attempted to create or update an object with a value that was out of the permissible bounds.

Please review your object data and correct the values.
