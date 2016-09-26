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
          "number": 304,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
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
