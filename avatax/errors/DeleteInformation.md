---
layout: page
title: AvaTax Errors - DeleteInformation
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

This message represents information provided about an object that was deleted.

## Example

    {
      "code": "DeleteInformation",
      "target": "Unknown",
      "details": [
        {
          "code": "DeleteInformation",
          "number": 100,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/DeleteInformation",
          "severity": "Error"
        }
      ]
    }

## Explanation

In AvaTax, some objects can be deleted.  When you successfully delete an object, this information is returned to help you understand what object was deleted.  You may log this information if you wish.
