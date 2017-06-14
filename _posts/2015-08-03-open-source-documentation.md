---
layout: post
title: Open Source Documentation
date: 2015-08-03 09:24
author: anya.stettler
comments: true
categories: [older]
product: blog
doctype: blog
---
<a href="https://github.com/lord/slate"><img src="https://camo.githubusercontent.com/14cfd4aa8ce9c2899a6c87e988d7542d428d616d/68747470733a2f2f646c2e64726f70626f7875736572636f6e74656e742e636f6d2f752f39353834373239312f676974687562253230696d616765732f736c6174652f736c6174655f73637265656e73686f745f6e65772e706e67" width="30%" height="30%" alt="slate screenshot"/></a>

Since launching this developer site three years ago, we've made continued improvements to both the content and the site itself. One of the areas that has seen the most change is the API reference - it's a tricky thing to present that much information in a way that is easily traversed, navigated, and searched, while still intentionally guiding the reader. There is still room for improvement, but we've had success with an open-source tool called Slate.

<a href="https://github.com/lord/slate">Slate</a> allows us to manage the API documentation in markdown and preview real-time changes with a local middleman server, making it easy to work on documentation offline (great for airplanes!). Changes are tracked through git, and we check in changes on GitHub.

Eventually, I'd like to be able to maintain documentation in way that is a little more <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">DRY</a> (the documentation of the same property (say, DocCode) in multiple places for multiple methods introduces more opportunities for inconsistency), but that's a long term goal. Until then, changes are easy to make and the documentation source is easy to read.
