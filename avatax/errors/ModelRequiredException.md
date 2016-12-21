---
layout: page
title: ModelRequiredException
number: 38
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You called an API that requires an object, but you did not provide an object.

## Example

```json
{
  "code": "ModelRequiredException",
  "target": "Unknown",
  "details": [
    {
      "code": "ModelRequiredException",
      "number": 38,
      "message": "A required model was not provided.",
      "description": "Please verify that your request included a request body in valid JSON format.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ModelRequiredException",
      "severity": "Exception"
    }
  ]
}
```

## Explanation

Each REST API call requires that you upload an object matching its expected structure.  Your API call was not structured correctly.

For more information, please visit the documentation for your API endpoint and look closely at the expected object structure.

Common troubleshooting:

<ul class="normal">
<li>In the AvaTax REST API, you must provide data in JSON format.  Did you provide the object in JSON format?</li>
<li>In JSON, you must provide arrays using the square brackets [ ] and you must provide objects using curly brackets { }.  Did you use the correct brackets?</li>
<li>Compare your data against the example API object documented in swagger.  Do you see any differences between the object you uploaded and the example?</li>
<li>Some fields have a limited choice of values - often called an "Enumeration".  Did you make sure that your values for those enumerated fields were valid?</li>
</ul>
