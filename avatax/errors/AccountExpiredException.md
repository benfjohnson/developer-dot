
---
layout: post
title: AvaTax Errors - AccountExpiredException
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# AccountExpiredException

## Summary

Your AvaTax account has expired, or is not yet enabled.  You may need to contact your customer account manager for assistance.

## Example

    {
      "code": "AccountExpiredException",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 39,
          "Summary": "The account -1- (#-0-) has expired.",
          "Details": "The account was valid from -3- to -4-.  Please contact your customer account manager to reactivate this account.",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/AccountExpiredException",
          "Name": "AccountExpiredException",
          "RefersTo": null,
          "Severity": "Exception",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

Your AvaTax account is not currently enabled.  

Possible troubleshooting steps:

* Are you using outdated credentials?
* Are you connecting to the sandbox server when you intend to contact the production server, or vice versa?
