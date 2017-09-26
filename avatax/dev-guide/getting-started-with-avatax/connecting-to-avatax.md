---
layout: page
title: 1.1 - Connecting to the API
product: avaTax
doctype: dev_guide
chapter: getting-started-with-avatax
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/getting-started-with-avatax/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/getting-started-with-avatax/authentication-in-avatax/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

To get started, you'll need an AvaTax account.  Avalara provides free trial accounts you can use to begin developing against AvaTax. This trial account will allow you to use advanced AvaTax functionality in the U.S. and Canada in an environment called Sandbox.  You can begin by <a class="dev-guide-link" href="https://developer.avalara.com/avatax/get-started/">signing up for a free 30-day AvaTax sandbox account online</a>, or you can <a class="dev-guide-link" href="https://www.avalara.com/contact-us/">contact sales</a> to purchase a production account.  Once your 30-day trial is up, you can continue using our <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Free/">Free TaxRates API</a> or <a href="https://www.avalara.com/contact-us/">contact sales to upgrade to a full account</a>. 

<h3>The AvaTax Website</h3>

When your account is provisioned, you will receive an email inviting you to log onto the <a class="dev-guide-link" href="https://admin-development.avalara.net/">AvaTax website for sandbox</a>.  You should begin by visiting this website and following the helpful walkthrough steps to set up an account and configure its <a href="https://help.avalara.com/0075_Video_Studio/Sales_Tax_Basics%3A_What_Is_My_Tax_Profile%3F">tax profile</a>.  A tax profile helps AvaTax to know where your company does business and where you have <b>nexus</b>.  

It's important to understand the concept of <a href="https://help.avalara.com/0075_Video_Studio/Sales_Tax_Basics%3A_What_Is_Nexus%3F">nexus</a>.  You can think of it as "a list of places where I must collect tax;" but this is an important concept for all AvaTax developers.  If you do not declare any nexus, your account will not calculate any tax - this topic is covered in more detail in <a href="https://developer.avalara.com/avatax/dev-guide/exemptions/reasons-tax-can-be-zero">Chapter 8.1 - Reasons Tax Can Be Zero</a>.

If you are building an AvaTax integration for your company, you'll probably need to work with your tax team to ensure that your account and tax profile are set up correctly before you start developing software.  If you forget to set up a tax profile, you may find that your tax calculations keep coming back with a rate of zero, because the tax profile doesn't require you to collect tax!

If you're building an integration to an accounting system or storefront system - a <b>connector</b> - the companies that purchase your connector will need to set up their own tax profile.  This means that you can develop your software without having to know anything about your customers' tax profile.  As long as you follow the <a href="https://developer.avalara.com/certification/avatax">AvaTax certification guidelines</a> in this developer guide, a customer that purchases your connector will be able to set up their own tax profiles and get accurate tax results.

<h3>What is Sandbox?</h3>

Next, let's explain what we mean by <b>Sandbox</b>.  Avalara provides two different environments for AvaTax: Sandbox and Production.  Each environment is completely separate, and each has its own credentials.  If you have a Sandbox account, you cannot use that account to log onto Production; and vice versa.

When you receive credentials for AvaTax, it's important to write down the account's environment name.  We keep Sandbox and Production credentials separate to help you test your software in Sandbox without the risk of accidentally affecting production data.  You may want to share your sandbox credentials with deveopers, and reserve production credentials for accountants.  Keeping accounts separate does occasionally cause confusion, but it helps avoid the risk of reporting test data to a tax authority.

Let's spend a few minutes explaining how Sandbox and Production relate to each other.

<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th></th>
                <th>Sandbox</th>
                <th>Production</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>AvaTax API URL</td>
                <td><a class="dev-guide-link" href="https://sandbox-rest.avatax.com">https://sandbox-rest.avatax.com</a></td>
                <td><a class="dev-guide-link" href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            </tr>
             <tr>
                <td>Website URL</td>
                <td><a class="dev-guide-link" href="https://admin-development.avalara.net">https://admin-development.avalara.net</a></td>
                <td><a class="dev-guide-link" href="https://admin-avatax.avalara.net">https://admin-avatax.avalara.net</a></td>
            </tr>
            <tr>
                <td>Tax Content</td>
                <td>Always kept up to date</td>
                <td>Always kept up to date</td>
            </tr>
            <tr>
                <td>Monitoring</td>
                <td>24/7 Monitoring</td>
                <td>24/7 Monitoring</td>
            </tr>
            <tr>
                <td>Data</td>
                <td>All Sandbox data is fully separate from Production data.</td>
                <td>All Production data is fully separate from Sandbox data.</td>
            </tr>
            <tr>
                <td>Credentials</td>
                <td>Production credentials will not work on Sandbox, so you can't accidentally save a real transactions into the sandbox environment with a production account.</td>
                <td>Sandbox credentials will not work on Production, so you can't accidentally create a test transaction in production with a sandbox account.</td>
            </tr>
            <tr>
                <td>Tax Filing</td>
                <td>Sandbox data is never reported to a tax authority; so you can test your transactions without worrying about accidentally reporting transactions.</td>
                <td>Transactions that are marked <code>Committed</code> in production can be reported on a tax filing using the Avalara Managed Returns Service.</td>
            </tr>
            <tr>
                <td>Updates</td>
                <td>Generally updates a few days earlier than Production, so that customers can experiment with new releases before they go live.</td>
                <td>Updated a few days to a week after Sandbox, so that customers can preview the new release on Sandbox before it is live.</td>
            </tr>
        </tbody>
    </table>
</div>

<br />

For more information on Sandbox and the AvaTax release schedule, please read <a class="dev-guide-link" href="/blog/2017/02/07/the-avatax-release-schedule/">The AvaTax Release Schedule</a>.  

<h3>AvaTax Software Development Kit</h3>

In starting to build your connector to AvaTax, we understand that you want to be both efficient and effective.  Therefore, we have created our Avalara Software Development Kits, which have available code samples that are designed to help you get started in writing code using AvaTax.

The AvaTax SDK is fully open source, and you can download the source code for a myriad of languages and frameworks.  You will find officially supported libraries and those that are contributed by our community on the <a class="dev-guide-link" href="https://developer.avalara.com/sdk/">AvaTax SDK page</a>. We welcome your feedback - if you wish to report a bug or submit a question, please contact us using our <a class="dev-guide-link" href="https://community.avalara.com/avalara">community support forums</a> or submit a pull request directly to the GitHub repository for each SDK.

<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Language</th>
                <th>Version</th>
                <th>Status</th>
                <th>Github</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>C#</td>
                <td><a href="https://www.nuget.org/packages/Avalara.AvaTax/?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024"><img src="https://img.shields.io/nuget/v/Avalara.AvaTax.svg?style=plastic"/></a></td>
                <td><a href="https://travis-ci.org/avadev/AvaTax-REST-V2-DotNet-SDK?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024"><img src="https://api.travis-ci.org/avadev/AvaTax-REST-V2-DotNet-SDK.svg?branch=master&style=plastic"/></a></td>
                <td><a class="dev-guide-link" href="https://github.com/avadev/AvaTax-REST-V2-DotNet-SDK?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024">AvaTax-REST-V2-DotNet-SDK</a></td>
            </tr>
            <tr>
                <td>Java / Scala / JRE</td>
                <td>
                    <a href="https://maven-badges.herokuapp.com/maven-central/net.avalara.avatax/avatax-rest-v2-api-java_2.11?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024"><img src="https://maven-badges.herokuapp.com/maven-central/net.avalara.avatax/avatax-rest-v2-api-java_2.11/badge.svg?style=plastic"/></a>
                    <a href="https://oss.sonatype.org/#nexus-search;gav~net.avalara.avatax~avatax-rest-v2-api-java_2.11~2.17.3.48-SNAPSHOT~~?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024"><img src="https://img.shields.io/badge/Sonatype%20Snapshots-2.17.3.48--SNAPSHOT-blue.svg?style=plastic"/></a>
               </td>
                <td>
                    <a href="https://travis-ci.org/avadev/AvaTax-REST-V2-JRE-SDK?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024"><img src="https://api.travis-ci.org/avadev/AvaTax-REST-V2-JRE-SDK.svg?branch=master&style=plastic"/></a>
                </td>
                <td><a class="dev-guide-link" href="https://github.com/avadev/AvaTax-REST-V2-JRE-SDK?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024">AvaTax-REST-V2-JRE-SDK</a></td>
            </tr>
            <tr>
                <td>JavaScript</td>
                <td><a href="https://www.npmjs.com/package/avatax"><img src="https://img.shields.io/npm/v/avatax.svg?style=plastic"/></a></td>
                <td><img src="https://api.travis-ci.org/avadev/AvaTax-REST-V2-JS-SDK.svg?branch=master&style=plastic"></td>
                <td><a class="dev-guide-link" href="https://github.com/avadev/AvaTax-REST-V2-JS-SDK?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024">AvaTax-REST-V2-JS-SDK</a></td>
            </tr>
            <tr>
                <td>PHP</td>
                <td><a href="https://packagist.org/packages/avalara/avataxclient?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024"><img src="https://img.shields.io/packagist/v/avalara/avataxclient.svg?style=plastic"/></a></td>
                <td><a href="https://travis-ci.org/avadev/AvaTax-REST-V2-PHP-SDK?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024"><img src="https://api.travis-ci.org/avadev/AvaTax-REST-V2-PHP-SDK.svg?branch=master&style=plastic"></a></td>
                <td><a class="dev-guide-link" href="https://github.com/avadev/AvaTax-REST-V2-PHP-SDK?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024">AvaTax-REST-V2-PHP-SDK</a></td>
            </tr>
            <tr>
                <td>Ruby</td>
                <td><a href="https://rubygems.org/gems/avatax?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024"><img src="https://img.shields.io/gem/v/avatax.svg?style=plastic"/></a></td>
                <td><a href="https://travis-ci.org/avadev/AvaTax-REST-V2-JRE-SDK?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024"><img src="https://api.travis-ci.org/avadev/AvaTax-REST-V2-Ruby-SDK.svg?branch=master&style=plastic"></a></td>
                <td><a class="dev-guide-link" href="https://github.com/avadev/AvaTax-REST-V2-Ruby-SDK?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024">AvaTax-REST-V2-Ruby-SDK</a></td>
            </tr>
            <tr>
                <td>IBM I RPG</td>
                <td></td>
                <td></td>
                <td><a class="dev-guide-link" href="https://github.com/avadev/AvaTax-REST-V2-RPGLE-SDK?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024">AvaTax-REST-V2-RPGLE-SDK</a></td>
            </tr>
        </tbody>
    </table>
</div>

<br />

If you choose, you can always write your own code to contact the AvaTax API directly.  We publish all of our <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/">API reference documentation online</a>. Our internal developers use the exact same documentation that we publish to our partners and customers, so you know you'll always see the latest information online.

Our high-performance API provides tax calculation answers faster than the blink of an eye - but we will always keep challenging ourselves to improve the AvaTax experience. We won’t rest until everyone can calculate tax effortlessly.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/getting-started-with-avatax/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/getting-started-with-avatax/authentication-in-avatax/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>