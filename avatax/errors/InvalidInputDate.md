---
layout: page
title: InvalidInputDate
number: 252
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to set a date value that must be within a range, but your value was outside of the range.

## Example

```json
{
  "code": "InvalidInputDate",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidInputDate",
      "number": 252,
      "message": "The date -0- input you provided is not valid for building TaxRates file.",
      "description": "Please provide a date that between -1- and -2-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidInputDate",
      "severity": "Error"
    }
  ]
}
```

## Explanation

AvaTax requires the value of this field to be within the defined parameters.  Please review the data you attempted to upload and correct it so that it is within the specified range.
