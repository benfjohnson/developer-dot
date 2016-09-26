---
layout: page
title: PasswordMinLengthError
number: 11
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

Your password must be a minimum of 8 characters in length.

## Example

    {
      "code": "PasswordMinLengthError",
      "target": "Unknown",
      "details": [
        {
          "code": "PasswordMinLengthError",
          "number": 0,
          "message": "Password must be at least 8 characters long.",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/PasswordMinLengthError",
          "severity": "Error"
        }
      ]
    }

## Explanation

Passwords for AvaTax must obey certain complexity requirements. 

This password is not permitted because it is too short.
