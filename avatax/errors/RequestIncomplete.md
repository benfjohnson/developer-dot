---
layout: page
title: RequestIncomplete
number: 167
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Your API request contained unprintable characters or was incomplete.

## Example

```json
{
  "code": "RequestIncomplete",
  "target": "Unknown",
  "details": [
    {
      "code": "RequestIncomplete",
      "number": 167,
      "message": "Request is incomplete",
      "description": "The request was cancelled before completed or an unprintable character was included in the body",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/RequestIncomplete",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Your API call contained an invalid request body.  This can occur if it contains unicode characters that cannot be represented correctly by AvaTax, or if the API call was interrupted.
