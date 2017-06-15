---
layout: page
title: CannotModifyLockedTransaction
number: 1100
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A locked transaction may not be modified.

## Example

```json
{
  "code": "CannotModifyLockedTransaction",
  "target": "Unknown",
  "details": [
    {
      "code": "CannotModifyLockedTransaction",
      "number": 1100,
      "message": "Modifying a locked document is not allowed.",
      "description": "Document -0- is locked. Modification is not allowed.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CannotModifyLockedTransaction",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A transaction that is `Locked` has been reported to a tax authority.  Transactions that have been reported to a tax authority are maintained indefinitely for audit purposes and may not be changed.

If a locked transaction needs to be adjusted, you must add a second journal entry reflecting the difference between the original transaction as reported and the corrected transaction.  You may use the [RefundTransaction](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/RefundTransaction/) API to create a reverse-charge journal entry.
