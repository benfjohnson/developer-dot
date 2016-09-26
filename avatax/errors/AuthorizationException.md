
---
layout: post
title: AvaTax Errors - AuthorizationException
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# AuthorizationException

## Summary

Your account is not authorized to call this API.

## Example

    {
      "code": "AuthorizationException",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 31,
          "Summary": "This service or operation is not authorized for this account or user.",
          "Details": "-0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/AuthorizationException",
          "Name": "AuthorizationException",
          "RefersTo": null,
          "Severity": "Exception",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

Some API calls within AvaTax are enabled for only certain types of users.  Your user account does not allow you to call this API.

For a full list of all APIs you are allowed to call, please use the /api/v2/users/{id}/entitlements endpoint.

If you need to request a change to your account's permissions, please contact your account administrator.  This is the person within your organization who manages your Avalara account.  They can change the roles and permissions for your account to enable certain features.
