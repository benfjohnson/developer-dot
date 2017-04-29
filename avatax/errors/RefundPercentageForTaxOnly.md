---
layout: page
title: RefundPercentageForTaxOnly
number: 706
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to create a TaxOnly refund for a partial percentage.

## Example

```json
{
  "code": "RefundPercentageForTaxOnly",
  "target": "Unknown",
  "details": [
    {
      "code": "RefundPercentageForTaxOnly",
      "number": 706,
      "message": "If refund type is TaxOnly, refund percentage should be null",
      "description": "If refund type is TaxOnly, refund percentage should be null.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/RefundPercentageForTaxOnly",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The `TaxOnly` refund type is intended for use when a customer has provided you a tax exemption certificate after a sale was made.

Accordingly, a `TaxOnly` refund cannot specify a partial tax amount; it can only refund all tax.
