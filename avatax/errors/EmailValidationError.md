---
layout: page
title: AvaTax Errors - EmailValidationError
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You attempted to provide an email address that does not conform to email address standards.

## Example

    {
      "code": "EmailValidationError",
      "target": "Unknown",
      "details": [
        {
          "code": "EmailValidationError",
          "number": 15,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/EmailValidationError",
          "severity": "Error"
        }
      ]
    }

## Explanation

An email address is in the format:

    user@domain.org

Where domain.org refers to an existing DNS record.

Please check your email address and try again.
