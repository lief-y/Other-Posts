---
title: "Make Links Open in New Windows/Tab for Markdown"
date: "2019-02-22"
# categories: Web
# tags: 
#     - js
#     - jQuery
---

## Using jQuery to Open External Links in New Windows[^1]

Creating (static) webpages using markdown is every convenient, for example

```html
[Queensborough Community College](http://www.qcc.cuny.edu).
```

However, left clicking a link by default opens it in the same window. If there are only a few links, one may use html codes to open a link in a new window, for example

```
<a href="http://www.qcc.cuny.edu" target="_blank">Queensborough Community College</a>.
```

When there are many links it will be a little bit painful to create such links using html in a markdown file. I expected a few lines of CSS code will do the job. Indee, CSS3 does have a `target-new` property, which is unfortunately not supported by any major browsers yet. Another solution I found is to use jQuery.

- We first need to [add jQuery](https://www.w3schools.com/jquery/jquery_get_started.asp) to the inside of the `<head>` section.

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

- To open links in new windows, we add an attribute `target="_blank"` (to all links ).

```js
<script>
  	$(document).ready(function() {
  		$( '.main-body a[href^="http"]' )
        .attr( 'target','_blank' )
  		;
  	});
</script>
```

- We may also add a message after the link to be open in a new window.

```
<script>
  	$(document).ready(function() {
  		$( '.main-body a[href^="http"]' )
        .attr( 'target','_blank' ).attr('title','This link will open in a new window.')
  		;
  	});
</script>
```

- We may let the function apply to specific link using keyword.

```
<script>
  	$(document).ready(function() {
  		$( '.main-body a[href^="http"]' ).not('a[href*=keywork]').add('a[href*=pdf]')
        .attr( 'target','_blank' ).attr('title','This link will open in a new window.')
  		;
  	});
</script>
```

## [Using `Kramdown`.](https://stackoverflow.com/questions/4425198/can-i-create-links-with-target-blank-in-markdown)

Kramdown supports it in the following way:

```
[link](url){:target="_blank"}
```

---
[^1]: The jQuery solution was inspired by the post [Make External Links Open In New Windows](http://www.stylinwithcss.com/blog/post.php?s=2013-02-11-make-external-links-open-in-new-windows) of Charles Wyke-Smith and the answer of gion_13 to this question [jQuery add target=“\_blank” for outgoing link](https://stackoverflow.com/questions/7901679/jquery-add-target-blank-for-outgoing-link?noredirect=1&lq=1) on stackoverflow.
