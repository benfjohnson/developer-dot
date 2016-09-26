
---
layout: post
title: AvaTax Errors - BadDocumentFetch
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# BadDocumentFetch

## Summary

This error indicates that you have provided an incorrect "$include" value to the GET /api/v2/companies/{0}/transactions endpoint.

## Example

    {
      "code": "BadDocumentFetch",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 400,
          "Summary": "The document fetch command was incorrect.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/BadDocumentFetch",
          "Name": "BadDocumentFetch",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

By default, if you fetch a document, you will only retrieve a summary of its data.  You can optionally specify the following values in the "$include" query string parameter:

* Addresses - Retrieves all addresses used for this transaction.
* Summary - Produces a summary of tax for the transaction as a whole.
* Lines - Lists all line items on this transaction.
* Details - Retrieves all tax details calculated for all lines for this transaction.

