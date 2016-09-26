
---
layout: post
title: AvaTax Errors - PasswordMinComplexityError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# PasswordMinComplexityError

## Summary

This password does not meet the complexity requirements set by AvaTax.

## Example

    {
      "code": "PasswordMinComplexityError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 12,
          "Summary": "Passwords must be a combination of upper/lower case, numbers, and non-alphanumeric characters.",
          "Details": null,
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/PasswordMinComplexityError",
          "Name": "PasswordMinComplexityError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": "An invalid password was specified."
        }
      ]
    }

## Explanation

Passwords for AvaTax must obey certain complexity requirements. 

This password is not permitted because it lacks certain complexity features.