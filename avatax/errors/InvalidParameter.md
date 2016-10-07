---
layout: page
title: InvalidParameter
number: 305
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You provided a parameter with your transaction that was not recognized by Avalara.

## Example

    {
      "code": "InvalidParameter",
      "target": "Unknown",
      "details": [
        {
          "code": "InvalidParameter",
          "number": 305,
          "message": "The parameter '-0-' is not a valid parameter.",
          "description": "For a full list of valid parameters, please use the /api/v2/definitions/parameters endpoint.",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/InvalidParameter",
          "severity": "Error"
        }
      ]
    }

## Explanation

For a full list of parameters you can use with your AvaTax calls, please use the {{/api/v2/definitions/parameters}} endpoint.  Please check this list 
prior to sending parameters with a {{/api/v2/transactions/create}} call.

This error occurs when you have sent a parameter that does not match one of the list of expected parameters.  Please check the spelling of your parameters in 
the transaction call.
