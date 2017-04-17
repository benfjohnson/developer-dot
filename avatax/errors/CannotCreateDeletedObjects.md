---
layout: page
title: CannotCreateDeletedObjects
number: 120
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You may not create an object with a "Deleted" flag.

## Example

```json
{
  "code": "CannotCreateDeletedObjects",
  "target": "Unknown",
  "details": [
    {
      "code": "CannotCreateDeletedObjects",
      "number": 120,
      "message": "Object creation failed.",
      "description": "You cannot create a deleted object with an inactive / deleted flag.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CannotCreateDeletedObjects",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Some objects within AvaTax have flags that indicate that the object has been deleted.  These flags exist for internal use and are not available for modification.

You must create an object in an "Active" status.  To delete an object, please call the DELETE endpoint for that object's URL.
