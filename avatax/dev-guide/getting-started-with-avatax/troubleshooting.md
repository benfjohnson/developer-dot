---
layout: page
title: 1.3 - Troubleshooting
product: avaTax
doctype: dev_guide
chapter: getting-started-with-avatax
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/getting-started-with-avatax/authentication-in-avatax/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/getting-started-with-avatax/configure-your-avatax-account/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Whenever AvaTax is unable to respond to your API call, the software will present you with an AvaTax error code.  Each error code contains a hyperlink to a web page with more information about the error.  As you learn the AvaTax API, it's important that you understand how to read and interpret these error codes.

<h3>Handling Error Messages</h3>

We've designed the AvaTax error messages to clearly tell you what went wrong, what you can do about it, and how to proceed.  You can read a list of <a class="dev-guide-link" href="https://developer.avalara.com/avatax/errors/">all AvaTax REST error codes</a> on the developer website - and each error message contains within it a hyperlink to the page for that specific error.  Our community forums team monitors all comments on the developer website, so if you see anything confusing, write us a comment - we'd love to improve our documentation!

When an AvaTax API call produces an error, it responds using the standard <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes">HTTP error response codes</a>.  Response codes between 400 and 499 are called <b>Client Errors</b>, and they indicate that you made a mistake in your API call.  Response codes between 500 and 599 refer to internal errors within AvaTax itself; each internal error is automatically logged and reported to our development team for triage.  

If your program gets an HTTP response code between 400 and 499, here's how to proceed:

<ul class="dev-guide-list">
    <li>Parse the error message using a JSON parsing engine.</li>
    <li>Display the summary of the error to the user.</li>
    <li>Link the user to the documentation page that explains the error.</li>
    <li>Allow the user to make a change to their request, or retry their action.</li>
</ul>

For example, let's examine how to handle an authentication error.  If a developer forgets to pass authentication credentials to an AvaTax API, they will probably see the error message <a class="dev-guide-link" href="https://developer.avalara.com/avatax/errors/AuthenticationIncomplete/">AuthenticationIncomplete</a>:

<pre>
Request: GET /api/v2/companies/
 
Response: 401 Unauthorized
{
  "error": {
    "code": "AuthenticationIncomplete",
    "message": "Authentication Incomplete.",
    "target": "HttpRequestHeaders",
    "details": [
      {
        "code": "AuthenticationIncomplete",
        "number": 34,
        "message": "Authentication Incomplete.",
        "description": "You must provide an Authorization header of the type Basic or Bearer to authenticate correctly.  ",
        "faultCode": "Client",
        "helpLink": "http://developer.avalara.com/avatax/errors/AuthenticationIncomplete",
        "severity": "Exception"
      }
    ]
  }
}
</pre>

Your next step should be to display an error message in your product:

<ul class="dev-guide-list">
    <li>Begin by displaying the value <code>error.message</code> in your user interface.  This helps the user understand the context of the problem without taking up too much space.</li>
    <li>If your user interface has room for more details, display the value contained in <code>error.details[0].description</code> and the <code>error.details[0].helpLink</code>.  This would allow the user to see the link "<a href="http://developer.avalara.com/avatax/errors/AuthenticationIncomplete">You must provide an Authorization header of the type Basic or Bearer to authenticate correctly.</a>"</li>
    <li>Some API calls can include more than one error.  For example, if a user is creating a transaction with ten invoice lines, you will receive a list of error messages, one per mistake.  Depending on your user interface, you may wish to parse and display all error messages, or only display the top one.</li>
</ul>

In the case of an error, it's critical to handle the error and enable the software to continue.  If your program has a user interface, you should allow the user to retry or cancel the API call.  Your customers may be working offline or with an interrupted Internet connection, and they need to get their work done even if they can't use AvaTax at the moment.  We'll cover offline behavior more in <a class="dev-guide-link" href="/avatax/dev-guide/calculating-tax-offline/">Chapter 11 - Calculating Tax Offline</a>, but for the moment let's review how to properly handle error messages.

Here's a test case that causes an error message to occur.  We will call the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Companies/QueryCompanies/">QueryCompanies API</a> with an incorrect filter, which produces an error message.  Try this API call and make sure your program can display the error message correctly:

<div class="dev-guide-test" id="test1">
<div class="dev-guide-test-heading">Test Case 1.3.1 - Handling Errors</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
<li>Call QueryCompanies with the following parameters:</li>
    <ul class="dev-guide-list">
        <li>$filter = id = 'abc'</li>
    </ul>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>You will receive an error message:</li>
    <ul class="dev-guide-list">
        <li>Title: "Error parsing $include parameter."</li>
        <li>Message: "The field named 'CompanyId' is type System.Int32 and cannot be compared to 'abc'".</li>
    </ul>
    <li>Your product will display an error message showing this error message.</li>
    <li>The error message should make it clear to a user that they have attempted to filter on a numeric value but have instead provided an alphabetic string.</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>Create Transaction:
            <pre>
GET https://sandbox-rest.avatax.com/api/v2/companies?$filter=id = 'abc'
</pre>
        </li>
    </ul>
</div>
</div>
</div>

Now that your software is able to display the error message correctly, let's discuss how to solve common problems.

<h3>Identifying a Firewall or Proxy Server Problem</h3>

If your software is unable to contact AvaTax, pretty much any API call you make will produce an error.  So let's begin by explaining how we can identify whether a connection problem exists.

First, please visit the AvaTax API server from your desktop computer or mobile phone.  You should try both of these two URLs, one for sandbox and one for production:

<ul class="dev-guide-list">
    <li>Sandbox Environment: <a class="dev-guide-link" href="https://sandbox-rest.avatax.com">https://sandbox-rest.avatax.com</a></li>
    <li>Production Environment: <a class="dev-guide-link" href="https://rest.avatax.com">https://rest.avatax.com</a></li>
</ul>

If your connection is working correctly, you should see a web page similar to the following:

<img class="dev-guide-pic" src="/avatax/dev-guide/getting-started-with-avatax/connecting-to-avatax.png" style="border: 2px solid orange; width: 80%;">

If you can't see this page on your desktop computer at work, but you can see this web page from a mobile phone on the public Internet, you may have a networking issue.  There's a chance your office has a firewall or proxy server that enforces some limits on your network connectivity.  Contact your corporate IT department for more information.

<h3>Testing Authentication</h3>

If you receive an authentication error, a good place to start is the <a class="dev-guide-link" href="/api-reference/avatax/soap/methods/ping/">Ping API</a>.  You can call this API whenever your program starts, to check to ensure that it can contact the AvaTax server - because ping will never return an error message even if you don't provide any authentication.  If your Ping call fails, you know you are having trouble with your internet connection.

Here's how to use ping:

<div class="dev-guide-test" id="test1">
<div class="dev-guide-test-heading">Test Case 1.3.2 - Ping API</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
<li>Call the AvaTax Ping API </li>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The Ping API returns a JSON object with the following information:</li>
    <ul class="dev-guide-list">
        <li>version: A string similar to "17.9.0.120" indicating the version of the AvaTax server.</li>
        <li>authenticated: A boolean value indicating whether your API call was successfully authenticated.</li>
        <li>authenticationType: A string with information about the authentication method you used, if any.</li>
        <li>If your API call was successfully authenticated, information about the authenticated user will appear in the fields authenticatedUserName, authenticatedUserId, and authenticatedAccountId.</li>
    </ul>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>Ping:
            <pre>
GET https://sandbox-rest.avatax.com/api/v2/utilities/ping
</pre>
        </li>
    </ul>
</div>
</div>
</div>

<br/>

When your program detects that a ping call has failed, it should notify the user that it can't reach AvaTax, and ask them to check their Internet connection.  If the ping call returns but the `authenticated` field is set to `false`, the user has probably mistyped their username or password and they should retry.

Before we move on, let's look at a few other common troubleshooting steps you may encounter as you begin development:

<h3>Other Common Problems</h3>

<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Problem Type</th>
                <th>Steps to Diagnose</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Routing Problems</td>
                <td>Do your routers have the latest software? Have they been rebooted recently, or are there too many hops between your network and the outside world? 
                <ul class="dev-guide-list">
                    <li>If your network is using a direct connection with a local internet service provider, does your connection reset regularly?</li>
                    <li>If the connection is permanent or business-class, does your ISP offer metrics to help you measure response time?</li>
                    <li>If you have a more advanced network using <a class="dev-guide-link" href="https://en.wikipedia.org/wiki/Border_Gateway_Protocol">Border Gateway Protocol</a> routing, you would need to talk to your network engineering team. BGP issues are very challenging to review and are beyond the scope of this article.</li>
                </ul>
                Due to security issues, Avalara's servers do not respond to ping requests.  This means that network traces from software like <a href="https://en.wikipedia.org/wiki/Traceroute">traceroute or tracert</a> are not able to provide accurate route timings.
                </td>
            </tr>
            <tr>
                <td>Authentication Problems</td>
                <td>Try using the <a class="dev-guide-link" href="/api-reference/avatax/soap/methods/ping/">Ping API</a>, or switch to using an <a class="dev-guide-link" href="/sdk/">AvaTax SDK</a> which has prebuilt and tested authentication code.</td>
            </tr>
            <tr>
                <td>Firewall Problems</td>
                <td>To use AvaTax, you must enable access to all IP addresses identified by these DNS names:
                <ul class="dev-guide-list">
                    <li>Sandbox Environment: <a class="dev-guide-link" href="https://sandbox-rest.avatax.com">https://sandbox-rest.avatax.com</a></li>
                    <li>Production Environment: <a class="dev-guide-link" href="https://rest.avatax.com">https://rest.avatax.com</a></li>
                </ul>
                AvaTax is a dynamic product and its IP addresses may change regularly. AvaTax does not support firewalls that filter on individual IP addresses.
                </td>
            </tr>
            <tr>
                <td>Ethernet Problems</td>
                <td>Check the quality of your wiring and the auto-negotiate settings on your ethernet devices. Bad wiring or devices with mismatched speed settings are easy to overlook! You can run <code>netstat -s</code> on a windows machine or <code>ifconfig -a</code> on a linux machine to detect whether an unusual number of bad packets are coming through your network. If you have a performance mismatch, try checking with your network administrator to see if the cabling can be improved.</td>
            </tr>
            <tr>
                <td>Host Files / IP Address Hardcoding / DNS Caching</td>
                <td>AvaTax does not support hard coded IP addresses or host files. To use AvaTax, you must resolve DNS names dynamically.
                Your DNS server should respect the DNS time-to-live (TTL) values; Avalara publishes DNS TTL values designed to permit our operations team to adjust our connectivity in response to changing network conditions.</td>
            </tr>
            <tr>
                <td>Proxy Server Problems</td>
                <td>AvaTax is not designed for environments using proxy servers. Proxy servers can cause latency and connectivity problems when calling high performance APIs like AvaTax.
                If your company policy requires a proxy server by policy, please consult your proxy provider for how to correctly configure the proxy to work with AvaTax.</td>
            </tr>
            <tr>
                <td>DNS Time-To-Live</td>
                <td>Avalara makes changes to our domain name system records periodically.  Your software should ensure that you respect the DNS time-to-live values, and that your software periodically contacts DNS to update its name lookups.
                Some software, including some Java JRE versions, may need to be updated to ensure the "ttl" or "time-to-live" values are correctly handled.  If you experience problems with occasional DNS changes, please check the documentation for your operating system, programming language, or development environment to ensure your software handles TTL values correctly.                
                </td>
            </tr>
            <tr>
                <td>Need SSL Certificate Verification</td>
                <td>Some web clients (such as CURL for Windows) will require you to download the Avalara AvaTax SSL public keychain and install it into your client’s keychain repository. If the client program requests that you specifically accept and trust Avalara's web certificate, here's how to proceed:
                <ol>
                    <li>Go to <a class="dev-guide-link" href="https://knowledge.verisign.com/support/mpki-for-ssl-support/index?page=content&actp=CROSSLINK&id=AR1553">VeriSign Root CA</a> and follow the instructions.</li>
                    <li>Save the file in your preferred directory named like "certs-ca-bundle.crt".</li>
                    <li>Register that file following your standard certificate store process.</li>
                </ol></td>
            </tr>
        </tbody>
    </table>
</div>

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/getting-started-with-avatax/authentication-in-avatax/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/getting-started-with-avatax/configure-your-avatax-account/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

