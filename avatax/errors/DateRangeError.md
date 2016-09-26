---
layout: page
title: DateRangeError
number: 80
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

This error occurs when you create an object whose end date is before its effective date.

## Example

    {
      "code": "DateRangeError",
      "target": "Unknown",
      "details": [
        {
          "code": "DateRangeError",
          "number": 80,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/DateRangeError",
          "severity": "Error"
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
