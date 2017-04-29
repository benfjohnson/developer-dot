---
layout: page
title: ReportingEntityError
number: 150
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to use a Returns API on a company not designated to file returns.

## Example

```json
{
  "code": "ReportingEntityError",
  "target": "Unknown",
  "details": [
    {
      "code": "ReportingEntityError",
      "number": 150,
      "message": "In order to perform this operation your company must be setup as a reporting entity.",
      "description": "The company -0- is not a reporting entity.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ReportingEntityError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The flag `isReportingEntity` on the company object whether a company files their own tax returns.  If your business has more than one legal entity, many governments will allow you to file consolidated tax returns for multiple entities at once.  By using this flag, you can designate which companies within your organization must file returns.

When you use an AvaTax API for Returns related work, this API will first check this value to make sure your company is flagged to file tax returns.  If it is not set, you will receive this error.
