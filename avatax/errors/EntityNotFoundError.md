---
layout: page
title: EntityNotFoundError
number: 4
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You attempted to act on, retrieve, update, or delete an object that does not exist.

## Example

    {
      "code": "EntityNotFoundError",
      "target": "Unknown",
      "details": [
        {
          "code": "EntityNotFoundError",
          "number": 4,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/EntityNotFoundError",
          "severity": "Error"
        }
      ]
    }

## Explanation

Check your URL and ensure that the object you are attempting to use exists. 

You can use the "Search" endpoint to attempt to retrieve all objects and search for the object you wish to use.
