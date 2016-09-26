
---
layout: post
title: AvaTax Errors - ValueRequiredError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# ValueRequiredError

## Summary

You submitted a request and did not provide a value in a required field.

## Example

    {
      "code": "ValueRequiredError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 5,
          "Summary": "Value required: -0-",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/ValueRequiredError",
          "Name": "ValueRequiredError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

The field designated by -0- in your error message is required.  Your request cannot be processed until you resubmit it with a value in that field.