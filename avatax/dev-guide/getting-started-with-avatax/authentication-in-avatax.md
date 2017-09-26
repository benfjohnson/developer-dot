---
layout: page
title: 1.2 - Authentication
product: avaTax
doctype: dev_guide
chapter: getting-started-with-avatax
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/getting-started-with-avatax/connecting-to-avatax/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/getting-started-with-avatax/troubleshooting/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

AvaTax uses existing HTTP authentication standards. As a result, we support both <a class="dev-guide-link" href="https://en.wikipedia.org/wiki/Basic_access_authentication">basic HTTP authentication</a> and <a class="dev-guide-link" href="http://self-issued.info/docs/draft-ietf-oauth-v2-bearer.html">OAuth 2.0 bearer token authentication</a>. Both of these standards are well documented and have been in existence for a long time - which also means that over the past decades, many different people have implemented the standard in many different ways.  Let's describe exactly how to authenticate your API calls in AvaTax.

For HTTP Basic authentication, AvaTax supports two options:
<ul class="dev-guide-list">
    <li>Your AvaTax username and password</li>
    <li>Your AvaTax account number and license key</li>  
</ul>

To choose the best authentication method, Avalara recommends:
<ul class="dev-guide-list">
    <li>If you are building a connector that customers will set up and use on their premises, use <b>Account ID/License Key</b> authentication.</li>
    <li>If you are building a web portal with direct AvaTax integration, please contact business development to see if bearer token authentication is the preferred approach.</li>
    <li>Otherwise, use <b>Username/Password</b> authentication.</li>
</ul>
Let's review these first.

<h3>Username and Password Authentication</h3>
The simplest type of authentication uses a username and a password.  If you use an AvaTax SDK, this encoding is done for you transparently.  Just provide your credentials and the SDK will do all the work!

If you are writing your own code, here's how to construct an authentication token for AvaTax using your username and password:
<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Task</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Start with the word <code>Basic</code> followed by username, a colon, and password.  There are no spaces between any values.</td>
                <td><code>Basic username:password</code></td>
            </tr>
            <tr>
                <td>Replace <code>username</code> with your username, and <code>password</code> with your password.  Ensure that there are no whitespace characters unless those characters are part of your username or password.</td>
                <td><code>Basic bob@example.org:bobspasswordgoeshere</code></td>
            </tr>
            <tr>
                <td>Now use your favorite <a class="dev-guide-link" href="https://www.google.com/webhp#q=base64+encoding">Base64 encoding program</a> to encode the right hand side of the string.</td>
                <td><code>Basic Ym9iQGV4YW1wbGUub3JnOmJvYnNwYXNzd29yZGdvZXNoZXJl</code></td>
            </tr>
            <tr>
                <td>Add this to the <code>Authorization</code> header in your HTTP request.</td>
                <td><code>Authorization: Basic Ym9iQGV4YW1wbGUub3JnOmJvYnNwYXNzd29yZGdvZXNoZXJl</code></td>
            </tr>
        </tbody>
    </table>
</div>

<br />

Basic Authentication has a number of advantages and disadvantages:
<ul class="dev-guide-list">
    <li>Advantages:
        <ul class="dev-guide-list">
            <li>Allows auditing of a user's actions.</li>
            <li>Allows different users to have different privilege levels.</li>
            <li>Basic authentication does not expire.</li>
            <li>All basic authentication headers are protected by strong SSL encryption in transit to Avalara.</li>
            <li>All AvaTax APIs support basic authentication.</li>
        </ul>
    </li>
    <li>Disadvantages:
        <ul class="dev-guide-list">
            <li>Usernames and passwords can be stolen by viruses or trojans on a user's PC.</li>
            <li>Insecure passwords can be guessed by brute force. To prevent this, Avalara enforces a limit: if you fail to authenticate multiple times in a row, your account may be locked out.</li>
        </ul>
    </li>
</ul>

Basic authentication is recommended for individual users who are calling APIs within AvaTax, or for users who have limited access rights.

It's worth restating here: A Sandbox username will not work in Production, and a Production username will not work on Sandbox.  If you get a login failure, please check your username by logging onto the <a href="https://admin-development.avalara.net">AvaTax website for sandbox</a> or <a href="https://admin-avatax.avalara.net">AvaTax website for production</a>. That will help you determine which environment you should use.

<h3>Legacy License Key Authentication</h3>

Each AvaTax account has one (and only one!) legacy license key. Since each account is tied to one environment, this means a customer will typically have two license keys: one license key for sandbox, and one license key for production.  

A license key is generated by an account administrator on the <a class="dev-guide-link" href="https://admin-avatax.avalara.net/login.aspx?ReturnUrl=%2f">AvaTax website</a>, or by calling the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Accounts/AccountResetLicenseKey/">AccountResetLicenseKey API</a>.  For the moment, let's focus on how to get a license key through the AvaTax website.  Here's how to generate a license key:

<ul class="dev-guide-list">
    <li>Log on to the AvaTax website for the appropriate environment.</li>
    <li>Click on <b>Settings</b></li>
    <li>Click on <b>Reset License Key</b></li>
</ul>

As you’ll notice, this page is restricted to only account administrators. Keep in mind that you only have one license key and Avalara is unable to recover this key! When you generate a new license key, all older license keys are immediately revoked and no longer usable. This is helpful because if your license key is lost or stolen you can revoke it instantly. However, generating a new key is a risk because this may affect existing systems using the AvaTax calculation engine.

Let's construct an authorization using an Avalara License Key:
<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Task</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Start with the word <code>Basic</code> followed by accountid and licensekey.</td>
                <td>Basic accountid:licensekey</td>
            </tr>
            <tr>
                <td>Replace <code>accountid</code> with your account ID number, and <code>licensekey</code> with the license key you generated above.</td>
                <td>Basic 123456789:123456789ABCDEF123456789ABCDEF</td>
            </tr>
            <tr>
                <td>Now use your favorite <a class="dev-guide-link" href="https://www.google.com/webhp#q=base64+encoding">Base64 encoding program</a> to encode the right hand side of the string.</td>
                <td>Basic MTIzNDU2Nzg5OjEyMzQ1Njc4OUFCQ0RFRjEyMzQ1Njc4OUFCQ0RFRg==</td>
            </tr>
            <tr>
                <td>Add this to the <code>Authorization</code> header in your HTTP request.</td>
                <td>Authorization: Basic Ym9iQGV4YW1wbGUub3JnOmJvYnNwYXNzd29yZGdvZXNoZXJl</td>
            </tr>
        </tbody>
    </table>
</div>

<br />

As you’ll notice, license key and basic authentication are very similar in practice. Why would someone want to use license key authentication instead of username/password? Let’s look at the advantages and disadvantages of license key authentication.
<ul class="dev-guide-list">
    <li>Advantages:
        <ul class="dev-guide-list">
            <li>License keys have much stronger entropy when compared to a username/password, and are harder to attack.</li>
            <li>Account ID / License Key authentication is not user-specific and will not expire if one user resets their password.</li>
            <li>Basic authentication does not expire.</li>
            <li>All basic authentication headers are protected by strong SSL encryption in transit to Avalara.</li>
            <li>All Avalara APIs support basic authentication.</li>
        </ul>
    </li>
    <li>Disadvantages:
        <ul class="dev-guide-list">
            <li>There is only one license key for each company.</li>
            <li>Revoking your license key will cause all API calls with the old license key to fail.</li>
            <li>It is not possible to identify individual users taking an action when license key authentication is used.</li>
        </ul>
    </li>
</ul>

<h3>Bearer Token Authentication</h3>

AvaTax is currently implementing support for OAuth 2.0 based bearer token authentication.  To make use of the OAuth bearer token feature, please contact your account manager.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/getting-started-with-avatax/connecting-to-avatax/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/getting-started-with-avatax/troubleshooting/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>