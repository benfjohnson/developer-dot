
---
layout: post
title: AvaTax Errors - CannotChangeEntityNo
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# CannotChangeEntityNo

## Summary

The "EntityNo" field on the company object is provided as a convenience and may not be changed.

## Example

    {
      "code": "CannotChangeEntityNo",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 26,
          "Summary": "Entity Number cannot be changed.",
          "Details": "The entity number for company -0- (-1-) is '-2-', but you provided '-3-'",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/CannotChangeEntityNo",
          "Name": "CannotChangeEntityNo",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

Company objects within your account are assigned a unique EntityNo value.  These numbers are for your convenience and help you keep track of how many objects you have defined in your account.

You may not change these numbers.