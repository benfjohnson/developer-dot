
---
layout: post
title: AvaTax Errors - DuplicateCompanyCode
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# DuplicateCompanyCode

## Summary

You cannot create two companies with the same company code.

## Example

    {
      "code": "DuplicateCompanyCode",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 142,
          "Summary": "The company code '-0-' has already been defined.",
          "Details": "Please select a different company code.",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/DuplicateCompanyCode",
          "Name": "DuplicateCompanyCode",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

In AvaTax, each company you create needs a unique code that distinguishes it from other companies.

You must ensure that each company has a unique code.  If you attempt to create two companies with the same code, you will get this error message.