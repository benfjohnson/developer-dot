---
layout: page
title: BasicAuthIncorrect
number: 35
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Your Basic authorization header was not encoded correctly.

## Example

```json
{
  "code": "BasicAuthIncorrect",
  "target": "Unknown",
  "details": [
    {
      "code": "BasicAuthIncorrect",
      "number": 35,
      "message": "Incorrect Base header format.",
      "description": "The Basic header must be in the format 'Basic (Base64Encoded(value))' where Value is either 'username' + ':' + 'password' or 'accountid' + ':' + 'licensekey'.  -0-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/BasicAuthIncorrect",
      "severity": "Exception"
    }
  ]
}
```

## Explanation

The published standard for HTTP authorization headers specifies that Basic authentication is performed by setting the "Authorization" header in the HTTP request to the following string:

```
Basic Base64(credential + ':' + secret)
```

An example header looks like this:

```
Basic AhD72dhkS8=
```
	
In the HTTP request you provided to AvaTax, your information was not correctly encoded.  Common troubleshooting steps:

<ul class="normal">
<li>Did you forget to provide either a username or a password?</li>
<li>Did you remember to put a colon in between your username and your password?</li>
<li>Did you forget to Base64 encode the resulting string?</li>
<li>Did you accidentally Base64 encode the word "Basic"?</li>
<li>Are you using a library that automatically handles this encoding for you, and you accidentally encoded the value twice?</li>
</ul>

For more information on authentication, please read <a href="/avatax/authentication-in-rest/">Authentication in REST v2</a>.
