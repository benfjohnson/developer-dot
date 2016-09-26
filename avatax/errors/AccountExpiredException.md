---
layout: page
title: AccountExpiredException
number: 39
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

Your AvaTax account has expired, or is not yet enabled.  You may need to contact your customer account manager for assistance.

## Example

    {
      "code": "AccountExpiredException",
      "target": "Unknown",
      "details": [
        {
          "code": "AccountExpiredException",
          "number": 39,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/AccountExpiredException",
          "severity": "Error"
        }
      ]
    }

## Explanation

Your AvaTax account is not currently enabled.  

Possible troubleshooting steps:

* Are you using outdated credentials?
* Are you connecting to the sandbox server when you intend to contact the production server, or vice versa?
