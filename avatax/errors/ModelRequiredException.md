---
layout: page
title: ModelRequiredException
number: 38
categories: [AvaTax Error Codes]
disqus: 1
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

This error indicates that you failed to provide a *Request Body* with your API call.

An HTTP request looks like this:

```
POST /api/v2/transactions/create HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
Content-Type: application/json
Content-Length: 23

{
  "name": "value"
}
```

In this case, each element has a specific meaning:

<ul class="normal">
<li><b>POST</b> is an HTTP verb indicating the type of the request.</li>
<li><b>/api/v2/transactions/create</b> is the name of the API you are calling.</li>
<li><b>Authorization</b>, <b>Content-Type</b> and <b>Content-Length</b> are request headers.</li>
<li>The element within the squiggly brackets is called the <b>Request Body</b>.</li>
</ul>

If you are seeing this error message, it indicates that you failed to pass in a request body, or the request body was not recognized.  For more information, please visit the documentation for your API endpoint and look closely at the expected object structure.

Common troubleshooting:

<ul class="normal">
<li>Try making your request via <a href="https://www.getpostman.com/">Postman</a>, <a href="https://curl.haxx.se/">CURL</a>, or our <a href="https://sandbox-rest.avatax.com/swagger/ui/index.html">online Swagger API reference</a>.  Examine closely how each one works and see whether you are providing the same request body in your code.</li>
<li>In the AvaTax REST API, you must provide data in JSON format.  Did you provide the object in JSON format?</li>
<li>In JSON, you must provide arrays using the square brackets [ ] and you must provide objects using curly brackets { }.  Did you use the correct brackets?</li>
<li>Compare your data against the example API object documented in swagger.  Do you see any differences between the object you uploaded and the example?</li>
</ul>
