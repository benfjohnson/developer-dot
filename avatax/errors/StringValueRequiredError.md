
---
layout: post
title: AvaTax Errors - StringValueRequiredError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# StringValueRequiredError

## Summary

One of the fields designated in your object model was null, but a string value is required.

## Example

    {
      "code": "StringValueRequiredError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 14,
          "Summary": "Field -0- is required.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/StringValueRequiredError",
          "Name": "StringValueRequiredError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

This error occurs when you upload an object that has a "null" value where AvaTax requires a non-null string.

Please check your object and provide a value in that field.