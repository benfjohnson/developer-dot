---
layout: default
title: SSL Certificates
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---
<h2>Downloading the SSL Certificates public keychain</h2>
Some web clients (such as cURL for Windows) will require you to download the Avalara AvaTax SSL public keychain and install it into your client's keychain repository. Refer back to the steps below only if you have problems establishing the HTTPS connection to the Avalara AvaTax REST API. Both development and production use a Verisign certificate.
<h4>Production Certificate (directly from the CA)</h4>
<ol>
	<li>Go to <a href="https://knowledge.verisign.com/support/mpki-for-ssl-support/index?page=content&amp;actp=CROSSLINK&amp;id=AR1553">VeriSign Root CA</a> and follow the instructions.</li>
	<li>Save the file in your preferred directory named like "certs-ca-bundle.crt".</li>
	<li>Register that file following your standard certificate store process.</li>
</ol>

<hr />
