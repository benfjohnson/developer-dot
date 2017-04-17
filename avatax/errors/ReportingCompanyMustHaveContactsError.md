---
layout: page
title: ReportingCompanyMustHaveContactsError
number: 60
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A company that is designated to report taxes must have at least one designated contact person.

## Example

```json
{
  "code": "ReportingCompanyMustHaveContactsError",
  "target": "Unknown",
  "details": [
    {
      "code": "ReportingCompanyMustHaveContactsError",
      "number": 60,
      "message": "Contact information missing.",
      "description": "A reporting company must have at least one contact when it is moved out of InProgress status.  -0-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ReportingCompanyMustHaveContactsError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

You attempted to set the "Reporting" flag on a company to true.  All companies that report taxes must designate one contact person at a minimum.

To proceed, you should create one contact person for this company and then retry this API call.
