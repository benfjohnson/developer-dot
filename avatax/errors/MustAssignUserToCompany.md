---
layout: page
title: MustAssignUserToCompany
number: 63
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Company level users must be assigned to a company within this account.

## Example

```json
{
  "code": "MustAssignUserToCompany",
  "target": "Unknown",
  "details": [
    {
      "code": "MustAssignUserToCompany",
      "number": 63,
      "message": "Company users must be assigned to a company.",
      "description": "The user -0- is of security role -1-, which must be assigned to company.  Please set the companyId value to the ID of a company.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/MustAssignUserToCompany",
      "severity": "Error"
    }
  ]
}
```

## Explanation

In AvaTax, a user may be either part of the overall account, or the user may be joined to a specific company within the account.

If you are an Account level user, the `companyId` value on your [UserModel](https://developer.avalara.com/api-reference/avatax/rest/v2/models/UserModel/) will be null or zero.  

If you are a Company level user, the `companyId` value on your [UserModel](https://developer.avalara.com/api-reference/avatax/rest/v2/models/UserModel/) will be set to the ID number of the company to which you are assigned.  You will receive this error if you create a Company level user with a `companyId` value of zero or null, or with a `companyId` number that does not exist in this account.
