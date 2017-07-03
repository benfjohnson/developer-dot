---
layout: page
title: Batch File Reference
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---

<h2>Batch File Reference</h2>

To learn how to use batch files, visit this page: <a href="http://developer.avalara.com/blog/2016/10/24/batch-transaction-upload-in-rest-v2/">Batch Transaction Upload in REST v2</a>

<h3>Batch File Limitations</h3>

<ul class="normal">
    <li>A batch file may have up to 100,000 lines.  Any batch file with more than 100,000 lines may be rejected.</li>
    <li>Batch files must be in XLS, XLSX, or CSV formats.</li>
    <li>When using Excel, please be careful about scientific-notation conversion.  Excel may choose to convert some large numbers to scientific notation; this is especially problematic for UPC codes which often look like large numbers.  Please be careful when using Excel and ensure that the final file does not have conversion problems.</li>
    <li>Batch files are processed by AvaTax in the order they were received.</li>
</ul>

<h3>These are the REST v2 supported Batch File Types</h3>
<i> Download CSV Batch Templates Here (Many of these are also available in the Admin Console):</i>
<ul class="normal">
    <li><a href="https://raw.githubusercontent.com/Avalara/developer-dot/master/_batchtemplates/ImportItemsTemplate.csv" download>ItemImport</a> - refers to a batch type used for uploading multiple items and their respective tax codes at once.</li>
    <li><a href="https://raw.githubusercontent.com/Avalara/developer-dot/master/_batchtemplates/ImportCompanyLocationsTemplate.csv" download>CompanyLocationImport</a> - refers to a batch type used to upload multiple company locations at once.</li>
    <li><a href="https://raw.githubusercontent.com/Avalara/developer-dot/master/_batchtemplates/ImportExemptionCertificatesTemplate.csv" download>ExemptCertImport</a> - refers to a batch type used to upload all relevant data for multiple exemption certificates at once.</li>
    <li><a href="https://raw.githubusercontent.com/Avalara/developer-dot/master/_batchtemplates/ImportTaxRulesTemplate.csv" download>TaxRuleImport</a> - refers to a batch type used to upload all relevant information for multiple tax rules at once.</li>
    <li><a href="https://raw.githubusercontent.com/Avalara/developer-dot/master/_batchtemplates/ImportTransactionsTemplate.csv" download>TransactionImport</a> - refers to a batch type used for uploading multiple transaction lines at once.</li>
    <li><a href="https://raw.githubusercontent.com/Avalara/developer-dot/master/_batchtemplates/ImportBulkUPCTemplate.csv" download>UPCBulkImport</a> - refers to a batch type used for uploading multiple UPC codes and their respective tax codes at once.</li>
</ul>

<h3>Sample File</h3>
As an example let's upload some transaction lines, to get satarted quickly download the TransactionImport template and enter in the following data.  
<h3>List of Required Fields</h3>

The following column fields correspond to the same fields in the CreateTransactionModel and are supported in batch files.  You must fill in, at a minimum, data for these columns in the batch file:

<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Field</th>
                <th>Data Type</th>
                <th>Definition</th>
                <th>Sample Values</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>ProcessCode</td>
                <td>Whole number, 1 digit</td>
                <td>This field determines how Avalara AvaTax processes the document. Here are the process codes that you can use and what they mean:
                0: Void transaction
                1: Tax override--a new transaction without tax calculation
                2: Tax override--adjusted transaction without tax calculation
                3: New transaction
                4: Adjust current transaction
                5: Accrued tax override--new transaction without tax calculation that provides an accrued tax amount, typically used for customer use tax
                6: Accrued tax override--adjusted transaction without tax calculation that provides an accrued tax amount, typically used for customer use tax
                Note:
                -ProcessCode 0 requires the DocCode, DocType, and CompanyCode of the current document to be voided. No other column values are required for a voided transaction.
                -For ProcessCodes 1 or 2 that override tax, enter the tax amount desired in the TotalTax column (column AP).
                -For ProcessCodes 5 and 6 that override tax, enter the accrued tax amount desired in the TotalTax column (column AP) and enter 0 in the Amount column (column N).</td>
                <td><pre>3</pre></td>
            </tr>
            <tr>
                <td>DocCode</td>
                <td>Alphanumeric string, up to 50 places</td>
                <td>The invoice, credit memo, or return number. It must be unique at the company level</td>
                <td><pre>12345-6789-ABCDEF</pre></td>
            </tr>
            <tr>
                <td>DocType</td>
                <td>Whole number, 1 digit</td>
                <td>The type of document:
                1=Sales invoice
                3=Purchase invoice
                5=Return invoice
                7=Inventory Transfer invoice</td>
                <td><pre>1</pre></td>
            </tr>
            <tr>
                <td>DocDate</td>
                <td>Date, up to 10 digits</td>
                <td>The invoice, credit memo, or return date in yyyy-mm-dd or mm/dd/yyyy format. Use the format that most closely matches the one in your accounting, ERP, e-commerce, or point-of-sale software, but dates must be in mm/dd/yyyy or yyyy-mm-dd format:
                    12/30/2012 = mm/dd/yyyy
                    2012-12-30 = yyyy-mm-dd</td>
                <td><pre>2016-10-24</pre></td>
            </tr>
            <tr>
                <td>CustomerCode</td>
                <td>You must put something in this column, and it must be in this format:
                Alphanumeric, up to 50 characters</td>
                <td>This is the code that your accounting, ERP, e-commerce, m-commerce, or point-of-sale application uses to identify a customer; for example, the customer ID or customer number</td>
                <td><pre>ABC</pre></td>
            </tr>
            <tr>
                <td>LineNo</td>
                <td>Text, up to 10 characters</td>
                <td>The line number of the transaction. LineNo for a transaction must uniquely identify each line on the document. We recommend sequential numbering: 1, 2, 3, 4, etc.</td>
                <td><pre>1</pre></td>
            </tr>
            <tr>
                <td>Amount</td>
                <td>Number with up to 2 decimal places</td>
                <td>The total sale amount (extended amount) for the document line item (Quantity * Unit Price).
                Note:
                For return invoices (DocType 5, column C), enter the amount as a negative value.</td>
                <td><pre>100.00</pre></td>
            </tr>
            <tr>
                <td>DestRegion</td>
                <td>Text, 2 characters</td>
                <td>The two-character abbreviation for the destination or ship-to state or province. If you enter something in LocationCode (column AD), leave DestRegion blank. </td>
                <td><pre>CA</pre></td>
            </tr>
            <tr>
                <td>DestPostalCode</td>
                <td>Alphanumeric text, up to 10 characters</td>
                <td>The destination or ship-to postal code in one of these formats:
                    12345  (United States ZIP Code)
                    12345-6789  (United States ZIP+4 Code)
                    A1B 2C3  (Canadian postal code)
                If you enter something in LocationCode (column AD), leave DestPostalCode blank. </td>
                <td><pre>92615</pre></td>
            </tr>
            <tr>
                <td>OrigRegion</td>
                <td>Text, 2 characters</td>
                <td>The two-character abbreviation for the origin or ship-from state or province. If you enter something in LocationCode (column AD), leave OrigRegion blank.</td>
                <td><pre>WA</pre></td>
            </tr>
            <tr>
                <td>OrigPostalCode</td>
                <td>Alphanumeric text, up to 10 characters</td>
                <td>The origin or ship-from postal code in the following format:
                12345 (United States ZIP Code)
                12345-6789 (United States ZIP+4 Code)
                A1B 2C3 (Canadian postal code)
                If you enter something in LocationCode (column AD), leave OrigPostalCode blank. </td>
                <td><pre>92615</pre></td>
            </tr>
            <tr>
                <td>IsSellerImporterOfRecord</td>
                <td>Boolean</td>
                <td>Transaction for physical good are taxed differently when seller is importer or record or not.</td>
                <td></td>
            </tr>
            <tr>
                <td>Header_Description</td>
                <td>Text</td>
                <td>This is the sale description that will be displayed in the Service Invoice. (Discriminação do Serviço)</td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>

<h3>List of Optional Fields</h3>

The following fields correspond to the same fields in the CreateTransactionModel and are supported in batch files:

<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Field</th>
                <th>Data Type</th>
                <th>Definition</th>
                <th>Sample Values</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>CompanyCode</td>
                <td>Text, up to 25 characters</td>
                <td>The code used by Avalara AvaTax. To find out more, visit:
                https://help.avalara.com/004_AvaTax_Integrations/002_All_About_Company_Codes
                If you leave this company code blank, the transaction will be added to your default company.</td>
                <td><pre>DEFAULT</pre></td>
            </tr>
            <tr>
                <td>EntityUseCode</td>
                <td>Text, up to 25 characters</td>
                <td>An entity use code triggers customer-level tax rules. Entity use codes for the United States and Canada are different. Avalara AvaTax supports custom codes and the following standard codes:
                A=Federal government (United States)
                B=State government (United States)
                C=Tribe/Status Indian/Indian Band (both)
                D=Foreign diplomat (both)
                E=Charitable or benevolent organization (both)
                F=Religious or educational organization (both)
                G=Resale (both)
                H=Commercial agricultural production (both)
                I=Industrial production or manufacturer (both)
                J=Direct pay permit (United States)
                K=Direct mail (United States)
                L=Other
                N=Local government (United States)
                P=Commercial aquaculture (Canada)
                Q=Commercial fishery (Canada)
                R=Non-resident (Canada)
                MED1=US MDET with exempt sales tax
                MED2=US MDET with taxable sales tax</td>
                <td><pre>G</pre></td>
            </tr>
            <tr>
                <td>TaxCode</td>
                <td>Text, up to 25 characters</td>
                <td>The AvaTax tax code or custom tax code associated with the item or SKU used on the document line. TaxCode is not needed if ItemCode (column K) is mapped to a tax code in the AvaTax Admin Console for your company.</td>
                <td><pre>P0000000</pre></td>
            </tr>
            <tr>
                <td>TaxDate</td>
                <td>Date, 10 digits</td>
                <td>This optional parameter overrides the date used for sales tax calculation. Avalara AvaTax normally uses the DocDate (column D) for sales tax calculations. TaxDate is usually used on return invoice (credit memo) transactions that need a tax-calculation date that reflects the original invoice date and a transaction date that reflects the current reporting period. Use the date format that most closely resembles the date format used in your accounting, ERP, e-commerce, m-commerce, or point-of-sale application, but dates must be in mm/dd/yyyy or yyyy-mm-dd format:
                    12/30/2012 = mm/dd/yyyy
                    2012-12-30 = yyyy-mm-dd</td>
                <td><pre>2016-10-24</pre></td>
            </tr>
            <tr>
                <td>ItemCode</td>
                <td>Text, up to 50 characters</td>
                <td>The item code or SKU that identifies the product, service, or charge.
                If ItemCode is mapped to an AvaTax System tax code or custom tax code in the AvaTax Admin Console (Organization tab, Items sub-menu), importing a transaction that uses this field triggers system or custom tax rules. ItemCode is required only if the company (CompanyCode, column E) is in the Streamlined Sales Tax Project (SSTP) and the state of origin (OrigRegion, column AA) or destination (DestRegion, column V) is also in the SSTP.</td>
                <td><pre>AB-124123DEF</pre></td>
            </tr>
            <tr>
                <td>Description</td>
                <td>Alphanumeric text, up to 255 characters</td>
                <td>A description of the document line item. Required when TaxCode (column I) is specified, if the company (CompanyCode, column E) is in the Streamlined Sales Tax Project (SSTP) and the destination (DestRegion, column V) is in an SSTP state.</td>
                <td><pre>Dyed Wool Yarn (Red)</pre></td>
            </tr>
            <tr>
                <td>Qty</td>
                <td>Number with up to 4 decimal places</td>
                <td>The number of items on the document line, up to 4 decimal places (example: 1.3429. The default is 1.
                Note:
                Qty does not multiply the amount field. AvaTax uses Qty to calculate the per-item sales amount (unit price) for sales tax caps and thresholds.</td>
                <td><pre>1</pre></td>
            </tr>
            <tr>
                <td>Discount</td>
                <td>Number, up to ?? digits</td>
                <td>The trade discount allocated to the document line that decreases the taxable or non-taxable amount. AvaTax handles discounts at the document header level. But when it imports transactions, it places discounts at the line level, and it treats discounts in this way:
                1. Discounts applied at the line level in imported transactions are accumulated for the total document.
                2. AvaTax redistributes the total discount by prorating the document discount amount across all the lines that had a discount amount assigned to them. Tax is calculated based upon the “new” prorated discount amount now found at the line level. Any lines on the document that did not have a discount remain at a $0 discount.</td>
                <td><pre>15.00</pre></td>
            </tr>
            <tr>
                <td>Ref1</td>
                <td>Alphanumeric text, up to 50 characters</td>
                <td>A user-defined field.</td>
                <td></td>
            </tr>
            <tr>
                <td>Ref2</td>
                <td>Alphanumeric text, up to 50 characters</td>
                <td>A user-defined field.</td>
                <td></td>
            </tr>
            <tr>
                <td>ExemptionNo</td>
                <td>Text, up to 25 characters</td>
                <td>The exemption certificate number, if there is one. Putting a value in ExemptionNo generates a sales-tax exemption for the document line item to which the exemption certificate is applied.
                ExemptionNo is required if:
                -Exemption certificate options for the account are set to required.
                -You're a seller in a Simplified Sales Tax Program (SSTP) state and thus are required to use an exemption certificate management system to generate exemption certificates in SSTP states.</td>
                <td><pre>12-345-6789</pre></td>
            </tr>
            <tr>
                <td>RevAcct</td>
                <td>Text, up to 25 characters</td>
                <td>The revenue account for this transaction. This field is user-defined to identify a general-ledger account.</td>
                <td></td>
            </tr>
            <tr>
                <td>DestAddress</td>
                <td>Alphanumeric text, up to 50 characters</td>
                <td>The destination or ship-to location's street address. If you enter something in LocationCode (column AD), leave DestAddress blank. If you don't enter something in LocationCode, fill in this field to ensure the most accurrate tax calculations.</td>
                <td><pre>123 Main Street</pre></td>
            </tr>
            <tr>
                <td>DestCity</td>
                <td>Text, up to 50 characters</td>
                <td>The destination or ship-to city. If you enter something in LocationCode (column AD), leave DestCity blank. If you don't enter something in LocationCode, fill in this field to ensure the most accurrate tax calculations.</td>
                <td><pre>Irvine</pre></td>
            </tr>
            <tr>
                <td>DestCountry</td>
                <td>Text, 2 characters</td>
                <td>The destination or ship-to country. If you enter something in LocationCode (column AD), leave DestCountry blank. If you don't enter something in LocationCode, fill in this field to ensure the most accurrate tax calculations.</td>
                <td><pre>US</pre></td>
            </tr>
            <tr>
                <td>OrigAddress</td>
                <td>Alphanumeric text, up to 50 characters</td>
                <td>The origin or ship-from street address. If you enter something in LocationCode (column AD), leave OrigAddress blank. If you don't enter something in LocationCode, fill in this field to ensure the most accurrate tax calculations.</td>
                <td><pre>100 Ravine Lane NE</pre></td>
            </tr>
            <tr>
                <td>OrigCity</td>
                <td>Text, up to 50 characters</td>
                <td>The origin or ship-from city. If you enter something in LocationCode (column AD), leave OrigCity blank. If you don't enter something in LocationCode, fill in this field to ensure the most accurrate tax calculations.</td>
                <td><pre>Bainbridge Island</pre></td>
            </tr>
            <tr>
                <td>OrigCountry</td>
                <td>Text, 2 characters</td>
                <td>The origin or ship-from country in two-character format. If you enter something in LocationCode (column AD), leave OrigCountry blank. If you don't enter something in LocationCode, fill in this field to ensure the most accurrate tax calculations.</td>
                <td><pre>US</pre></td>
            </tr>
            <tr>
                <td>LocationCode</td>
                <td>Alphanumeric text, up to 50 characters</td>
                <td>The LocationCode identifies the sales location (outlet) for the document line. Use this field if you have set up that sales location's address in the AvaTax Admin Console.</td>
                <td><pre>DEF001</pre></td>
            </tr>
            <tr>
                <td>SalesPersonCode</td>
                <td>Alphanumeric text, up to 25 characters</td>
                <td>The salesperson for the document line.</td>
                <td><pre>BOBEXAMPLE</pre></td>
            </tr>
            <tr>
                <td>PurchaseOrderNo</td>
                <td>Alphanumeric text, up to 50 characters</td>
                <td>The purchase order for the document line. Use this to match single-use exemption certificate entries created in the Exemption Certificate Management System (ECMS).</td>
                <td><pre>PO20161024-001</pre></td>
            </tr>
            <tr>
                <td>CurrencyCode</td>
                <td>Text, 3 characters</td>
                <td>The ISO currency code; defaults to USD.</td>
                <td><pre>USD</pre></td>
            </tr>
            <tr>
                <td>ExchangeRate</td>
                <td>Number, two digits seperated by decimal point</td>
                <td>The conversion rate from CurrencyCode to the company base currency--for reference only. The default is 1.0.</td>
                <td></td>
            </tr>
            <tr>
                <td>ExchangeRateEffDate</td>
                <td>Date, up to 10 digits</td>
                <td>The effective date of the exchange rate The default for ExchangeRateEffDate is the DocDate (column D). Use the format that most closely matches the one in your accounting, ERP, e-commerce, or point-of-sale software, but dates must be in mm/dd/yyyy or yyyy-mm-dd format:
                    12/30/2012 = mm/dd/yyyy
                    2012-12-30 = yyyy-mm-dd</td>
                <td></td>
            </tr>
            <tr>
                <td>TaxIncluded</td>
                <td>Whole number, 1 digit</td>
                <td>Indicates that tax is included in Amount (column N). AvaTax calculates the taxable (column AN) and TotalTax (column AP) amounts from this value. Use one of these:
                    1: Tax included in Amount (column N)
                    0 or blank: Tax not included in Amount (column N)</td>
                <td><pre>0</pre></td>
            </tr>
            <tr>
                <td>ReferenceCode</td>
                <td>Text, up to 50 characters</td>
                <td>User-defined or for tracking merchant code for mobility reporting</td>
                <td></td>
            </tr>
            <tr>
                <td>BuyersVATNo</td>
                <td>Text, up to 25 characters</td>
                <td>The buyer's VAT registration number</td>
                <td></td>
            </tr>
            <tr>
                <td>Email</td>
                <td>Text</td>
                <td>Inform an email address for the buyer. The city tax authority may use this email to send the invoice confirmation directly to the buyer</td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>
