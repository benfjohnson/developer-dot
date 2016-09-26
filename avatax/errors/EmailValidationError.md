
---
layout: post
title: AvaTax Errors - EmailValidationError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# EmailValidationError

## Summary

You attempted to provide an email address that does not conform to email address standards.

## Example

    {
      "code": "EmailValidationError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 15,
          "Summary": "The specified email address was not valid.",
          "Details": "-0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/EmailValidationError",
          "Name": "EmailValidationError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

An email address is in the format:

    user@domain.org

Where domain.org refers to an existing DNS record.

Please check your email address and try again.