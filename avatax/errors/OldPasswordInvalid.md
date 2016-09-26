
---
layout: post
title: AvaTax Errors - OldPasswordInvalid
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# OldPasswordInvalid

## Summary

You attempted to reset a password but you did not provide a correct old password value.

## Example

    {
      "code": "OldPasswordInvalid",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 23,
          "Summary": "Existing password is invalid.",
          "Details": "-0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/OldPasswordInvalid",
          "Name": "OldPasswordInvalid",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

When resetting a password, you must provide a correct old password value.