---
title: "自动添加博客页面更新日期"
date: '2021-03-21'
cn/ctags: 
  - Hugo
  - blogdown
slug: "lastmod-hugo"
---

Hugo 提供了一个 .LastMod 变量，可以用来给页面自动添加一个更新日期。该变量在使用的时候，默认的首选值时 git 提交日期。默认的取值顺利和方式可以在 config.yaml (config.toml) 里面修改。具体操作如下。

## 修改模板

假设你打算将最后跟新日期放在页面内容之后。那么可以在 single.html 模板的 `{{ .main }}` 之后添加下面的代码。

```go-html-template
{{ if ne (.Lastmod.Format "2006-01-02") (.Date.Format "2006-01-02") }}
    <p> 最后更新于 {{ .Lastmod.Year }} 年 {{ printf "%d" .Lastmod.Month }} 月 {{ .Lastmod.Day }} 日</>
{{ end }}
```

第一行里面比较了 .LastMod 和 .Date 的日期。如果不加 .Format, 那么同一天内修改页面的话，第二行的信息也会被添加。

## 设置 config.yaml

如果要使用文件的被修改日期作为 .LastMod 的值，则需要早 config.yaml 或者 config.toml 里做相应设置。

若用 yaml 配置你的博客，需添加以下设置。

```yaml
frontmatter:
  lastmod: [":fileModTime", "lastmod"]
```

若用 toml 配置你的博客，则需添加以下设置。

```toml
[frontmatter]
  lastmod = [":fileModTime", "lastmod"]
```

## 小提示

在比较日期的格式时, 一定要用 "2006/01/02" 这个日期。如果换成 "2021-03-22" 则会显示不正常。使用这个固定的日期，是由于 Go 语言的设定如此。
