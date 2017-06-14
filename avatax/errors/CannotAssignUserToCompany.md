---
layout: page
title: CannotAssignUserToCompany
number: 62
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Only Company-level users may be assigned to a company.

## Example

```json
{
  "code": "CannotAssignUserToCompany",
  "target": "Unknown",
  "details": [
    {
      "code": "CannotAssignUserToCompany",
      "number": 62,
      "message": "Security role cannot be assigned to a company.",
      "description": "The user -0- cannot be assigned to company -1-, because that user has security role -2-.  Only CompanyAdmin and CompanyUser level users can be joined to a company.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CannotAssignUserToCompany",
      "severity": "Error"
    }
  ]
}
```

## Explanation

In AvaTax, a user may be either part of the overall account, or the user may be joined to a specific company within the account.

If you are an Account level user, the `companyId` value on your [UserModel](https://developer.avalara.com/api-reference/avatax/rest/v2/models/UserModel/) will be null or zero.  Attempting to assign an account-level user to a company will result in this error message.

If you are a Company level user, the `companyId` value on your [UserModel](https://developer.avalara.com/api-reference/avatax/rest/v2/models/UserModel/) will be set to the ID number of the company to which you are assigned.
