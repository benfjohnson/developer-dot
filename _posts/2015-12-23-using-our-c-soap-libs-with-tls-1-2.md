---
layout: post
title: Using our C# SOAP Libs with TLS 1.2
date: 2015-12-23 13:03
author: greg.bulmash
comments: true
categories: [older]
product: avaTax
doctype: blog
---
One of the fun parts of my job is getting to field developer support requests. Besides the joy of being able to solve a customer's problem and make them happy, I often get to fire up a development environment I'm unfamiliar with and learn something myself.

This past week, we had a question about <a href="https://community.avalara.com/avalara/topics/it-seems-that-avalara-avatax-adapter-dll-cant-use-tls-1-2-protocol-and-that-affects-our-pci-compliance">getting Avalara's C# SOAP library to use TLS 1.2</a>. TL;DR If you just want the instructions with no story, <a href="https://community.avalara.com/avalara/topics/it-seems-that-avalara-avatax-adapter-dll-cant-use-tls-1-2-protocol-and-that-affects-our-pci-compliance">visit the post on getting Avalara's C# SOAP library to use TLS 1.2</a> 

<h3>The Story</h3>

A developer was only able to get <a href="https://github.com/avadev/AvaTax-Calc-SOAP-csharp">Avalara's AvaTax SOAP library for C#</a> working with SSL 3.0 / TLS 1.0 and realized it was going to impact their ability to be PCI compliant. They posted a question to our community site and it got assigned to me.

I was at home when I had a chance to answer, so I fired up Visual Studio Community Edition on my machine, downloaded <a href="https://github.com/avadev/AvaTax-Calc-SOAP-csharp">Avalara's AvaTax SOAP library for C#</a> from Github, downloaded <a href="http://www.telerik.com/download/fiddler">Fiddler</a>, and got to work.

For those of you not familiar with Fiddler, it's a great tool for analyzing the network traffic (particularly HTTP/S) coming in and out of your machine, looking at headers and bodies of HTTP/S queries and responses, etc. It's helped me solve a number of problems with API clients without adding debug code, because I could watch the live traffic between the client and the server.

As soon as I got the sample up and running, I could see via Fiddler's inspection of the traffic with Avalara that it was negotiating an SSL 3.0 / TLS 1.0 connection. So I did what any good programmer does, I Googled how to implement a TLS 1.2 connection in C#. There were a number of answers that all suggested adding the <code>System.Net</code> assembly in the <code>Using</code> directives and adding the following line to my code.

{% highlight csharp %}ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;{% endhighlight %}

But whenever I tried to run that, it told me that <code>Tls12</code> wasn't part of the SecurityProtocolType enum. I dug down and found that the enum only had <code>Ssl</code> and <code>Tls</code> as values. I thought for a bit and remembered that all the articles recommending this approach said that TLS 1.2 had been implemented in .Net 4.5.

Now I'm not normally a C# developer, but I was lucky enough to write the docs for a C# library that accompanied Microsoft's first release of WebDriver for the short-lived Internet Explorer Developer Channel, and I knew from writing those docs that there were various targeting variables in the project properties (because you had to check/adjust certain variables to get WebDriver to run). I went into the project properties, and sure enough, we were targeting .Net 4.0 instead of 4.5 or higher. I upgraded that to .Net 4.5, tested the code again, and Fiddler started reporting TLS 1.2 connections.

I <a href="https://community.avalara.com/avalara/topics/it-seems-that-avalara-avatax-adapter-dll-cant-use-tls-1-2-protocol-and-that-affects-our-pci-compliance">wrote up my response, posted it to our community site</a>, and was able to solve that developer's issue.

What are my top 3 takeaways for you from this?

<ol>
<li> Yes, you can run our AvaTax code library for C# with TLS 1.2.</li>
<li> Never be afraid to Google stuff. :-)</li>
<li> If you're testing any client/server communication on Windows, be it an API client, web client, etc., download and learn how to use Fiddler. It's worth its weight in gold.</li>
</ol>
