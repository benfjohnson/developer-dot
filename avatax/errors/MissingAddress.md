---
layout: page
title: MissingAddress
number: 304
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

When creating transactions, you must at a minimum provide an origin and destination address.

## Example

```json
{
  "code": "MissingAddress",
  "target": "Unknown",
  "details": [
    {
      "code": "MissingAddress",
      "number": 304,
      "message": "Transactions must have both an origin and destination address.",
      "description": "The line -0- must have both an origin and destination address.  You must either assign a 'SingleLocation' address or both a 'ShipFrom' and a 'ShipTo' address.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/MissingAddress",
      "severity": "Error"
    }
  ]
}
```

## Explanation

To provide origin and destination addresses for a transaction, you must provide one of the following:

<ul class="normal">
<li>Both a ShipFrom and a ShipTo address; or</li>
<li>A SingleLocation address.</li>
</ul>

Your API call did not include one or the other of those options.
