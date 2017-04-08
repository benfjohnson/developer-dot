---
layout: page
title: ParserFieldNameError
number: 17
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to search on a field that does not exist or cannot be searched.

## Example

```json
{
  "code": "ParserFieldNameError",
  "target": "Unknown",
  "details": [
    {
      "code": "ParserFieldNameError",
      "number": 17,
      "message": "Error parsing request parameters.",
      "description": "The field named '-0-' could not be found.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ParserFieldNameError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

AvaTax only permits certain fields to be searched.  You attempted to search on a field that either does not exist or cannot be searched.

For more information on filtering, please read <a href="http://developer.avalara.com/avatax/filtering-in-rest/">Filtering In REST</a>
