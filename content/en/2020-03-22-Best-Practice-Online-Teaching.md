---
title: Tools and Best Practice for Teaching Math Online
date: '2020-03-22'
slug: best-practice-online-teaching
en/categories:
  - Tools
en/tags:
  - Online Teaching
  - Markdown
  - Word
---

Many teachers teach online using certain types of tools. I currently use a cloud meeting tool. A key feature for cloud meeting tools is to share contents. For math teacher, we frequently need to write math expression which is normally not so easy. It's kind of painful using word. The learning curve of LaTeX is a little bit too steep. Luckily, for beginners, we have [Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown). Together with a handful editor, we can easily create documents for different purpose. In this blog, I will only focus on the tools and some tips that should help with productivity of distance teaching.

## Tools

- **Hardware:** Graphic tablet.

  Any type of graphic tablet should work. ~~, I am using XP Pen. You may set up the functions for buttons on the pen after you installed the XP Pen driver.~~ <!-- <img src="/img/image-20200323112244570.png" alt="image-20200323112244570" style="zoom:50%;" /> -->

  **Update on 07/17/2020:** *The quality and service of XP Pen are really bad. One drop, the tablet is dead. Purchased another one, never received and the company refused to find it or refund for it. No longer recommended. Ordered another one Huion HS611.*

- **Software:** Most cloud meeting tools have built-in whiteboard which can be used to show your handwriting. However, you may find them not very flexible. Here are some applications that I am using and would like to recommend to you.

  - Microsoft Word

    Can be used as a fancy yet not complicated whiteboard.

  - Snipaste [https://www.snipaste.com/](https://www.snipaste.com/)

    Take screenshots and edit them.

  - Typora [https://typora.io/](https://typora.io/)

    Markdown editor and convertor (need Pandoc). I mainly use it to concentrate on writing.

  - Pandoc [https://pandoc.org/](https://pandoc.org)

    A universal document convertor.  I mainly use it to convert a Markdown file to a Word file.

  - Mathpix Snip [https://mathpix.com/](https://mathpix.com/)

    Convert images of math expressions into LaTeX.

## Word

- Use the focus mode

To use word as a whiteboard, you simply need the drawing feature in it. However, the ribbons and tools shown on the top of windows make the screen look crowd. Instead, we can use the `Focus` mode. You may turn the focus mode on from the `View` menu and click the `Focus` icon in the low right corner of the window.

![image-20200322114034255](/img/image-20200322114034255.png)

![image-20200322114109767](/img/image-20200322114109767.png)

- Change the layout

  By default, a new word document had the dimension of a letter paper. The ratio doesn't fit the screen well. The best  size I found is landscape legal paper size with smaller margins. You may make changes under the `Layout` menu.

  ![image-20200322114153812](/img/image-20200322114153812.png)

- Change the background color in `Design`.

  Darker color may help readers to concentrate. You can change the background color under the `Design` menu.

  ![image-20200322114209247](/img/image-20200322114209247.png)

  For example, I uses the 50% darker blue.

  ![image-20200322114220244](/img/image-20200322114220244.png)

- Now you may go to the `Draw` menu to setup your pen/pencil and draw.

  ![image-20200322114232032](/img/image-20200322114232032.png)

**Remark:** *Drawings in word is on the front layer which means you may draw or write over an inserted image.*

## Snipaste

All images in the above sections were created by Snipaste. After the application was installed, start the application, press `F1` to start snipping, then click the save or copy icon in the lower right corner to save or copy the screenshot. If you need add some explanations, use the control panel to add details. If you are not satisfied with the screenshot, press `Esc` key to abort. For more key binding, please read the document [Snipaste Key-bindings](https://docs.snipaste.com/key-bindings).

![image-20200322114352404](/img/image-20200322114352404.png)

## Typora

Typora is a markdown editor. Markdown is a markup language originally designed for creating web contents. Syntaxes of markdown are very easy to learn. For example, headers of a document start with `#`.

```markdown
# The Title/Chapter of the Document
## First Section
## Second Section
### Subsection 2.1
```

Unnumbered lists start with `-` or `*`. Numbered lists start with `1.`, `2.`...

For mathematical expression, you may write in $\LaTeX$, and Typora will render $\LaTeX$​ using [MathJax](https://www.mathjax.org/).

For a reference on markdown, please read the [Markdown Reference for Typora](https://support.typora.io/Markdown-Reference/).

For a quick tutorial and reference on MathJax, please read [MathJax basic tutorial and quick reference](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).

**Note:** To use a single dollar sign `$` for inline mathematical expression, you need to check the syntax support for inline math in the `Markdown` tab under the menu `File` -- `Preferences`.

![image-20200322114405603](/img/image-20200322114405603.png)

## Pandoc

Without installing Pandoc, you may convert a markdown file in Typora into PDF or HTML. To convert the markdown file to word, you need Pandoc, supposedly that you have Microsoft installed on your computer. 

To convert a markdown to other format, go to `File` -- `Export` and select the output format.

To install Pandoc, please read the document `Install and Use Pandoc` from the `Help` menu or Typora website.

<div class="twocols">

![image-20200322114425018](/img/image-20200322114425018.png)

![image-20200322114432131](/img/image-20200322114432131.png)

</div>

## Mathpix Snip

Mathpix Snip is an OCR tool which can convert images of mathematical expression into $\LaTeX$ syntax. 

![image-20200322114454125](/img/image-20200322114454125.png)

To use it, you need to have an account. After the application started, log in the application, it will be ready to capture and convert mathematical expressions. On Windows, the shortcut to take a screenshot for converting is `CTRL + ALT + M`. On Mac OS, the shortcut is `CTRL + ⌘ + M`. For more information, please read the [Mathpix Snip User Guide](https://mathpix.com/docs/snip/overview).

## Look Up Math Expression Using a Browser

Many online OER books use MathJax to render $\LaTeX$. MathJax is a set of `js` libraries. In some browsers, you may temporarily turn off `js` support and see mathematics expressions in $\LaTeX$. Or you may check out the source of the html page.
