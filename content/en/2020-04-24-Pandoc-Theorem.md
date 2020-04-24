---
title: Create Numbered Theorem Environments Using Pandoc
date: '2020-04-24'
slug: pandoc-numbered-theorems
en/categories:
  - Markdown
  - Pandoc
en/tags:
  - Pandoc
  - css
  - jQuery
---

When writing a research paper in a single html page, we can use [Pandoc’s fenced Div blocks](https://pandoc.org/MANUAL.html#divs-and-spans) to create theorem environments. Using the css pseudo element `::before` and `counter` property, we can add theorem name, number, and title to the theorem environment. Here is an example.

Suppose we have the theorem.

```markdown

::: {.thm title="(Fundamental Theorem of Algebra)" id="thm:FTA"}
Let $p(x)$ be a polynomial of degree $n>0$ with complex coefficients. Then $p(x)$ has exactly $n$ linear factors over the complex number field.
$$p(x)=a\left(x-{c}_{1}\right)\left(x-{c}_{2}\right)…\left(x-{c}_{n}\right)$$
where ${c}_{1},{c}_{2},…,{c}_{n}$ are complex numbers and $a$ is the leading coefficient.
:::

```

Then the following css will added theorem name, number and title before the content of the theorem.

```css

body {
    counter-reset: thmnumber;
}
.thm {
    counter-increment: thmnumber;
}
.thm::before {
    content: "Theorem " counter(thmnumber) " " attr(name);
}

```

To add the section number to the theorem number, we can define a section counter similarly and add to the content of `.thm::before`.

Because the `counter` value can only be used by the `content` property, using the counter to create the theorem number will not help cross-referencing. Instead, within a single html file, we can use [jQuery](https://jquery.com/) to create numbered theorems and make cross-reference available.

```js
$(document).ready(function () {
    $('.thm').each(function(index,value) {
        thmnumber=index+1;
        $(this).attr('number', thmnumber);
        thmid=(this).getAttribute('id');
        thmtitle=(this).getAttribute('title');
        if (thmtitle==null) {
            thmtitle='';
        };
        if (thmid==null) {
            $(this).prepend('<span><strong>'+
            'Theorem '+thmnumber+' '+ thmtitle +
            '</strong></span>');
        }
        else {
            $(this).prepend('<span id="'+thmid+'"><strong>'+
            'Theorem '+thmnumber+' '+ thmtitle +
            '</strong></span>');
        }
    });
})
```

The following are examples.

<div class="thm" title="(Fundamental Theorem of Algebra)" id="thm:FTA">
Let $p(x)$ be a polynomial of degree $n>0$ with complex coefficients. Then $p(x)$ has exactly $n$ linear factors over the complex number field.
$$p(x)=a\left(x-{c}_{1}\right)\left(x-{c}_{2}\right)…\left(x-{c}_{n}\right)$$
where ${c}_{1},{c}_{2},…,{c}_{n}$ are complex numbers and $a$ is the leading coefficient.
</div>

<div class="thm" title="(Pythagorean Theorem)" id="thm:pyThm">
In a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides.
</div>
