---
layout: page
title: InvalidDateRangeError
number: 81
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You specified a date outside of the allowable range.

## Example

```json
{
  "code": "InvalidDateRangeError",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidDateRangeError",
      "number": 81,
      "message": "Invalid date range.",
      "description": "The -0- has to be between -1- and -2-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidDateRangeError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please check your API call and specify a valid date within the defined range.  You may have inadvertently switched the "begin" date with the "end" date.
