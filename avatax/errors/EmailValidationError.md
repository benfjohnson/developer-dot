---
layout: page
title: EmailValidationError
number: 15
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
          "message": "The specified email address was not valid.",
          "description": "-0-",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/EmailValidationError",
          "severity": "Error"
        }
      ]
    }

## Explanation

An email address is in the format `user@domain.org`, where domain.org refers to an existing DNS record.

Please check your email address and try again.
