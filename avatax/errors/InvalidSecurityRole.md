---
layout: page
title: InvalidSecurityRole
number: 42
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You do not have permission to create or update users with this security role.

## Example

```json
{
  "code": "InvalidSecurityRole",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidSecurityRole",
      "number": 42,
      "message": "You may not save users with this security role.",
      "description": "You attempted to save a user with security role '-0-'.  You are only allowed to save these security roles: -1-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidSecurityRole",
      "severity": "Error"
    }
  ]
}
```

## Explanation

You may choose from one of the listed security roles only.
