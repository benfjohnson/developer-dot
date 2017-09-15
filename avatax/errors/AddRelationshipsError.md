---
layout: page
title: AddRelationshipsError
number: 1206
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The certificate system could not link the two objects as requested.

## Example

```json
{
  "code": "AddRelationshipsError",
  "target": "Unknown",
  "details": [
    {
      "code": "AddRelationshipsError",
      "number": 1206,
      "message": "Failed to add -0-.",
      "description": "-1-",
      "faultCode": "Server",
      "helpLink": "http://developer.avalara.com/avatax/errors/AddRelationshipsError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

When attempting to link two objects together, one of the two objects could not be found, or could not be modified.

Please check to ensure that both objects exist, and that you have privileges necessary to modify them.
