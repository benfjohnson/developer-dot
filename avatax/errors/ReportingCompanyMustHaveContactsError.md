
---
layout: post
title: AvaTax Errors - ReportingCompanyMustHaveContactsError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# ReportingCompanyMustHaveContactsError

## Summary

A company that is designated to report taxes must have at least one designated contact person.

## Example

    {
      "code": "ReportingCompanyMustHaveContactsError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 60,
          "Summary": "A reporting company must have at least one contact when it is moved out of InProgress status.",
          "Details": "-0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/ReportingCompanyMustHaveContactsError",
          "Name": "ReportingCompanyMustHaveContactsError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

You attempted to set the "Reporting" flag on a company to true.  All companies that report taxes must designate one contact person at a minimum.

To proceed, you should create one contact person for this company and then retry this API call.