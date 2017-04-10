---
layout: page
title: AuthorizationException
number: 31
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Your account is not authorized to call this API.

## Example

```json
{
  "code": "AuthorizationException",
  "target": "Unknown",
  "details": [
    {
      "code": "AuthorizationException",
      "number": 31,
      "message": "Authorization failed.",
      "description": "This service or operation is not authorized for this account or user.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AuthorizationException",
      "severity": "Exception"
    }
  ]
}
```

## Explanation

Some API calls within AvaTax are enabled for only certain types of users.  Your user account does not allow you to call this API.

For a full list of all APIs you are allowed to call, please use the `GET /api/v2/users/{id}/entitlements` endpoint.

If you need to request a change to your account's permissions, please contact your account administrator.  This is the person within your organization who manages your Avalara account.  They can change the roles and permissions for your account to enable certain features.
