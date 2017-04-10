---
layout: page
title: ParserSyntaxError
number: 19
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You provided an unrecognized string or token in the "$filter" parameter of your fetch request.

## Example

```json
{
  "code": "ParserSyntaxError",
  "target": "Unknown",
  "details": [
    {
      "code": "ParserSyntaxError",
      "number": 19,
      "message": "Error parsing $filter parameter.",
      "description": "Unexpected token '-0-' in the filter.  Expected '-1-'. -2-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ParserSyntaxError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Avalara only permits certain values and operations in the `$filter` parameter.  You provided a token that is not one of the recognized tokens.

For more information on filtering, please read <a href="http://developer.avalara.com/avatax/filtering-in-rest/">Filtering In REST</a>
