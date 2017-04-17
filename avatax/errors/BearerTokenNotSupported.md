---
layout: page
title: BearerTokenNotSupported
number: 41
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Bearer Token authentication is not yet supported with this API.

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

The API you are calling has not yet been updated to work with Bearer Token authentication.

Avalara is currently working to implement Bearer Token authentication across all of its applications.  Please see <a href="http://developer.avalara.com/avatax/authentication-in-rest/">Authentication In REST</a> for more information about authentication.
