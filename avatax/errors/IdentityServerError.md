
---
layout: post
title: AvaTax Errors - IdentityServerError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# IdentityServerError

## Summary

A problem was detected with Avalara Identity.

## Example

    {
      "code": "IdentityServerError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 36,
          "Summary": "The Avalara Identity Server was not available to authenticate your request.",
          "Details": "-0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/IdentityServerError",
          "Name": "IdentityServerError",
          "RefersTo": null,
          "Severity": "Exception",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

This error indicates that the Avalara Service Reliability Engineering team was alerted to a problem with Avalara Identity.  This error message will not be seen in normal operation.

No action is required for this error message.  This error has already been logged and forwarded to Avalara's Service Reliability Engineering team.