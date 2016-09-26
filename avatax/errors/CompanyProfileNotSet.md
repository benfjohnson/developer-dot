
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

TBD

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
