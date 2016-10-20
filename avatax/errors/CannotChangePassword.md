---
layout: page
title: CannotChangePassword
number: 24
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You attempted to change passwords for a user who is not permitted to change their password.

## Example

```json
{
  "code": "CannotChangePassword",
  "target": "Unknown",
  "details": [
    {
      "code": "CannotChangePassword",
      "number": 24,
      "message": "User is not allowed to change password.",
      "description": "-0-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CannotChangePassword",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Certain accounts within AvaTax are reserved and may not have password changes.  These accounts generally do not have passwords and may not have any passwords set.
