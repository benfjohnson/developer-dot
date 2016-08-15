---
layout: default
title: Get Started
product: avaTax
doctype: documentation
avaform: 1
---
<div class="half">
<h2>Four simple steps to getting started in calculating sales tax with our REST API</h2>
<strong>If you already have an Avalara AvaTax account</strong> and want to dive into the details, a good place to start is our <a href="/blog/2013/11/11/introduction-to-the-avalara-avatax-api">Introduction to the Avalara AvaTax API</a>.
<h4><img src="/images/2012/09/orange-box-1-sm.png" alt="1" /> Try the API</h4>
Want to know how the API looks? Make some requests with the tool below. See how different inputs produce different tax calcluation results, and see what kind of tax information you can expect to get back.

{% include get-started-console.html %}

<h4 id="signup"><img src="/images/2012/09/orange-box-2-sm.png" alt="2" /> Create a Sandbox Account</h4>
This sandbox account is for evaluation only and is initially active for 90 days, but you can request an extension if needed. You will need to add company profile and tax profile information to calculate sales tax. It is based on an AvaTax Basic subscription and includes access to Nexus Jurisdictions in the <strong>U.S. and Canada only</strong>. To access full AvaTax Pro System Tax Code functionality or Global Nexus Jurisdictions, please <a href="http://www.avalara.com/contact-us/">contact sales</a> to inquire about a paid development account.
<div class="avaform-wrapper"></div>

<h4><img src="/images/2012/09/orange-box-3-sm.png" alt="3" /> Log in to the Admin Console</h4>
Visit our <a href="https://admin-development.avalara.net" target="_blank">AvaTax Development Admin Console</a> and you will be prompted to change your password. In addition to changing your password, you will need to <a href="http://help.avalara.com/000_AvaTax_Calc/000AvaTaxCalc_User_Guide/040_Managing_Tax_Profiles/035_Organizing_Companies/020_Add_a_Company">add a company</a> and some <a href="https://help.avalara.com/000_AvaTax_Calc/000AvaTaxCalc_User_Guide/020_Add_Nexus_Jurisdictions">nexus jurisdiction selections</a> to get any tax results.
<blockquote><strong>Note:</strong> In order to match the sample code we provide, use CompanyCode APITrialCompany when creating your company. If you use some other CompanyCode value remember to change the value in your samples.</blockquote>
<h4><img src="/images/2012/09/orange-box-4-sm.png" alt="4" /> Make a Tax Call</h4>
Now that you have an account with company settings, you are ready to make an API request!

We have automatically filled in the required POST parameters to calculate the sales tax on a $10 sale amount using the Avalara corporate address at 100 Ravine Lane, Bainbridge Island, WA.
<h5><b>POST REQUEST</b></h5>
We will make a POST request to URL:
{% highlight text %}
https://development.avalara.net/1.0/tax/get
{% endhighlight %}
Use an online <a href="http://decodebase64.com/" target="_blank">encoding tool</a> or perhaps one of the <a href="https://chrome.google.com/webstore/search/rest%20client?utm_source=chrome-ntp-icon" target="_blank">REST client apps</a> for Google Chrome to create a Basic Authorization Header from your username and password.

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
"TotalTax": "0.86",
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

<a href="/images/2012/09/AdminConsole.png"><img class="wp-image-2786 size-full" src="https://developer.avalara.com/wp-content/uploads/2012/09/AdminConsole-e1458102550176.png" alt="Example of successful outcome" width="975" height="199" /></a> 

<div class="caption">Example of successful outcome</div>

Moving forward, it's a good idea to periodically review the Admin Console to verify that you're heading in the right direction.
<h4>What's Next?</h4>
If you didn't already check out the <a href="/blog/2013/11/11/introduction-to-the-avalara-avatax-api">Introduction to the Avalara AvaTax API</a>, that's where you should go next. As you're designing your integration, you'll want to consider what kind of <a href="/avatax/use-cases">use cases</a> you need to accommodate. We also recommend that you take a look at the <a href="/avatax/api-reference/tax/v1">API Reference</a>, review our <a href="/avatax/certification">integration checklist</a>, and check out the <a href="https://community.avalara.com/avalara/category_sets/developers">Developer Community</a>. 
</div><br />
