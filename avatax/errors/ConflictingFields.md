---
layout: page
title: ConflictingFields
number: 1213
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A certificate must have be stored in only one format: filename, PDF, or images.

## Example

```json
{
  "code": "ConflictingFields",
  "target": "Unknown",
  "details": [
    {
      "code": "ConflictingFields",
      "number": 1213,
      "message": "Fields are conflicting",
      "description": "When creating certificate, you can only specify filename OR pdf OR images.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ConflictingFields",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Avalara's certificate system requires that you store certificates in a format where they can be retrieved on demand in an audit.

You must choose one of the following options to store your certificate:

* A filename corresponding to the certificate.  In the event of an audit, you are asserting that you will be able to provide this file on demand to an auditor, and that this file accurately represents an image or copy of the certificate in question.
* A PDF file attachment containing a scanned copy of the certificate.
* A list of JPG images, one per page, containing a scanned copy of the certificate.

You can only choose one of these three options.  The other two fields must be `null`.
