---
layout: page
title: DateFormatError
number: 26
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The date value you provided was incorrectly formatted.

## Example

```json
{
  "code": "DateFormatError",
  "target": "Unknown",
  "details": [
    {
      "code": "DateFormatError",
      "number": 26,
      "message": "Dates are only recognized in ISO 8601 format.",
      "description": "The field '-0-' was not recognized as a valid date value.  Valid dates are in the ISO 8601 format.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/DateFormatError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

AvaTax only supports date values in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.  The ISO 8601 format has two variants; one is for date-only and one is for date-plus-time.

A standard ISO 8601 date-only value is in Year-Month-Day format, for example, `2017-03-01`.  It must always have a four digit year, a two digit month, and a two digit day, each separated by hyphens.

An ISO date-plus-time value is in Year-Month-Day followed by Hour:Minute:Second, for example, `2017-03-31T23:04:16`.
