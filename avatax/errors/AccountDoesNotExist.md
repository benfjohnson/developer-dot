---
layout: page
title: AccountDoesNotExist
number: 172
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to modify an account that does not exist.

## Example

```json
{
  "code": "AccountDoesNotExist",
  "target": "Unknown",
  "details": [
    {
      "code": "AccountDoesNotExist",
      "number": 172,
      "message": "Account not found.",
      "description": "The AccountId: -0- doesn't exist. Please provide an account that exists.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AccountDoesNotExist",
      "severity": "Error"
    }
  ]
}
```

## Explanation

This error message occurs when working with registrar credentials.  You attempted to work with an account that does not exist.  Please check your account number and try the API call again with a corrected account ID.
