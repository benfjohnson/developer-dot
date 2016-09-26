
---
layout: post
title: AvaTax Errors - MedicalExciseError
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# MedicalExciseError

## Summary

You attempted to create a tax rule that designated a device as medical excise tax for an incorrect jurisdiction.

## Example

    {
      "code": "MedicalExciseError",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 131,
          "Summary": "TaxTypeId must be E (Excise) and RateTypeId must be M (Medical) for US country level rules (JurisTypeId CNT and JurisCode US).",
          "Details": "-0- -1- -2- -3- -4- -5- -6-",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/MedicalExciseError",
          "Name": "MedicalExciseError",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

In the United States, Medical Device Excise taxes are authorized by the IRS based on laws related to the medical device excise tax law: https://www.irs.gov/uac/medical-device-excise-tax-frequently-asked-questions

When you create a tax rule, that tax rule must be designated as a country-level tax rule for the jurisdiction type CNT and the code "US".
