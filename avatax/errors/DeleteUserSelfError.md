---
layout: page
title: DeleteUserSelfError
number: 22
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

A user account may not call DELETE on the user itself.

## Example

    {
      "code": "DeleteUserSelfError",
      "target": "Unknown",
      "details": [
        {
          "code": "DeleteUserSelfError",
          "number": 22,
          "message": "User is trying to delete self.",
          "description": "-0-",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/DeleteUserSelfError",
          "severity": "Error"
        }
      ]
    }

## Explanation

As a user that has successfully authenticated against AvaTax, you may not call DELETE on your own user object.  To delete this user, please use different account credentials.
