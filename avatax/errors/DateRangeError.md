---
layout: page
title: DateRangeError
number: 80
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This error occurs when you create an object whose end date is before its effective date.

## Example

```json
{
  "code": "DateRangeError",
  "target": "Unknown",
  "details": [
    {
      "code": "DateRangeError",
      "number": 80,
      "message": "Invalid date range.",
      "description": "The effective date, -0-, is later than the end date, -1-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/DateRangeError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The "Effective Date" and "End Date" behavior exists to help you identify the dates when certain things were valid.  For example, if you open a location on June 3rd and close it on December 5th, you could provide these two dates as the location's effective date and end date.

This problem occurs when you put an End Date that is earlier than the Effective Date.

Common troubleshooting:

<ul class="normal">
<li>Did you accidentally switch the two dates?</li>
<li>If you do not expect an object to expire, set its end date to null.  AvaTax will treat this as an object that does not expire.</li>
<li>If you do not know exactly when an object became effective, set its effective date to null.</li>
</ul>
