---
layout: page
title: MissingAddress
number: 304
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

When creating transactions, you must at a minimum provide an origin and destination address.

## Example

    {
      "code": "MissingAddress",
      "target": "Unknown",
      "details": [
        {
          "code": "MissingAddress",
          "number": 0,
          "message": "Transactions must have both an origin and destination address.",
          "description": "Each line on a transaction must have both an origin and destination address.  You must either assign a 'SingleLocation' address or both a 'ShipFrom' and a 'ShipTo' address.",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/MissingAddress",
          "severity": "Error"
        }
      ]
    }

## Explanation

To provide origin and destination addresses for a transaction, you must provide one of the following:
* ShipFrom/ShipTo addresses
* SingleLocation address

Your API call did not include one or the other of those options.
