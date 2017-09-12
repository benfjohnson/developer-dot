---
layout: page
title: MustConfirmResetLicenseKey
number: 141
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

When resetting a license key for your account, you must provide a flag that indicates that you really want to reset your license key.

## Example

```json
{
  "code": "MustConfirmResetLicenseKey",
  "target": "Unknown",
  "details": [
    {
      "code": "MustConfirmResetLicenseKey",
      "number": 141,
      "message": "License key resets must be confirmed.",
      "description": "You must set the value 'confirmResetLicenseKey' to true in order to reset your license key.  After you reset your license key, all tax calls using the old license key will fail.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/MustConfirmResetLicenseKey",
      "severity": "Error"
    }
  ]
}
```

## Explanation

When you reset your account's license key, any previous license key you had will immediately be invalidated.

Please be careful when calling the reset-license-key API.
