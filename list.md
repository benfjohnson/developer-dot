---
layout: page
title: Page List
date: 2012-02-19 12:36
author: avalara
comments: true
categories: []
permalink: /list.html
---

This is a placeholder page - it displays all pages and posts on the site.
Posts
<ul>
  {% for post in site.posts %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>

  {% endfor %}
</ul>
Pages
<ul>
  {% for post in site.pages %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>

  {% endfor %}
</ul>
