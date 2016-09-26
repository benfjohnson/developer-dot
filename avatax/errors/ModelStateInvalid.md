---
layout: page
title: AvaTax Errors - ModelStateInvalid
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You provided an incorrectly structured object to AvaTax.

## Example

    {
      "code": "ModelStateInvalid",
      "target": "Unknown",
      "details": [
        {
          "code": "ModelStateInvalid",
          "number": 70,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/ModelStateInvalid",
          "severity": "Error"
        }
      ]
    }

## Explanation

Each REST API call requires that you upload an object matching its expected structure.  Your API call was not structured correctly.

For more information, please visit the documentation for your API endpoint and look closely at the expected object structure.

Common troubleshooting:
* In the AvaTax REST API, you must provide data in JSON format.  Did you provide the object in JSON format?
* In JSON, you must provide arrays using the square brackets [ ] and you must provide objects using curly brackets { }.  Did you use the correct brackets?
* Compare your data against the example API object documented in swagger.  Do you see any differences between the object you uploaded and the example?
* Some fields have a limited choice of values - often called an "Enumeration".  Did you make sure that your values for those enumerated fields were valid?
