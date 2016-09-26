
---
layout: post
title: AvaTax Errors - GetTaxError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# GetTaxError

## Summary

A problem occurred when you attempted to create a transaction through AvaTax.

## Example

    {
      "code": "GetTaxError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 300,
          "Summary": "",
          "Details": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "FaultCode": null,
          "HelpLink": "http://developer.avalara.com/avatax/errors/GetTaxError",
          "Name": "GetTaxError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

Creating a transaction was known as "GetTax" in Avalara's SOAP API.  For compatibility reasons, this error message is also labeled a "GetTax" error message.

Please refer to the details section for specific details about this error message and next steps.