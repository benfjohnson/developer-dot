---
layout: page
title: AvaTax Errors - DeletedObjectsCannotBeChangedError
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
          "number": 110,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/DeletedObjectsCannotBeChangedError",
          "severity": "Error"
        }
      ]
    }

## Explanation

When an object has been deleted, its URL is reserved and may not be reused.

No further modifications may be made after an object has been deleted.
