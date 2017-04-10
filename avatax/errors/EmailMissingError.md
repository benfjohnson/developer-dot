---
layout: page
title: EmailMissingError
number: 16
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You must provide an email address with this request.

## Example

```json
{
  "code": "EmailMissingError",
  "target": "Unknown",
  "details": [
    {
      "code": "EmailMissingError",
      "number": 16,
      "message": "Missing email address.",
      "description": "A required email address was not provided.  -0-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/EmailMissingError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

This request requires that you provide an email address.  Please provide a valid email address.
