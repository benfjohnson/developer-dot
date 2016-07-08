---
layout: page
title: Blog
permalink: /blog/
---
<h2>Latest Posts</h2>

{% for post in site.posts limit:10 %}
<div>
<div> <img src="{{ post.imgsrc }}"/> </div>
<h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
<h4>{{ post.subtitle }}</h4>
<div>
{{ post.excerpt | strip_html | truncatewords: 50 }}
</div>
</div>
{% endfor %}
