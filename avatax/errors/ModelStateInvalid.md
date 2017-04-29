---
layout: page
title: ModelStateInvalid
number: 70
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You provided an incorrectly structured object to AvaTax.

## Example

```json
{
  "code": "ModelStateInvalid",
  "target": "Unknown",
  "details": [
    {
      "code": "ModelStateInvalid",
      "number": 70,
      "message": "Invalid JSON object.",
      "description": "The request body does not represent a valid JSON object.  The value '-1-' is not a valid '-0-'.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ModelStateInvalid",
      "severity": "Error"
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
<li>In JSON, you must provide arrays using the square brackets `[ ]` and you must provide objects using curly brackets `{ }`.  Did you use the correct brackets?</li>
<li>Compare your data against the example API object documented in swagger.  Do you see any differences between the object you uploaded and the example?</li>
<li>Some fields have a limited choice of values - often called an "Enumeration".  Did you make sure that your values for those enumerated fields were valid?</li>
</ul>
