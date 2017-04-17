---
layout: page
title: AuthenticationIncomplete
number: 34
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Your API call did not contain authentication information.

## Example

```json
{
  "code": "AuthenticationIncomplete",
  "target": "Unknown",
  "details": [
    {
      "code": "AuthenticationIncomplete",
      "number": 34,
      "message": "Authentication Incomplete.",
      "description": "You must provide an Authorization header of the type Basic or Bearer to authenticate correctly.  -0-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AuthenticationIncomplete",
      "severity": "Exception"
    }
  ]
}
```

## Explanation

AvaTax provides multiple modes by which you can authenticate your API call.  You may provide one of the following:

```
	Basic username:password
	Basic accountid:licensekey
	Bearer token
```

Avalara looks for these values in the HTTP "Authorization" header.  The Basic values are expected to be Base64 encoded as specified by the HTTP standard.

You must provide an HTTP header that matches one of these three patterns in order to authenticate correctly.  Please check your HTTP request headers and verify that you are providing the correct values.

For more information on authentication, please read <a href="/avatax/authentication-in-rest/">Authentication in REST v2</a>.
