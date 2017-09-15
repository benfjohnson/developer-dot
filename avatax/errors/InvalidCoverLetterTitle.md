---
layout: page
title: InvalidCoverLetterTitle
number: 1215
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

THe cover letter you specified for this CertExpress invitation was not found.

## Example

```json
{
  "code": "InvalidCoverLetterTitle",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidCoverLetterTitle",
      "number": 1215,
      "message": "Invalid cover letter title: -0-.",
      "description": "To send a CertExpress invitation, a valid cover letter title is needed. You can get a list of available cover letter at api/v2/definitions/coverletters.",
      "faultCode": "Server",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidCoverLetterTitle",
      "severity": "Error"
    }
  ]
}
```

## Explanation

You specified a cover letter title that could not be found.  Please call the `ListCoverLetters` API, select a cover letter, then call this API with the corrected value.
