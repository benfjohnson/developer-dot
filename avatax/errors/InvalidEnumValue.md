---
layout: page
title: InvalidEnumValue
number: 164
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You specified an invalid value for a field.

## Example

```json
{
  "code": "InvalidEnumValue",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidEnumValue",
      "number": 164,
      "message": "The field '-0-' has an incorrect value.",
      "description": "The value '-1-' for the field '-0-' is invalid.  Acceptable values are: -2-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidEnumValue",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The field you attempted to provide is an `enumerated value field`.  This means that the field only has a limited list of permitted values.

Please review the list of values in the error message and choose a correct value.
