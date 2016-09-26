---
layout: page
title: AvaTax Errors - OldPasswordInvalid
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You attempted to reset a password but you did not provide a correct old password value.

## Example

    {
      "code": "OldPasswordInvalid",
      "target": "Unknown",
      "details": [
        {
          "code": "OldPasswordInvalid",
          "number": 23,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/OldPasswordInvalid",
          "severity": "Error"
        }
      ]
    }

## Explanation

When resetting a password, you must provide a correct old password value.
