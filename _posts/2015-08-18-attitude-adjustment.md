---
layout: post
title: Attitude Adjustment
date: 2015-08-18 14:55
author: anya.stettler
comments: true
categories: [older]
product: avaTax
doctype: blog
---
Earlier today, I was talking to a colleague about some taxation reporting scenarios. Yes: this is the kind of thrilling stuff we talk about every day (and, for that matter, <a href="http://www.avalara.com/about/jobs/">so could you</a>)!

"What should I do when the customer cancels some line items but not others on a committed document?" He asked.

"Well, you should record an adjustment to net out the removed lines."

"How about if they don't want to cancel them, the vendor just changes the line amounts after the invoice is committed?"

"Yeesh! But that should probably just be two adjustment documents; a credit and a re-bill of the updated line items. They might think about not committing their documents so late if they're doing that."

"What if they need to change the line amounts after the fact, and then the customer returns some of the items?"

"Yeah, I think you should record a pair of adjustment documents for that, too: one for the line amount adjustments, and one credit memo for the product return."

Notice a trend? Why so much love for adjustment documents? Won't it just clutter up my document records and audit information?

No! It really is the best way to tackle these kinds of scenarios! Consider the following:
<ol>
	<li>If your original transaction is closed, it could be in a closed period.</li>
	<li>If it could be in a closed period, it could be in a filed period.</li>
	<li>If the period was filed by Avalara, your document is locked and cannot be edited in any way (including voiding).</li>
</ol>
Ok, so we can't do anything with the original document. That means the only way to get that money off the reports is to net it out with a negative entry. What does this let me do? Whatever you need to! As far as we're concerned, this is a whole new transaction, so you can reverse it any way you like, including:
<ul class="normal">
	<li>Reversing the tax only on a transaction (if a customer claimed an exemption after being invoiced)</li>
	<li>Reversing sale amounts inclusive of tax</li>
	<li>Reversing sale amounts exclusive of tax</li>
	<li>Reversing amounts with dynamically determined tax</li>
	<li>Reversing amounts with manually specified tax amounts.</li>
</ul>
And then you can enter in the new charge (if there is one) in the same way! Hey, if you're feeling extra fancy, you can even tack it on as additional positive line items on your otherwise-negative adjustment! Just remember: when you need to CYA (correct your accounts), RYA (record your adjustments)! Catchy, right?

