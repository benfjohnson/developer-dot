---
layout: page
title: BearerTokenParseUserIdError
number: 160
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The bearer token you provided could not be parsed.

## Example

```json
{
  "code": "BearerTokenParseUserIdError",
  "target": "Unknown",
  "details": [
    {
      "code": "BearerTokenParseUserIdError",
      "number": 160,
      "message": "Unable to parse Avalara user ID.",
      "description": "The Avalara User ID could not be parsed during Avalara Identity validation.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/BearerTokenParseUserIdError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

You have obtained an OAuth token from Avalara Identity, but it did not represent a user with an AvaTax account.

This can occur if you have created a token using a different service or process that is not compatible with AvaTax.

In the terminology of OAuth 2.0, you have a `token` that lacks the correct `scope` and `claims` to be used with AvaTax.
