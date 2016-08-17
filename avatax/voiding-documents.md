---
layout: page
title: Cancel Transactions
product: avaTax
doctype: use_cases
nav: apis
community: cancel
---
<h2>Using the CancelTax method to void transactions</h2>
<p>CancelTax provides a mechanism to recover from posting problems and cancel transactions. The effect of CancelTax depends upon the current state of the document (uncommitted/saved, posted, or committed), and a property of the CancelTax call: CancelCode.</p>
<p>Some of the possible uses include:</p>
<ul>
	<li>Removing a committed document from tax reporting by using DocVoided.</li>
	<li>Undo a document adjustment that was made in error using the SOAP API AdjustTax method.</li>
</ul>
<p>Not all CancelCode values are permitted for all document states. The effects of each CancelCode on documents in the various states are:</p>
<table class="styled-table">
	<thead>
		<tr>
			<th>CancelCode:</th>
			<th>Uncommitted (Saved)</th>
			<th>Uncommitted (Posted)</th>
			<th>Committed</th>
			<th>Committed (Adjusted)</th>
			<th>Voided</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><em>Unspecified</em></td>
			<td>Uncommitted (Saved)</td>
			<td>Uncommitted (Posted)</td>
			<td>Committed</td>
			<td>Committed (Adjusted)</td>
			<td>Voided</td>
		</tr>
		<tr>
			<td>PostFailed</td>
			<td>DocStatusError</td>
			<td>Saved</td>
			<td>DocStatusError</td>
			<td>DocStatusError</td>
			<td>DocStatusError</td>
		</tr>
		<tr>
			<td>DocDeleted</td>
			<td>Deleted</td>
			<td>Deleted</td>
			<td>Voided</td>
			<td>Voided</td>
			<td>Deleted</td>
		</tr>
		<tr>
			<td>DocVoided</td>
			<td>Voided</td>
			<td>Voided</td>
			<td>Voided</td>
			<td>Voided</td>
			<td>Voided</td>
		</tr>
		<tr>
			<td>Adjustment Cancelled</td>
			<td>DocStatusError</td>
			<td>DocStatusError</td>
			<td>DocStatusError</td>
			<td>Removes last adjustment.</td>
			<td>DocStatusError</td>
		</tr>
	</tbody>
</table>
