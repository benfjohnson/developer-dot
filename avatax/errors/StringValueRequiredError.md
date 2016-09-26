---
layout: page
title: AvaTax Errors - StringValueRequiredError
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

One of the fields designated in your object model was null, but a string value is required.

## Example

    {
      "code": "StringValueRequiredError",
      "target": "Unknown",
      "details": [
        {
          "code": "StringValueRequiredError",
          "number": 14,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/StringValueRequiredError",
          "severity": "Error"
        }
      ]
    }

## Explanation

This error occurs when you upload an object that has a "null" value where AvaTax requires a non-null string.

Please check your object and provide a value in that field.
