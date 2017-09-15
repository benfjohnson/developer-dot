---
layout: page
title: CommsConfigClientIdBadValue
number: 1401
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The Avalara Communications Client ID value associated with your account is invalid.

## Example

```json
{
  "code": "CommsConfigClientIdBadValue",
  "target": "Unknown",
  "details": [
    {
      "code": "CommsConfigClientIdBadValue",
      "number": 1401,
      "message": "ClientId field for Communications configuration has a bad value.",
      "description": "Client ID value must be an integer greater than 0 in order to create a Communications configuration.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CommsConfigClientIdBadValue",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please contact your customer account manager to ensure that your client ID value is set correctly.
