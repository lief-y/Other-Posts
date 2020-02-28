---
title: Clean LaTeX Commands For R Bookdown
date: '2020-02-27'
slug: clean-latex-commands
en/categories:
  - R
en/tags:
  - Bookdown
  - Rmarkdown
---


When using LaTeX template with customized theorem environments in R bookdown, you may see an error say a thereom environment is defined. Checking the output LaTex files, you will find that bookdown generated theorem enviroment at the end of the LaTeX preamble. To solve the problem, currently, one may use the magical `bookdown.post.latex` option. Adding the following code at the beginning of the index.Rmd file will remove the injected theorem environments.

    ```{r remove_amsmath, include=FALSE}
    options(bookdown.post.latex = function(x) {
        start_row <- grep("package\\{amsthm", x)
        end_row <- grep("newtheorem\\*\\{solution", x)
        x<-x[-c(start_row:end_row)]
    })
    ```

I learned the option from the source file of Yihui's book [R Markdown Cookbook](https://bookdown.org/yihui/rmarkdown-cookbook/) and the codes from the Github issue [pdf_book is trying inject latex code to use package amsthm #417](https://github.com/rstudio/bookdown/issues/417).
