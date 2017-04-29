---
layout: page
title: OpenClauseException
number: 46
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Your $filter value has a mismatched open parenthesis / close parenthesis.

## Example

```json
{
  "code": "OpenClauseException",
  "target": "Unknown",
  "details": [
    {
      "code": "OpenClauseException",
      "number": 46,
      "message": "Error parsing $filter.",
      "description": "The $filter value '-0-' had an uneven number of open parenthesis '(' and close parenthesis ')'.  Please check your query and try again.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/OpenClauseException",
      "severity": "Error"
    }
  ]
}
```

## Explanation

When parsing your query, AvaTax will check criteria in a parenthesis before anything outside of the parenthesis.  To do this correctly, there must always be a close parenthesis `)` for each open parenthesis `(`.
