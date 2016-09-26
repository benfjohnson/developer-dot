
---
layout: post
title: AvaTax Errors - StringLengthError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# StringLengthError

## Summary

One of the strings you uploaded to the server is too long and cannot be saved.

## Example

    {
      "code": "StringLengthError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 13,
          "Summary": "Field -0- must be between -1- and -2- characters in length.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/StringLengthError",
          "Name": "StringLengthError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

AvaTax reserves storage space for strings of a specific length only.  If you attempt to upload a string that is too long for the storage system, you will get this error.

Please take note of the maximum and minimum lengths of the string and try your API call again after adjusting the string's length.