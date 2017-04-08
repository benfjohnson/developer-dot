---
layout: page
title: FilingCalendarCannotBeDeleted
number: 900
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A filing calendar cannot be deleted once in use.

## Example

```json
{
  "code": "FilingCalendarCannotBeDeleted",
  "target": "Unknown",
  "details": [
    {
      "code": "FilingCalendarCannotBeDeleted",
      "number": 900,
      "message": "Unable to delete this filing calendar",
      "description": "There is a current approved worksheet for this filing calendar.  Filing calendars cannot be deleted with an approved worksheet associated with it.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/FilingCalendarCannotBeDeleted",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Filing calendars cannot be deleted after they have been used to approve a tax return for filing.

Once a filing calendar has been used, it must be retained for audit purposes.

To stop filing on a filing calendar, please use the `expire` API.
