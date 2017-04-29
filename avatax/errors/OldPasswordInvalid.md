---
layout: page
title: OldPasswordInvalid
number: 23
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to reset a password but you did not provide a correct old password value.

## Example

```json
{
  "code": "OldPasswordInvalid",
  "target": "Unknown",
  "details": [
    {
      "code": "OldPasswordInvalid",
      "number": 23,
      "message": "Invalid password.",
      "description": "-0-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/OldPasswordInvalid",
      "severity": "Error"
    }
  ]
}
```

## Explanation

When resetting a password, you must provide a correct old password value.
