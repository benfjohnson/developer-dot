
---
layout: post
title: AvaTax Errors - DeleteUserSelfError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# DeleteUserSelfError

## Summary

A user account may not call DELETE on the user itself.

## Example

    {
      "code": "DeleteUserSelfError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 22,
          "Summary": "User is trying to delete self.",
          "Details": "-0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/DeleteUserSelfError",
          "Name": "DeleteUserSelfError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

As a user that has successfully authenticated against AvaTax, you may not call DELETE on your own user object.  To delete this user, please use different account credentials.