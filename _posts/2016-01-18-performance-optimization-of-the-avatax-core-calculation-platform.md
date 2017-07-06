---
layout: post
title: Performance Optimization of the AvaTax Core Calculation Platform
date: 2016-01-18 09:00
author: lokeuei
comments: true
categories: [older]
product: avaTax
doctype: blog
imgsrc: /public/images/blog/Picture1.png
---
Over the past year we’ve invested in our core tax calculation engine, growing SAits features, expanding its reach, and making it faster and faster.  This has presented some amazing challenges, especially to materially speed up a service while its transactional load grows by 60% annually.  Simply keeping up with that level of growth can be a challenge.  So, how did we manage to more than triple the speed at which our current engine calculates and returns information while keeping it stable, growing, and expanding?

The improvement can be clearly seen in our internal latency metrics for typical tax documents over the last 18 months.  Average latency decreased steadily over time, with several larger drop offs from key performance initiatives.  The standard deviation gets smaller and smaller: a significant indicator of more predictable and stable performance.

<img src="/public/images/blog/Picture1.png" width="977" height="535" alt="internal latency chart" />

The problem is certainly tractable as long as it’s approached in an organized and planned fashion and you have a great team behind the work.  However, there are three key factors to success which I regard highly during these initiatives.  In short, these are:
<ul class="normal">
	<li>Teamwork: without everyone pulling in the same direction, improvements made by one engineer are quickly lost in the mix of getting new things done and growing feature set with the demands of the business and your customers.</li>
	<li>Patient Iteration: set up development processes that manage performance for you. Don’t shortcut and rely on crunching the numbers manually and doing manual analysis.  Set up your engineering infrastructure in such a way that everyone shares in the ebb and flow of performance numbers on a daily basis and can understand the impact of their own work directly on system performance.</li>
	<li>A Single Master: lastly, making sure you don’t have components or aspects of your architecture that are serving two masters. For instance, having a single database serving two components that must be optimized for both read and write operations can quickly become a saga of loss and gain, push and pull. I’ll go into more examples later in this post.</li>
</ul>
The upshot of much of this is that there are numerous things engineers can do that are extremely clever and greatly improve upon the performance of a single aspect of your service.  However, without a framework and thinking as an organized team backing it up, it’s not likely to get you the consistent results you’re seeking.

<strong>Teamwork</strong>

The first thing I want to highlight is the team behind the optimization and management of any high performance service.  If your team isn’t on the same page with each other, then constant pressure on performance can often lead to finger pointing and worse.  If you’ve had turnover in your team, then this can also quickly lead to what I call “speaking ill of the dead” where past members of the team become excuses for the problems of today.

I’ve read numerous articles over the years about great engineers who have found amazingly clever ways to speed up specific components of a service.  These often represent fantastic improvements for various atomic areas of the service.  However, if the whole team isn’t on the same track with these improvements, they can often get lost in the shuffle of a sprint.

The team should be committed to the performance of a product as a group, and the build and test process of that team should tie into that commitment in a way that gives it daily visibility and correlates strongly with the work every engineer is doing right at that moment.  In our case, this was done by integrating performance metrics directly into our monitoring and logging process which were on display in our work area continuously.

I’ll talk about process here in a moment.  However, the team must live the process that’s put in place.  This is so much more critical than I believe some appreciate, which is why this process is painful for many.  The finest process and cleverest ideas can quickly be derailed by a toxic or competitive environment where only a few star players are recognized for their efforts.  The goal should be a broad effort across the entire team to live and breathe performance.  Every member of the team should have confidence that not only are their team members at work to support and invest in them, but are also there to provide visibility and recognition for all good work accomplished.  Even when the work is to sustain existing improvements, it’s challenging and should be acknowledged, not just the flashy and clever small optimizations.  I’ve also seen many large optimizations hurt by individuals focusing on clever single contributor contributions while the product as a whole suffers.

<strong>Patient Iteration</strong>

When the team is fully on board and excited about performance, fast iteration must become the science of your execution.  The team must first invest in an infrastructure that allows for fast iteration of performance evaluation.  That is, there should be an automated process in place that can deploy and update the product, conduct a load test, and send out performance numbers to the whole team quickly.  Much like the build process in a continuous integration environment, the whole team needs to understand the moment a check in makes an impact to performance.  This enables correcting negative impacts or capitalizing on unexpected improvements quickly.  The sooner a performance impact is recognized, the fresher that code is in someone’s mind and the faster and cheaper it is to capitalize on or correct before it becomes a large performance effort at the end of a project cycle.

While I describe this section as patient iteration, it’s critical for the infrastructure to be able to run an automated performance test pass as fast as possible. There will inevitably be various ideas about what might net better performance for your system and not all factors can always be fully weighed and incorporated into an easy comparison.  Sometimes, the only way to vet an idea is by a quick implementation and test, but you want to fail fast!  This helps give the entire process the ability to experiment and make data driven performance decisions.

Key tools in our case were automated builds, as well as automated unit and performance tests driven by Jenkins and JMeter.  This was simply part of our continuous build environment which we made sure got better and better each and every sprint cycle.  Improvement of measurement and build tools should be a regular investment the team makes.

So, where does the patience come into the equation?  Every performance improvement you make can shift the performance profile of almost every other component in the system.  While presumably this change has been tested and shown to improve overall system performance, other components and aspects of the system may now have new bottlenecks and require new analysis to make that next optimization step.  This is a patient process, which is why I highly advocate that this iterative and automated process is cooked into your team’s daily routine and psyche as early as possible in the project life cycle.

<strong>Serving Two Masters</strong>

Over the years I’ve been asked to step in and resolve major performance issues in large scale database systems and massive service oriented systems.  In each of these cases, I am consistently surprised at how many times N-tier and component architecture is not well followed.  That is to say that I find single pieces of the architecture that are built to accomplish multiple primary—and often conflicting—goals.  The end result is a component that continues to teeter/totter, being fast in one aspect and slower in another.  A sprint spent on performance optimization results in a negative impact instead of improvement.  This constant back and forth results in a frustrated team and a service that simply isn’t performing to expectations.

Don’t be afraid to break things up!  Separate out databases that you’re trying to optimize for different aspects of the service, create new components that are targeted to service a very specific aspect of the architecture, and optimize it to do exactly that and no more.

Here's an example of what I mean by a component serving more than a single master.  I’ve often seen products that rely on a single database in their design.  This one database handles the persistence of inbound data coming in from customers.  This same database also supports reporting and presentation needs.  As database indexes are added to optimize query performance for the reporting and user interface the insert performance begins to suffer as a result.  Then I see tables getting broken out and queuing systems used, etc.  New requirements and requests from Product Management to expand reporting begins to place high lock issues on the data tables further slowing down both presentation layer as well as data inserts.  Denormalized tables are added to try and alleviate this pressure, and more complexity is added within this single database; meanwhile none of the consumers are wholly thrilled with the performance of their areas.  This is a clear case where one database is trying to serve multiple masters. Creating multiple databases should strongly be considered in this use case.

There can often be a lack of willingness to break out more components within a services architecture due to an earnest desire to keep things simple.  However, by not breaking out the components, it will most likely cause an opposite effect.  The custom code and design that then goes into trying to create a single component that can do more than one thing very well and very fast becomes extremely complex.

Evaluate your design.  If you have an aspect of your service that you find difficult to get performant, think through it.  Is that component trying to serve more than one master in your system?  If so, consider breaking it up.  You will likely find that this results in more components, but components that are simpler to design, and easier to maintain and manage from a performance perspective.

<strong>Finally</strong>

From my perspective it’s clear: performance is a team sport.  It’s a group activity that requires everyone and every role on the team to buy into and commit, as fundamental to the day to day practices as secure and reliable code check-ins.  In our case we set a performance goal of getting our latency below what anyone thought was possible at the time.  While there is a tremendous feeling of accomplishment to major gains, performance must also be a practice that is started early in the life cycle of a product or project and remains a daily concern of all involved.  If started too late or not integrated into the day to day process of a team you can get down to the end of a project and discover that you may need to start a major initiative to get performance to where it needs to be.  However, if applied well and watched closely, the end result can be amazingly successful for an entire company and satisfying for the whole team.

Jonathan Wiggs

<a href="https://www.linkedin.com/in/wiggs">https://www.linkedin.com/in/wiggs</a>
Senior Director of Engineering
Avalara AvaTax
