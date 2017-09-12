---
layout: page
title: BizTechCustomerAccountFailure
number: 1402
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The Avalara business technology service could not create the account you requested.

## Example

```json
{
  "code": "BizTechCustomerAccountFailure",
  "target": "Unknown",
  "details": [
    {
      "code": "BizTechCustomerAccountFailure",
      "number": 1402,
      "message": "Customer Account creation failed.",
      "description": "The customer account could not be created through BizTech service for the account '-0-' at '-1-'.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/BizTechCustomerAccountFailure",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The API reported an error when creating an account.  This account cannot be created.
