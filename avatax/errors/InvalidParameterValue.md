---
layout: page
title: InvalidParameterValue
number: 306
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

When specifying parameters, you must make sure that the parameters you provide are of the correct type.

## Example

    {
      "code": "InvalidParameterValue",
      "target": "Unknown",
      "details": [
        {
          "code": "InvalidParameterValue",
          "number": 306,
          "message": "The parameter '-0-' expects a value of type '-2-'.",
          "description": "You provided the value '-1-', which is not a valid '-2-'.",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/InvalidParameterValue",
          "severity": "Error"
        }
      ]
    }

## Explanation

This error occurs if AvaTax cannot understand one of the parameters you have provided with your transaction call.

Some example parameter types:
* Decimal - Must be a numeric value.
* Boolean - Must be either "True" or "False".
* String - Must be a textual string.

Each parameter type has a restriction for what data can be provided.  Please consult the {{/api/v2/definitions/paramters}} endpoint for a full list of parameters
and information about their types.

