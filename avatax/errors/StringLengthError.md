---
layout: page
title: StringLengthError
number: 13
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

One of the strings you uploaded to the server is too long and cannot be saved.

## Example

    {
      "code": "StringLengthError",
      "target": "Unknown",
      "details": [
        {
          "code": "StringLengthError",
          "number": 13,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/StringLengthError",
          "severity": "Error"
        }
      ]
    }

## Explanation

AvaTax reserves storage space for strings of a specific length only.  If you attempt to upload a string that is too long for the storage system, you will get this error.

Please take note of the maximum and minimum lengths of the string and try your API call again after adjusting the string's length.
