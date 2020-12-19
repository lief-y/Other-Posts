---
title: "Knitr Code Chunk Labeling Issues"
date: "2020-12-18"
en/categories: Rmarkdown
en/tags: 
    - Knitr
    - Code Chunk
---

When using Rmarkdown, we are recommended to assign to each code chunk an unique label that only contains alphanumeric characters (a-z, A-Z, 0-9), slashes (/), or dashes (-).

I never had taken the recommendation in serious consideration until I noticed that the string "unnamed_code_chunk" appeared in each theorem environment in the output pdf file. The reason that the string appears is because the underscore "_" is a special character in LaTeX. By its design, only absolutely "safe" characters, alphanumeric characters (a-z, A-Z, 0-9), slashes (/), or dashes (-), are allowed in chunk labels. Indeed, to be "safer", code chunk labels should contain only alphanumeric characters and without any space.

When using Bookdown, if one still wants to let the system automatically label code chunk, for pdf, one solution is to use the  `bookdown.post.latex` option as seen in my other blog [Clean LaTeX Commands For R Bookdown](https://blog.yfei.page/en/2020/02/clean-latex-commands/). More precisely, the following option should remove the lines in LaTeX containing the string "unnamed_code_chunk".

````
```{r postlatex}
options(bookdown.post.latex = function(x) {
  # x is the content of the LaTeX output file  
  # Remove unnamed_chunk row
  unnamed.chunk <- grep("label\\{.*unnamed-chunk", x)
  x<-x[-c(unnamed.chunk)]
```
````

When rendering pdf articles, one may consider [Port Bookdown to Other Rmarkdown Format](
https://blog.yfei.page/en/2020/01/port-bookdown/).
