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

    {
      "code": "CannotChangePassword",
      "target": "Unknown",
      "details": [
        {
          "code": "CannotChangePassword",
          "number": 24,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/CannotChangePassword",
          "severity": "Error"
        }
      ]
    }

## Explanation

Certain accounts within AvaTax are reserved and may not have password changes.  These accounts generally do not have passwords and may not have any passwords set.
