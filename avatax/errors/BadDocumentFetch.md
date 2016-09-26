---
layout: page
title: AvaTax Errors - BadDocumentFetch
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

This error indicates that you have provided an incorrect "$include" value to the GET /api/v2/companies/{0}/transactions endpoint.

## Example

    {
      "code": "BadDocumentFetch",
      "target": "Unknown",
      "details": [
        {
          "code": "BadDocumentFetch",
          "number": 400,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/BadDocumentFetch",
          "severity": "Error"
        }
      ]
    }

## Explanation

By default, if you fetch a document, you will only retrieve a summary of its data.  You can optionally specify the following values in the "$include" query string parameter:

* Addresses - Retrieves all addresses used for this transaction.
* Summary - Produces a summary of tax for the transaction as a whole.
* Lines - Lists all line items on this transaction.
* Details - Retrieves all tax details calculated for all lines for this transaction.
