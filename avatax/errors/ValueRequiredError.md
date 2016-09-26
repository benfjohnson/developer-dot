---
layout: page
title: AvaTax Errors - ValueRequiredError
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You submitted a request and did not provide a value in a required field.

## Example

    {
      "code": "ValueRequiredError",
      "target": "Unknown",
      "details": [
        {
          "code": "ValueRequiredError",
          "number": 5,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/ValueRequiredError",
          "severity": "Error"
        }
      ]
    }

## Explanation

The field designated by -0- in your error message is required.  Your request cannot be processed until you resubmit it with a value in that field.
