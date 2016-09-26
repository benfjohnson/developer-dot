
---
layout: post
title: AvaTax Errors - EntityNotFoundError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# EntityNotFoundError

## Summary

You attempted to act on, retrieve, update, or delete an object that does not exist.

## Example

    {
      "code": "EntityNotFoundError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 4,
          "Summary": "-0- with ID '-1-' not found.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/EntityNotFoundError",
          "Name": "EntityNotFoundError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

Check your URL and ensure that the object you are attempting to use exists. 

You can use the "Search" endpoint to attempt to retrieve all objects and search for the object you wish to use.