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

When beginning development with AvaTax, you may often see errors.  Each error message has its own steps to debug and diagnose the problem, and it's important to know how to begin working with these errors.

<h3>Handling Error Messages</h3>
It's normal at this stage of development to see error messages from the AvaTax API.  We've designed our error messages to clearly tell you what went wrong, what you can do about it, and how to proceed.  We've published documentation that explains <a class="dev-guide-link" href="https://developer.avalara.com/avatax/errors/">all REST error codes and how to interpret them</a>.  

AvaTax identifies all error messages using HTTP response codes between 400 and 499 (for errors in your API call), as well as between 500 and 599 (for errors within AvaTax itself).  If your program gets an HTTP response code between 400 and 499, here's how to proceed:
<ul class="dev-guide-list">
    <li>Parse the error message</li>
    <li>Display the summary of the error to the user</li>
    <li>Link the user to the documentation page that explains the error</li>
    <li>Allow the user to retry their action</li>
</ul>
For example, let's examine how to handle an authentication error.  If you make an AvaTax API call you receive the error message <a class="dev-guide-link" href="https://developer.avalara.com/avatax/errors/AuthenticationIncomplete/">AuthenticationIncomplete</a>, here's what you will see:
<pre>
Request: GET /api/v2/companies/
Authorization: Basic MYBADCREDENTIALS
 
 
Response: 401 Unauthorized
{
  "code": "AuthenticationIncomplete",
  "target": "Unknown",
  "details": [
    {
      "code": "AuthenticationIncomplete",
      "number": 34,
      "message": "Authentication Incomplete.",
      "description": "You must provide an Authorization header of the type Basic or Bearer to authenticate correctly.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AuthenticationIncomplete",
      "severity": "Exception"
    }
  ]
}
</pre>

Your next step should be to display an error message in your product.  The error message should have:
<ul class="dev-guide-list">
    <li>At a minimum, the error message should have the title of <code>details[0].message</code>.</li>
    <li>Best practice is to include the <code>details[0].description</code> and the <code>details[0].helpLink</code> values so the customer can learn more about the problem.</li>
    <li>Some API calls can include more than one error.  You can optionally display information about more than one error message at a time.</li>
</ul>

It's critical that you allow the customer to either make changes and retry the API call or just proceed in their work and bypass the API call.  Your customers may be working offline or with an interrupted Internet connection, and they need to get their work done even if they can't use AvaTax at the moment.  We'll cover offline behavior more in <a class="dev-guide-link" href="/avatax/dev-guide/calculating-tax-offline/">Chapter 11 - Calculating Tax Offline</a>, but for the moment let's review how to properly handle error messages.

<div class="dev-guide-test" id="test1">
<div class="dev-guide-test-heading">Test Case - 1.3.1 </div>
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
https://sandbox-rest.avatax.com/api/v2/companies?$filter=id = 'abc'
</pre>
        </li>
    </ul>
</div>
</div>
</div>

<h3>Check Your Connection</h3>
The AvaTax API is available online at the following URLs:
<ul class="dev-guide-list">
    <li>Sandbox Environment: <a class="dev-guide-link" href="https://sandbox-rest.avatax.com">https://sandbox-rest.avatax.com</a></li>
    <li>Production Environment: <a class="dev-guide-link" href="https://rest.avatax.com">https://rest.avatax.com</a></li>
</ul>

Before you proceed, please make sure that your office can contact these URLs.  When you visit these sites, you should see a web page similar to the following:

<img class="dev-guide-pic" src="/avatax/dev-guide/getting-started-with-avatax/connecting-to-avatax.png">

If you can't see this page, check your connection!

<h3>Check Your Authentication</h3>
One good way to begin troubleshooting a problematic connection is to use the <a class="dev-guide-link" href="/api-reference/avatax/soap/methods/ping/">Ping API</a>. The Ping API is useful because it never returns authentication errors; you can call it even if your authorization header is missing.  If your Ping call fails, you know you are having trouble with your internet connection.

Here's how to use ping:
<pre>
curl
    -X GET
    -H 'Accept: application/json'
    -H 'Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
    https://sandbox-rest.avatax.com/api/v2/utilities/ping
 
{
  "version": "1.0.0.0",
  "authenticated": true,
  "authenticationType": "UsernamePassword",
  "authenticatedUserName": "TestUser",
  "authenticatedUserId": 98765,
  "authenticatedAccountId": 123456789
}
</pre>

<h3>Common Problems</h3>
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
                <td>Do your routers have the latest software? Have they been rebooted recently, or are there too many hops between your network and the outside world? It’s worth mentioning that traceroute / tracert (on Windows) provides useful diagnostics, but keep in mind that Avalara’s security policies do not generally allow us to respond to ping requests. Because our server won’t respond to a ping, it may be hard to interpret the results.
                <ul class="dev-guide-list">
                    <li>If your network is using a direct connection with a local internet service provider, does your connection reset regularly?</li>
                    <li>If the connection is permanent or business-class, does your ISP offer metrics to help you measure response time?</li>
                    <li>If you have a more advanced network using <a class="dev-guide-link" href="https://en.wikipedia.org/wiki/Border_Gateway_Protocol">Border Gateway Protocol</a> routing, you would need to talk to your network engineering team. BGP issues are very challenging to review and are beyond the scope of this article.</li>
                </ul>
                </td>
            </tr>
            <tr>
                <td>Authentication Problems</td>
                <td>Try using the <a class="dev-guide-link" href="/api-reference/avatax/soap/methods/ping/">Ping API</a>, or switch to using an <a class="dev-guide-link" href="/sdk/">AvaTax SDK</a> which has prebuilt and tested authentication code.</td>
            </tr>
            <tr>
                <td>Firewall Problems</td>
                <td>To use AvaTax, you must enable access to these DNS names:
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
                <td>AvaTax does not support hard coded IP addresses or host files. To use AvaTax, you must contact the API via DNS names.              
                Your DNS server should respect the DNS time-to-live (TTL) values. Avalara publishes DNS TTL values designed to permit our operations team to adjust our connectivity in response to changing network configuration</td>
            </tr>
            <tr>
                <td>Proxy Server Problems</td>
                <td>AvaTax is not designed for environments using proxy servers. Proxy servers can cause latency and connectivity problems when calling high performance APIs like AvaTax.
                If your company policy requires a proxy server by policy, please consult your proxy provider for how to correctly configure the proxy to work with AvaTax.</td>
            </tr>
            <tr>
                <td>Java Proxy</td>
                <td>The default Java behavior is to cache DNS lookups indefinitely, which does not follow best practices for Internet hosts. There are two properties that can be used to override the default behavior.
                <ol>
                    <li><code>networkaddress.cache.ttl</code>
                    <ul class="dev-guide-list">
                        <li>This property indicates the caching policy for successful name lookups from the domain name service. The value is specified as an integer to indicate the number of seconds to cache the successful lookup. The default value of this property is -1, which means the successful DNS lookup value will be cached forever. If the value is set to 0, it means it will not cache successful DNS lookups up at all. Any other positive value indicates that successful DNS lookups will be cached for that many seconds. This value must be set to 60.</li>
                    </ul>
                    </li>
                    <li><code>networkaddress.cache.negative.ttl</code>
                        <ul class="dev-guide-list">
                            <li>This property indicates the caching policy for unsuccessful name lookups from the domain name service. The value is specified as an integer to indicate the number of seconds to cache the unsuccessful lookup. The default value of this property is 10, which means that unsuccessful DNS lookup values will be cached for 10 seconds. If the value is set to 0, it means that it will not cache successful DNS lookups up at all. Any other positive value indicates that unsuccessful DNS lookups will be cached for that many seconds. This value must be set to 60 as well.</li>
                        </ul>
                    </li>
                </ol>
                What needs to be done: <code>networkaddress.cache.ttl</code> and <code>networkaddress.cache.negative.ttl</code> are not typically set Java properties. They are security related properties that can be set in one of two ways:
                <ol>
                    <li>Edit the <code>$JAVA_HOME/jre/lib/security/java.security</code> by changing the value of the networkaddress cache properties in the file.
                        <ul class="dev-guide-list">
                            <li>The advantage of this solution is that it is a non-programmatic solution.</li>
                            <li>The disadvantage is that since JVMs are global resources, used by multiple applications, the setting may not work well in applications that have consumed the adapter classes.</li>
                        </ul>
                    </li>
                    <li>Use <code>java.security.Security.setProperty(“propertyname”, “value”)</code> to programmatically set the property.
                        <ul class="dev-guide-list">
                            <li>The advantage is that other applications using the same JVM are not affected.</li>
                            <li>The disadvantage of this solution is that it is a programmatic solution.</li>
                        </ul>
                    </li>
                </ol>
                Example:
                <pre>java.security.Security.setProperty ("networkaddress.cache.ttl", "60");</pre>
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

