---
layout: post
title: Handling Java SSL Certificate Exception 
date: 2013-07-12 22:32
author: timothy.longley
comments: true
categories: [older]
product: avaTax
doctype: blog
---
If you are trying to make an HTTPS call to the AvaTax web service from a WebSphere Message Broker  and recieve an exception message similar to below, it is likely that the Message Broker is unable to build the entire certificate path. The Message Broker “keystore” must have all of the certificates in the "chain" of CA's.
<p><code>javax.net.ssl.SSLHandshakeException: com.ibm.jsse2.util.h: PKIX path building failed: java.security.cert.CertPathBuilderException: PKIXCertPathBuilderImpl could not build a valid CertPath.; internal cause is: java.security.cert.CertPathValidatorException: The certificate issued by OU=Class 3 Public Primary Certification Authority, O="VeriSign, Inc.", C=US is not trusted; internal cause is: java.security.cert.CertPathValidatorException: Certificate chaining error</code></p>
One way to verify that all of the required certificates are in your keystore is using the “keytool” from the bin directory of the interface in use.
<ol>
	<li>Start an Administrator Command Prompt.</li>
	<li>Navigate to the bin directory of the API method you are using.</li>
	<li>Type <code>keytool –list</code> and review the certificates stored. You should see at least one Verisign certificate authored by Avalara with an expiration date greater than the current date.</li>
	<li>If not, you may need to recreate the keystore with 'keytool' using the "genkey" option and re-import your application certificates if any of the components of the certificate chain are missing or out of date.</li>
</ol>
Search <a href="https://www-947.ibm.com/support/entry/portal/support">https://www-947.ibm.com/support/entry/portal/support</a> for “keystore” or “keytool” or “genkey” for more information.

<strong>Note:</strong>  If you are using a Microsoft Windows environment, Certificate Manager (CertMgr) can be accessed via your devices Management Console. You will need administrative rights to use this tool.
