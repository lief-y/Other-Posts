---
title: "Some VBA Codes for Formating Tables"
date: "2019-02-28"
categories: "Visual Basic"
tags: [VBA, Word]
---

# Some VBA Codes for Formating Tables

- Step 1: In `Word` -> `File` -> `Options` -> `Customize Ribbon`, check `Developer` in 'Customize the ribbon' and click ok.
- Step 2: In Ribbons, find and click `Developer` -> `Visual Basic` (`Alt`+`F11`).
- Step 3: In the pop out windows, click `Module` on the `Insert tab`, copy and paste the following VBA code into the Module window and click the `Run` tab (`F5`) to run the macro.
  
## Set table column width

```vb
Sub resizeTables()
For Each Table In ActiveDocument.Tables                     'Loop all tables in the active document
    Table.PreferredWidthType = wdPreferredWidthPercent      'Accept preferred widths as a percentage of window width,
    Table.PreferredWidth = 100                              'Set table width=100%
    On Error Resume Next
    Table.Columns(1).PreferredWidth = 50                    'Set Column 1 width to 45%.
    Table.Columns(2).PreferredWidth = 10                    'Set Column 2 width to 10%
    Table.Columns(3).PreferredWidth = 40                    'Set Column 3 width to 45%
    On Error GoTo 0                                         'Apply to table with less columns
Next
End Sub
```

## Add Border Lines

```vb
Sub addborderTables()
    For Each Table In ActiveDocument.Tables                 'Loop all tables in the active document
        With Table.Borders                                  'Choose table border for action
            .InsideLineStyle = wdLineStyleSingle            'Inside line style
            .OutsideLineStyle = wdLineStyleSingle           'Outside line style
        End With
        With Table.Rows(1).Borders(wdBorderBottom)          'Choose row(1) bottom line for action
            .LineStyle = wdLineStyleDouble                  'Set line style to double line
        End With
        Table.Rows(1).Range.Font.Bold = True                'Set fonts in row(1) to bold
    Next
End Sub
```

## Useful Websites

- [Office VBA Reference](https://docs.microsoft.com/en-us/office/vba/api/overview/)

- The accepted answer in [How to Change Column Width for All Word Tables at Once](https://superuser.com/questions/838568/how-to-change-column-width-for-all-word-tables-at-once).