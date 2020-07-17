---
title: Annotatable Webpages and Annotate Webpages
date: 2019-04-12
en/categories: Web
en/tags: 
    - Hypothesis
    - Annotation
---

## Hypothesis, an online annotation tool

Recently, I learned a cool online annotation tool, [Hypothesis](https://web.hypothes.is/), which lets webpage readers add, share, explore and save annotations online for free.

## What can Hypothesis do

- Annotate and post publicly or save privately.
- Reply to or share any annotation publicly.
- Collaborate privately within a group.
- Explore public annotations and profiles.

## For webpage creator

Adding Hypothesis to a webpage is easy. You simply need to add the following codes in the head of you html file.

```html
<script async src="https://hypothes.is/embed.js"></script>
```

By default, the hypothesis client added an opened sidebar. You may change the default by adding the following codes.

```html
<script type="application/json" class="js-hypothesis-config">
  {
    "openSidebar": false
  }
</script>
```

More [configurations for the Hypothesis client](https://h.readthedocs.io/projects/client/en/latest/publishers/config/) are available.

## For readers

There are two things that have to be done before you make annotations on any webpage.

1. You need to [sign up a free account at Hypothesis](https://hypothes.is/signup) to annotate.

2. If the webpage is already Hypothesis enabled (a sidebar on the right is available.), then you are ready to annotate. Otherwise, you need to active Hypothesis. This can be done in a few ways.

   1. If you use Chrome or Brave, you may add the [Hypothesis extension](https://chrome.google.com/webstore/detail/hypothesis-web-pdf-annota/bjfhmglciegochdpefhhlphglcehbmek) to your browser. The benefit of this method is that you can even [annotate pdf files in Chrome](https://web.hypothes.is/help/annotating-locally-saved-pdfs/). (Note: [Brave need a patch](https://github.com/hypothesis/product-backlog/issues/899) to do so.)
   2. A browser independent way is to add the following link to bookmark.

      ```html
      <a class="fusion-button button-flat fusion-button-round button-medium button-default button-3 hyp-button-gray" href="javascript:(function(){window.hypothesisConfig=function(){return{showHighlights:true,appType:'bookmarklet'};};var d=document,s=d.createElement('script');s.setAttribute('src','https://hypothes.is/embed.js');d.body.appendChild(s)})();" target="_self">
         <span class="fusion-button-text"><hypothesis-highlight class="annotator-hl">Hypothesis Bookmarklet</hypothesis-highlight>
         </span>
      </a>
      ```

   3. Using the proxy of Hypothesis [via.hypothes.is](https://via.hypothes.is/).

For more information on how to use Hypothesis and how it can do, check the webpage [Hypothesis Tutorials and How-Tos](https://web.hypothes.is/help-categories/tutorials/).
