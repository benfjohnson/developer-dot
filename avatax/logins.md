---
layout: default
title: Logins and Resources
date: 2012-05-14 14:32
author: anya.stettler
comments: true
categories: []
product: avatax
doctype: documentation
---
To activate your Avalara AvaTax Sales Tax API account, please login to the Admin Console at <a href="https://admin-development.avalara.net">https://admin-development.avalara.net</a> (for Development Accounts) or <a href="https://admin-avatax.avalara.net">https://admin-avatax.avalara.net</a> (for Production Accounts) using your user id and password.  Web Service Access (for the API) is gained by using the account number and license key which are displayed after successful account activation.  Please be sure to record the account number and license key for future use.  In addition to activating your account, the Admin Console allows the creation of the company settings and tax profiles used to calculate tax, as well as access to saved transaction information and reports.
<ul>
	<li><strong>URL</strong>: The URL for the development service is <code>https://development.avalara.net</code>. If you are connecting to the production service, the URL is <code>https://avatax.avalara.net</code>.</li>
	<li><strong>Account Number</strong>: This is the account number that needs to be used to authenticate your API call (this is not an Admin Console login). It will be a ten-digit number (e.g. 1100012345)</li>
	<li><strong>License Key</strong>: This is the license key that needs to be set in the credentials portion of your connector (this is not an Admin Console Password). It will be a 16-character string (e.g. 1A2B3C4D5E6F7G8H).</li>
</ul>
<h4>Resetting your License Key</h4>
An important part of our security trust with our clients is that Avalara Support does not reset a license key for any account without the explicit direction of the posted Account Admin on the accounts Admin Console.

You can reset your own license key in development accounts (that is, accounts at <a href="https://admin-development.avalara.net">https://admin-development.avalara.net</a>) by logging in to the Admin Console and going to Settings &gt; Reset License Key. To reset your license key on a production account, contact <a href="mailto:support@avalara.com">Avalara support</a>.

When a license key is reset by Avalara support, the new key is emailed to the Account Admin(s) on this list and no one else. What this policy prevents is service interruption by individuals who do not know the total effect of this action. The effect of resetting a license key is the sole responsibility of the Company (Client) Account Administrator.

&nbsp;

<a href="/images/2012/05/resetting-license-key.jpg"><img class=" wp-image-266 " src="/images/2012/05/resetting-license-key.jpg" alt="License keys are emailed to all account admin level users." width="1093" height="214" /></a> 

<div class="caption">License keys are emailed to all account admin level users.</div>

Warning: Resetting the license key has the effect of invalidating the old key, and breaks all connectors' future connection to the AvaTax web service still using that old license key (including AvaTax ERP Connectors using the same account number). In other words, when you reset your license key, you will need to change the credential properties on any and all connector(s) you have built, installed and/or deployed, but also the AvaTax ERP Connector using the same account number.

<hr />

<h2>Related Community Discussions</h2>
<div id="gsfn_list_widget">
<div id="gsfn_content">Loading...</div>
</div>
<script src="https://getsatisfaction.com/avalara/widgets/javascripts/f585970/widgets.js" type="text/javascript"></script><script src="https://getsatisfaction.com/avalara/topics.widget?callback=gsfnTopicsCallback&amp;length=240&amp;limit=5&amp;sort=recently_active&amp;user_defined_code=auth" type="text/javascript"></script>
<div id="getsat-widget-8157"></div>
<script src="https://loader.engage.gsfn.us/loader.js" type="text/javascript"></script><script type="text/javascript">// <![CDATA[
if (typeof GSFN !== "undefined") { GSFN.loadWidget(8157,{"containerId":"getsat-widget-8157"}); }
// ]]></script>
