---
layout: page
title: EntityNotFoundError
number: 4
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to act on, retrieve, update, or delete an object that does not exist.

## Example

```json
{
  "code": "EntityNotFoundError",
  "target": "Unknown",
  "details": [
    {
      "code": "EntityNotFoundError",
      "number": 4,
      "message": "-0- not found.",
      "description": "The -0- with ID '-1-' was not found.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/EntityNotFoundError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

This problem occurs when an object cannot be found.

If you get this error, the typical cause is usually one of the following:

* Have you called [https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/VoidTransaction/](VoidTransaction) to void a transaction, then tried to use it afterwards?  Transactions that have been cancelled no longer exist, and cannot be used or referenced.
* Have you called a Delete API, like `DeleteCompany`, to delete an object, then tried to fetch it back?  Deleted objects are considered to no longer exist, even though AvaTax does keep track of deleted objects for audit purposes.
* Have you indvertently misspelled the code or used the wrong ID number for an object?

Check your URL and ensure that the object you are attempting to use exists. 

You can use the "Search" endpoint to attempt to retrieve all objects and search for the object you wish to use.
