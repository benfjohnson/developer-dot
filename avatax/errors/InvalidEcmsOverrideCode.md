---
layout: page
title: InvalidEcmsOverrideCode
number: 171
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The EcmsOverrideCode value you supplied conflicts with a system-defined code.

## Example

```json
{
  "code": "InvalidEcmsOverrideCode",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidEcmsOverrideCode",
      "number": 171,
      "message": "EcmsOverrideCode is invalid.",
      "description": "EcmsOverrideCode is conflicting with existing EntityUseCode.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidEcmsOverrideCode",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The code you supplied conflicts with an existing EntityUseCode.  

For a list of system-defined EntityUseCode values, see [ListEntityUseCodes](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListEntityUseCodes/).
