---
layout: page
title: AddressIncomplete
number: 309
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You provided an incomplete address to an AvaTax API.

## Example

```json
{
  "code": "AddressIncomplete",
  "target": "Unknown",
  "details": [
    {
      "code": "AddressIncomplete",
      "number": 309,
      "message": "The address value was incomplete.",
      "description": "The address value -0- was incomplete.  You must provide either a valid postal code, line1 + city + region, or latitude + longitude.  For international transactions outside of US/CA, only a country code is required.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AddressIncomplete",
      "severity": "Error"
    }
  ]
}
```

## Explanation

All AvaTax APIs will attempt to resolve an address as closely as possible.  However, if insufficient information is provided and this address cannot be identified, AvaTax will return an error message.

In general, you should provide at least the following information to an AvaTax API:

<ul class="normal">
    <li>Country code (see <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListCountries/">/api/v2/definitions/countries</a> for a full list)</li>
    <li>Postal Code</li>
</ul>

If you are unable to provide full information, you may want to use the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Addresses/ResolveAddress/">Address Resolution API</a> first to check if the address can be identified.
