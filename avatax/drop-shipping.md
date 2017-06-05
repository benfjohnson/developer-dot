---
layout: page
title: Drop Shipping
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---
<h2>Drop Shipping</h2>
<p>For information on reflecting shipping charges in your tax calculation, go <a href="/avatax/calculating-tax">here</a>.</p>
<p>“Drop Shipping” is more of a business process to define vs. a technical one – one that will require the talents of your company's tax attorney and/or accountant to define what your nexus liabilities and responsibilities are for the origin and destination locations.</p>
<p>Note: Avalara cannot provide recommendations or advice regarding how your company should handle nexus liabilities – this is ultimately the responsibility of your tax attorney or accountant.</p>
<p>What needs to be defined (in advance) is if a “nexus event” is taking place or not. To illustrate a drop shipping scenario, the following example will be used:</p>
<ol>
	<li>A customer orders a desk and a chair from your web store totaling $1,500.</li>
	<li>There is a shipping and handling charge totaling $50 ($25 fee for each - not related to Origin or Destination)</li>
	<li>The desk ships from your warehouse in Phoenix (where you have nexus liability),</li>
	<li>The chair however is drop shipped from a partner company with a warehouse in New London, CT. (where you do not have nexus).</li>
</ol>
<p>How does tax get calculated? Below is what is known so far:</p>
<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>LineNo</th>
				<th>TaxCode</th>
				<th>ItemCode</th>
				<th>Description</th>
				<th>Qty</th>
				<th>Amount</th>
				<th>DestAddress</th>
				<th>OrigAddress</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>PRO50204</td>
				<td>Desk</td>
				<td>Office Desk</td>
				<td>1</td>
				<td>$505</td>
				<td>320 S Boston Ave, Tulsa, OK 74103-3703</td>
				<td>6850 W Buckeye Rd, Phoenix, AZ 85043</td>
			</tr>
			<tr>
				<td>2</td>
				<td>PR000000</td>
				<td>Chair</td>
				<td>Ergonomic Chair</td>
				<td>1</td>
				<td>$995</td>
				<td>320 S Boston Ave, Tulsa, OK 74103-3703</td>
				<td>375 Connecticut 12, Groton, CT 06340-2947</td>
			</tr>
			<tr>
				<td>3</td>
				<td>FR020100</td>
				<td>Shipping (Desk)</td>
				<td>Shipping / Handling Phoenix, AZ</td>
				<td>1</td>
				<td>$25</td>
				<td>320 S Boston Ave, Tulsa, OK 74103-3703</td>
				<td>6850 W Buckeye Rd, Phoenix, AZ 85043</td>
			</tr>
			<tr>
				<td>4</td>
				<td>FR020100</td>
				<td>Shipping (Chair)</td>
				<td>Shipping / Handling New London, CT</td>
				<td>1</td>
				<td>$25</td>
				<td>320 S Boston Ave, Tulsa, OK 74103-3703</td>
				<td>375 Connecticut 12, Groton, CT 06340-2947</td>
			</tr>
		</tbody>
	</table>
</div>
<p>The results of this invoice were as follows:</p>
<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>Description</th>
				<th>Qty</th>
				<th>Amount</th>
				<th>Taxable</th>
				<th>Tax</th>
				<th>Totals</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Office Desk</td>
				<td>1</td>
				<td>$505</td>
				<td>Yes</td>
				<td>$43</td>
				<td>$548</td>
			</tr>
			<tr>
				<td>Ergonomic Chair</td>
				<td>1</td>
				<td>$995</td>
				<td>No</td>
				<td>$0</td>
				<td>$995</td>
			</tr>
			<tr>
				<td>Shipping Phoenix, AZ</td>
				<td>1</td>
				<td>$25</td>
				<td>Yes</td>
				<td>$5</td>
				<td>$30</td>
			</tr>
			<tr>
				<td>Shipping New London, CT</td>
				<td>1</td>
				<td>$25</td>
				<td>No</td>
				<td>$0</td>
				<td>$25</td>
			</tr>
			<tr>
				<td>Order Total</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>$1,598</td>
			</tr>
		</tbody>
	</table>
</div>