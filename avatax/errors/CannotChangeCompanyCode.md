---
layout: page
title: CannotChangeCompanyCode
number: 25
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

The company code for a company is set when the company is created and may not be changed.

## Example

    {
      "code": "CannotChangeCompanyCode",
      "target": "Unknown",
      "details": [
        {
          "code": "CannotChangeCompanyCode",
          "number": 25,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/CannotChangeCompanyCode",
          "severity": "Error"
        }
      ]
    }

## Explanation

AvaTax defines each company with a unique CompanyCode within your account.  When you create a company, that company's code is fixed and may not change.  

If this company needs to be removed, you should DELETE this object's URL.  For additional help with company setup problems, you should contact Avalara Support.
