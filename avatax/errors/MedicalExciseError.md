---
layout: page
title: MedicalExciseError
number: 131
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to create a tax rule that designated a device as medical excise tax for an incorrect jurisdiction.

## Example

```json
{
  "code": "MedicalExciseError",
  "target": "Unknown",
  "details": [
    {
      "code": "MedicalExciseError",
      "number": 131,
      "message": "TaxTypeId must be E (Excise) and RateTypeId must be M (Medical) for US country level rules (JurisTypeId CNT and JurisCode US).",
      "description": "-0- -1- -2- -3- -4- -5- -6-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/MedicalExciseError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

In the United States, Medical Device Excise taxes are authorized by the IRS based on laws related to the medical device excise tax law: <a href="https://www.irs.gov/uac/medical-device-excise-tax-frequently-asked-questions">https://www.irs.gov/uac/medical-device-excise-tax-frequently-asked-questions</a>

When you create a tax rule, that tax rule must be designated as a country-level tax rule for the jurisdiction type `CNT` and use the ISO 3166 country code `US`.
