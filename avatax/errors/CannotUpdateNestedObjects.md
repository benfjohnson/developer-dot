---
layout: page
title: CannotUpdateNestedObjects
number: 136
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

In AvaTax REST, you can create objects with nested children, but you cannot update objects with nested children.

## Example

```json
{
  "code": "CannotUpdateNestedObjects",
  "target": "Unknown",
  "details": [
    {
      "code": "CannotUpdateNestedObjects",
      "number": 136,
      "message": "Nested objects may not be updated.",
      "description": "Please update each object using a separate API call.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CannotUpdateNestedObjects",
      "severity": "Error"
    }
  ]
}
```

## Explanation

In order to manage database modifications, AvaTax REST does not support updates for objects with nested children.  

To update objects, you must make one PUT request for each object that is being changed.  Each PUT request will be processed in the order it was received.
