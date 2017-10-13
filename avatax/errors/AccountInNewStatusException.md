---
layout: page
title: AccountInNewStatusException
number: 1404
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You may not obtain a license key until you have accepted Avalara's terms and conditions.

## Example

```json
{
  "code": "AccountInNewStatusException",
  "target": "Unknown",
  "details": [
    {
      "code": "AccountInNewStatusException",
      "number": 1404,
      "message": "Account is in New Status.",
      "description": "The Account '-0-' is in 'New' status. You must activate the account by reading and accepting Avalara's terms and conditions before resetting the license key. Please call ActivateAccount to enable license keys.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AccountInNewStatusException",
      "severity": "Error"
    }
  ]
}
```

## Explanation

You must call the [ActivateAccount API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Accounts/ActivateAccount/) to accept terms and conditions before you may use the [ResetLicenseKey API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Accounts/AccountResetLicenseKey/).
