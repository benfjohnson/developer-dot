---
layout: page
title: PasswordLengthInvalid
number: 169
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Your password did not meet length requirements.

## Example

```json
{
  "code": "PasswordLengthInvalid",
  "target": "Unknown",
  "details": [
    {
      "code": "PasswordLengthInvalid",
      "number": 169,
      "message": "Password did not meet length requirements",
      "description": "The password must by between -0- and -1- characters long. Please try again with a password meeting these criteria.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/PasswordLengthInvalid",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Passwords must meet certain complexity criteria.  Please try again with a password within this length range.
