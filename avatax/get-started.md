---
layout: page
title: Get Started
product: avaTax
doctype: sdks
nav: sdk
avaform: 1
---

Using AvaTax is as easy as 1, 2, 3, 4!

<h4><img src="/public/images/blog/orange-box-1-sm.png" alt="1" style="margin: 20px" /> Create an AvaTax Account</h4>

To get started, we'll first set you up with an AvaTax <strong>Sandbox</strong> account.  This account will allow you to use advanced AvaTax functionality in the <strong>U.S. and Canada only</strong>, in an environment called <strong>Sandbox</strong>.  Because this is a sandbox, you can experiment all you like and your test data will be kept separate from your production accounts.

Here's how to request a free sandbox trial account today:

<div class="avaform-wrapper"></div>

<h4><img src="/public/images/blog/orange-box-2-sm.png" alt="2" style="margin: 20px" /> Visit the Customer Portal</h4>

To calculate tax correctly, we'll need to know a few things about your company.  Fortunately, Avalara's Customer Portal provides a streamlined onboarding process that helps you configure your company quickly and easily.  Visit <a target="_blank" href="https://sandbox.admin.avalara.com">Avalara Customer Portal for Sandbox Accounts</a> and walk through the five minute setup process.

<h4><img src="/public/images/blog/orange-box-3-sm.png" alt="3" style="margin: 20px" /> Calculate Tax</h4>

Your next step is to calculate tax online using the interactive <a target="_blank" href="https://sandbox-rest.avatax.com/swagger/ui/index.html#!/Transactions/CreateTransaction">AvaTax API reference page</a>.  If you want to sell $100 worth of Yarn at a retail location in Irvine, California, here's what your transaction would look like:

```json
{
  "type": "SalesInvoice",
  "date": "2017-03-06",
  "customerCode": "ABC",
  "addresses": {
    "singleLocation": {
      "line1": "123 Main Street",
      "city": "Irvine",
      "region": "CA",
      "country": "US",
      "postalCode": "92615"
    }
  },
  "lines": [
    {
      "number": "1",
      "quantity": 1,
      "amount": 100,
      "description": "Yarn"
    }
  ]
}
```

You can copy and paste this text into the `model` parameter box on the <a target="_blank" href="https://sandbox-rest.avatax.com/swagger/ui/index.html#!/Transactions/CreateTransaction">CreateTransaction</a> API call, then click `Try it out!`.  If you get an `Authorization Incomplete` error, click the `Authorize` button on the top right hand corner of the page and fill out your credentials, then try creating the transaction again.  

Mixed in along with all the diagnostic information, you'll see this data in the result:

```json
{
  "id": 279797011,
  "code": "7a6e9396-e152-4bb2-821c-6d746c3641be",
  "companyId": 238146,
  "date": "2017-03-06",
  ...
  "totalAmount": 100,
  "totalExempt": 0,
  "totalTax": 7.75,
  "totalTaxable": 100,
  "totalTaxCalculated": 7.75,
  ...
}
```

This means you should charge your customer $7.75 worth of tax for this sale!

<h4><img src="/public/images/blog/orange-box-4-sm.png" alt="4" style="margin: 20px" /> Download an AvaTax SDK (Optional)</h4>

Avalara has a wide variety of available software development kits for major languages.  If you are writing your own code in a supported language, the AvaTax software development kit will help you get up to speed quickly!

<ul class="normal">
    <li><a href="https://github.com/avadev/AvaTax-REST-V2-DotNet-SDK#installing-the-dotnet-sdk">Use the AvaTax DotNet SDK</a></li>
    <li><a href="https://github.com/avadev/AvaTax-REST-V2-JRE-SDK#installing-the-jre-sdk">Use the AvaTax Java Runtime SDK</a></li>
    <li><a href="https://github.com/avadev/AvaTax-REST-V2-PHP-SDK#installing-the-php-sdk">Use the AvaTax PHP SDK</a></li>
    <li><a href="http://localhost:8976/sdk/soap">Download software development kits for AvaTax SOAP</a></li>
    <li><a href="http://localhost:8976/sdk/partner">Download a partner-developed SDK for other languages</a></li>
</ul>

The AvaTax SDK contains a lot of useful features to make it quick and easy to begin using all of the world-class features built into AvaTax.  Even better, all of our SDKs are fully open source and we welcome bug reports and pull requests to add new features!

<br/>

<h4>What's Next?</h4>

<br/>

We're really proud of the world-leading AvaTax platform, and we hope you'll have as much fun using it as we have fun building it!  Here are some ideas for next steps:

<ul class="normal">
    <li>Read our <a href="/blog">Developer Blog</a> for up-to-date news and articles about the great features of AvaTax</li>
    <li>Ready to upgrade to a production account?  Please <a href="https://www.avalara.com/contact-us/?referrer=&lastReferrer=developer.avalara.com">contact the sales department</a> anytime and we'll be happy to help you out.</li>
    <li>Want to develop a certified connector?  Visit our <a href="http://localhost:8976/certification/">Certified Avalara Integration</a> page today and get started!</li>
    <li>Want more information about all the great API features in AvaTax?  Visit the <a href="https://sandbox-rest.avatax.com/swagger/ui/index.html">online AvaTax API reference</a> now!</li>
    <li>Have a question about the API, or want to share your success story?  Visit the <a href="https://community.avalara.com/avalara">AvaTax Developer Community</a> and ask questions and share tips and tricks with other developers from around the world!</li>
</ul>
<!-- ---
layout: default
title: Get Started
product: avaTax
doctype: documentation
avaform: 1
---
<div class="half">
<h2>Four simple steps to getting started in calculating sales tax with our REST API</h2>
<strong>If you already have an Avalara AvaTax account</strong> and want to dive into the details, a good place to start is our <a href="/blog/2013/11/11/introduction-to-the-avalara-avatax-api">Introduction to the Avalara AvaTax API</a>.
<h4><img src="/public/images/blog/orange-box-1-sm.png" alt="1" /> Try the API</h4>
Want to know how the API looks? Make some requests with the tool below. See how different inputs produce different tax calcluation results, and see what kind of tax information you can expect to get back.
</div>

{% include get-started-console.html %}

<div class="half padding-bottom">
<h4 id="signup"><img src="/public/images/blog/orange-box-2-sm.png" alt="2" /> Create a Sandbox Account</h4>
This sandbox account is for evaluation only and is initially active for 30 days, but you can request an extension if needed. You will need to add company profile and tax profile information to calculate sales tax. It is based on an AvaTax Basic subscription and includes access to Nexus Jurisdictions in the <strong>U.S. and Canada only</strong>. To access full AvaTax Pro System Tax Code functionality or Global Nexus Jurisdictions, please <a href="http://www.avalara.com/contact-us/">contact sales</a> to inquire about a paid development account.

<div class="row">
 <div class="avaform-wrapper col-md-6"></div>
</div>

<h4><img src="/public/images/blog/orange-box-3-sm.png" alt="3" /> Log in to the Admin Console</h4>
Visit our <a href="https://admin-development.avalara.net">AvaTax Development Admin Console</a> and you will be prompted to change your password. In addition to changing your password, you will need to <a href="http://help.avalara.com/000_AvaTax_Calc/000AvaTaxCalc_User_Guide/040_Managing_Tax_Profiles/035_Organizing_Companies/020_Add_a_Company">add a company</a> and some <a href="https://help.avalara.com/000_AvaTax_Calc/000AvaTaxCalc_User_Guide/020_Add_Nexus_Jurisdictions">nexus jurisdiction selections</a> to get any tax results.
<blockquote><strong>Note:</strong> In order to match the sample code we provide, use CompanyCode APITrialCompany when creating your company. If you use some other CompanyCode value remember to change the value in your samples.</blockquote>
<h4><img src="/public/images/blog/orange-box-4-sm.png" alt="4" /> Make a Tax Call</h4>
Now that you have an account with company settings, you are ready to make an API request!

We have automatically filled in the required POST parameters to calculate the sales tax on a $10 sale amount using the Avalara corporate address at 100 Ravine Lane, Bainbridge Island, WA.
<h5><b>POST REQUEST</b></h5>
We will make a POST request to URL:
{% highlight text %}
https://development.avalara.net/1.0/tax/get
{% endhighlight %}
Use your favorite <a href="https://www.google.com/webhp#q=base64+encoding">Base64 encoding program</a> or perhaps one of the <a href="https://chrome.google.com/webstore/search/rest%20client?utm_source=chrome-ntp-icon">REST client apps</a> for Google Chrome to create a Basic Authorization Header from your username and password.

It will look something like this:
{% highlight text %}
Authorization: Basic c29tZS51c2VyQGNvbXBhbnkuY29tOlA0JCR3MHJk
{% endhighlight %}
The POST body will be:
{% highlight json %}
{
  "DocDate": "2013-01-16",
  "CustomerCode": "CUST1",
  "DocCode": "DOC0001",
  "DocType": "SalesInvoice",
  "Addresses":[{
    "AddressCode": "1",
    "Line1": "100 Ravine Lane NE",
    "City": "Bainbridge Island",
    "Region": "WA",
    "PostalCode": "98110"
  }],
  "Lines":[{
    "LineNo": "1",
    "DestinationCode": "1",
    "OriginCode": "1",
    "Qty": 1,
    "Amount": 10
  }]
}
{% endhighlight %}
<b>DocDate</b> is the date used to calculate the tax, and to identify the date on which the invoice is recorded. This should be your invoice date.

<b>CustomerCode</b> uniquely identifies the end customer making the purchase.

<b>DocCode</b> is a unique identifier of the transaction. This is often invoice number.

<b>DocType</b> tells Avalara what kind of transaction this is. In this case, it is a document that represents a sale, and should be saved in our database.

<b>Address</b> in this case is used as both the origin and destination. In general, these may not be the same.

<b>Lines</b> is an array of all line items on the invoice (including any freight and miscellaneous charges). Each invoice line should be a line on the tax request, and should specify a line number (unique within the document), quantity, and extended amount.
<h5><b>IMPORTANT:</b></h5>
<ul>
	<li><em>The dollar amount must be nonzero to calculate nonzero tax (tax on $0 will always be $0).</em></li>
	<li><em>You will need your account credentials (Username and Password) to make a successful API call.</em></li>
</ul>
<h5><b>POST RESPONSE</b></h5>
{% highlight json %}
{
  "DocCode": "DOC0001",
  "DocDate": "2013-01-16",
  "Timestamp": "2013-02-12T23:45:02.687",
  "TotalAmount": "10",
  "TotalDiscount": "0",
  "TotalExemption": "0",
  "TotalTaxable": "10",
  "TotalTax": "0 .86",
  "TotalTaxCalculated": "0.86",
  "TaxDate": "2013-01-16",
  "TaxLines": [{
    "LineNo": "1",
    "TaxCode": "P0000000",
    "Taxability": "true",
    "BoundaryLevel": "Address",
    "Exemption": "0",
    "Discount": "0",
    "Taxable": "10",
    "Rate": "0.086000",
    "Tax": "0.86",
    "TaxCalculated": "0.86",
    "TaxDetails": [{
     "Country": "US",
     "Region": "WA",
     "JurisType": "State",
     "Taxable": "10",
     "Rate": "0.065000",
     "Tax": "0.65",
     "JurisName": "WASHINGTON",
     "TaxName": "WA STATE TAX"
    },
    {
     "Country": "US",
     "Region": "WA",
     "JurisType": "City",
     "Taxable": "10",
     "Rate": "0.021000",
     "Tax": "0.21",
     "JurisName": "BAINBRIDGE ISLAND",
     "TaxName": "WA CITY TAX"
    }]
  }],
  "TaxAddresses": [{
    "Address": "100 RAVINE LN NE",
    "AddressCode": "1",
    "City": "BAINBRIDGE ISLAND",
    "Country": "US",
    "PostalCode": "98110-2687",
    "Region": "WA",
    "TaxRegionId": "2109716",
    "JurisCode": "5303503736"
  }],
  "ResultCode": "Success"
}
{% endhighlight %}

Document-level tax calculation results are available at the root level of the response, notably TotalTax. This is the total amount of tax calculated on the invoice.

Each Line item in the request is represented in the response by a TaxLine, which shows line-level tax calculation results. The jurisdictional breakout of the tax calculation for each line is displayed as an array of TaxDetails.

<h5>Verify Your Results in the Admin Console</h5>

The tax request you made in Step 3 will be viewable in the Admin Console. Log in and navigate to the Transactions tab to verify that you have produced a successful outcome.

<div class="caption">
    <img src="/public/images/blog/AdminConsole.png" width="100%" alt="Example of successful outcome" />
    Example of successful outcome
</div>

Moving forward, it's a good idea to periodically review the Admin Console to verify that you're heading in the right direction.

<h4>What's Next?</h4>

If you didn't already check out the <a href="/blog/2013/11/11/introduction-to-the-avalara-avatax-api">Introduction to the Avalara AvaTax API</a>, that's where you should go next. As you're designing your integration, you'll want to consider what kind of <a href="/avatax/use-cases">use cases</a> you need to accommodate. We also recommend that you take a look at the <a href="/avatax/api-reference/tax/v1">API Reference</a>, review our <a href="/certification/avatax/">integration checklist</a>, and check out the <a href="https://community.avalara.com/avalara/category_sets/developers">Developer Community</a>. 
</div>
-->