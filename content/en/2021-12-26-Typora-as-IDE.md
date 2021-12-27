---
title: "Turning Typora into an IDE"
author: Fei Ye
date: "2021-12-26"
en/categories: 
  - Applications
en/tags: 
  - Typora
  - Pandoc
---

One feature of Typora that I don't find from other markdown editor is that it allows users to create customized export functions. With this feature, one can turn Typora into a simple IDE for creating documents using the full power of Pandoc or websites using Hugo.

## Creating documents using Pandoc with `--defaults=FILE.yaml`

Starting from version 2.8, Pandoc can read options that stored in a yaml file. To do so, add the option `-d FILE` or `--defaults=FILE` in a Pandoc calling sequence. See the pandoc manual [Default Files](https://pandoc.org/MANUAL.html#default-files) for more information.

Using the defaults option, one convert a markdown file to many types of output files by the same command `pandoc -d FILE input.md -o output.*`.

In Typora, the user can create a customized exporting function as follows.

1. Find and open the export setting dialog.
2. Click the “add (+)” button in the list panel.
3. Select **Custom** from the dialog.
4. Fill in the Command box with a command

   ```powershell
    pandoc -d defaults ${currentPath}
   ```

## Building Website in Typora with Hugo

Typora allows the user to open a folder and register the folder path. If the folder of a Hugo website is opened in Typora, the user can create two customized export functions to preview and build the website.

### Export as Hugo preview

Similar to the Pandoc export function as above, the user can create a customized exporting function with the following command for Hugo preview.

```powershell
start http:\\localhost:1313\ | hugo server
```

### Export as Hugo build

For an export function of Hugo build, the command is simply.

```powershell
hugo
```

Note that the path of Hugo should be added to the system environment so that it can be called without specifying the path.

## Customized export functions for other commands

In similar ways, one can create other export functions for various purpose.
For example, to open the CMD in Windows, the command is `start cmd`. To open the terminal in MacOS, the command is `open terminal`.
