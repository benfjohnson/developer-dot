---
layout: page
title: RangeSetError
number: 8
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to set a value that was not permitted.

## Example

```json
{
  "code": "RangeSetError",
  "target": "Unknown",
  "details": [
    {
      "code": "RangeSetError",
      "number": 8,
      "message": "-1- must be one of the following: -2-.",
      "description": "-0-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/RangeSetError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The field you attempted to set has a value that is limited to a specific range of values.

To proceed, you should review the field and compare its list of values to the defined list of values.
