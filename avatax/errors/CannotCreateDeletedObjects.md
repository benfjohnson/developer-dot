---
layout: page
title: CannotCreateDeletedObjects
number: 120
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You may not create an object with a "Deleted" flag.

## Example

    {
      "code": "CannotCreateDeletedObjects",
      "target": "Unknown",
      "details": [
        {
          "code": "CannotCreateDeletedObjects",
          "number": 120,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/CannotCreateDeletedObjects",
          "severity": "Error"
        }
      ]
    }

## Explanation

Some objects within AvaTax have flags that indicate that the object has been deleted.  These flags exist for internal use and are not available for modification.

You must create an object in an "Active" status.  To delete an object, please call the DELETE endpoint for that object's URL.
