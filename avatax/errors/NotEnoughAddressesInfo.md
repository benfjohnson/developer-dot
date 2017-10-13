---
layout: page
title: NotEnoughAddressesInfo
number: 176
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A tax transaction must have both an origin and a destination address.

## Example

```json
{
  "code": "NotEnoughAddressesInfo",
  "target": "Unknown",
  "details": [
    {
      "code": "NotEnoughAddressesInfo",
      "number": 176,
      "message": "Transactions are missing -0- addresses. Only -1- addresses are provided",
      "description": "-2- must have both an origin and destination address.  The origin addresses are either 'ShipFrom' or 'PointOfOrderAcceptance'. The destination addresses are either 'ShipTo' or 'PointOfOrderOrigin'.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/NotEnoughAddressesInfo",
      "severity": "Error"
    }
  ]
}
```

## Explanation

You have provided multiple addresses for the transaction, but all the addresses you provided are either Origin-type addresses or Destination-type addresses.  In this scenario, AvaTax knows that you are processing a multiple address transaction, but it cannot reliably determine the origin and destination address required by your tax authority.

Please ensure that you always provide a `ShipTo` and `ShipFrom` address when using Order Origin or Order Acceptance transaction types.
