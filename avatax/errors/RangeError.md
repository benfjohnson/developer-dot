
---
layout: post
title: AvaTax Errors - RangeError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# RangeError

## Summary

You attempted to set a value that must be within a range, but your value was outside of the range.

## Example

    {
      "code": "RangeError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 6,
          "Summary": "-1- is expected to be between -2- and -3-.",
          "Details": "-0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/RangeError",
          "Name": "RangeError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

AvaTax requires the value of this field to be within the defined parameters.  Please review the data you attempted to upload and correct it so that it is within the specified value.