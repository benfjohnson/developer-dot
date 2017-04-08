---
layout: page
title: ParserUnterminatedValueError
number: 21
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to retrieve data with a "$filter" parameter that contained syntax errors.

## Example

```json
{
  "code": "ParserUnterminatedValueError",
  "target": "Unknown",
  "details": [
    {
      "code": "ParserUnterminatedValueError",
      "number": 21,
      "message": "Error parsing $filter parameter.",
      "description": "The filter contained a string value that was not properly terminated: -0-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ParserUnterminatedValueError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

In your `$filter` parameter, you specified a condition that included a string that was not terminated with an apostrophe.  

Please review your fetch request and check your `$filter` parameter carefully.

For more information on filtering, please read <a href="http://developer.avalara.com/avatax/filtering-in-rest/">Filtering In REST</a>
