---
layout: page
title: AddressConflictException
number: 301
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to add multiple addresses to a transaction that was flagged as a single-address transaction.

## Example

```json
{
  "code": "AddressConflictException",
  "target": "Unknown",
  "details": [
    {
      "code": "AddressConflictException",
      "number": 301,
      "message": "You specified both a 'SingleAddress' and a different address type on the element '-0-'.",
      "description": "When using SingleAddress mode, you may only provide one address element.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AddressConflictException",
      "severity": "Error"
    }
  ]
}
```

## Explanation

You used the "SingleAddress" mode when configuring your transaction.  In "SingleAddress" mode, your transaction is assumed to have taken place at a single physical location, for example, at a point-of-sale cash register, and the transaction constitutes an in-person purchase with immediate exchange of goods.

This error occurs when you specify both "SingleAddress" and some other address.  When you are using SingleAddress mode, you cannot specify any other addresses.
