---
title: 在网页中使用思源宋体
date: '2020-12-12'
slug: SiYuanSongTi
cn/ctags:
  - Web
  - Fonts
---

## 前言

昨天从[益辉的回复中](https://d.cosx.org/d/421962-yihuicss/6)我了解到了开源字体：[思源宋体](https://source.typekit.com/source-han-serif/cn/)。于是就尝试了一把。由于adobe需要注册才能使用[Typekit](https://fonts.adobe.com/typekit)加载网络字体，而我一向不喜欢这种需要注册才能用的服务，所以就尝试了直接把字体上传的服务器的方法。对于英文字体，为了提升加载速度，通常大家会用一些字体转换软件或在线服务把开源字体转换成[The Web Open Font Format (WOFF)](https://developer.mozilla.org/en-US/docs/Web/Guide/WOFF)。然而不知道啥原因，对于思源宋体，我试过的几个在线转换的服务都不成功。另一方面，虽然思源宋体是开源的([SIL Open Font License 1.1](https://github.com/adobe-fonts/source-han-serif/blob/master/LICENSE.txt))，但是进行转换的时候，可能会改变原有的字体信息，从而需要进一步的处理(c参见[OFL-FAQ Question 2.1-2.3](https://scripts.sil.org/cms/scripts/page.php?item_id=OFL-FAQ_web#1b11b702)). 因此，我决定牺牲掉一些性能，直接使用opentype和truetype的字体。这些字体可以直接从网上现在。为了避免注册登录adobe，我决定从Google Fonts下载等价的字体：[Noto Serif SC](https://fonts.google.com/specimen/Noto+Serif+SC#standard-styles)对应于思源宋体; [Noto Sans SC](https://fonts.google.com/specimen/Noto+Sans+SC)对应于思源黑体。对于无法访问Google的用户，也可以从第三方下载，例如[https://wordshub.github.io/free-font/](https://wordshub.github.io/free-font/).

## 设置字体

如何下载并设置网络字体，网上有很多教程。关键点是加载和调用。这两项都可以通过CSS来设置。

假设相关字体已经被下载并解压了，且字体所在的文件夹的名字是`fonts`.

- 将包含字体的文件夹`fonts`放到网站的一个容易找到的目录。例如本站将其置于`CSS`文件夹下。

- 设置CSS加载调用字体。为此，可以将如下的CSS代码存为一个.css文件，例如`fontssc.css`.

  ```css
  @font-face {
  font-family: 'SiYuanSong';
  src: local('Source Han Serif CN'), local('Source Han Serif SC'), /*如果可能，调用本地字体*/
    url('fonts/Noto_Serif_SC/NotoSerifSC-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SiYuanSong';
    src: local('Source Han Serif CN'), local('Source Han Serif SC'), /*如果可能，调用本地字体*/
      url('fonts/Noto_Serif_SC/NotoSerifSC-Bold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  body{
    font-family: 'SiYuanSong', serif;
  }
  ```

- 在网页的`<head>...</head>`里面加入下面一行即可。
  
  ```html
  <link href="/css/fonts-customized.css" type="text/css" rel="stylesheet"/>
  ```

## 后记

- 为了增强网页打开后的刷新速度，可以用`rel="preload"`来预加载字体。具体来说，将下面的代码加入`<head>...</head>`里面即可。
  
  ```html
  <link rel="preload" as="font" href="/css/fonts/Noto_Serif_SC/NotoSerifSC-Regular.otf" type="font/otf" crossorigin="anonymous">
  <link rel="preload" as="font" href="/css/fonts/Noto_Serif_SC/NotoSerifSC-Bold.otf" type="font/otf" crossorigin="anonymous">
  ```

- 如果网页是中英混排，且只希望读者在阅读英文时加载中文字体，可以参见[益辉的解决办法](https://yihui.org/cn/2017/04/source-han-serif/#fn:-1)。

- 在使用上面提供的代码时，请注意修改相应的路径和文件名。
