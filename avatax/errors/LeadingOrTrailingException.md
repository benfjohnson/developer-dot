---
layout: page
title: LeadingOrTrailingException
number: 175
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The value you provided in the `$filter` parameter was incorrect.

## Example

```json
{
  "code": "LeadingOrTrailingException",
  "target": "Unknown",
  "details": [
    {
      "code": "LeadingOrTrailingException",
      "number": 175,
      "message": "Error parsing $filter.",
      "description": "The $filter value '-0-' had an invalid leading or trailing conjunction.  Please check your query and try again.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/LeadingOrTrailingException",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Your `$filter` query parameter was not correctly formatted.

This error occurs when you have a conjunction between two clauses, but one of the two clauses is missing.

Conjunctions are the boolean logic statements AND / OR.  When a conjunction appears, there must be a filter clause both before the conjunction and after the conjunction.  You will get a LeadingOrTrailingException if your conjunction is missing either the leading or trailing filter clause.

Some examples of this error:

* `$filter=id gt 123 and` - In this case, the word "AND" appears at the end of the filter, but there is no filter clause after it.  This is called a trailing conjunction error.
* `$filter=and id gt 123` - The word "AND" appears as the first word at the beginning of the filter, but there is no filter clause before it.  This is called a leading conjunction error.
