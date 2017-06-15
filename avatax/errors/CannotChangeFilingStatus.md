---
layout: page
title: CannotChangeFilingStatus
number: 401
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The requested filing status change is invalid.

## Example

```json
{
  "code": "CannotChangeFilingStatus",
  "target": "Unknown",
  "details": [
    {
      "code": "CannotChangeFilingStatus",
      "number": 401,
      "message": "Filing status cannot be changed to the requested value.",
      "description": "You may not change from -0- to -1-.  Only specific filing status changes are permitted.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CannotChangeFilingStatus",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Customers using Avalara's Managed Returns Service go through a few steps for each company that is a reporting entity in their account:

<ul class="normal">
    <li>NotYetFiling - The customer has not yet requested that Avalara begin filing for this company.</li>
    <li>FilingRequested - An account administrator has requested that Avalara begin filing for this company, but that Avalara's compliance team has not yet reviewed the request.</li>
    <li>FirstFiling - Filing for this company / reporting entity has begun.</li>
</ul>

You can change the filing status of your company by calling the ChangeFilingStatus API.  If you attempt to change to a status that is not yet permitted, you will receive this error message.

A customer can only request that a status be changed from `NotYetFiling` to `FilingRequested`.  Avalara compliance team members will manage other status changes.
