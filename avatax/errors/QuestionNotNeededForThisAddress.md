---
layout: page
title: QuestionNotNeededForThisAddress
number: 1000
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

No jursidiction-specific questions are relevant for this location.

## Example

```json
{
  "code": "QuestionNotNeededForThisAddress",
  "target": "Unknown",
  "details": [
    {
      "code": "QuestionNotNeededForThisAddress",
      "number": 1000,
      "message": "No question is needed for this address.",
      "description": "Please remove location setting model to proceed.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/QuestionNotNeededForThisAddress",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Only some jurisdictions require location-based information in order to file tax returns successfully.

This particular address does not have any location-based questions that must be answered.
