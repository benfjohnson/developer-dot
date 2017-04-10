---
layout: page
title: CannotModifyDeletedObjects
number: 121
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

If an object has been deleted, you may not modify it further after its deletion.

## Example

```json
{
  "code": "CannotModifyDeletedObjects",
  "target": "Unknown",
  "details": [
    {
      "code": "CannotModifyDeletedObjects",
      "number": 121,
      "message": "Object cannot be modified.",
      "description": "You cannot modify an object with an inactive / deleted flag.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CannotModifyDeletedObjects",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Deleting objects is done via the DELETE endpoint.  

Once an object has been deleted, its URL is reserved and may not be reused.
