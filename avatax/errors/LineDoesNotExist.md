---
layout: page
title: LineDoesNotExist
number: 1102
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to remove a line that did not exist.

## Example

```json
{
  "code": "LineDoesNotExist",
  "target": "Unknown",
  "details": [
    {
      "code": "LineDoesNotExist",
      "number": 1102,
      "message": "The line to be removed does not exist.",
      "description": "Line -0- does not exist. You can't remove a line that does not exist.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/LineDoesNotExist",
      "severity": "Error"
    }
  ]
}
```

## Explanation

When calling the [DeleteLines](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/DeleteLines/) API, you must specify the lines that you wish to delete.  If you specify a line number that cannot be found, you will receive this error message.
