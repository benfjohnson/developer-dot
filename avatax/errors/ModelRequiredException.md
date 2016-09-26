
---
layout: post
title: AvaTax Errors - ModelRequiredException
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# ModelRequiredException

## Summary

You called an API that requires an object, but you did not provide an object.

## Example

    {
      "code": "ModelRequiredException",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 38,
          "Summary": "A required Model was not provided.",
          "Details": "-0-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/ModelRequiredException",
          "Name": "ModelRequiredException",
          "RefersTo": null,
          "Severity": "Exception",
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