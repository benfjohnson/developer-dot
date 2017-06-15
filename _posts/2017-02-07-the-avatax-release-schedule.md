---
layout: post
title: The AvaTax Release Schedule
description: How does Avalara publish updates to its AvaTax products?
date: 2017-02-07 17:00
author: Ted Spence
comments: true
categories: [avatax]
product: blog
doctype: blog
disqus: 1
---

Many of you know that Avalara publishes updates to its world-leading AvaTax software suite for tax processing roughly once per month, but do you know how our process works?  For today's article, we'll give you a brief description of how we create new features, notify our customers about our plans, and eventually launch our software to production.

<h2>Monthly Release Cadence</h2>

Our most important commitment to our customers and partners is that we provide a stable and useful API.  Our customers expect that the API will grow over time and add awesome new features, but at the same time they know that they can rely on it to be stable and performant.  We work hard to ensure that new features and bug fixes won't break existing ones.  We roll out new features gradually, and we clearly communicate what's happening every month.

This monthly release schedule is at the core of our development team's <a href="https://en.wikipedia.org/wiki/Agile_software_development">agile practice</a>.  Each month, we review a broad list of requests coming from our product design team, bug reports coming from both internal developers and external partners, and internal improvements that our team plans out in advance.  If you have submitted feedback on the Community site, this is where your feedback will be included.  We read each and every comment on the <a href="https://community.avalara.com/avalara">community site</a> and review how best to address each user's concerns or questions.  After all the debates have concluded, we settle on a unified and prioritized list of work for the month; then we begin developing.

<h2>Patch Notes</h2>

Shortly after we begin our monthly release, I begin drafting notes from all of the developers on our team into a preliminary set of patch notes for the release.  These notes are very rough - and they often are very different than the patch notes you see on our blog site.  We internally review and identify all the positive (and negative!) outcomes involved in each project.  We identify all the things that need to be solved before a feature can be safely launched, and how we can extend our test suite to encompass all the new work we plan to deliver.  

Since all our work requires lots of design, validation, testing, and documentation, it's normal for the scope of a release to change over time.  As we get closer to the release date and our scope becomes clear, we write customer-oriented patch notes and publish them about two to three weeks before the release date.  These patch notes are written for a target audience of AvaTax developers and they help communicate what's changing and how it affects them.  Whenever possible, we list changes to each endpoint explicitly.  For reference, here's a few of our recent release patch notes:

<ul class="normal">
    <li><a href="http://developer.avalara.com/blog/2016/12/30/rest-v2-17-1-patch-notes/">January 2.17.1 Release</a></li>
    <li><a href="http://developer.avalara.com/blog/2016/11/22/rest-v2-16-12-patch-notes/">December 2.16.12 Release</a></li>
</ul>

You may notice that these patch notes are occasionally updated after publication.  If there are last minute changes affecting a release, we'll publish new information to indicate when and how the article changed.

<h2>Sandbox vs Production</h2>

By the time our patch notes are ready to go out the door, we are already hard at work preparing our release.  We launch in three stages: first to a cascading series of internal quality assurance servers, then to the public  sandbox servers, and finally to production.

We launch our features this way because it allows us to maintain our incredible stack of over 30,000 quality assurance test cases across the entire AvaTax suite of products.  We maintain dozens of internal servers that handle specific quality assurance functions, and we use continuous integration to deploy each change to these servers throughout the month.  All throughout the month, our quality assurance team monitors development work, feedback from account managers, and posts on the community site to identify new test cases we can implement.

Every release is launched on the Sandbox environment a few days before it is deployed to production.  This allows some customers to use Sandbox as a way to preview upcoming features and test their software against each pre-release version of AvaTax.  Any customer with an active AvaTax subscription can <a href="https://help.avalara.com/kb/001/How_do_I_get_access_to_our_development%2F%2Fsandbox_account%3F">obtain a Sandbox account</a> and test on that environment themselves.  

The Sandbox environment has the same software and content that exists in AvaTax Production, but it stores your transactions in a different location.  Because of this separation of data, you can use Sandbox to try out new code and new connectors without worrying that your test data will appear on a tax return!  For this reason, we do not make available a "Sandbox" version of Avalara's managed returns service; we don't want there to be any confusion about whether test data will be filed.

Since Sandbox is intended for full, dry-run tests of the AvaTax product, Avalara chose to make Sandbox a fully functional AvaTax system with up-to-date tax content.  If you configure your account and company on Sandbox the same way as you configure it in Production, the tax determination you get by calling Sandbox will be exactly the same as you'd get if you called Production.  While this level of accuracy is vital for precise testing, it also means that we maintain the Sandbox environment at a very high level of support - and that Sandbox accounts are not free.

After each release has launched to Sandbox and been available for testing for a few days, we schedule a production deployment and update the live production stack.  Then, the partner integration work begins!

<h2>Updates to our SDK libraries</h2>

Avalara maintains a number of SDK libraries for commonly used programming languages.  Each of these SDK libraries is automatically updated each month with the latest interfaces and documentation.  Each software development kit is automatically generated each month based on the <a href="https://sandbox-rest.avatax.com/swagger/ui/index.html">official Swagger documentation for REST v2</a>, and many of them are available in package management systems like NuGet or Maven.  The current list of SDKs available is here:

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Language</th>
        <th>Version</th>
        <th>GitHub</th>
        <th>Getting Started</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>C#</td>
        <td><a href="https://www.nuget.org/packages/Avalara.AvaTax/"><img src="https://img.shields.io/nuget/v/Avalara.AvaTax.svg?style=plastic" title="NuGet" alt="NuGet"/></a></td>
        <td><a href="https://github.com/avadev/AvaTax-REST-V2-DotNet-SDK">AvaTax-REST-V2-DotNet-SDK</a></td>
        <td><a href="http://developer.avalara.com/blog/2016/12/05/csharp-nuget-library">Article</a></td>
      </tr>
      <tr>
        <td>Java</td>
        <td><a href="https://maven-badges.herokuapp.com/maven-central/net.avalara.avatax/avatax-rest-v2-api-java_2.11"><img src="https://maven-badges.herokuapp.com/maven-central/net.avalara.avatax/avatax-rest-v2-api-java_2.11/badge.svg?style=plastic" title="Maven" alt="Maven"/></a></td>
        <td><a href="https://github.com/avadev/AvaTax-REST-V2-JRE-SDK">AvaTax-REST-V2-JRE-SDK</a></td>
        <td></td>
      </tr>
      <tr>
        <td>JavaScript</td>
        <td></td>
        <td><a href="https://github.com/avadev/AvaTax-REST-V2-JS-SDK">AvaTax-REST-V2-JS-SDK</a></td>
        <td></td>
      </tr>
      <tr>
        <td>PHP</td>
        <td></td>
        <td><a href="https://github.com/avadev/AvaTax-REST-V2-PHP-SDK">AvaTax-REST-V2-PHP-SDK</a></td>
        <td></td>
      </tr>
      <tr>
        <td>Scala</td>
        <td><a href="https://maven-badges.herokuapp.com/maven-central/net.avalara.avatax/avatax-rest-v2-api-java_2.11"><img src="https://maven-badges.herokuapp.com/maven-central/net.avalara.avatax/avatax-rest-v2-api-java_2.11/badge.svg?style=plastic" title="Maven" alt="Maven"/></a></td>
        <td><a href="https://github.com/avadev/AvaTax-REST-V2-JRE-SDK">AvaTax-REST-V2-JRE-SDK</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>

Do you have a favorite language that isn't supported?  Please <a href="https://community.avalara.com/avalara/topics/new">contact us</a> and let us know which one you'd like to see!

--Ted Spence, Director, AvaTax Core Engine
