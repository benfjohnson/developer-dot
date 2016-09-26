
---
layout: post
title: AvaTax Errors - EmailMissingError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# EmailMissingError

## Summary

You must provide an email address with this request.

## Example

    {
      "code": "EmailMissingError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 16,
          "Summary": "A required email address was not provided.",
          "Details": "-0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/EmailMissingError",
          "Name": "EmailMissingError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

This request requires that you provide an email address.  Please provide a valid email address.