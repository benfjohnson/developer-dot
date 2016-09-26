
---
layout: post
title: AvaTax Errors - PasswordError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# PasswordError

## Summary

The password you attempted to provide did not meet certain requirements.

## Example

    {
      "code": "PasswordError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 10,
          "Summary": "Password must be 6-50 characters with no spaces.",
          "Details": null,
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/PasswordError",
          "Name": "PasswordError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": "An invalid password was specified."
        }
      ]
    }

## Explanation

AvaTax passwords must meet certain complexity requirements.

The password you attempted to provide did not meet those requirements.
