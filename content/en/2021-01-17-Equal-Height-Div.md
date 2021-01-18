---
title: "Setting the Height of Div Dynamically Using JS"
author: Fei Ye
date: "2021-01-17"
en/categories: 
  - Web
en/tags: 
  - CSS
  - JS
---

When using [CSS-Doodle](https://css-doodle.com/) to create the background, one can use the CSS overlay trick (see for example [How TO - Overlay](https://www.w3schools.com/howto/howto_css_overlay.asp)). However, to create the CSS-Doodle background in the size of the text content. One can use CSS together with JS.

Here is an example.

```html
<head>
  <script>
    :root {
      --header-height: 0px;
    }
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js">
  </script>
  <script>
    $(document).ready(function() {
      var height = $(".header h1").outerHeight(true)  + "px";
      document.documentElement.style.setProperty('--header-height', height);
    });
  </script>
</head>

<div class="container" style="position: relative; z-index: -1; margin: -0.5px; height: var(--header-height);">
  <css-doodle style="position: relative; z-index: -1; margin: -0.5px; height: var(--header-height);">
    :doodle {
      @grid: 8 / 100%;
      @shape: circle;
    }

    transition: .2s @r(.6s);
    border-radius: @pick(100% 0, 0 100%);

    will-change: transform;
    transform: scale(@r(.25, 1.25));

    background: hsla(
      calc(240 - 6 * @row * @col),
      70%, 68%, @r.8
    );
  </css-doodle>
  <div class="header" style="position: absolute; top: 0px; right: 0px; left: 0px; bottom: 0px; z-index: 3; text-align: center; height: 10em">
    <h1>This is the Title of the post.</h1>
  </div>
</div>
```

The above code will be rendered as follow.

<div class="container" style="position: relative; z-index: -1; margin: -0.5px; height: var(--header-height);">
  <css-doodle style="position: relative; z-index: -1; margin: -0.5px; height: var(--header-height);">
    :doodle {
      @grid: 8 / 100%;
      @shape: circle;
    }

    transition: .2s @r(.6s);
    border-radius: @pick(100% 0, 0 100%);

    will-change: transform;
    transform: scale(@r(.25, 1.25));

    background: hsla(
      calc(240 - 6 * @row * @col),
      70%, 68%, @r.8
    );
  </css-doodle>
  <div class="header" style="position: absolute; top: 0px; right: 0px; left: 0px; bottom: 0px; z-index: 3; text-align: center; height: 3em">
    <h1>This is the Title of the post.</h1>
  </div>
</div>

Note that it's better to calculate the height of the header div by adding up the height of blocks, for example, using `$(".header h1").outerHeight(true)` instead of simply `$(".header").outerHeight(true)`.
