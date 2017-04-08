---
layout: page
title: DeleteUserSelfError
number: 22
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A user account may not call DELETE on the user itself.

## Example

```json
{
  "code": "DeleteUserSelfError",
  "target": "Unknown",
  "details": [
    {
      "code": "DeleteUserSelfError",
      "number": 22,
      "message": "Profile can't be deleted.",
      "description": "You can't delete your own profile. Contact your account administrator for help. -0-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/DeleteUserSelfError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

As a user that has successfully authenticated against AvaTax, you may not call DELETE on your own user object.  To delete this user, please use different account credentials.
