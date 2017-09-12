---
layout: page
title: IncorrectPathError
number: 139
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to modify an object but you provided an object that matches a different URL.

## Example

```json
{
  "code": "IncorrectPathError",
  "target": "Unknown",
  "details": [
    {
      "code": "IncorrectPathError",
      "number": 139,
      "message": "Attempt to update object with the wrong URL.",
      "description": "You attempted to update the model at URL '-0-', but the model you supplied belongs to URL '-1-'.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/IncorrectPathError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

This problem commonly occurs if you have fetched an object from one URL but attempt to update it by posting it to a different URL.

Common troubleshooting errors:
<ul class="normal">
<li>When updating an object, you must provide all fields.  Avalara REST v2 does not currently support "partial updates" to an object.</li>
<li>To update an object, you should first call `GET /api/v2/(myobjecturl)`, then change one value on that object, then `PUT /api/v2/(myobjecturl)` to update it.  This ensures that you are fetching the most recent object and only changing the designated field.</li>
</ul>
