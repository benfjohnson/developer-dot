---
layout: page
title: AccountInvalidException
number: 2
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to read information about an account that does not exist.

## Example

```json
{
  "code": "AccountInvalidException",
  "target": "Unknown",
  "details": [
    {
      "code": "AccountInvalidException",
      "number": 2,
      "message": "Account could not be found.",
      "description": "The account -0- does not exist, or you do not have the rights to view it.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AccountInvalidException",
      "severity": "Error"
    }
  ]
}
```

## Explanation

When using the AvaTax API, you only have the access rights to view a limited number of accounts.  All other accounts are blocked from your API and may not be seen or used.

You receive this error message when you have used credentials that do not have access to this account, for example, if you are using the account ID from account 12345, but are attempting to fetch information about account 56789.
