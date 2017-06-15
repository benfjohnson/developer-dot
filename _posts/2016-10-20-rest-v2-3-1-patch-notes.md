---
layout: post
title: REST v2.3.1 Patch Notes
date: 2016-10-20 11:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

<h2>REST v2.3.1 Patch Notes</h2>

For those of you who participated in the AvaTax REST v2 Preview program, I'd like to take this opportunity to thank you for your time and effort helping us debug a huge software release.  We've now implemented a clean, modern, consistent REST API that covers tax functionality from top to bottom - and we've established a great platform for continuing improvements.

Now that the program is winding down, please take note of a few differences between the final release of REST v2 and the preview program you tested in August/September:

<h3>New URL for REST v2</h3>

The existing URL, <a href="https://rest-sbx-preview.avalara.net">https://rest-sbx-preview.avalara.net</a>, will be retired and no longer available after October 25th, 2016.

If you have any applications or services using this URL, please update them to point to the new URLs:
<ul class="normal">
<li><a href="https://sandbox-rest.avatax.com">https://sandbox-rest.avatax.com</a> (for users of the "Sandbox" test development environment, available now)</li>
<li><a href="https://rest.avatax.com">https://rest.avatax.com</a> (for Production accounts, available October 25th 2016)</li>
</ul>

<h3>Changes to /api/v2/transactions/create</h3>

The `/api/v2/transactions/create` endpoint now only allows creation of one transaction at a time.

If any of your existing programs were creating multiple transactions with a single API call, you will need to:

<ul class="normal">
<li>Modify them to use one API call per each transaction, or</li>
<li>Modify them to use the <code class="highlighter-rouge">/api/v2/companies/123/batches/create</code>  endpoint instead.</li>
</ul>

<h3>Posting and Committing Transactions</h3>

To avoid confusion between the action "POST" and the HTTP verb "POST", we have renamed and simplified the `/api/v2/transactions/123/post` API call to "settle".
Some users were also confused about the difference between a call to `/api/v2/transactions/123/post` vs a call to `/api/v2/transactions/123/commit`.  To reduce this confusion, we have split these API calls into individual functions:

<pre>POST /api/v2/companies/ABC/transactions/DEF/verify</pre>

Ensures that a transaction's amounts match an expected value, and returns an error if they do not match.

<pre>POST /api/v2/companies/ABC/transactions/DEF/changecode</pre> 

Changes the transaction code of a specified transaction.

<pre>POST /api/v2/companies/ABC/transactions/DEF/commit</pre>

Commits a transaction so that it can be reported in a tax return.

Each of these three APIs is separate and does not depend on the others.  Once you have created a transaction, you can call any of these three APIs to execute any one of these three functions separately.  If you'd still like to call all three of these API calls at once, you can use "settle":

<pre>POST /api/v2/companies/ABC/transactions/DEF/settle</pre> 

This endpoint allows you to execute all three actions, verify, changecode, and commit, in a single API call.

<h3>Single Object Creation</h3>
If you call an API that allows multiple object creation, but you forget to send an array, our API will now accept a single object and continue to work rather than reporting an error.

<h3>Improved API Documentation</h3>
When browsing the online swagger documentation for REST v2, you will notice that objects have rewritten help text and example objects visible within the online documentation.

<h3>Error Messaging Improvements</h3>

Error Message objects have been rewritten to match Microsoft's updated Error Message standards, and all error messages contain a URL that points to a web page explaining the error in detail.  Here's an example of the new error objects:

```json
{
  "error": {
    "code": "ModelStateInvalid",
    "message": "One or more parameters in your request were incorrect.",
    "target": "HttpRequest",
    "details": [
      {
        "code": "ModelStateInvalid",
        "number": 70,
        "message": "One or more parameters in your request were incorrect.",
        "description": "The value '-0-' is not a valid 'id'.",
        "faultCode": "Client",
        "helpLink": "http://developer.avalara.com/avatax/errors/ModelStateInvalid",
        "severity": "Error"
      }
    ]
  }
}
```

You can preview a list of error messages recognized by AvaTax REST v2 on the <a href="http://developer.avalara.com/avatax/errors/">http://developer.avalara.com/avatax/errors/</a> page.

<h3>Client Identification</h3>

In each AvaTax API request, you can provide a request header called `X-Avalara-Client`.  This value identifies your application and helps Avalara track down problems and identify when customers are using an outdated version of the software.

The client identification tag looks like this:

```
X-Avalara-Client: (application name); (application version); (library name); (library version); (machine name)
```

<h3>Other Improvements</h3>

We made hundreds of individual improvements to the API based on your feedback and based on internal testing.  Many of these changes helped to clarify error messages that were confusing, or identify unsafe API calls - calls that would result in invalid tax configuration settings, for example.

We welcome your feedback - please continue to share your experience of the REST v2 API and we will be happy to continue to work with you!

--Ted Spence, Director, AvaTax Core Engine
