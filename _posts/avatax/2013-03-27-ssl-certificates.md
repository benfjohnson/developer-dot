---
layout: page
title: SSL Certificates
date: 2013-03-27 04:39
author: anya.stettler
comments: true
categories: []
---
<h2>Downloading the SSL Certificates public keychain</h2>
Some web clients (such as cURL for Windows) will require you to download the Avalara AvaTax SSL public keychain and install it into your client's keychain repository. Refer back to the steps below only if you have problems establishing the HTTPS connection to the Avalara AvaTax REST API. Both development and production use a Verisign certificate.
<h4>Production Certificate (directly from the CA)</h4>
<ol>
	<li>Go to <a href="https://knowledge.verisign.com/support/mpki-for-ssl-support/index?page=content&amp;actp=CROSSLINK&amp;id=AR1553" target="_blank">VeriSign Root CA</a> and follow the instructions.</li>
	<li>Save the file in your preferred directory named like "certs-ca-bundle.crt".</li>
	<li>Register that file following your standard certificate store process.</li>
</ol>

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
