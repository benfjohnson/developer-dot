
---
layout: post
title: AvaTax Errors - InvalidDateRangeError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# InvalidDateRangeError

## Summary

You specified a date outside of the allowable range.

## Example

    {
      "code": "InvalidDateRangeError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 81,
          "Summary": "An invalid date range was provided.",
          "Details": "The -0- has to be in  between -1- and -2-.",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/InvalidDateRangeError",
          "Name": "InvalidDateRangeError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

Please check your API call and specify a valid date within the defined range.