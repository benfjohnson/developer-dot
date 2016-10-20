---
layout: page
title: BearerTokenNotSupported
number: 41
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You are calling an API that does not yet support Bearer Token authentication.

## Example

```json
{
  "code": "BearerTokenNotSupported",
  "target": "Unknown",
  "details": [
    {
      "code": "BearerTokenNotSupported",
      "number": 41,
      "message": "This API does not yet support bearer token authentication.",
      "description": "Avalara is working to establish bearer token authentication throughout all APIs and services.  The API that you have called does not yet support bearer token authentication.  To call this API, please use username:password or accountid:licensekey authentication.",
      "faultCode": "Server",
      "helpLink": "http://developer.avalara.com/avatax/errors/BearerTokenNotSupported",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Avalara is currently working to roll out bearer token authentication for all functionality.  Over time, all API calls will support the new Avalara Identity service which provides support for Bearer token authentication.  This support will gradually enable users to avoid using usernames and passwords for all AvaTax functionality.  

The API you have called does not yet support bearer token, but will be updated to support bearer token authentication in the future.
