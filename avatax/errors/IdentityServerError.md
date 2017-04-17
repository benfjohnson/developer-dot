---
layout: page
title: IdentityServerError
number: 36
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A problem was detected with Avalara Identity.

## Example

```json
{
  "code": "IdentityServerError",
  "target": "Unknown",
  "details": [
    {
      "code": "IdentityServerError",
      "number": 36,
      "message": "The Avalara Identity Server failed to authenticate your request.",
      "description": "Revalidate your request and try again.  -0-",
      "faultCode": "Server",
      "helpLink": "http://developer.avalara.com/avatax/errors/IdentityServerError",
      "severity": "Exception"
    }
  ]
}
```

## Explanation

This error indicates that the Avalara Service Reliability Engineering team was alerted to a problem with Avalara Identity.  This error message will not be seen in normal operation.

No action is required for this error message.  This error has already been logged and forwarded to Avalara's Service Reliability Engineering team.
