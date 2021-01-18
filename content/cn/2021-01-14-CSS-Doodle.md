---
title: "用 CSS-Doodle 为网页添加几何美图"
date: '2021-01-14'
cn/ctags: 
  - CSS
  - html
slug: "CSS-Doodle"
---

最近试用了一下 [CSS-Doodle](https://css-doodle.com/), 效果很不错，见上图。

尽管官方教程已经非常清楚，但对于本人这种不太熟悉 CSS 的，学起来还是花了点时间。为了避免忘记，特以上图为例，简单解释一下实现方法，以求抛砖引玉。

## CSS-Doodle 作图

要在网页中显示 CSS-Doodle 图形，需要调用 css-doodle.js. 最简单的方法是将下面的代码加入到网页的 `<head>...</head>` 中。

```html
<script src="https://unpkg.com/css-doodle@0.13.4/css-doodle.min.js"></script>
```

由于 CSS-Doodle 的设计是基于 CSS 的，所以用 CSS-Doodle 作图时，既可以用 CSS 本身的语法，也可以用 CSS-Doodle 自身的语法 (详情可见 [CSS-Doodle Usage](https://css-doodle.com/#usage))。 但是代码要放入一个特殊的元素块：

```css
<css-doodle>
  /* 作图代码 */
</css-doodle>
```

例如，上面的图形，是由下面的代码生成的。

```css
<css-doodle>
  :doodle {
    @grid: 8 / 100vmax;
  }
  @shape: clover 5;
  background: hsla(
    calc(100 - @i * 4), 70%, 68%, @r.8
  );
  transform:
    scale(@r(.8, 1.6))
    translate(@m2.@r(±50%));
</css-doodle>
```

## 用 CSS-Doodle 图形做背景

由于 `<css-doodle>...</css-doodle>` 是一个独立的元素块。要将生成的图形做为另一个元素块儿的背景，一个方法是单独生成一个图片，然后截屏；另一个方法是用下面的代码将图形输出为背景图像。

```css
background-image: @css-doodle(
/* 作图代码 */
)
```

需要注意的是，`css-doodle` 元素块在设计上依赖 `grid` 来生成重复的图形，所以在用上述方法的时候，可以在 `css-doodle` 元素块中加上下面这一行。

```css
@grid: 1 / 100% 100vh; /* 斜杠后为 grid 的宽度和长度*/
```

另外，也可以加上背景色并显示背景的大小。

把上面这些代码合起来即可作为背景使用了。但是需要注意的是，该背景实际上是 `css-doodle` 元素块儿的背景。

```css
<css-doodle>
    @grid: 1 / 100% 100vh;
    background-size: 100%;
    background-image: @doodle(
      @grid: 8 / 100vmax;
      @shape: clover 5;
      background: hsla(
        calc(100 - @i * 4), 70%, 68%, @r.8
      );
      transform:
        scale(@r(.8, 1.6))
        translate(@m2.@r(±50%));
    );
</css-doodle>
```

## 元素块重叠

要将 `css-doodle` 元素块儿作为别的元素块儿的背景，可以使用 `z-index`。例如将 `css-doodle` 的 `z-index` 设置为 -1。将要覆盖在上面的元素块儿的 `z-index` 设置为正整数。另外还需要适当的调整覆盖在 `css-doodle` 上的元素块儿的边距。这些都可以用 CSS 实现。例如, 下面的代码

````css

<div style="width: 100%; overflow: hidden; z-index: 2; position: relative;">
  <css-doodle style="position: relative; z-index: 1; margin: -0.5px;">
    @grid: 1 / 100% 100vh;
    background-size: 100%;
    background-image: @doodle(
      @grid: 8 / 100vmax;
      @shape: clover 5;
      background: hsla(
        calc(100 - @i * 4), 70%, 68%, @r.8
      );
      transform:
        scale(@r(.8, 1.6))
        translate(@m2.@r(±50%));
    );
  </css-doodle>

  <div style="position: absolute; top: 50%; left: 50%;
   transform: translate(-50%, -50%); z-index: 3;">

  ```css
  <css-doodle>
    @grid: 1 / 100% 100vh;
    background-size: 100%;
    background-image: @doodle(
      @grid: 8 / 100vmax;
      @shape: clover 5;
      background: hsla(
        calc(100 - @i * 4), 70%, 68%, @r.8
      );
      transform:
        scale(@r(.8, 1.6))
        translate(@m2.@r(±50%));
    );
  </css-doodle>
  ```

  </div>
</div>

````

上面的 html+CSS 代码的效果如下

<div style="width: 100%; overflow: hidden; z-index: 2; position: relative;">
  <css-doodle style="position: relative; z-index: 1; margin: -0.5px;">
    @grid: 1 / 100% 100vh;
    background-size: 100%;
    background-image: @doodle(
      @grid: 8 / 100vmax;
      @shape: clover 5;
      background: hsla(
        calc(100 - @i * 4), 70%, 68%, @r.8
      );
      transform:
        scale(@r(.8, 1.6))
        translate(@m2.@r(±50%));
    );
  </css-doodle>

  <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 3;">

  ```css
  <css-doodle>
    @grid: 1 / 100% 100vh;
    background-size: 100%;
    background-image: @doodle(
      @grid: 8 / 100vmax;
      @shape: clover 5;
      background: hsla(
        calc(100 - @i * 4), 70%, 68%, @r.8
      );
      transform:
        scale(@r(.8, 1.6))
        translate(@m2.@r(±50%));
    );
  </css-doodle>
  ```

  </div>
</div>

## 后记

1. 为了方便维护，CSS-Doodle 作者 [Yuan Chuan](https://github.com/yuanchuan) 为 `css-doodle` 设置了一个 `use` 属性。利用该属性，可以将 css-doodle 作图代码放入一个 CSS 变量，如 `--rule`，之后可以用 `use="var(--rule)"` 调用。详情请见 [CSS-Doodle Attributes: use](https://css-doodle.com/#attribute-use).

2. 如果用 CSS 设置元素块的格式，需要小心选用选择器才能实现元素块儿的重叠。
