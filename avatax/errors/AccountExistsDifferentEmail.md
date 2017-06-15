---
layout: page
title: AccountExistsDifferentEmail
number: 607
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

An account with this username already exists.

## Example

```json
{
  "code": "AccountExistsDifferentEmail",
  "target": "Unknown",
  "details": [
    {
      "code": "AccountExistsDifferentEmail",
      "number": 607,
      "message": "User already exists in Avalara Identity but with a different email address.",
      "description": "User -0- already exists in Avalara Identity but with a different email address.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AccountExistsDifferentEmail",
      "severity": "Error"
    }
  ]
}
```

## Explanation

An account for this username already exists, but it is attached to a different email address.

Please choose a different username for your user.
