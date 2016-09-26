
---
layout: post
title: AvaTax Errors - CannotUpdateNestedObjects
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# CannotUpdateNestedObjects

## Summary

In AvaTax REST, you can create objects with nested children, but you cannot update objects with nested children.

## Example

    {
      "code": "CannotUpdateNestedObjects",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 136,
          "Summary": "Updating nested objects using the 'PUT' method is not supported.  You must update each object separately.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/CannotUpdateNestedObjects",
          "Name": "CannotUpdateNestedObjects",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

In order to manage database modifications, AvaTax REST does not support updates for objects with nested children.  

To update objects, you must make one PUT request for each object that is being changed.  Each PUT request will be processed in the order it was received.