---
layout: page
title: LineNoOutOfRange
number: 707
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to refund a line item that did not exist in the original transaction.

## Example

```json
{
  "code": "LineNoOutOfRange",
  "target": "Unknown",
  "details": [
    {
      "code": "LineNoOutOfRange",
      "number": 707,
      "message": "The specified line -0- for refund is out of range.",
      "description": "The Specified line does not exist in original transaction.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/LineNoOutOfRange",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The Refund API can only create a refund for line items that existed in the original transaction.

If you call the Refund API, and specify a line number that does not exist on the original transaction, you will get this error message.

To avoid this problem, you may want to consider calling the Refund API with a type of `Full`, which will cause the entire transaction to be refunded.
