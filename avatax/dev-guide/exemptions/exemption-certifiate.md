---
layout: page
title: 8.2 - Exemption Certificate
product: avaTax
doctype: dev_guide
chapter: exemptions
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/exemptions/reasons-tax-can-be-zero/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/exemptions/exemptions-for-usage/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

An Exemption Certificate provides information about the buyer or customer, and their tax status. The two most common reasons why a customer might be exempt from collecting sales tax are
<ul class="dev-guide-list">
    <li>If they have a resale exemption certificate; or</li>
    <li>If they have a direct pay certificate.</li>
</ul>

In these cases, the seller must document the exemption certificate and be able to produce information about that certificate in the event of an audit.  The AvaTax <a class="dev-guide-link" href="http://docs.certcapture6xrest.apiary.io/#?referrer=&lastReferrer=developer.avalara.com&sessionId=1505163213233">Certificate APIs</a> provide an easy way to manage exemption certificates - and they will automatically link to your CertCapture and CertExpress accounts!

<h3>Exemption Certificate User Interface</h3>

In the B2B world, salespeople need to enter exemption certificates all the time!  Let's make their user interface as easy as possible.  Our goals are to:
<ul class="dev-guide-list">
    <li>Help the salesperson find the right <code>Customer</code> record.</li>
    <li>Tell the salesperson whether the <code>Customer</code> has a <code>Certificate</code> on file.</li>
    <li>If the salesperson sees that no Certificate is on file, we'll offer to send the customer a <code>CertExpressInvite</code>.  CertExpress is a friendly web site that allows a customer to upload their exemption certificates directly - it can save the salesperson a lot of work!</li>
    <li>If the salesperson wants to enter a <code>Certificate</code> while they're writing the sales invoice, your software can upload a PDF or JPG file directly to the API.</li>
</ul>

Exemption Certificates are commonly used in accounting software sales order entry, but are not often seen in a web storefront.  A web storefront may want to provide a <code>CertExpress</code> link on their "Account Profile" page, for example.

Let's look at the APIs available to help with each of these tasks.

<h3>Find or Create Customer Records</h3>
First, when a user fills out a SalesOrder or SalesInvoice document, they will be expected to select the <code>customerCode</code> of the customer placing the transaction.  This customerCode value was first explained in <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Transactions/">Chapter 2 - Transactions</a> - but here is where we discover how it works.

You can call the <code>ListCustomers</code> API to review a list of all the customers that have been entered.  Many accounting systems prefer to provide a drop-down list of customers to choose from to help the user select the correct customer code.  You might want to filter the list of customers by using the pagination features of the <code>ListCustomers</code> API to show a small number of customers at a time, or to allow the user to search for a customer by its name.

When a salesperson user selects a customer from the drop-down list, you may want to offer to load the customer's address into the "ShipTo" address.  This should be considered optional; many businesses have different shipping addresses for every transaction.

If the user doesn't find the customer they want, you can call the CreateCustomers API to define a customer record directly in your user interface.  This customer record is necessary in order to allow the customer to upload an exemption certificate.

<div class="dev-guide-test" id="test1">
<div class="dev-guide-test-heading">Test Case - 8.2.1 </div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
<li>Call CreateCustomers with the following options:</li>
    <ul class="dev-guide-list">
        <li>CompanyId set to the company ID of your DEVGUIDE company</li>
        <li>CustomerCode set to RESELLER</li>
        <li>Name set to Alice Example</li>
        <li>Address set to 100 Ravine Lane, Bainbridge Island, WA 98110</li>
        <li>Phone number set to 949 555 1212</li>
        <li>Email address set to alice@example.org</li>
    </ul>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>Customer record is created.</li>
    <li>The record has a valid ID number.</li>
    <li>The record has the customer code RESELLER.</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
[
  {
    "companyId": 12345,
    "customerCode": "RESELLER",
    "name": "Alice Example",
    "line1": "100 Ravine Lane",
    "city": "Bainbridge Island",
    "region": "WA",
    "postalCode": "98110",
    "country": "US",
    "phoneNumber": "(206) 555-1212",
    "emailAddress": "alice@example.org"
  }
]
</pre>
        </li>
    </ul>
</div>
</div>
</div>

<div class="dev-guide-test" id="test2">
<div class="dev-guide-test-heading">Test Case - 8.2.2 </div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
<li>Call CreateCustomers with the following options:</li>
    <ul class="dev-guide-list">
        <li>CompanyId set to the company ID of your DEVGUIDE company</li>
        <li>CustomerCode set to NOCERTIFICATE</li>
        <li>Name set to Bob Example</li>
        <li>Address set to 1000 Main Street, Irvine, CA 92614</li>
        <li>Phone number set to 949 555 1212</li>
        <li>Email address set to bob@example.org</li>
    </ul>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>Customer record is created.</li>
    <li>The record has a valid ID number.</li>
    <li>The record has the customer code NOCERTIFICATE.</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle2" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle2"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
[
  {
    "companyId": 12345,
    "customerCode": "NOCERTIFICATE",
    "name": "Bob Example",
    "line1": "1000 Main Street",
    "city": "Irvine",
    "region": "CA",
    "postalCode": "92614",
    "country": "US",
    "phoneNumber": "(949) 555-1212",
    "emailAddress": "bob@example.org"
  }
]
</pre>
        </li>
    </ul>
</div>
</div>
</div>

<h3>Certificate Status</h3>
When the user has selected a <code>Customer</code> and a <code>ShipTo</code> address for the transaction, you can check to see if the customer has an exemption certificate on file.  We Once a customer has been selected, you can determine if the customer has an exemption certificate on file by calling <code>ListValidCertificatesForCustomer</code> using the <code>Country</code> and <code>Region</code> values from the ShipTo address.  This API determines if a customer has an exemption certificate on file for that state.

If the API reports that a certificate is on file, you can call the <code>DownloadCertificateImage</code> API to retrieve a JPG or PDF of the certificate if the user wishes to preview the document.

If there is no certificate on file, you have two options to help the customer correctly report their certificate: you can send them an invitation to CertExpress, or you can allow the salesperson to upload a certificate image directly.

<div class="dev-guide-test" id="test3">
<div class="dev-guide-test-heading">Test Case - 8.2.3 </div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
<li>Call ListValidCertificatesForCustomer with the following options:</li>
    <ul class="dev-guide-list">
        <li>CustomerCode set to RESELLER</li>
        <li>Country set to US</li>
        <li>Region set to WA</li>
    </ul>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The result has the value Status: NotExempt.</li>
    <li>The "Certificates" array in the result should be null.</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle3" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle3"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
GET /api/v2/companies/12345/customers/RESELLER/certificates/US/WA
</pre>
        </li>
    </ul>
</div>
</div>
</div>

<h3>CertExpress Invitations</h3>
The <a class="dev-guide-link" href="https://app.certexpress.com/home">CertExpress</a> website is a friendly, step-by-step method of reporting an exemption certificate.  When you send an invitation to CertExpress, the customer making a purchase can visit the website on their own time and upload an exemption certificate and all the necessary information themselves.

Unfortunately, if the customer doesn't respond to the CertExpress invitation quickly enough, the certificate won't be available when they make a purchase; which is why a salesperson working hard to close a sale should always be able to choose either a CertExpress invitation or a direct upload of a certificate.

To send a CertExpress invitation to a customer, call <code>CreateCertExpressInvitation</code>.  You will be asked to choose whether you want an email, download, or facsimile invitation.  You can check the status of an invitation, or load an invitation you created previously, by calling <code>ListCertExpressInvitations</code>.  

When creating a CertExpress invitation, you are free to select a cover letter from the available list of prebuilt cover letters.  A cover letter will make an email or facsimile invitation more readable to a customer.  You can either choose the value <code>STANDARD_REQUEST</code>, or call the <code>ListCoverLetters</code> API for a list of available prebuilt cover letters.

If you wish, you can display the hyperlink from the CertExpress invitation directly in your user interface.  This allows a salesperson or customer to click the link and directly jump to the friendly introduction page on CertExpress so that they can begin uploading an exemption certificate directly.

Note that CertExpress invitations take a few moments to build a custom welcome page for your customer.  When you create a CertExpress invite, check the status value of the result.  If the value says "InProgress," the welcome page is currently being built.  You must delay for a few seconds and fetch back the invitation using <code>GetCertExpressInvitation</code> before the URL will be ready.

<div class="dev-guide-test" id="test4">
<div class="dev-guide-test-heading">Test Case - 8.2.4 </div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
<li>Call CreateCertExpressInvitation with the following options:</li>
    <ul class="dev-guide-list">
        <li>CustomerCode set to RESELLER</li>
        <li>Recipient set to alice@example.org</li>
        <li>CoverLetterTitle set to STANDARD_REQUEST</li>
        <li>Delivery method set to EMAIL</li>
    </ul>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The status value of the invitation is InProgress.</li>
    <li>The invitation has an ID number.</li>
    <li>The recipient email address is alice@example.org.</li>
    <li>The DeliveryMethod value of the result is set to "email".</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle4" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle4"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
[
  {
    "recipient": "alice@example.org",
    "coverLetterTitle": "STANDARD_REQUEST",
    "deliveryMethod": "Email"
  }
]
</pre>
        </li>
    </ul>
</div>
</div>
</div>

<h3>Uploading Certificates</h3>
If a salesperson chooses, they can take a snapshot or a scanned image of an exemption certificate and create one or more certificate directly using the <code>CreateCertificates</code> API. Certificates created by this API are available for exemption use after a short processing delay; please make sure to accommodate a short time between creating a certificate and using the certificate. 

<div class="dev-guide-test" id="test5">
<div class="dev-guide-test-heading">Test Case - 8.2.5 </div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
<li>Call the CreateCertificates API using the following information:</li>
    <ul class="dev-guide-list">
        <li>SignedDate set to 2016-02-01</li>
        <li>ExpirationDate set to 2020-12-31</li>
        <li>Filename set to "exemptCert.pdf"</li>
        <li>Valid set to "true"</li>
        <li>ExemptPercentage set to 100</li>
        <li>IsSingleCertificate set to false</li>
        <li>ExemptReason set to EXPOSURE</li>
        <li>Customers record</li>
        <ul class="dev-guide-list">
            <li>Set the CompanyId to the ID of your DEVGUIDE company</li>
            <li>Set the CompanyCode value to RESELLER</li>
        </ul>
        <li>Exposure Zone</li>
        <ul class="dev-guide-list">
            <li>Set the name of the exposure zone to Washington</li>
        </ul>
    </ul>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The exemption certificate is created and is valid in Washington</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle5" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle5"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
[
  {
    "signedDate": "2016-02-01",
    "expirationDate": "2020-12-31",
    "filename": "exemptCert.pdf",
    "valid": true,
    "exemptPercentage": 100,
    "isSingleCertificate": false,
    "exemptionReason": {
      "name": "EXPOSURE"
    },
    "customers": [
      {
        "companyId": 7370914,
        "customerCode": "RESELLER"
      }
    ],
    "exposureZone": {
      "name": "Washington"
    }
  }
]
</pre>
        </li>
    </ul>
</div>
</div>
</div>

<div class="dev-guide-test" id="test6">
<div class="dev-guide-test-heading">Test Case - 8.2.6</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
<li>Call ListValidCertificatesForCustomer with the following options:</li>
    <ul class="dev-guide-list">
        <li>CustomerCode set to RESELLER</li>
        <li>Country set to US</li>
        <li>Region set to WA</li>
    </ul>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The result has the value Status: Exempt.</li>
    <li>The "Certificates" array in the result should contain the certificate created in step #1.</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle6" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle6"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
GET /api/v2/companies/12345/customers/RESELLER/certificates/US/WA
</pre>
        </li>
    </ul>
</div>
</div>
</div>

<h3>Testing Exemption Certificates</h3>
Once you have created a customer and uploaded an exemption certificate, you can create a transaction and apply this exemption certificate to the transaction:
<div class="dev-guide-test" id="test7">
<div class="dev-guide-test-heading">Test Case - 8.2.7</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
<li>In your connector, create the following transaction:</li>
    <ul class="dev-guide-list">
        <li>Transaction Type: SalesInvoice</li>
        <li>Transaction Code: Chapter-8-Test-7</li>
        <li>Document Date: 2017-06-15</li>
        <li>CompanyCode, Date set to reasonable default values.</li>
        <li>CustomerCode set for RESELLER</li>
        <li>Addresses:</li>
        <ul class="dev-guide-list">
            <li>SingleLocation</li>
            <li>100 Ravine Lane NE, Bainbridge Island, WA, 98110</li>
        </ul>
        <li>Line #1:</li>
        <ul class="dev-guide-list">
            <li>Amount 100</li>
            <li>TaxCode P0000000</li>
        </ul>
        <li>Calculate tax for your transaction using AvaTax.</li>
    </ul>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The tax for line 1 should be $0.00.</li>
    <li>The Taxable amount for line 1 should be $0.00.</li>
    <li>The Exempt amount for line 1 should be $100.00.</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle7" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle7"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
{
  "type": "SalesInvoice",
  "code": "Chapter-8-Test-1",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "RESELLER",
  "addresses": {
    "singleLocation": {
      "line1": "100 Ravine Lane NE",
      "city": "Bainbridge Island",
      "region": "WA",
      "country": "US",
      "postalCode": "98110"
    }
  },
  "lines": [
    {
      "number": "1",
      "amount": 100,
      "taxCode": "P0000000"
    }
  ]
}
</pre>
        </li>
    </ul>
</div>
</div>
</div>
<div class="dev-guide-test" id="test8">
<div class="dev-guide-test-heading">Test Case - 8.2.8</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
<li>Repeat the above transaction:</li>
    <ul class="dev-guide-list">
        <li>All values are the same, except</li>
        <li>Use the CustomerCode NOCERTIFICATE</li>
    </ul>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The tax for line 1 should be $0.00.</li>
    <li>The Taxable amount for line 1 should be $100.00.</li>
    <li>The Exempt amount for line 1 should be $0.00.</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle8" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle8"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
{
  "type": "SalesInvoice",
  "code": "Chapter-8-Test-1",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "NOCERTIFICATE",
  "addresses": {
    "singleLocation": {
      "line1": "100 Ravine Lane NE",
      "city": "Bainbridge Island",
      "region": "WA",
      "country": "US",
      "postalCode": "98110"
    }
  },
  "lines": [
    {
      "number": "1",
      "amount": 100,
      "taxCode": "P0000000"
    }
  ]
}
</pre>
        </li>
    </ul>
</div>
</div>
</div>


<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/exemptions/reasons-tax-can-be-zero/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/exemptions/exemptions-for-usage/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
