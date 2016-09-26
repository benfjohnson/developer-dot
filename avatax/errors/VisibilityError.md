
---
layout: post
title: AvaTax Errors - VisibilityError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# VisibilityError

## Summary

You attempted to request an object from AvaTax that you are not permitted to see.

## Example

    {
      "code": "VisibilityError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 40,
          "Summary": "An object visibility exception occurred.",
          "Details": "The following object URL was flagged as not visible: -0-",
          "FaultCode": "Server",
          "HelpLink": "http://developer.avalara.com/avatax/errors/VisibilityError",
          "Name": "VisibilityError",
          "RefersTo": null,
          "Severity": "Exception",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

This error occurs when you fetch an object from AvaTax that is not designated as visible to your current user account.

This error should not occur in normal operation and represents a security log that has been transmitted to Avalara's security incident team.

You do not need to take any action about this error; if this error recurs more than once, please consider adjusting your fetch request.