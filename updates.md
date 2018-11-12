---
title: Updates
layout: page
---

<h1 class="page-title"><span>{{ page.title }}</span></h1>

<section class="posts">
{% for post in site.posts %}
  <hr>
  <article class="post">
    <div class="meta">
      <time>{{ post.date | date: "%B %-d, %Y" }}</time>
      {% if post.category %}
        {% for category in post.category %}
          &bull; {{ category }}
        {% endfor %}
      {% endif %}
    </div>
    <h3>
      {{ post.title }}
    </h3>

    {{ post.content }}
  </article>
{% endfor %}
</section>
