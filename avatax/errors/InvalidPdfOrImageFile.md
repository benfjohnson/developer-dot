---
layout: page
title: InvalidPdfOrImageFile
number: 1214
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You provided a value in the PDF or image file fields, but the value was empty.

## Example

```json
{
  "code": "InvalidPdfOrImageFile",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidPdfOrImageFile",
      "number": 1214,
      "message": "Pdf or Image files are empty",
      "description": "If you'd like to upload a PDF or image file, please upload a valid one.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidPdfOrImageFile",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please provide a value for the PDF / Image file fields as a Base64 encoded string.
