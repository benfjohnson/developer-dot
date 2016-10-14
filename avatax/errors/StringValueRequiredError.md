---
layout: page
title: StringValueRequiredError
number: 14
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
          "message": "Field -0- is required.",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/StringValueRequiredError",
          "severity": "Error"
        }
      ]
    }

## Explanation

This error occurs when you upload an object that has a `null` value where AvaTax requires a non-null string.

Please check your object and provide a value in that field.
