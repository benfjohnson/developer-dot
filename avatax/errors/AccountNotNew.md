---
layout: page
title: AccountNotNew
number: 168
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Only accounts in 'New' status may be activated.

## Example

```json
{
  "code": "AccountNotNew",
  "target": "Unknown",
  "details": [
    {
      "code": "AccountNotNew",
      "number": 168,
      "message": "The account is not new",
      "description": "Unable to activate account '-0-'.  The account is not new.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AccountNotNew",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The [ActivateAccount API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Accounts/ActivateAccount/) is used to activate an account to begin working with AvaTax.

You may only call ActivateAccount on an account that is in `New` status.  An account that is in a status other than `New` has already accepted terms and conditions.
