---
title: "How to Create Multiple Pages in Blog Style with Jekyll"
date: "2019-02-22"
# categories: Web
# tags: 
#     - Blog
#     - Jekyll
---

## Multiple Blogs on One Site[^1]

Suppose that you have two categories of blogs. There are two ways to create directories in your website folder
1. 
      ```
      --blog1
         |--_posts
      --blog2
         |--_post
      ```
2. 
      ```
      |--_posts
         |--blog1
         |--blog2
      ```
The first approach will automatically assign categories to your posts
Using the second approach, you will need to manually add `category: your_blog_folder_name` to `Yaml Front Matter` in each post.

In the webpage containing your blogs, add a filter using `post.categories contains 'category name'` to where it is appropriate. For example,

```
---
layout: default
title: Blog1
category: blog1
---
{% raw %}
{% for post in site.posts %}
  {% if post.categories contains 'blog1' %}

[{{ post.title }}]({{ post.url }})

  {% endif %}
{% endfor %}
{% endraw %}
```

---
[^1]: I learned this trick mainly from the post [Create a Multi Blog Site with Jekyll](https://www.garron.me/en/blog/multi-blog-site-jekyll.html) written by Guillermo Garron.
