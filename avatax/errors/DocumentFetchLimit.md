---
layout: page
title: DocumentFetchLimit
number: 308
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to fetch more than 1000 transaction documents at a time.

## Example

```json
{
  "code": "DocumentFetchLimit",
  "target": "Unknown",
  "details": [
    {
      "code": "DocumentFetchLimit",
      "number": 308,
      "message": "Requested too many transaction documents.",
      "description": "You have requested -0- transaction documents.  This API supports requests only up to 1000 transaction documents.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/DocumentFetchLimit",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The transaction fetch API is intended to allow retrieval of a small numbers of documents at a time.  Since transactions may contain a large amount of information, this fetch call may take a significant amount of time to complete.  To ensure that this response can be completed quickly, you are limited to fetching up to 1000 transactions in a single API call.

If you would like to retrieve large numbers of documents, please consider using reports in admin console to download summary or detailed data.
