---
layout: page
title: Blog
date: 2012-02-19 12:36
author: avalara
comments: true
categories: []
---

This is a placeholder page - it should display the most recent blog posts.

<table>
<tbody>
  {% for post in site.posts %}
  <tr>
  	<td>{{ post.path }}</td>
    <td>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </td>
    <td>{{ post.instance_variables }}</td>
    <td>{{ post.url }}</td>
    <td>{{ post.permalink }}</td>
    </tr>
  {% endfor %}



  {% for post in site.pages %}
  <tr>
	<td>{{ post.path }}</td>
    <td>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </td>
    <td>{{ post.instance_variables }}</td>
    <td>{{ post.url }}</td>
    <td>{{ post.permalink }}</td>
    </tr>
  {% endfor %}
</tbody>
</table>