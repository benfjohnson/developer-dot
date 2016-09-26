---
layout: page
title: AvaTax Errors - MustConfirmResetLicenseKey
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

When resetting a license key for your account, you must provide a flag that indicates that you really want to reset your license key.

## Example

    {
      "code": "MustConfirmResetLicenseKey",
      "target": "Unknown",
      "details": [
        {
          "code": "MustConfirmResetLicenseKey",
          "number": 141,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/MustConfirmResetLicenseKey",
          "severity": "Error"
        }
      ]
    }

## Explanation

When you reset your account's license key, any previous license key you had will immediately be invalidated.

Please be careful when calling the reset-license-key API.
