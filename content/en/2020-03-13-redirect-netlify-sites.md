---
title: Redirect Netlify Sites
date: '2020-03-13'
slug: redirect-netlify-sites
en/categories:
  - Web
en/tags:
  - Hugo
  - Bookdown
  - Blogdown
  - Netlify
---

Netlify is a great place to host a website directly from github. If you have multiple repositories and want to publish them under the same domain. There are two way to do it. You may also redirect a subdirectory of your personal site to a netlify site. However, it doesn't seem possible to redirect a netlify site to a subdirectory.

## Redirect netlify sites to domains or subdomains

 If you have a personal domain/subdomains, you can easily redirect a netlify site to your domain or a subdomain. In this way, no matter you visit the netlify subdomain or your personal domain/subdomain, the address of the site will be shown as your personal/subdomain.

First thing that need to be done is to make sure the domain or the subdomain that you want redirect to exists. If not, you need go to your domain provider to create them.

Second, in your netlify site, go to domain settings, under `Custom Domains`, click `Add custom domain`. In the popup windows enter the domain or subdomain name, click `Verify` and then `Yes, add domain`.

Third, you need to create a `_redirects` file with the following syntax.

```netlify
# Redirects from what the browser requests to what we serve
mysite.netlify.com/*  subdomain.mydomain.gTLD/:splat: 301!
```

**This file should be put in the root folder of your *netlify site*.**

## Redirect a subdirectory to a netlify site

If you don't have to subdomains, you may use subdirectories to host multiple netlify sites. In this case, you only need to create `_redirects` file with the following syntax.

```netlify
# Redirects from what the browser requests to what we serve
/subdirectory/*  mysite.netlify.com/:splat: 200
```

**This file should be put in the root folder of your *personal domain site*.**

In this way, the intended domain name will shown in the address bar. For example, if you visit the site through  `mysite.netlify.com`, you will see one as the domain name. If you visit the site through `mydomain.gTLD/subdirectory`, you will see this name.

For details on redirect methods, examples and syntax, please check the netlify document [Redirects and rewrites](https://docs.netlify.com/routing/redirects/#syntax-for-the-redirects-file).
