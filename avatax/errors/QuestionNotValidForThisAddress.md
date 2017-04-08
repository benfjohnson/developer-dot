---
layout: page
title: QuestionNotValidForThisAddress
number: 1001
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

One of the questions you answered is not valid for this address.

## Example

```json
{
  "code": "QuestionNotValidForThisAddress",
  "target": "Unknown",
  "details": [
    {
      "code": "QuestionNotValidForThisAddress",
      "number": 1001,
      "message": "Question is not valid for this address.",
      "description": "Each jurisdiction has separate registration rules for business locations.  The question -0- is not valid in this jurisdiction.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/QuestionNotValidForThisAddress",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Only some jurisdictions require location-based information in order to file tax returns successfully.

This location's address does not require that you fill out this question.
