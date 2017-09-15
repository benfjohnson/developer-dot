---
layout: page
title: InvalidReturnOperationError
number: 151
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to modify a tax filing return that has been approved.

## Example

```json
{
  "code": "InvalidReturnOperationError",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidReturnOperationError",
      "number": 151,
      "message": "-0- cannot be changed on an approved return.",
      "description": "You are not allowed to modify a return after it has been approved.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidReturnOperationError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

When approved, a tax filing may not be changed for any reason without approval of Avalara Compliance.  Approved tax filings may already have been reported to the government and cannot be changed except via an amending process.

To make changes to an approved return, please contact Avalara Support to request an amendment to your tax return filing.
