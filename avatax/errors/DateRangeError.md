
---
layout: post
title: AvaTax Errors - DateRangeError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# DateRangeError

## Summary

This error occurs when you create an object whose end date is before its effective date.

## Example

    {
      "code": "DateRangeError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 80,
          "Summary": "An invalid date range was provided.",
          "Details": "The effective date, -0-, is later than the end date, -1-.",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/DateRangeError",
          "Name": "DateRangeError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

The "Effective Date" and "End Date" behavior exists to help you identify the dates when certain things were valid.  For example, if you open a location on June 3rd and close it on December 5th, you could provide these two dates as the location's effective date and end date.

This problem occurs when you put an End Date that is earlier than the Effective Date.

Common troubleshooting:
* Did you accidentally switch the two dates?
* If you do not expect an object to expire, set its end date to null.  AvaTax will treat this as an object that does not expire.
* If you do not know exactly when an object became effective, set its effective date to null.
