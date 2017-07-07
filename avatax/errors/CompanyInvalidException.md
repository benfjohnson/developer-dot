---
layout: page
title: CompanyInvalidException
number: 3
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to modify a company that does not exist.

## Example

```json
{
  "code": "CompanyInvalidException",
  "target": "Unknown",
  "details": [
    {
      "code": "CompanyInvalidException",
      "number": 3,
      "message": "Company could not be found.",
      "description": "The company -0- does not exist, or you do not have the rights to view it.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CompanyInvalidException",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The company with the specific ID number does not exist, or you do not have access to use that company.

Please use the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Companies/QueryCompanies/">QueryCompanies</a> API to determine which companies exist in your account.
