---
layout: page
title: UnhandledException
number: 50
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The API you attempted to call resulted in an unhandled exception within Avalara AvaTax.

## Example

```json
{
  "code": "UnhandledException",
  "target": "Unknown",
  "details": [
    {
      "code": "UnhandledException",
      "number": 50,
      "message": "An invalid exception handler routine has been detected.",
      "description": "This error has been logged and reported to Avalara system administrators.  No action is required.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/UnhandledException",
      "severity": "Exception"
    }
  ]
}
```

## Explanation

This code indicates that an error message has been escalated to Avalara operations team members for analysis.  You should not experience this error code during normal operations.

There is no action required of you when you experience this error message.  This error has already been logged and escalated to Avalara's service reliability engineering team.
