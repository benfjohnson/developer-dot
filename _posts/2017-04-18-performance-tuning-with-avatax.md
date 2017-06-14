---
layout: post
title: Performance Tuning with AvaTax
description: Ways to improve the performance of your tax calculation software
date: 2017-04-19 12:00
author: Ted Spence
comments: true
categories: [avatax, howto]
product: blog
doctype: blog
disqus: 1
---

After more than a decade of offering the world-leading AvaTax software suite, we've learned a bit about providing high performance software for our thousands of customers worldwide.  Our high performance API provides tax calculation answers faster than the blink of an eye - but we will always keep challenging ourselves to improve the AvaTax experience.  We won't rest until everyone can calculate tax effortlessly.

For today's article, let's look at how we measure the performance of AvaTax and improve the response time of our software.

<h2>Performance Measurement</h2>

If we set out to measure the latency of an AvaTax API call, we start the clock when we submit an HTTP request to the server, and stop the clock when our API call returns a well-formed object.  During the time the clock was running, a few things occur:

<ul class="normal">
    <li>The client opens a connection to the server - or, if HTTP keep-alive is enabled, it reuses an existing connection if one is available.</li>
    <li>The client and the server negotiate SSL security.</li>
    <li>The request is sent to the server over the network.</li>
    <li>The server processes the request and returns results.</li>
    <li>The results are sent to the client over the network.</li>
    <li>The client parses the results and returns control to your program.</li>
</ul>

Some of these elements we can't measure directly, but AvaTax provides a helpful value in the HTTP response: `serverduration`.  This value tells you exactly how long it took the AvaTax server to respond to your request.  This means we can measure how long it takes to parse the results and we can separate the results into three segments:

<ul class="normal">
    <li>Network Latency - Opening the connection to the server; negotiating SSL; transmitting the request and response.</li>
    <li>Server Duration - The time it takes the server to process the request.</li>
    <li>Client Parsing - The time it takes the client to parse the results.</li>
</ul>

We provide a convenient testing program, [AvaTax-Connect](https://github.com/avadev/AvaTaxClientLibrary/raw/master/AvaTaxConnect.zip), that measures these three elements of response time.  The program uses the latest [AvaTax SDK for C#](https://www.nuget.org/packages/Avalara.AvaTax/) which has a relatively fast client parsing time, and it measures each of the three elements separately.  Here's what it looks like, when running on a network with a relatively long transit latency:

<img src="/public/images/blog/avatax-connect.png">

As you can see, in this environment, network latency is the most critical factor in the response time.  Let's look at what we can do to investigate further!

<h2>Enable HTTP Keep-Alive</h2>

It can take dozens of milliseconds to open a connection and negotiate SSL security between a client and a server.  Using [HTTP Keep-Alive](https://blog.stackpath.com/glossary/keep-alive/) provides a way to re-use an existing connection rather than start a new one for each request.  The AvaTax SDK uses HTTP keep-alives to improve response times; but if you write your own code to connect to AvaTax, please check to make sure your code uses this feature!

<h2>Check your router and connection</h2>

It's very common to discover that a quirk in network setup can increase response time.  There are a variety of things in between your network and Avalara's servers; any one of them can affect your response time.  

Do your routers have the latest software?  Have they been rebooted recently, or are there too many hops between your network and the outside world?  It's worth mentioning that `traceroute` / `tracert` (on Windows) provides useful diagnostics, but keep in mind that Avalara's security policies do not generally allow us to respond to ping requests.  Because our server won't respond to a ping, it may be hard to interpret the results.

<ul class="normal">
    <li>If your network is using a direct connection with a local internet service provider, does your connection reset regularly?</li>
    <li>If the connection is permanent or business-class, does your ISP offer metrics to help you measure response time?</li>
    <li>If you have a more advanced network using <a href="http://www.cisco.com/c/en/us/support/docs/ip/border-gateway-protocol-bgp/22166-bgp-trouble-main.html">Border Gateway Protocol</a> routing, you would need to talk to your network engineering team.  BGP issues are very challenging to review and are beyond the scope of this article.</li>
</ul>

<h2>Check your ethernet configuration</h2>

If all else fails, check the quality of your wiring and the auto-negotiate settings on your ethernet devices.  Bad wiring or devices with mismatched speed settings are easy to overlook!  You can run `netstat -s` on a windows machine or `ifconfig -a` on a linux machine to detect whether an unusual number of bad packets are coming through your network.  If you have a performance mismatch, try checking with your network administrator to see if the cabling can be improved

<h2>Use the AvaTax SDK, and update regularly</h2>

We are constantly tuning our AvaTax SDK for high performance asynchronous operation.  If you're able, please use an AvaTax SDK for your preferred language, and report your latency experience on the [Avalara Community Forums](https://community.avalara.com/avalara).  Our team of developers are available to work with you identify whether there's any way to improve the response time of your AvaTax implementation!

-- Ted Spence, Director, AvaTax Core Engine