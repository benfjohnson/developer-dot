---
layout: page
title: IncorrectFieldValue
number: 174
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to call the Reporting API with an incorrect field value.

## Example

```json
{
  "code": "IncorrectFieldValue",
  "target": "Unknown",
  "details": [
    {
      "code": "IncorrectFieldValue",
      "number": 174,
      "message": "The parameter -0- with value -1- is invalid and causes -2- error.",
      "description": "Please provide a valid value for parameter -0- - Required: -3-, Type: -4--5-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/IncorrectFieldValue",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please review the error message and try the reporting API again with corrected parameters.
