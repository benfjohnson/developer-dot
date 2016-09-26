
---
layout: post
title: AvaTax Errors - CannotChangeCompanyCode
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# CannotChangeCompanyCode

## Summary

The company code for a company is set when the company is created and may not be changed.

## Example

    {
      "code": "CannotChangeCompanyCode",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 25,
          "Summary": "Company Code cannot be changed.",
          "Details": "The company code for company -0- (-1-) is '-2-', but you provided '-3-'",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/CannotChangeCompanyCode",
          "Name": "CannotChangeCompanyCode",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

AvaTax defines each company with a unique CompanyCode within your account.  When you create a company, that company's code is fixed and may not change.  

If this company needs to be removed, you should DELETE this object's URL.  For additional help with company setup problems, you should contact Avalara Support.