---
layout: page
title: 8.1 - Reasons Tax Can Be Zero
product: avaTax
doctype: dev_guide
chapter: exemptions
nav: apis
disqus: 1
---
<ul class="pager">
   <li class="previous"><a href="/avatax/dev-guide/exemptions/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/exemptions/exemption-certificate/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

There are a few key reasons why the tax on a transaction can be zero.
<ul class="dev-guide-list">
    <li>In the United States, a company may not be compelled to collect tax.  For example, this will occur if the company is selling a product in a jurisdiction where they do not have Nexus.  In this case, it is legally the responsibility of the buyer to remit Consumer Use Taxes, but the seller is not required to charge taxes on the transaction.</li>
    <li>Some states in the United States have zero sales or use tax rates.</li>
    <li>A product may be non-taxable, or exempt, or have its tax rate set to zero.  Some jurisdictions use the phrase "Nontaxable" to refer to product-taxability, while others refer to this as an "Exemption" or a "Zero-Rate".  This use case is fully described in <a class="dev-guide-link" href="/avatax/dev-guide/product-taxability/">Chapter 5 - Product Taxability</a>.</li>
</ul>

<h3>Companies Without Nexus</h3>

The most common reason that tax could be zero is if your company does not have Nexus, and is not obligated to collect tax.

This definition of the word Nexus comes from the United States, where a legal ruling by the supreme court established that a company must only collect tax if they have sufficient "Nexus" in a jurisdiction.  Unfortunately, the specific definition of Nexus is complex and changes when new laws are passed or when new legal precedents are established.

When using AvaTax, your company must decide where it has nexus, and where it does not.  This selection is used to determine whether you are obligated to collect taxes.  For example, if your company has nexus in the state of Massachusetts, but you do not have nexus in the state of Rhode Island, in general a tax calculation for a customer in Rhode Island will result in zero tax.  According to legal precedents in the United States, this zero tax means that it is the responsibility of the buyer, instead, to determine the correct tax to pay to the taxing authority.  This tax obligation is called "Consumer Use Tax".

Please be careful not to misuse information about nexus.  Even if a company does not have nexus in a jurisdiction, that company must still call AvaTax to record its transactions.  The Avalara Managed Returns Service reports transactions as well as exempt dollar amounts based on legal filing requirements.  Even jurisdictions where a company does not have nexus may sometimes require tax reporting.  Additionally, companies can change their nexus declarations at any time - so you must always call <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction</a> even if you believe the company has not declared nexus in a particular jurisidiction.

Here's a test that helps show how a company's nexus settings affect tax calculations:

<div class="dev-guide-test" id="test1">
<div class="dev-guide-test-heading">Test Case - 8.1.1</div>
<div class="dev-guide-test-content">
<h4>Set Up</h4>
<ul class="dev-guide-list">
    <li>Your DEVGUIDE company should have nexus in Washington State, but not in Rhode Island.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Transaction Type: SalesInvoice</li>
            <li>Transaction Code: Chapter-8-Test-1</li>
            <li>Document Date: 2017-06-15</li>
            <li>Customer Code: TESTCUSTOMER</li>
            <li>Addresses:</li>
            <ul class="dev-guide-list">
                <li>SingleLocation</li>
                <li>468 Angell Street, Providence, RI 02906</li>
            </ul>
            <li>Line #1</li>
            <ul class="dev-guide-list">
                <li>Amount: 100</li>
                <li>TaxCode: P0000000</li>
            </ul>
        </ul>
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The tax for line 1 should be $0.00.</li>
    <li>The Taxable amount for line 1 should be $0.00. </li>
    <li>The Exempt amount for line 1 should be $100.00.</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
{
  "type": "SalesInvoice",
  "code": "Chapter-8-Test-1",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "TESTCUSTOMER",
  "addresses": {
    "singleLocation": {
      "line1": "468 Angell Street",
      "city": "Providence",
      "region": "RI",
      "country": "US",
      "postalCode": "02906"
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

<h3>States Without Sales Tax</h3>

Some states or tax authorities in the United States do not collect sales, use, or transactional taxes.  In this case, transactions will correctly show zero tax, unless they trigger special excise taxes or other functionality.

Let's look briefly at the status of sales tax in a few notable states.  These states are often called the "NOMAD" states, after an acronym that lists the state names: New Hampshire, Oregon, Montana, Alaska, and Delaware.
<ul class="dev-guide-list">
  <li>The state of Alaska does not have a state sales tax.  However, Alaska is also what is known as a <a class="dev-guide-link" href="https://www.avalara.com/blog/2015/11/02/sales-tax-q-a-home-rule-states/">"Home Rule"</a> state, where individual cities and counties are granted the authority to levy and administer their own sales taxes.  This means that, although you will generally not calculate state sales tax in Alaska, local jurisdictions within Alaska may request that you pay sales, seller's use, or consumer use tax if you have nexus within that jurisdiction.  Because of this Home Rule designation, it is necessary for companies to correctly declare their nexus within Alaska and within local jurisdictions within the state of Alaska even though the state itself does not charge sales tax.</li>
  <li>Delaware doesn't have a sales tax, but it does impose other taxes businesses based on their gross sales.  These taxes are not calculated transactionally, which means they will not show up on your AvaTax transactions.</li>
  <li>Montana, New Hampshire, and Oregon prohibit local jurisdictions within the state from levying sales taxes.  As a result, these three states do not have any sales tax either at a local or state level.</li>
</ul>
Although these states do not charge sales tax, it is important that your connector still record tax correctly.  Avalara Certified Connectors must record transactions in AvaTax even if the transaction is within these NOMAD states.  This is necessary because:
<ul class="dev-guide-list">
  <li>Laws can change.  Avalara continually researches tax laws and updates our software promptly as soon as any changes affect correct tax calculation.  If any state changes its tax laws, your customers should not have to update their connector.</li>
  <li>Sourcing rules can change.  Some states can change their tax rules to determine the origin or destination of a transaction differently based on other factors such as the billing address or the call center address of a transaction.  In this case, a transaction that was previously nontaxable based on a NOMAD state law may become taxable based on the origination of the shipment.</li>
  <li>Tax types can change. Depending on your customer's subscriptions, Avalara provides support for excise, telecommunications, E-Waste, bottle taxes, and more.  These tax types may not always be exempt in NOMAD states.</li>
</ul>
To ensure that your connector correctly sends NOMAD tax, you must be able to demonstrate that the tax transaction in the test case below is correctly recorded in AvaTax.

<div class="dev-guide-test" id="test2">
<div class="dev-guide-test-heading"> Test Case: 8.1.2</div>
<div class="dev-guide-test-content">
<h4>Set Up</h4> 
<ul class="dev-guide-list">
    <li>In your connector, create the following transaction:</li>
    <ul class="dev-guide-list">
        <li>Transaction Type: SalesInvoice</li>
        <li>Transaction Code: Chapter-8-Test-1</li>
        <li>Document Date: 2017-06-15</li>
        <li>Customer Code: TESTCUSTOMER</li>
        <li>Addresses</li>
        <ul class="dev-guide-list">
            <li>SingleLocation</li>
            <li>720 SW Broadway, Portland, OR 97205</li>
        </ul>
      <li>Line #1</li>
      <ul class="dev-guide-list">
          <li>Amount: 100</li>
          <li>TaxCode: P0000000</li>
      </ul>
      <li>Commit set to "true"</li>
    </ul>
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>

Calculate tax for your transaction using AvaTax.

<h4>Assertions</h4>

<ul class="dev-guide-list">
  <li>The tax for line 1 should be $0.00.</li>
  <li>The Taxable amount for line 1 should be $0.00.</li>
  <li>The Exempt amount for line 1 should be $100.00.</li>
  <li>The transaction's Status should be "Committed".</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle2" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle2"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
{
  "type": "SalesInvoice",
  "code": "Chapter-8-Test-1",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "TESTCUSTOMER",
  "commit": "true",
  "addresses": {
    "singleLocation": {
      "line1": "720 SW Broadway",
      "city": "Portland",
      "region": "OR",
      "country": "US",
      "postalCode": "97205"
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

<h3>Tax Rate of Zero for a Product</h3>

Transactions can also have zero tax if they involve products that are not taxable.  Some jurisdictions may choose not to tax certain products, or to tax them only in certain conditions.  The jurisdiction may choose to call the product "exempt from tax", or "nontaxable", or simply a product with a zero tax rate.  AvaTax will determine the taxability of the product based on the <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/models/TaxCodeModel/">TaxCode</a> you provide.


Product taxability and <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/models/TaxCodeModel/">TaxCode</a> are discussed in more detail in <a class="dev-guide-link" href="/avatax/dev-guide/product-taxability/">Chapter 5 - Product Taxability</a>.

<h3>Tax Override of Zero</h3>

If you are using a tax override to import tax calculated by a different tax engine, AvaTax may assign zero tax to your transaction in order to match the functionality of your older software.

Tax Overrides are discussed in more detail in <a class="dev-guide-link" href="/avatax/dev-guide/discounts-and-overrides/">Chapter 6 - Discounts and Overrides</a>.


<ul class="pager">
   <li class="previous"><a href="/avatax/dev-guide/exemptions/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/exemptions/exemption-certificate/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
