---
title: "Tips for RStudio Setup for RMarkdown and More"
date: "2019-02-22"
categories: R
tags: [Rstudio, Rmarkdown]
---

- Don't install R to the default location. Instead, choose a location such as C:\Program Files\R.

  Verdict: no version difference issue

- Create a `.Renviron` file to your home directory `~/` using the following function:
  ```r
  # File will be created if it doesn't exist
  file.edit('~/.Renviron')
  ```
  Add   `R_LIBS_USER="C:/R"` to `.Renviron`. This variable will be the library of R packages. 
  It is extremely useful if you are using a computer with limited rights and anti-virus softwares.

  Remember to restart RStudio before you install new packages to this folder.

- Using the function  `file.edit()` to open/create a `.Rprofile`  file.

  ```r
  file.edit('~/.Rprofile')
  ```
  Add `options(servr.daemon = TRUE)` to the file so that `Infinite Moon Reader` addin won't lock `R` process.

- Using RStudio with VS Code for infinite moon

  - Download R language support in VS Code.
  - Open `.rmd` file in both VS Code and RStudio.
  - Run infinite moon addin in RStudio (remember to write `options(servr.daemon = TRUE)` to the file `.Rprofile`.
  - (Option) Check Auto Save in VS Code.
  - Open RStudio and VS Code side by side (on Windows: window buttom+arrow)
  - Maximaze the viewer pane in RStudio.

- Relative path for Xaringan

  For css and beforeInt, relative path may be used. However, to let `knitr` recognize the relative path, the function `xaringan::inf_mr(cast_from = '..')` or similar should be used. After using it once,  the `Infinite Moon Reader` addin seems work.
  