---
layout: page
title: PasswordError
number: 10
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

The password you attempted to provide did not meet certain requirements.

## Example

    {
      "code": "PasswordError",
      "target": "Unknown",
      "details": [
        {
          "code": "PasswordError",
          "number": 0,
          "message": "Password must be 6-50 characters with no spaces.",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/PasswordError",
          "severity": "Error"
        }
      ]
    }

## Explanation

AvaTax passwords must meet certain complexity requirements.

The password you attempted to provide did not meet those requirements.
