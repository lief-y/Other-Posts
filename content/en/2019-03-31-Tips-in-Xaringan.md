---
title: A Few Tips for Xaringan
date: 2019-03-31
en/categories: R
en/tags: 
    - Xaringan
    - Slides
    - Rmarkdown
---

## Add CSS Codes within RMarkdown

When using [Xaringan](https://slides.yihui.name/xaringan/) to create slides, one may include a custom.css or use the [xaringanthemer](https://pkg.garrickadenbuie.com/xaringanthemer/articles/xaringanthemer.html) package to change styles in whole or by part.

Recently, I found [another trick](https://stackoverflow.com/questions/52656548/xaringan-changing-code-background-for-specific-chunks) that allow you make changes to styles within your rmarkdown file. It's very simple. You simply only need to add a [CSS](https://www.w3schools.com/css/) code chunk[^1] at the beginning of your content.

Here is an example.

````css
```{css, echo=F}
.remark-slide table, .remark-slide table thead th {
    border-top: 0px;
    border-bottom: 0px;
}
.remark-slide thead, .remark-slide tr:nth-child(even){
    background-color: white;
}
table{
    border-collapse: collapse;
}
.remark-slide thead:empty {
    display: none;
}
```
````

With the above code, as you can see, the background color, borders, and empty header in tables will be removed.

## Identify html Tags for Xaringan

To change the style of a html tag in Xaringan, we have to know the tag name. The tag name can be found in the source of the html file. One easy way to check the source of a webpage is to `inspect` the page. In Google Chrome, right-clicking the part you saw on the webpage and then clicking `inspect` will lead you to the source code.

## Define TeX Macros

Similarly, one may [define customized tex macros for MathJax](http://docs.mathjax.org/en/latest/tex.html#defining-tex-macros) at the beginning the content. For example, to define `\RR` for the blackboard bold $\mathbb{R}$, one may add the following lines in somewhere before the first time you use the macro `\RR`.

```tex
$$\newcommand{\RR}{\mathbb{R}}$$
```

## Use MathJax Native Math Delimiters in KableExtra

When using Xaringan, the math delimiter '$' '$' will be translated in to '\(' '\)'. As part of webpage content, it will be rendered properly by MathJax. However, when using math with KableExtra, the native math delimiter '\\(' '\\)' should be used. Otherwise, there will be an extra pair of single quotations. Here is an example [https://github.com/yihui/xaringan/issues/94](https://github.com/yihui/xaringan/issues/94).

[^1]: Indeed, [RMarkdown also supports javascript language](https://rmarkdown.rstudio.com/lesson-5.html).