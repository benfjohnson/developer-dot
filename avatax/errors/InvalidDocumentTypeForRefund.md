---
layout: page
title: InvalidDocumentTypeForRefund
number: 702
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The document you attempted to refund was not a SalesInvoice.

## Example

```json
{
  "code": "InvalidDocumentTypeForRefund",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidDocumentTypeForRefund",
      "number": 702,
      "message": "Invalid document type to process refund",
      "description": "The document type is -0-, we can only process refund on SalesInvoice document.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidDocumentTypeForRefund",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Refunds can only be created on SalesInvoice records.

The refund API cannot correctly determine amounts for a refund on a PurchaseInvoice or a ReturnInvoice.  Since those document types are defined by the seller, the seller would have to provide you information on what information those documents contain.
