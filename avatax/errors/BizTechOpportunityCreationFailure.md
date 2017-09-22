---
layout: page
title: BizTechOpportunityCreationFailure
number: 1403
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The Avalara business technology service could not find the opportunity you specified.

## Example

```json
{
  "code": "BizTechOpportunityCreationFailure",
  "target": "Unknown",
  "details": [
    {
      "code": "BizTechOpportunityCreationFailure",
      "number": 1403,
      "message": "Opportunity creation failed.",
      "description": "The opportunity could not be created from the offer through BizTech service for the offer '-0-' at '-1-'. The Service '-1-' is Unavailable. Please try again after sometime.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/BizTechOpportunityCreationFailure",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The opportunity you specified is either not available or you are not permitted to use it.

For a full list of opportunity codes available to you, please contact your business development manager.
