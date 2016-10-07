---
layout: page
title: InactiveUserError
number: 33
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

This user account is currently inactive.

## Example

    {
      "code": "InactiveUserError",
      "target": "Unknown",
      "details": [
        {
          "code": "InactiveUserError",
          "number": 33,
          "message": "The user '-0-' is not currently active.  Please contact your customer account manager to reactivate this user.",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/InactiveUserError",
          "severity": "Exception"
        }
      ]
    }

## Explanation

Your user account may be inactive for the following reasons:
* You were disabled by a system administrator
* You were disabled by your account administrator
* You attempted to login using an incorrect password too many times and were automatically disabled

For assistance, you may try to reset your password using the "Forgot My Password" feature online: https://admin-avatax.avalara.net/ForgotPassword.aspx

If this does not work, please contact your account administrator.  This is the person within your company who is the owner of your Avalara AvaTax relationship.  This person can edit your account and grant you a new password.
