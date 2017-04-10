---
layout: page
title: NoFilterCriteriaException
number: 45
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You provided a filter with your query, but did not specify any criteria.

## Example

```json
{
  "code": "NoFilterCriteriaException",
  "target": "Unknown",
  "details": [
    {
      "code": "NoFilterCriteriaException",
      "number": 45,
      "message": "Error parsing $filter.",
      "description": "The $filter value '-0-' did not have any parseable criteria.  To fetch all objects, omit the $filter parameter or leave it empty.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/NoFilterCriteriaException",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Your filter did not contain any parseable criteria.  A criteria is a statement like `fieldName = 'value'` or `id > 123`.  Please check your $filter text and try again.
