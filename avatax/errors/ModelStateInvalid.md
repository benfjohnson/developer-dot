
---
layout: post
title: AvaTax Errors - ModelStateInvalid
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# ModelStateInvalid

## Summary

You provided an incorrectly structured object to AvaTax.

## Example

    {
      "code": "ModelStateInvalid",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 70,
          "Summary": "The request body does not represent a valid JSON object.",
          "Details": "Unable to parse the following fields in your request: -0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/ModelStateInvalid",
          "Name": "ModelStateInvalid",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
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