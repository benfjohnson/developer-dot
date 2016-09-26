
---
layout: post
title: AvaTax Errors - CannotChangePassword
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# CannotChangePassword

## Summary

You attempted to change passwords for a user who is not permitted to change their password.

## Example

    {
      "code": "CannotChangePassword",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 24,
          "Summary": "User is not allowed to change password.",
          "Details": "-0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/CannotChangePassword",
          "Name": "CannotChangePassword",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

Certain accounts within AvaTax are reserved and may not have password changes.  These accounts generally do not have passwords and may not have any passwords set.
