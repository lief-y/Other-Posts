---
title: "Choosing the Right Markdown Editor for Math"
author: Fei Ye
date: "2021-01-02"
en/categories: 
  - markdown
  - Rmarkdown
en/tags: 
  - KaTeX
  - MathJax
---

When using markdown for reproducible research ,  it is better to know how your writing will be rendered. That determines not only supported markdown syntax but also math typesetting.

## Rendering Math

It depends on the output (pdf or html), the following engines (all open sources) can be used to render math.

- [LaTeX](https://www.latex-project.org/): used by [Pandoc](https://pandoc.org/) to render pdf.

- [MathJax](https://www.mathjax.org/): rendering math in html.
  - Easy to use.
  - Support a large variety of LaTeX commands, in particular,  customized macro, such as `\newcomannd`.
  - Better to use MathJax 3, instead of MathJax 2.7.

- [KaTeX](https://katex.org/): rendering math in html.
  - Faster than MathJax 3.
  - Implementation is harder than MathJax.
  - Support customized macros by customizing KaTeX settings.

Here is a webpage for a [KaTeX and MathJax Comparison Demo](https://www.intmath.com/cg5/katex-mathjax-comparison.php?processor=MathJax).

## Markdown Parsers

Markdown itself is just a lightweight markup language. To preview the files with styles, we need Markdown parsers. There are a lot of Markdown parsers. Here are a few widely used parsers.

- [Pandoc](https://pandoc.org/): a universal document converter in Haskell.

- [Goldmark](https://github.com/yuin/goldmark): a Markdown parser and HTML renderer in Go used by [Hugo](https://gohugo.io/).

- [Markdown-it](https://github.com/markdown-it/markdown-it): a fast and easy to extend Markdown parser in Javascript.

- [rmarkdown](https://github.com/rstudio/rmarkdown): a R package that helps create dynamic analysis documents.

One can also find an incomplete list of Markdown parsers in the post [Choosing the Right Markdown Parser](https://css-tricks.com/choosing-right-markdown-parser/).

## Implementations

There are specific designed editors and code editors with extensions to preview and/or convert Markdown files. For better math rendering, here are some Markdown implementations that I would like to recommend.

### Code Editors with Extensions

- [Rstudio](https://rstudio.com/products/rstudio/) + [rmarkdown](https://github.com/rstudio/rmarkdown).

  - Markdown parser: Pandoc
  - Math renderer: MathJax

- [Visual Studio Code](https://code.visualstudio.com/) + Extensions

  - [Markdown Preview Enhanced](https://github.com/shd101wyy/markdown-preview-enhanced) (recommended)

    - Markdown Parser: Markdown-it (default) or Pandoc
    - Math Renderer: KaTeX (default) or MathJax

      Both KaTeX and MathJax are configurable by `cmd-shift-p` then choose `Markdown Preview Enhanced: Open Mathjax config` or `Markdown Preview Enhanced: Open KaTeX config`. LaTeX macros can be defined for KaTeX using this feature.

  - [Markdown All in One](https://github.com/yzhang-gh/vscode-markdown)

    - Markdown Parser: Markdown-it
    - Math Renderer: KaTeX

      KaTeX is configurable by in extension setting.

**Note:** VS Code can also be used as an alternative to Rstudio for R.

### Markdown Editors

Many good markdown editors don't support math well. If you don't want to use VS Code, you may try [Typora](https://typora.io/).

- [Typora](https://typora.io/): a Markdown editors that render the Markdown directly in WYSIWYG fashion.

  - Markdown Parser: Pandoc
  - Math Renderer: MathJax

### Online Markdown Editors

- [StackEdit](https://stackedit.io/)

  - Markdown Parser: Pandoc (most likely)
  - Math Renderer: KaTeX (starting from v5)

- [Dillinger](https://github.com/joemccann/dillinger)

  - Markdown Parser: Markdown-it
  - Math Renderer: KaTeX (likely)

Overall, my recommendation for Markdown implements is VS Code plus extensions using MathJax.
