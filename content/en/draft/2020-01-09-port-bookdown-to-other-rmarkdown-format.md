---
title: Port Bookdown to Other Rmarkdown Format
date: '2020-01-09'
slug: port-bookdown
categories:
  - Rmarkdown
tags:
  - Bookdown
  - Rmarkdown
---

In mathematics, we write a lot definitions, theorem etc. and refer to them in articles. However, among the Rmarkdown family, only bookdown has all those features that you need. Fortunately, Yihui created a feature `base_format` for bookdown which allows us to port it to amost all format in Rmarkdown family. Here is an example how you can do it and you may always want to write your yaml header in this way.
Add the following to the yaml header will generate a pagedown format html file.
```
output:
  bookdown::html_document2:
    base_format: pagedown::html_paged
    self_contain: true
```

Changing `pagedown::html_paged` to `xaringan::moon_reader` will generate `xaringan slides`.

For beamer presentation, you may use `bookdown::beamer_presentation2`.

For more options for bookdown, you may run the following command `getNamespaceExports("bookdown")` in Rstudio Console to find out. Those names with the number 2 should be the ones with the option `base_format`. For example, you may type in `?bookdown::beamer_presentation2` to see the options.