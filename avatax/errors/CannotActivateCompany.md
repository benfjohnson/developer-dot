---
layout: page
title: CannotActivateCompany
number: 148
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A company can only be activated when it has a valid tax profile.

## Example

```json
{
  "code": "CannotActivateCompany",
  "target": "Unknown",
  "details": [
    {
      "code": "CannotActivateCompany",
      "number": 148,
      "message": "Active companies must have a tax profile.",
      "description": "To activate this company, set its HasProfile to true, or assign it to a parent company with a tax profile.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CannotActivateCompany",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A 'Company' object in AvaTax must have either its own tax profile, or it must be a subsidiary company that inherits its tax profile from a parent company.

A company with its own tax profile must have the 'HasProfile' flag set to true on the company object.

A company that inherits its profile from a parent must have its `HasProfile` flag set to false, and the `parentCompanyId` value set to the ID of the parent company.  That parent company must exist and it must have its own `HasProfile` flag set to true.
