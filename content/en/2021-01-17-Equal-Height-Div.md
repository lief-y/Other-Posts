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

````html
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
      document.documentElement.style.setProperty('--header-height', height));
    });
  </script>
</head>

<div class="container" style="width: 100%; overflow: hidden; z-index: 2; position: relative;">
  <css-doodle style="position: relative; z-index: 1; height: calc(var(--header-height) + 1vh);">
    :doodle {
    @grid: 20 / 100vmax;
    background: rgb(67, 134, 143, 0.3);
    font-family: sans-serif;
    }
    :after {
      content: \@hex.@r(0x2500, 0x257f);
      color: hsla(@r360, 70%, 70%, @r.9);
      font-size: 5vmax;
    }
  </css-doodle>

  <div class="header" style="position: absolute; top: 0px; right: 0px; left: 0px; bottom: 0px; z-index: 3; text-align: center;">
    <h1 style="font-size: calc(24px + 1vh);">This is the Title of the post.</h1>
  </div>
</div>
````

The above code will be rendered as follow.

<div class="container" style="width: 100%; overflow: hidden; z-index: 2; position: relative;">
  <css-doodle style="position: relative; z-index: 1; height: calc(var(--header-height) + 1vh);">
    :doodle {
    @grid: 20 / 100vmax;
    background: rgb(67, 134, 143, 0.3);
    font-family: sans-serif;
    }
    :after {
      content: \@hex.@r(0x2500, 0x257f);
      color: hsla(@r360, 70%, 70%, @r.9);
      font-size: 5vmax;
    }
  </css-doodle>

  <div class="header" style="position: absolute; top: 0px; right: 0px; left: 0px; bottom: 0px; z-index: 3; text-align: center;">
    <h1 style="font-size: calc(24px + 1vh);">This is the Title of the post.</h1>
  </div>
</div>

Note that it's better to calculate the height of the header div by adding up the height of blocks, for example, using `$(".header h1").outerHeight(true)` instead of simply `$(".header").outerHeight(true)`.
