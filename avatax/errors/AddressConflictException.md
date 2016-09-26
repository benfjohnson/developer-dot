
---
layout: post
title: AvaTax Errors - AddressConflictException
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# AddressConflictException

## Summary

You attempted to add multiple addresses to a transaction that was flagged as a single-address transaction.

## Example

    {
      "code": "AddressConflictException",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 301,
          "Summary": "You specified both a 'SingleAddress' and a different address type on the element '-0-'.",
          "Details": "When using SingleAddress mode, you may only provide one address element.",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/AddressConflictException",
          "Name": "AddressConflictException",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

You used the "SingleAddress" mode when configuring your transaction.  In "SingleAddress" mode, your transaction is assumed to have taken place at a single physical location, for example, at a point-of-sale cash register, and the transaction constitutes an in-person purchase with immediate exchange of goods.

This error occurs when you specify both "SingleAddress" and some other address.  When you are using SingleAddress mode, you cannot specify any other addresses.

