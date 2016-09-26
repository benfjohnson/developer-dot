
---
layout: post
title: AvaTax Errors - CompanyProfileNotSet
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# CompanyProfileNotSet

## Summary

This error occurs when you try to modify the tax profile of a company that inherits its tax profile from its parent.

## Example

    {
      "code": "CompanyProfileNotSet",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 61,
          "Summary": "You attempted to add tax configuration to a company that does not have its own tax profile.",
          "Details": "The company -0- (ID #-1-) has the HasProfile flag set to false. To add -2- to this company, set its HasProfile flag to true.",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/CompanyProfileNotSet",
          "Name": "CompanyProfileNotSet",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

In AvaTax, a company either has its own tax profile or it inherits its tax profile from its parent.  For example, if you have five locations within a certain state, generally those locations will not have their own tax profiles - they will share the tax profile of the parent company.

However, in some circumstances, a corporate entity is structured such that different divisions have their own tax profiles and declare their own nexus and locations.  In this case, you will be able to set tax profiles for each company separately.

This error occurs when you attempt to set a tax profile for a company that is inheriting its tax profile from its parent.

Common troubleshooting:
* Check the company ID of the company you are modifying.  Is it the right company?
* Check all the companies within your account and verify that they match with the tax structure of your business.
* Set the "HasProfile" flag on the company to "true" and you can declare tax profile for that company.
