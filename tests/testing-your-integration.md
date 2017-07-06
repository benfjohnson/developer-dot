---
layout: page
title: Test
product: avaTax
doctype: test_your_integration
nav: tests
---


<div class="half">
    <h3>Integration Testing</h3>
    <p>When you run tests (automatically or manually), take care to call the AvaTax service only when needed. We don't have a way of distinguishing between test calls and actual live calculations (since they all return real tax calculations from us), so they are all included in the calculation of your billable transactions. In tests where a live tax calculation is required (for example, to check <a href="/avatax/service-availability-and-performance">if the service is available</a> or if your credentials are correct), there is no replacement for an actual call to the API. For the majority of cases, however, we recommend that you stub out the AvaTax API calls. This will save you on both the time it takes to run your unit and integration tests (and non-tax functional tests), and the number of transactions you consume.</p>
    <h3>Functional Testing Scenarios</h3>
    <p>Depending on the scope of your Avalara AvaTax Sales Tax API integration and your business practice, your exact test cases may vary: if you're building a custom connector that will just be used for a single client, you might not need to manage credentials through a UI. For development partners building connectors, however, these features become essential. The following is a full list of the features we look for in an integration.</p>

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>Use Case</th>
				<th>Expected Outcome</th>
				<th>Documentation</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Pull up the AvaTax Administration panel/page in your application</td>
				<td>
					Administrative user should be able to view/modify:
					<ul class="normal">
						<li>AvaTax Account Number</li>
						<li>AvaTax License Key</li>
						<li>Service URL (will they be connecting to our development or production environment?)</li>
						<li>AvaTax Company Code</li>
					</ul>
					They should also be able to:
					<ul class="normal">
						<li>Disable AvaTax tax calculation (independently of address validation)</li>
						<li>Disable AvaTax address validation (independently of tax calculation) altogether, or by country</li>
						<li>Make a test connection to the AvaTax service using account credentials, but independent of tax calculation and address validation.</li>
					</ul>
				</td>
				<td>
					<a href="/avatax/logins/">Logins and Resources</a><br /><br />
					<a href="http://www.youtube.com/watch?v=9IGMZfrYU9A">Utility and Configuration Screen (Video)</a>
				</td>
			</tr>
			<tr>
				<td>Look at the touch points in your customer record</td>
				<td>
					You should be able to identify:
					<ul class="normal">
						<li>What will be transmitted to AvaTax as the CustomerCode</li>
						<li>Which addresses (if any) on the customer record will be used for tax calculation, and how they can be validated</li>
						<li>How the customer can be marked as tax exempt</li>
						<li>If you have integrated to the AvaTax CertCapture product, the touch points for customers and exemption requests</li>
					</ul>
				</td>
				<td><a href="http://www.youtube.com/watch?v=SkBgcKa_yFY">Customer Record (Video)</a></td>
			</tr>
			<tr>
				<td>Look at the touch points in your item record (inventory maintenance)</td>
				<td>
					You should be able to identify:
					<ul class="normal">
						<li>What will be transmitted to AvaTax as the Item Code</li>
						<li>What will be transmitted to AvaTax as the Item Description</li>
						<li>How the item taxability is controlled (what will be transmitted to AvaTax as <a href="http://taxcode.avatax.avalara.com/">Tax Code</a>)</li>
					</ul>
				</td>
				<td><a href="http://www.youtube.com/watch?v=iZE8BEgZBt4">Item Record (Video)</a></td>
			</tr>
			<tr>
				<td>Run a test transaction with more than one line, where each line has more than one quantity.</td>
				<td>
					<ul class="normal">
						<li>Depending on your integration scope, the transaction should be saved to the AvaTax Admin Console</li>
						<li>The lines should transmit the specified quantity</li>
						<li>The lines should show extended amount</li>
						<li>Any shipping/miscellaneous charges should be reflected as additional line items in the transaction record on the AvaTax Admin Console</li>
						<li>All information identified above in the customer record and item record should be saved in the transaction</li>
					</ul>
				</td>
				<td><a href="http://www.youtube.com/watch?v=6465JvR3lNk">Transaction Lifecycle (Video)</a></td>
			</tr>
			<tr>
				<td>Process a transaction for a tax exempt customer</td>
				<td>The transaction should be recorded in AvaTax with the identified tax exemption indicator</td>
				<td>
					<a href="/avatax/handling-tax-exempt-customers">Handling Tax Exempt Customers</a><br /><br />
					<a href="http://www.youtube.com/watch?v=K7s9QiX_l2A">Exempt Customer (Video)</a>
				</td>
			</tr>
			<tr>
				<td>Process a partial return (for a taxable customer, and then a tax exempt customer), and then another partial return associated with the same order/invoice.</td>
				<td>
					The return should be recorded on the AvaTax Admin Console with the following:
					<ul class="normal">
						<li>Negative (extended) amounts, and positive quantities reflecting the returned quantities and amounts, thus calculating negative liability</li>
						<li>Document Date of the date when the return was processed, but a Tax Date that reflects the date of the original invoice (note: this is not possible in the REST API v1)</li>
						<li>Shipping charges (etc.) should be recorded on this transaction (or not) as per business practice</li>
						<li>All customer and item information should be the same as on the original transaction</li>
					</ul>
				</td>
				<td><a href="/avatax/handling-return-invoices">Product Returns</a></td>
			</tr>
			<tr>
				<td>Take a transaction through the entire document lifecycle of an order/invoice etc.</td>
				<td>The transaction should follow the lifecycle logically in the AvaTax Admin console, ending with a committed transaction on the AvaTax Admin Console.</td>
				<td>
					<a href="/avatax/use-cases">Sample Workflows</a><br /><br />
					<a href="http://www.youtube.com/watch?v=6465JvR3lNk">Transaction Lifecycle (Video)</a>
				</td>
			</tr>
			<tr>
				<td>Take a return through its entire document lifecycle.</td>
				<td>The transaction should follow the lifecycle logically in the AvaTax Admin console, ending with a committed return transaction on the AvaTax Admin Console.</td>
				<td><a href="/avatax/use-cases">Sample Workflows</a></td>
			</tr>
			<tr>
				<td>If applicable, void/delete a transaction (if possible, both an invoice and a credit) in your application</td>
				<td>The transaction record in AvaTax should reflect a "Voided" document status.</td>
				<td>
					<a href="/avatax/voiding-documents">Cancel Transactions</a><br /><br />
					<a href="http://www.youtube.com/watch?v=kOtEmlzkO4U">Voided Invoice (Video)</a>
				</td>
			</tr>
		</tbody>
	</table>
</div>
    <h4>Tax Compliance Edge Cases:</h4>
    <p>Sales tax calculation can create a number of different interesting edge cases. Make sure your connector's calculation agrees with a calculation on the Admin Console for the following use cases:</p>
    <ul class="normal">
        <li>An order with some taxable items (with no tax code, or a taxable tax code), some nontaxable items(using tax code NT, or another nontaxable code), and a shipping line (using tax code FR)
            <ul class="normal">
                <li>In California, the shipping line should be nontaxable</li>
                <li>In Alabama, the shipping line should be taxable</li>
                <li>In Arkansas, the shipping line should be partially taxable</li>
            </ul>
        </li>
        <li>An order in Tennessee with a line item with a quantity of one and an amount above $1600 should match the calculation in the Admin Console (pay particular attention to the jurisdictional breakout).</li>
        <li>An order in any state with Entity/Use Code (CustomerUsageType) of N (indicating a Local Government exemption) should not be fully exempt from sales tax.</li>
    </ul>
</div>
