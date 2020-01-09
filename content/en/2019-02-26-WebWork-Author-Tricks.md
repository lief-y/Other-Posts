---
title: "WebWork Authoring Tips"
date: "2019-02-26"
en/categories: WebWork
en/tags: 
    - WebWork
    - Hyperlink
---

## WebWork Text Display Languages

- Original way using `TEXT(EV3())`
  
  Example:

  ```perl  
    TEXT(EV3(<<'END_TEXT'));
      The material in this section is collected into a string which is then passed to the EV3 (evaluation 3 ) routine which handles      processing of the sections in curly braces, then does interpolation, and finally processes the LaTeX commands.
    END_TEXT
  ```

    **Remark:**

  1. In the example two `pg` macros were used `TEXT()` and `EV3()`. Both macros are defined in `PGbasicmacros.pl `. (See the document on [text macros](http://webwork.maa.org/pod/pg_TRUNK/macros/PGbasicmacros.pl.html#text_macros)) for more information)

  2. The expression `<<'END_TEXT'` is a string holder which holds strings end up to the indicator `END_TEXT`. The ending indicator has to be adjusted to the left.

  3. The single quotes about a `END_TEXT` indicates that no interpolation takes place. Using double quotes or no quotes allows interpolation. (See [Basic Perl syntax](http://webwork.maa.org/wiki/Basic_Perl_syntax) for more information.)

- A more commonly seen method uses `BEGIN_TEXT/END_TEXT` which will be translated into the construction in the above example by `PGtranslator.pm`.

  Example:

  ```perl 
    BEGIN_TEXT
      Find a the sum of 1+1:
      \{ans_rule(20)\}
    END_TEXT
  ```

- Supported by `PGML.pl`, the usage `BEGIN\_PGML/END\_PGML` provides a markdown alike formats for text. (For more information see [Introduction to PGML](http://webwork.maa.org/wiki/Introduction_to_PGML).)
  
  Example:

  ```perl 
    BEGIN_TEXT
      If [: x = [$a] :], then the value of [: x^2 :] is [___________]
    END_TEXT
  ```

## Hyperlinks

It should be helpful to insert video link or example to WebWork Questions. There are several [formating macros](http://webwork.maa.org/pod/pg_TRUNK/macros/PGbasicmacros.pl.html#formatting_macros) in `PGbasicmacros.pl` that can do the job

One basic macro is

```perl
htmlLink("link", "display name", "option")
```

Examples:

- Link to a local file example.pdf. Upload the local file example.pdf
  to the same folder as where the question pg file is. The option
  `TARGET=’\_blank’` tells the function to open the file in a new
  windows.

  ```perl
    htmlLink(alias("example.pdf"), "Click the link to see an example.", "TARGET='_blank'")
  ```

- Link to a webpage address which contains no special characters.

  ```perl
    htmlLink( "http://webwork.maa.org/", "QCC-CUNY", "TARGET='_blank'")
  ```

- Link to a webpage using javascript.

  First include the following customized function in the header (before BEGIN_TEXT after `loadMacros()`).

  ```perl
    HEADER_TEXT(<<EOF);
    <script type="text/javascript" language="javascript">
    function windowpopup() {
      var url = 'http://webwork.maa.org/';
      var opt = "height=625,width=600,location=no,menubar=no," +
                "status=no,resizable=yes,scrollbars=yes," +
                "toolbar=no,";
      window.open(url,'newwindow',opt).focus();
    }
    </script>
    EOF
  ```

  Then we call the function by

  ```perl
    htmlLink( "javascript:windowpopup();", "QCC-CUNY", "TARGET='_blank'")
  ```

  An alternative solution is to move `var url = "http://webwork.maa.org/";` from the definition of `windowpopup()` to `htmlLink()`

  ```perl
    htmlLink( "javascript:var url = 'http://webwork.maa.org/';windowpopup();", "QCC-CUNY", "TARGET='_blank'")
  ```

  For more details, please check the [MAA webpage on htmlLink](http://webwork.maa.org/wiki/HtmlLinks#.WrF5GGaZPuQ).

**Remark**:

- It depends on which language you use to display text, the function should be placed in different environment.

  - In BEGIN\_TEXT … END\_TEXT, the function should be placed as

          \{ htmlLink("link", "display name", "option") \}
  There must be a blank space after `\{` or `\}`.

  - In BEGIN\_PGML … END\_PGML, the function should be placed as

          [@ htmlLink("link", "display name", "option") @]*

  Here `[@ command @]*` tells the system to not escape HTML special
  characters.

- Use `[| protect_underbar() |]` whenever underscore appears in a
  string outside of math mode. (See )

  Example:

  ```perl
    htmlLink( protect_underbar("http://webwork.maa.org/pod/pg_TRUNK/macros/PGbasicmacros.pl.html"), display name"))
  ```