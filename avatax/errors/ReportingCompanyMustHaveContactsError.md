---
layout: page
title: AvaTax Errors - ReportingCompanyMustHaveContactsError
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

A company that is designated to report taxes must have at least one designated contact person.

## Example

    {
      "code": "ReportingCompanyMustHaveContactsError",
      "target": "Unknown",
      "details": [
        {
          "code": "ReportingCompanyMustHaveContactsError",
          "number": 60,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/ReportingCompanyMustHaveContactsError",
          "severity": "Error"
        }
      ]
    }

## Explanation

You attempted to set the "Reporting" flag on a company to true.  All companies that report taxes must designate one contact person at a minimum.

To proceed, you should create one contact person for this company and then retry this API call.
