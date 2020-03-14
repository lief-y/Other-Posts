---
title: "How to Create Multiple Pages in Blog Style with Jekyll"
date: "2019-02-22"
en/categories: Web
en/tags: 
    - Blog
    - Jekyll
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

The first approach will automatically assign categories to your posts.

Using the second approach, you will need to manually add `category: your_blog_folder_name` to `Yaml Front Matter` in each post.

```yaml
---
layout: default
title: Blog1
category: blog1
---
```

You also need to modify the default layout template for the category `blog1` by adding a filter using `post.categories contains 'category name'` to where it is appropriate. For example,

```liquid
{% raw %}
{% for post in site.posts %}
  {% if post.categories contains 'blog1' %}

[{{ post.title }}]({{ post.url }})

  {% endif %}
{% endfor %}
{% endraw %}
```

See Jekyll help document on [Posts](https://jekyllrb.com/docs/posts/) for more information on how to modify a template

---
[^1]: I learned this trick mainly from the post [Create a Multi Blog Site with Jekyll](https://www.garron.me/en/blog/multi-blog-site-jekyll.html) written by Guillermo Garron.

---
Updated on 3/14/2020.
