---
layout: page
title: DocumentNotCommitted
number: 313
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to lock a transaction (aka Document) that was not committed.

## Example

```json
{
  "code": "DocumentNotCommitted",
  "target": "Unknown",
  "details": [
    {
      "code": "DocumentNotCommitted",
      "number": 313,
      "message": "Only committed documents can be locked.",
      "description": "Document -0- was in status -1- and cannot be locked.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/DocumentNotCommitted",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A `Transaction` that is created in AvaTax is called a `Document`.

When a document is in `status: "Committed"`, that document is available for the Avalara Managed Returns Service to file with a tax authority.  Documents that are not in the `Committed` status are never filed with a tax authority.

In the Sandbox environment, you are permitted to call the `POST /api/v2/companies/ABC/transactions/DEF/lock` endpoint to lock a document.  This functionality is intended to allow you to simulate the behavior of Avalara's Managed Returns Service so that you can accurately test and prototype the behavior of an AvaTax connector.

The `POST /api/v2/companies/ABC/transactions/DEF/lock` is only available to customers in the Sandbox environment, and it only allows locking of transactions, also known as Documents, that are in status `Committed`.  If you attempt to lock a transaction that is not committed, you will receive this error.

To mark a transaction committed, please call the `POST /api/v2/companies/ABC/transactions/DEF/commit` endpoint.
