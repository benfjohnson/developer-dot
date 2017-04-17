---
layout: page
title: CannotChangePassword
number: 24
categories: [AvaTax Error Codes]
disqus: 1
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
      "message": "The password of this user cannot change.",
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
