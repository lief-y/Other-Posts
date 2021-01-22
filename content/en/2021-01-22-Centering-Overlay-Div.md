---
title: "Vertically Centering an Overlay Div"
author: Fei Ye
date: "2021-01-22"
en/categories: 
  - Web
en/tags: 
  - CSS
  - JS
---

To vertically centering a div that overlays over another div, a simple solution is to set style of the top layer to `top: 0; left:0; bottom:0; right:0;`. However, it doesn't seem work well if the background layer is scrollable. Here is another solution for vertically centering an overlay div is to use `top: calc(50%-0.5*div.height)`, where the div.height is the height of the foreground div which can be calculated dynamically using javascript. The following is the complete example.

```html
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Vertical Centering Overlay</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>

<div class="container">
  <div class="bg-layer">
    <img src="https://cdn.pixabay.com/photo/2014/04/14/20/11/flowers-324175_1280.jpg">
  </div>
  <div class="fg-layer">
    <h1> Title </h1>
    <h2> Author </h2>
    <h2> Date </h2>
  </div>
</div>

<script  src="./script.js"></script>

</body>
</html>
```

```css
.container {
  /* placing the container on the middle layer */
  position: relative;
  z-index: 2;
}

.bg-layer {
  /* placing the div on background layer */
  position: relative;
  z-index: 1;
}

.fg-layer {
  /* placing the div on foreground layer */
  position: absolute;
  z-index: 3;
  /* the following centers the div vertically */
  top: calc(50% + var(--div-height));
  /* the following centers the div horizontally */
  left: 0;
  right: 0;
  text-align: center;
}
```

```js
var fg = document.querySelector(".fg-layer");

var height = -0.5*fg.offsetHeight + "px";
   document.documentElement.style.setProperty("--div-height", height);
```

For more information getting height of div, you may read the post [How to get height of a div element with JavaScript/jQuery](https://www.techiedelight.com/get-height-of-div-element-javascript/).

You can check out the effect of the above example in CodePen [Overlay](https://codepen.io/fyye/pen/abmMdeB).
