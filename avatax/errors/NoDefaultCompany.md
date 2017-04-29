---
layout: page
title: NoDefaultCompany
number: 27
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Your account does not currently have a default company.

## Example

```json
{
  "code": "NoDefaultCompany",
  "target": "Unknown",
  "details": [
    {
      "code": "NoDefaultCompany",
      "number": 27,
      "message": "Your account does not have a default company.",
      "description": "Please create a company within your account and mark it as the default company, then retry your API call.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/NoDefaultCompany",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The API you called requires that your account have a default company configured.

To configure a default company, please visit the AvaTax administration website as follows:

<ul class="normal">
    <li>For Sandbox accounts, please visit <a href="https://sandbox.admin.avalara.com/">https://sandbox.admin.avalara.com/</a></li>
    <li>For Production accounts, please visit <a href="https://admin.avalara.com/">https://admin.avalara.com/</a></li>
</ul>

The administration website allows you to configure your company and begin using the AvaTax API.
