---
layout: page
title: DeletedObjectsCannotBeChangedError
number: 110
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You attempted to modify an object that is in a deleted state.

## Example

    {
      "code": "DeletedObjectsCannotBeChangedError",
      "target": "Unknown",
      "details": [
        {
          "code": "DeletedObjectsCannotBeChangedError",
          "number": 0,
          "message": "An object that has been deleted cannot be modified.",
          "description": "",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/DeletedObjectsCannotBeChangedError",
          "severity": "Error"
        }
      ]
    }

## Explanation

When an object has been deleted, its URL is reserved and may not be reused.

No further modifications may be made after an object has been deleted.
