---
layout: page
title: MissingRequiredFields
number: 1204
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A certificate must have either a filename, a PDF file attachment, or one JPG image for each page in the certificate.

## Example

```json
{
  "code": "MissingRequiredFields",
  "target": "Unknown",
  "details": [
    {
      "code": "MissingRequiredFields",
      "number": 1204,
      "message": "The field -0- is missing.",
      "description": "The field -0- is required to -1- -2-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/MissingRequiredFields",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The Avalara CertCapture service requires that certificate files be auditable.

To support audits of certificates, you must provide one of the following fields:

* A filename corresponding to the certificate.  In the event of an audit, you are asserting that you will be able to provide this file on demand to an auditor, and that this file accurately represents an image or copy of the certificate in question.
* A PDF file attachment containing a scanned copy of the certificate.
* A list of JPG images, one per page, containing a scanned copy of the certificate.

You must provide either a value in the `filename` field, the `pdf` field, or the `pages` field in order for Avalara to store your certificate.
