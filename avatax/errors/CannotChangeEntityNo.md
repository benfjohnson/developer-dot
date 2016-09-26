---
layout: page
title: AvaTax Errors - CannotChangeEntityNo
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

The "EntityNo" field on the company object is provided as a convenience and may not be changed.

## Example

    {
      "code": "CannotChangeEntityNo",
      "target": "Unknown",
      "details": [
        {
          "code": "CannotChangeEntityNo",
          "number": 26,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/CannotChangeEntityNo",
          "severity": "Error"
        }
      ]
    }

## Explanation

Company objects within your account are assigned a unique EntityNo value.  These numbers are for your convenience and help you keep track of how many objects you have defined in your account.

You may not change these numbers.
