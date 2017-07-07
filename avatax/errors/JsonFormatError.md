---
layout: page
title: JsonFormatError
number: 47
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The JSON you sent with your request was invalid.

## Example

```json
{
  "code": "JsonFormatError",
  "target": "Unknown",
  "details": [
    {
      "code": "JsonFormatError",
      "number": 47,
      "message": "The request body did not contain valid JSON.",
      "description": "At line -1- position -2-: -0-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/JsonFormatError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

JSON is a standardized data format documented by <a href="https://tools.ietf.org/html/rfc7159">RFC 7159</a>.

AvaTax REST supports only JSON encoded data; no other data encoding formats are allowed.

The document you uploaded did not meet the JSON standards.  Some common troubleshooting steps:

<ul class="normal">
	<li>Compare your JSON object to the example objects provided in the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/">online documentation</a></li>
	<li>Check your data types - did you format a date or number incorrectly?</li>
	<li>If you are writing your JSON by hand, consider instead using the built-in JSON serialization functions in your programming language.</li>
	<li>Look for an <a href="https://www.google.com/search?q=json+validator">online JSON validator</a> for more detailed help</li>
</ul>
