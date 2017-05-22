---
layout: page
title: REST Posts
blog_breadcrumb: 1
nav: resources
---
<!-- this successfully gets the posts from the category that you want -->
<div class="row">
    {% assign p = site.categories.rest %} 
    {% for post in p %} 
    <div class="col-md-6">
        <div class="blog-preview">
                <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
                <h5>{{ post.subtitle }}</h5>
                <p class="byline">By {{post.author}} | {{ post.date | date: "%B %d, %Y"}}</p>
                {% if post.imgsrc %}<p><img src="{{ post.imgsrc }}" class="blog-preview-image" alt="blog preview image"/></p>{% endif %}
                <p class="blog-excerpt">{{ post.excerpt | strip_html | truncatewords: 100 }}</p>
                <div class="readMore">
                    <a href="{{ post.url }}" class="btn btn-blog">Read More</a>
                </div>
        </div>
    </div>
    {% endfor %}
</div>