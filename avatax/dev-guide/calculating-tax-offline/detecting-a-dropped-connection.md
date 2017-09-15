---
layout: page
title: 11.1 - Detecting a Dropped Connection
product: avaTax
doctype: dev_guide
chapter: calculating-tax-offline
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/calculating-tax-offline/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/calculating-tax-offline/retry-or-fallback/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

In <a class="dev-guide-link" href="/avatax/dev-guide/getting-started-with-avatax/troubleshooting/">Chapter 1.3 - Troubleshooting</a>, we briefly explained how to handle AvaTax error messages.  Errors related to offline tax calculation can be more complex because sometimes you may receive an error from AvaTax and in other times you may receive an error from your operating system or software development suite indicating that a connection has been dropped.

When you receive an error message from AvaTax, the best practice is to display that error to the operator or visitor and allow them to determine how to proceed.  For example, if you receive the error <a class="dev-guide-link" href="/avatax/errors/EntityNotFoundError/">EntityNotFoundError</a> from the API, you have searched for a document that does not exist.  This error should be shown to the user; it will help them determine how to proceed.  They may have mistyped the document code.
<pre>
{
  "error": {
    "code": "EntityNotFoundError",
    "message": "Document with ID 'TESTINGCO - 100' not found.",
    "target": "HttpRequest",
    "details": [
      {
        "code": "EntityNotFoundError",
        "number": 4,
        "message": "Document with ID 'TESTINGCO - 100' not found.",
        "faultCode": "Client",
        "helpLink": "http://developer.avalara.com/avatax/errors/EntityNotFoundError",
        "severity": "Error"
      }
    ]
  }
}
</pre>

If you receive an error message that indicates that your API call has failed, or your connection has been broken, or there has been a timeout, your error message may come from the operating system rather than AvaTax.  For example, using the AvaTax SDK in C#, this code will catch errors sent from AvaTax:
<pre>
TransactionModel t;
try {
    t = Client.CreateTransaction(model);
} catch (AvaTaxError err) {
    ... code to respond to the error ...
}
</pre>

A dropped connection will produce a different kind of error - for example, AspNetCore produces an <code>WinHttpException</code> when a connection is dropped using HttpClient.  Our task is to identify how our operating system or programming language exposes a connection error.  Once you have identified this error, your code must trap the exception and ensure that you can respond correctly and prevent the exception from being exposed to the end user.

But how do we test this code?  If a connection interruption is an unpredictable occurrence, how can you evaluate it?  AvaTax provides an interesting feature called <code>ForcedTimeout</code>.  This feature is intended to allow you to fine-tune your client-side timeout logic, and reliably cause a timeout that you can use for integration testing.

When you use the <code>ForcedTimeout</code> feature, AvaTax will do the following:
<ul class="dev-guide-list">
    <li>Delay for 30 seconds</li>
    <li>Throw an error of type ForcedTimeoutError</li>
</ul>

We recommend that your application should select an appropriate timeout value for your needs.  We cannot tell you exactly what timeout value is best for you; but in our experience, interactive web applications tend to have a shorter timeout and desktop accounting programs tend to have a longer timeout.  Here's the test you should be able to execute:
<div class="dev-guide-test" id="test1">
<div class="dev-guide-test-heading">Test Case - 11.1.1 </div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Call CreateTransaction with the option $include=ForcedTimeout</li>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>If your code has a timeout value selected, you should receive an operating system or programming language specific error message related to the timeout of this API call.</li>
</ul>
</div>
</div>

Now that you've simulated a timeout in your application, the next step is to decide whether to retry your transaction or fallback to a default tax rate calculation.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/calculating-tax-offline/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/calculating-tax-offline/retry-or-fallback/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
