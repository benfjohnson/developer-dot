---
layout: page
title: InvalidDocumentStatusForRefund
number: 700
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The AvaTax Refund API is only available on committed documents.

## Example

```json
{
  "code": "InvalidDocumentStatusForRefund",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidDocumentStatusForRefund",
      "number": 700,
      "message": "Document is not in a status to process refund",
      "description": "The document status is -0-, we can only process refund on committed document.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidDocumentStatusForRefund",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Only committed documents can be refunded.

This limitation exists because only committed documents are considered permanent.  A document that is not committed has not been finalized and is considered incomplete.

You can only call the Refund API for a transaction that has been committed and is considered permanent.
