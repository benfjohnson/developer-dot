---
layout: page
title: AvaTax Errors - CannotModifyDeletedObjects
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

If an object has been deleted, you may not modify it further after its deletion.

## Example

    {
      "code": "CannotModifyDeletedObjects",
      "target": "Unknown",
      "details": [
        {
          "code": "CannotModifyDeletedObjects",
          "number": 121,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/CannotModifyDeletedObjects",
          "severity": "Error"
        }
      ]
    }

## Explanation

Deleting objects is done via the DELETE endpoint.  

Once an object has been deleted, its URL is reserved and may not be reused.
