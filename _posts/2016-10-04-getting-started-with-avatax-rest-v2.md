---
layout: post
title: Getting Started with AvaTax REST v2
date: 2016-10-04 09:00
author: Ted Spence
comments: true
categories: [avatax, howto]
product: blog
doctype: blog
disqus: 1
---

<h2>It's time to make taxing more relaxing!</h2>

Over the next fifteen minutes, I'll walk you through the process of using Avalara's V2 REST API to implement a simple web-based eCommerce platform.  We'll show you how to request an account, set up a company, and process tax for that company.  Everything we will do today can be fully scripted - so as soon as you've gone through this demo, you'll be know everything you need to add transactional taxes to your platform.

For today, we'll set up the company "Bob's Artisan Pottery", an online store that sells mugs.  As Bob McExample, owner and proprietor, we'll set up an account and begin selling mugs using the new REST API.

<h2>Create an AvaTax Account</h2>

The first step for Mr. McExample is to create an AvaTax account.  Let's get started right now by visiting <a href="http://developer.avalara.com/avatax/signup/">http://developer.avalara.com/avatax/signup/</a> and signing up for a new account.  Here's the information we need to put in - just a few fields including your email address and a phone number:

Go ahead and click the <b>Get Started</b> button.  Your account will be provisioned in just a few moments - now is a good time to get a pen and paper handy so you can write down your credentials.  You'll need to keep track of, at a minimum, these things:

<ul class="normal">
<li>An Account ID;</li>
<li>An API license key;</li>
<li>A username (which will be the same as your email address); and</li>
<li>A password.</li>
</ul>

So in a moment or two, you should receive an email from support@avalara.com with the subject Your AvaTax Development Username, Password & Set Up Instructions.  This email contains your username and a temporary password; let's finish the setup process quickly:

<ul class="normal">
<li>Log on to the Avalara admin site here using your temporary password: <a href="https://admin-development.avalara.net">https://admin-development.avalara.net</a></li>
<li>You'll be prompted to retype the temporary password, and create a new one.  Click <b>Next</b>.</li>
<li>You'll be asked to confirm a few license details - click <b>Next</b>.</li>
<li>Finally, you'll see a screen listing your account ID and license key.  </li>
<li>Once you've written down this information, let's proceed!</li>
</ul>

<h2>Listing All My Companies</h2>

As Bob's Artisan Pottery store, we will need to begin by adding a "Company" record to keep track of our sales.  Since Avalara works for all companies both small and large, you can use the AvaTax API whether you have a single corporate entity or whether you manage lots of different registered businesses.  Let's start by listing all the companies defined in this account.In AvaTax, we list companies by calling <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Companies/CreateCompanies/">https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Companies/CreateCompanies/</a> - but we need to authenticate against the API.  In order to do this, we need to add a basic authentication header to our web request.  Let's start by creating our basic authentication header.  If you're writing code, your programming language likely supports Base64 encoding directly.  Here's how to construct the basic authentication header in C# - most other programming languages work the same way:

```csharp
	string combined = String.Format("{0}:{1}", username, password);
	byte[] bytes = Encoding.UTF8.GetBytes(combined);
	string base64 = System.Convert.ToBase64String(bytes);
	HttpClient client = new HttpClient();
	client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", base64 );
```

If you'd like to type along with me without using a programming language, we can create an authentication header by hand.  Here's how you do it:

<div class="mobile-table">
  <table class="styled-table">
      <tr>
          <th>Task</th>
          <th>Result</th>
      </tr>
    <tr>
      <td>Start with the word "Basic" followed by username and password.</td>
      <td><pre>Basic username:password</pre></td>
    </tr>
    <tr>
      <td>Replace "username" with your username, and "password" with your password.</td>
      <td><pre>Basic bob@example.org:bobspasswordgoeshere</pre></td>
    </tr>
    <tr>
      <td>Now use your favorite <a href="https://www.google.com/webhp#q=base64+encoding">Base64 encoding program</a> to encode the right hand side of the string.</td>
      <td><pre>Basic Ym9iQGV4YW1wbGUub3JnOmJvYnNwYXNzd29yZGdvZXNoZXJl</pre></td>
    </tr>
  </table>
</div>

Of course, to make this work, you'll have to use your username and password instead of Bob McExample's information.  Once you've completed your basic authentication header, let's make an API call to list companies:

<ul class="normal">
<li>Launch the <b>List Companies</b> API by clicking this URL: <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Companies/QueryCompanies/">https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Companies/QueryCompanies/</a></li>
<li>In the <b>Authorization</b> field, type in your basic authentication header from above.</li>
<li>Finally, click the <b>Try It</b> button on the page.  Here's the result you should get:</li>
</ul>

```json
{
  "@recordsetCount": 0,
  "value": []
}
```

So, it looks like our account is pretty much empty.  Let's move on to our first action - initializing our company!

<h2>Add a Company</h2>

In order to begin charging taxes, we need to tell AvaTax about our company.  We begin by using the Company Initialization API, which will create the company's tax profile, register the key contact person for that company, and create a physical location.  All of these things affect the way we calculate tax for this company.  If you represent a more complex company with multiple subsidiaries, you may need to set each one up separately; please contact your customer account manager for more customized help!

Here's what we need to get started:
<ul class="normal">
<li>Our company name - this can be different from your legal name, which is only required when filing tax returns.</li>
<li>We must select a unique company code.  If our account will have more than one company, each company must have a unique code.</li>
<li>For US companies, we will need our U.S. Taxpayer ID Number, which is either your company's TIN for corporations or a social security number for individuals.</li>
<li>For European companies, you may need to provide a VAT registration ID.</li>
<li>The name, title, and email address of a contact person for this company.</li>
<li>A phone number, and optionally mobile / fax numbers.</li>
<li>And, finally, the address of your company.  The address is important - it establishes the location where tax must be collected when you sell a mug.  That's a feature called Nexus - you can learn more about it on Avalara's Helping Customers Determine Nexus page.  For the moment, let's set up as a business with a single location.  This company initialization API is for companies with only a single location; if you have a more complex company profile, we'll have to set up each company, location, and nexus in a more customized fashion.</li>
</ul>

Once you've gathered this information, we create a request that looks like this:

```json
	{
	  "name": "Bob's Artisan Pottery",
	  "companyCode": "DEFAULT",
	  "vatRegistrationId": "",
	  "taxpayerIdNumber": "123456789",
	  "line1": "123 Main Street",
	  "line2": "",
	  "line3": "",
	  "city": "Irvine",
	  "region": "CA",
	  "postalCode": "92615",
	  "country": "US",
	  "firstName": "Bob",
	  "lastName": "McExample",
	  "title": "Owner",
	  "email": "bob@example.org",
	  "phoneNumber": "7145551212",
	  "mobileNumber": "7145551212",
	  "faxNumber": ""
	}
```

Our next step is to create this company object using the REST API.  Here's how:

<ul class="normal">
<li>Launch the Company Initialization API by clicking this link: <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Companies/CompanyInitialize/">Company Initialization</a></li>
<li>In the <b>Authorization</b> field, fill in the same credentials you typed in earlier.</li>
<li>In the <b>Model</b> text box, copy and paste the information about the company above.</li>
<li>Click <b>Try It</b></li>
</ul>

The server will respond with information about the company that you just created.  Alright!  Now let's start selling products!

<h2>Processing Transactions</h2>

For our first sale, let's begin by selling a mug and a vase.  All transactions need a few things:

<ul class="normal">
<li>A Transaction Code, which is a unique code referring to this transaction.  You can make this a GUID, for example; or you could number transactions by today's date.  Whatever works for you - they just need to be unique.</li>
<li>The Company Code you created earlier.</li>
<li>A Customer Code that tells us what type of customer bought the mug.  This will become important later when we learn that some customers are exempt from sales tax!  For the moment, you can provide any customer code you like, and you'll be able to set up a customer as exempt later.</li>
<li>The address of the transaction.  You can provide both a ShipFrom and a ShipTo address, or you can specify a SingleLocation transaction.  For today's demo, we'll show you a mug mailed from the studio to a customer in San Francisco.</li>
<li>A list of items sold on the invoice.  </li>
</ul>

If we sold two separate mugs and a vase in a single order, the transaction might look like this:

```json
  {
    "companyCode": "DEFAULT",
    "type": "SalesInvoice",
    "code": "20160830-001",
    "customerCode": "OnlineCustomer",
    "date": "2016-08-30T15:28:09.875Z",
    "addresses": {
      "ShipFrom": {
        "line1": "123 Main Street",
        "city": "Irvine",
        "region": "CA",
        "country": "US",
        "postalCode": "92615"
      },
      "ShipTo": {
        "line1": "100 Market Street",
        "city": "San Francisco",
        "region": "CA",
        "country": "US",
        "postalCode": "94105"
      }
    },
    "lines": [
      {
        "number": "1",
        "quantity": 2,
        "amount": 27.50,
        "description": "Starry Night Mug"
      },
      {
        "number": "2",
        "quantity": 1,
        "amount": 149.99,
        "description": "Floor Standing Vase"
      }
    ]
  }
```

Alright, we've defined our transaction - let's go ahead and calculate the tax!

<ul class="normal">
<li>Launch the online Create Transaction API by clicking this link: <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">Create Transaction</a></li>
<li>Tax transactions must be calculated using your account's license key.  In the <b>Authorization</b> field, we'll need to type in credentials using your AccountId as the username and your license key as the password.  You can build this authorization string using your favorite <a href="https://www.google.com/webhp#q=base64+encoding">Base64 encoding program</a> just as we did earlier; then paste the result into the Authorization field.  It should look like this: <pre>Basic MTIzNDU2Nzg5OkxJQ0VOU0VLRVk=</pre></li>
<li>In the <b>Model</b> text box, copy and paste the transaction we built above.</li>
<li>Click <b>Try It</b></li>
</ul>

The information you'll get back is rather large.  You'll receive back a full comprehensive list of details about everything in this transaction, including the list of all jurisdictions that applied tax to this transaction and how much.  But for the moment - the important thing is that you've got all the data you need to charge the customer the correct amount, and help collect and remit the right amount of tax!

<h2>Next Steps</h2>

There's a lot more you can do with AvaTax.  You can integrate accounting systems; you can keep track of sales orders and convert them to invoices later; you can set up some customers as exempt, and you can set up nexus in more than one location at a time.  AvaTax is ready to support all the functionality you need for a fully featured tax platform - want to know more?  Contact your account representative today!


--Ted Spence, Director, AvaTax Core Engine
