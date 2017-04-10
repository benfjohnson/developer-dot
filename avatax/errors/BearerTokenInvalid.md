---
layout: page
title: BearerTokenInvalid
number: 37
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The Bearer Token that you used for authentication was not valid.

## Example

```json
{
  "code": "BearerTokenInvalid",
  "target": "Unknown",
  "details": [
    {
      "code": "BearerTokenInvalid",
      "number": 37,
      "message": "The Bearer token you provided was not recognized by Avalara Identity.",
      "description": "If you have received a bearer token from Avalara Identity, this token may have expired.  Please contact Avalara Identity and request a refreshed token.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/BearerTokenInvalid",
      "severity": "Exception"
    }
  ]
}
```

## Explanation

You provided a bearer token that was not recognized by Avalara Identity.  Bearer tokens expire from time to time and may need to be refreshed.  

Please contact Avalara Identity and request an updated token.
