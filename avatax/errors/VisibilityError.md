---
layout: page
title: AvaTax Errors - VisibilityError
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You attempted to request an object from AvaTax that you are not permitted to see.

## Example

    {
      "code": "VisibilityError",
      "target": "Unknown",
      "details": [
        {
          "code": "VisibilityError",
          "number": 40,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/VisibilityError",
          "severity": "Error"
        }
      ]
    }

## Explanation

This error occurs when you fetch an object from AvaTax that is not designated as visible to your current user account.

This error should not occur in normal operation and represents a security log that has been transmitted to Avalara's security incident team.

You do not need to take any action about this error; if this error recurs more than once, please consider adjusting your fetch request.
