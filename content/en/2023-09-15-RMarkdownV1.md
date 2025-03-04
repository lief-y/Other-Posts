---
title: "Tips on Using Zotero"
date: "2022-09-23"
en/categories: Applications
en/tags:
    - Research
---

[Zotero](https://www.zotero.org/) is a free, easy-to-use tool to collect, organize, cite, and share research sources. It's the best of all tools that I have ever used to manage personal research library.

## Some Awesome Features

- Items in Zotero libraries can be organized with [collections and tags](https://www.zotero.org/support/collections_and_tags).
  
- [Zotero's sync functionality](https://www.zotero.org/support/sync) allows you to access your Zotero library on any computer with internet access. Zotero syncing has two parts: data syncing and file syncing. Zotero file sync works with WebDAV servers, for example, [Iianguyun](https://www.jianguoyun.com/s/pricing). If you read Chinese, a guide on setting up the WebDAV server with Jianguoyun can be found here <https://help.jianguoyun.com/?p=3168>.
  
- Zotero [detects duplicates](https://www.zotero.org/support/duplicate_detection) and allows merging duplicates.
  
- The [Zotero Connector browser extensions](https://www.zotero.org/download/connectors) allow you to add items to your Zotero library with the click of a button in a browser such as Firefox, Chrome, Edge, or Safari.

## Some Awesome Add-ons

- [Better BibTeX for Zotero](https://github.com/retorquere/zotero-better-bibtex)
  
  - Automatically generate citation keys.
  - Generate citation keys based on contents of your items using citekey formulas.
  - Set your own, stable citation keys, drag and drop LaTeX citations, add other custom BibLaTeX fields.

- [Zotero Scihub](https://github.com/ethanwillis/zotero-scihub)
  
  Automatically download PDFs for items with a DOI from SciHub.

- [ZotFile](https://github.com/jlegewie/zotfile)
  
  Automatically rename, move, and attach PDFs (or other files) to Zotero items, sync PDFs between Zotero library to a (mobile) PDF reader, and extract annotations from PDF files.

- [Zotero DOI Manager](https://github.com/bwiernik/zotero-shortdoi)
  
  Auto-fetch DOI names for journal articles using the CrossRef API, as well as look up shortDOI names using http://shortdoi.org.

- [Zotero PDF Preview](https://github.com/windingwind/zotero-pdf-preview)
  
  Preview items in either the top/bottom of the info pane or the preview pane.

- [Zotero Tag](https://github.com/windingwind/zotero-tag)
  
  Manage all your Tags in one Zotero add-on.

    - Automatically add /unread tag for new items and remove /unread after read
    - Support batch processing with tags
    - Manage tags with custom rules

- [Zutilo](https://github.com/wshanks/Zutilo)
  
  - Copy, paste, and remove sets of tags
  - Select and right-click to relate several items
  - Copy items to the clipboard in several formats

For example, with `number_sections: true`, the following slides that contains the unicode character 𝑦 (U+1D4A7) with cause the rendering fall

```markdown
## Slide Title

A unicode letter in the slide may fail the rendering to html file.
Try include for example 𝑦 in the slide.
```

