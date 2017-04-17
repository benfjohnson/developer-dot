---
layout: page
title: InvalidParameter
number: 305
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

When adding parameters to your CreateTransactionModel, you must use a valid parameter name.

## Example

```json
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
```

## Explanation

Parameters must be one of a list of recognized values.  Specifying a parameter with a misspelled name will result in this error.

To see the full list of valid parameter names, please use the `GET /api/v2/definitions/parameters` endpoint.

Please check the parameter list on your CreateTransactionModel and on all lines to make sure all parameter names match this list.
