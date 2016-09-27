---
layout: page
title: CannotChangeEntityNo
number: 26
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
          "number": 0,
          "message": "Entity Number cannot be changed.",
          "description": "The entity number for company -0- (-1-) is '-2-', but you provided '-3-'",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/CannotChangeEntityNo",
          "severity": "Error"
        }
      ]
    }

## Explanation

Company objects within your account are assigned a unique EntityNo value.  These numbers are for your convenience and help you keep track of how many objects you have defined in your account.

You may not change these numbers.
