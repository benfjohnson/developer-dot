---
layout: page
title: LineAlreadyExists
number: 1101
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to add a line with a conflicting line number.

## Example

```json
{
  "code": "LineAlreadyExists",
  "target": "Unknown",
  "details": [
    {
      "code": "LineAlreadyExists",
      "number": 1101,
      "message": "The line to be added has already existed.",
      "description": "Line -0- exists. You can't add an existing line to existing transaction.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/LineAlreadyExists",
      "severity": "Error"
    }
  ]
}
```

## Explanation

When calling the [AddLines](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/AddLines/) API, you must specify the line numbers of the lines you wish to add.  If you specify a line number that conflicts with an existing line number, you will receive this error.
