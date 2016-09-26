
---
layout: post
title: AvaTax Errors - MustConfirmResetLicenseKey
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# MustConfirmResetLicenseKey

## Summary

When resetting a license key for your account, you must provide a flag that indicates that you really want to reset your license key.

## Example

    {
      "code": "MustConfirmResetLicenseKey",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 141,
          "Summary": "You must set the value 'confirmResetLicenseKey' to true in order to reset your license key.  After you reset your license key, all tax calls using the old license key will fail.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/MustConfirmResetLicenseKey",
          "Name": "MustConfirmResetLicenseKey",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

When you reset your account's license key, any previous license key you had will immediately be invalidated.

Please be careful when calling the reset-license-key API.