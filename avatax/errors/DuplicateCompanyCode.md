---
layout: page
title: AvaTax Errors - DuplicateCompanyCode
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You cannot create two companies with the same company code.

## Example

    {
      "code": "DuplicateCompanyCode",
      "target": "Unknown",
      "details": [
        {
          "code": "DuplicateCompanyCode",
          "number": 142,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/DuplicateCompanyCode",
          "severity": "Error"
        }
      ]
    }

## Explanation

In AvaTax, each company you create needs a unique code that distinguishes it from other companies.

You must ensure that each company has a unique code.  If you attempt to create two companies with the same code, you will get this error message.
