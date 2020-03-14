---
title: How to install fonts in TeXLive
date: 2019-05-04
en/categories: TeX
en/tags: 
    - TeXLive
    - Fonts
---

After using LaTeX for a long time, you might be bored for default fonts and would like to install some new good looking fonts. If you will use XeTeX engine to compile your tex file, you don't have to worry about the installation. However, for pdfTeX engine, we do need a proper installation. If you use TeXLive like I do, you will complete the installation easily in three steps.

## Where to install

To make the fonts installation independent to distribution of TeXLive from different years, fonts should go into the local TEXMF-tree.  If your TeXLive installation is not heavily customized, you will find a folder named `texmf-local ` under the `texlive` folder.  Otherwise, you can find its location with the command 

```tex
kpsewhich -expand-var='$TEXMFLOCAL'
```

In the following, `texmf-local` will be used for this location.  To install the font, you may copy these subdirectories in your font folder to TEXMFLOCAL. 

## Registering the font map file

The map file `fontname.map` must be registered for use with dvips, pdftex, xdvi. To register a map, you may use the command

```tex
updmap-sys --enable Map=fontname.map
```

If your system is Linux or MacOX, use the following command

```tex
sudo updmap-sys --enable Map=fontname.map
```

**Remark:** 👍 👍 👍 Another way to register a font map is to modify the `undmap.cfg` file in the `web2c` folder (create the folder and/or file under `texmf-local` if they do not exist) by adding a line `Map fontname.map`. The benefit of this method is that the font will be ready to use if you install a new version of TeXLive.

After creating the `updmap.cfg` file, you may need to run `updmap-sys`.

## Refresh the file-name database

Once you have done with the first two steps, in the command line, run the following command to refresh the file-name database so that the TeX engines will find your fonts.

```tex
mktexlsr
```

## Final remark

For more information on how to install fonts manually or how to create TeX compatible fonts,  you may check the following two webpages [Manual font installation](https://tex.stackexchange.com/questions/88423/manual-font-installation) and [FontPro](https://github.com/sebschub/FontPro).

Enjoy TeXing!
