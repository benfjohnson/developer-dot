---
layout: page
title: OverlappingFilingCalendar
number: 903
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This filing calendar overlaps with another calendar.

## Example

```json
{
  "code": "OverlappingFilingCalendar",
  "target": "Unknown",
  "details": [
    {
      "code": "OverlappingFilingCalendar",
      "number": 903,
      "message": "Requested filing calendar overlaps with an active filing calendar",
      "description": "Filing Calendar -0- for -1- is active for the requested effective dates of the new filing calendar.  Please obsolete the current calendar before approving the new one.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/OverlappingFilingCalendar",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A filing calendar may not overlap with a conflicting filing calendar.
