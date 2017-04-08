---
layout: page
title: VisibilityError
number: 40
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to request an object from AvaTax that you are not permitted to see.

## Example

```json
{
  "code": "VisibilityError",
  "target": "Unknown",
  "details": [
    {
      "code": "VisibilityError",
      "number": 40,
      "message": "An object visibility exception occurred.",
      "description": "The following object URL was flagged as not visible: -0-",
      "faultCode": "Server",
      "helpLink": "http://developer.avalara.com/avatax/errors/VisibilityError",
      "severity": "Exception"
    }
  ]
}
```

## Explanation

This error occurs when you fetch an object from AvaTax that is not designated as visible to your current user account.

This error should not occur in normal operation and represents a security log that has been transmitted to Avalara's security incident team.

You do not need to take any action about this error; if this error recurs more than once, please consider adjusting your fetch request.
