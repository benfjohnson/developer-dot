---
layout: page
title: CannotUpdateNestedObjects
number: 136
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

In AvaTax REST, you can create objects with nested children, but you cannot update objects with nested children.

## Example

    {
      "code": "CannotUpdateNestedObjects",
      "target": "Unknown",
      "details": [
        {
          "code": "CannotUpdateNestedObjects",
          "number": 0,
          "message": "Updating nested objects using the 'PUT' method is not supported.  You must update each object separately.",
          "description": "",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/CannotUpdateNestedObjects",
          "severity": "Error"
        }
      ]
    }

## Explanation

In order to manage database modifications, AvaTax REST does not support updates for objects with nested children.  

To update objects, you must make one PUT request for each object that is being changed.  Each PUT request will be processed in the order it was received.
