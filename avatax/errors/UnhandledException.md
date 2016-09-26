
---
layout: post
title: AvaTax Errors - UnhandledException
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# UnhandledException

## Summary

The API you attempted to call resulted in an unhandled exception within Avalara AvaTax.

## Example

    {
      "code": "UnhandledException",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 50,
          "Summary": "Unhandled exception was hit during this operation.",
          "Details": "-0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/UnhandledException",
          "Name": "UnhandledException",
          "RefersTo": null,
          "Severity": "Exception",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

This code indicates that an error message has been escalated to Avalara operations team members for analysis.  You should not experience this error code during normal operations.

There is no action required of you when you experience this error message.  This error has already been logged and escalated to Avalara's service reliability engineering team.