---
title: 用Hugo创建中英混合博客
author: Fei Ye
date: '2020-01-08'
slug: multilingual-blog-using-hugo
cn/ctags:
  - Hugo
  - Blogdown
---

# 用Blogdown/Hugo创建中英混合博客

熟悉或者不熟悉 RStudio, 你都可以很快的用[blogdown](https://bookdown.org/yihui/blogdown/)来创建一个私人博客。头一次创建，最容易当然是导入模板。以下我们将以[yihui/hugo-xmin](https://github.com/yihui/hugo-xmin)为例，简述一下怎样修改模板，从而创建如本博客网站的中英混合博客。由于经验有限，这里只能介绍两个方面的修改。这两方面的修改分别参考了[谢益辉的主页](https://github.com/yihui/yihui.org)和GitHub上关于Hugo 的[Option to change taxonomies URL](https://github.com/gohugoio/hugo/issues/1208#issuecomment-219126178)的讨论。

## 文件结构

默认的博客源文件(md 文件)一般都放在`content\post`文件夹里。对于双语博客，我倾向于一种语言一个文件夹，所以我的`content` 目录下面设置了两文件夹: `en`和`cn`,前一个放英文，后一个放中文。对应的，在`config.toml` 文件下做如下设置

```toml
[permalinks]
    en = "en/:year/:month/:day/:slug/"
    cn = "cn/:year/:month/:day/:slug/"
```

这样设置的目的是使生成的html文件分别仍然在相应的文件加下。另外，*每个文件夹需要有一个空的 `_index.md`文件*。

## 博客导航栏

一般中英，或者多语言混排，至少有两套导航栏。本博站设置了三套，对应的 `config.tom` 中分别由`[menu.main]`, `[menu.en]`, `[menu.cn]` 来定义：

```toml

[menu]
    [[menu.main]]
        name = "Home"
        url = "/"
        weight = 1
    [[menu.main]]
        name = "Blog"
        url = "/en/"
        weight = 2
    [[menu.main]]
        name = "博客"
        url = "/cn/"
        weight = 3
    [[menu.en]]
        name = "Home"
        url = "/"
        weight = 1
    [[menu.en]]
        name = "Blog"
        url = "/en/"
        weight = 2
    [[menu.en]]
        name = "Categories"
        url = "/en/categories/"
        weight = 3
    [[menu.en]]
        name = "Tags"
        url = "/en/tags/"
        weight = 4
    [[menu.en]]
        name = "中文"
        url = "/cn/"
        weight = 5

    [[menu.cn]]
        name = "首页"
        url = "/"
        weight = 1
    [[menu.cn]]
        name = "博客"
        url = "/cn/"
        weight = 2
    [[menu.cn]]
        name = "标签"
        url = "/cn/ctags/"
        weight = 3
    [[menu.cn]]
        name = "English"
        url = "/en/"
        weight = 4
```

注意导航里关于分类的目录项我也都设置到了相应的子目录。然而，要使得生成的html及相关的文件夹也分别在`en`和`cn`文件夹里，还需要更改默认的`[taxonomies]`：

```toml
[taxonomies]
    category = "en/categories"
    tag = "en/tags"
    ctag = "cn/ctags"
```

需要注意的是，在为博客源文件添加分类或标签时，要保留`en/`和`cn/`。例如

```yaml
---
title: 用Hugo创建中英混合博客
author: Fei Ye
date: '2020-01-08'
slug: multilingual-blog-using-hugo
cn/ctags:
  - hugo
  - blogdown
---
```

完成这一步，还有两个问题要通过修改布局模板来解决:
- 修改`layout`文件夹下的`list.html`，从而将`[menu.en]`和`[menu.cn]`两个导航正确的显示出来;
- 修改`layout`文件夹下的`terms.html`，从而能正确显示页面主题。


## 修改`list.html`

在文件夹`/theme/hugo-xmin/layout/_default` 下找到并用文件编辑器打开`list.html`。将

```html+hugo
  <ul>
  {{ $pages := .Pages }}
  {{ if .IsHome }}{{ $pages = .Site.RegularPages }}{{ end }}
  {{ range (where $pages "Section" "!=" "") }}
```

改成

```html+hugo
{{ $currentPage := . }}
{{ if .IsHome }}
{{ $.Scratch.Set "pages" .Site.RegularPages }}
{{ else }}
{{ $.Scratch.Set "pages" .Pages }}
{{ end }}
<ul>
    {{ range (where ($.Scratch.Get "pages") "Section" "!=" "") }}
```
这段修改完全是借鉴了`[hugo-ivy](https://github.com/yihui/hugo-ivy)`的相应设置。

## 修改`terms.html`

在文件夹`/theme/hugo-xmin/layout/_default` 下找到并用文件编辑器打开`terms.html`。将

```html+hugo
 <h1>{{ .Title }}</h1>
```

改成

```html+hugo
{{ $title:= .Title }}
{{ if (hasPrefix $title "En/") }}
    {{ $title = (strings.TrimPrefix "En/" $title) }}
{{ else }}   
    {{ $title = "标签" }}
{{ end }}

<h1>{{ $title }}</h1>
```

如果中文相应的还有分类，则需要额外加一个`{{ else if (condition) }}` 手动定义。如果未做修改，你会发现，生成的分类或者标签页面的主题显示为`En/...`或者`Cn/...`。

## 结语

最后这两步或许有更简单的方法实现。如果您有好的办法，请移步[本博客的github仓库](https://github.com/fyemath/Other-Posts)提交建议或合并。谢谢！