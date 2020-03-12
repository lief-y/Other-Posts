---
title: Scaling and Centering Figures for Rmarkdown
date: '2020-03-12'
slug: scaling-centering-figs
en/categories:
  - R
en/tags:
  - Bookdown
  - Rmarkdown
  - LaTeX
---

There are different ways to include a picture in Rmarkdown. The basic way is to use `![caption](path/to/picture.extension)`. If the figure is not in an bookdown theorem environment, you may also use `knitr`.

````r
```{r figure, echo=FALSE}
knitr::include_graphics(path/to/picture.extension)
```
````

The way using `knitr` to include graphics provide more options to control the dimension and position of a figure. For details, you may read [Yihui's knitr manual on plots](https://yihui.org/knitr/options/#plots).

Because I normally have to include pictures in theorem environment in bookdown. The `knitr` function is not an option for me to include a picture. However, that's not the end. We only need some external tools to get what we want.

## Centering and Scaling for HTML Output

To center and change the dimension globally for pictures for the html output, we may add the following css code chunk at the beginning of your Rmarkdown file.

````r
```{css, include=FALSE}
img {
    img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width:60%;
    max-width:360px;
}
}
```
````

## Centering and Scaling for PDF Output

For PDF (using TeX) output, to change dimension, first you need create a tex file, say `preamble.tex`, and add the following into it.

```latex
\usepackage{graphicx}
% The following codes are for scaling images to at most 0.5\textwidth and 0.5\textheight globally.
% However, it is still possible to overwrite the defaults
% using explicit options in \includegraphics[width, height, ...]{}
\makeatletter
\def\maxwidth{\ifdim\Gin@nat@width>0.5\textwidth 0.5\textwidth\else\Gin@nat@width\fi}
\def\maxheight{\ifdim\Gin@nat@height>0.5\textheight 0.5\textheight\else\Gin@nat@height\fi}
\makeatother
\setkeys{Gin}{width=\maxwidth,height=\maxheight,keepaspectratio}
% Set default figure placement to htbp
\makeatletter
\def\fps@figure{htbp}
\makeatothe
```

Then add the following to Rmarkdown yaml under the output for pdf.

```yaml
includes:
    in_header: latex/preamble.tex
```

To center pictures for PDF, we need to add `\centering` to each picture environment. One way is to use `bookdown.post.latex`. An example of usage of `bookdown.post.latex` can be found in my [previous post](https://fy-blog.netlify.com/en/2020/02/clean-latex-commands/). Another way, which works better is to use a pandoc lua filter. First, you need create a file, add the following codes and save as a `.lua` file, say `latex.lua`.

```lua
function Image (el)
    if el.classes:includes("center") then
    return {
      pandoc.RawInline('latex', '\\hfill\\break{\\centering'),
      el,
      pandoc.RawInline('latex', '\\par}')
    }
  end
end
```

Then add the following option to the Rmarkdown YAML under the output for pdf.

```yaml
pandoc_args: "--lua-filter=latex/latex.lua"
```
