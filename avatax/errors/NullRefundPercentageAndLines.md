---
layout: page
title: NullRefundPercentageAndLines
number: 704
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to create a refund but did not specify the percentage or lines.

## Example

```json
{
  "code": "NullRefundPercentageAndLines",
  "target": "Unknown",
  "details": [
    {
      "code": "NullRefundPercentageAndLines",
      "number": 704,
      "message": "Refund percentage and refund line can not both be null",
      "description": "For refund type -0-, either refund percentage or refund lines should be specified",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/NullRefundPercentageAndLines",
      "severity": "Error"
    }
  ]
}
```

## Explanation

To specify a refund, you must specify the original transaction and the type of refund.

If you choose a refund type of `Partial`, you must also specify all the line numbers that you wish to refund.

If you choose a refund type of `Percentage`, you must specify the percentage of the amount of the transaction you wish to refund.

If you left both Line Number and Percentage null, you will receive this error message.
