# Markdown Quick Start and Basic Syntax

`Lightweight markup language, easy-to-read and easy-to-write plain text format`

Markdown format can use multiple symbols to represent the same tag.
This guide doesn't introduce all uses of each tag symbol.

It only compiles the formats commonly used when writing documentation, notes, and tutorials, and provides syntax examples.

## Table of Contents

- Prepare Software
- Common Syntax
- Document Format

## Prepare Software

- Text Editor
- Markdown Viewer

### Text Editor

`Notepad, Notepad++, Sublime Text, VSCode, Typora, Vim, etc.`

![text-editor](assets/002/text-editor.png)

Any plain text editor that can edit text works. Common Markdown editors will be introduced later.

**Create files with `.md` or `.markdown` extension to start writing documents using Markdown syntax**

### Markdown Viewer

`Chrome Extension: Markdown Viewer`

**Search for markdown viewer in Chrome Store**

![chrome-store](assets/002/chrome-store.png)

**Install Markdown Viewer plugin**

![markdown-viewer](assets/002/markdown-viewer.png)

**Extension Settings**

![extension-setting](assets/002/extension-setting.png)

**Allow access to local files**

![allow-permission](assets/002/allow-permission.png)

**Drag and drop `.md` or `.markdown` files into Chrome browser**

![markdown-preview](assets/002/markdown-preview.png)

## Common Syntax

`Format examples commonly used when writing documentation, notes, and tutorials`

Below is a simplified content of [Markdown Syntax Examples](001.markdown-template.md)

- Headings
- Body Text
- Lists
- Highlights
- Blocks
- Code
- Horizontal Rules
- Hyperlinks
- Images
- Tables

### Headings

`H1 ~ H3`

**H1 - Main Heading**

Use `=` symbol, typically with `6` occurrences. Usually a document will have only one H1 main heading.

It should be the same as the filename or use the full filename.

```markdown
# H1 Main Heading
```

**H2 - Heading**

Use `-` symbol, typically with `6` occurrences.
Usually documents will have two permanent H2 headings at the beginning for "Table of Contents" and at the end for "References".

Other H2 headings are determined by the table of contents list.

```markdown
## H2 Heading
```

**H3 - Subheading**

Use three `#` symbols. Usually used in the level below H2 headings,
and won't exist alone in other levels, such as: won't exist alone under H1 main heading.

```markdown
### H3 Subheading
```

**H4 - Small Heading**

`H4 and smaller headings are not used`

In addition to the text size being similar to body text,
frequent use of `#` symbols makes it hard to identify in plain text.

### Body Text

`Only use plain text, bold, italic, strikethrough`

**Plain Text**

Usually pay attention to whether paragraph breaks are appropriate. If there's too much text,
blocks or code symbols will be used for marking.

```markdown
### H3 Subheading

Body text
```

**Bold**

It was mentioned earlier that H4 and below are not used, but if there's still a need for next-level segmentation,
bold text is usually used instead.

Therefore, a document usually has only three levels besides the H1 main heading:

- H2 Heading
- H3 Subheading
- Bold (Small Heading)

`If content exceeds these levels, the document format will be rearranged to not exceed three levels.`

```markdown
### H3 Subheading

**01**

Body text
```

**Bold, Italic, Strikethrough in Body Text**

When writing document body text, use bold, italic, and strikethrough as appropriate. In principle, try not to use HTML syntax.

For example: underline `<u>` or `<font>` to change text style.

This avoids difficulties when reading plain text format.

```markdown
Body text, **bold**, _italic_, ~~strikethrough~~
```

### Lists

`All three types are used, but bullet points only use + symbol`

**Bullet Points**

Only use `+` symbol for bullets, indentation levels **maximum three levels**.

The most basic application is the table of contents in each document.

```markdown
- Item1
  - Item1.1
  - Item1.2
    - Item 1.2.1
    - Item 1.2.2
- Item2
- Item3
```

**Task Lists**

Only use `+` symbol for bullets, indentation levels **maximum two levels**.

Used for to-do lists in notes or documents.

```markdown
- [x] To-Do1
  - [x] Detail 1-1
  - [x] Detail 1-2
  - [ ] Detail 1-3
- [ ] To-Do2
- [ ] To-Do3
```

**Numbered Lists**

Low usage probability. List items usually prioritize `+` as bullets.
Only used when there's a special need to indicate sequence, indentation **maximum one level**.

Although text numbers don't affect rendering results, in plain text,
sequence is still maintained to avoid gaps when reading plain text.

Sometimes mixed with bullet point `+`.

```markdown
1. Item1
2. Item2
3. Item3

- Item1
  1. Item1.1
  2. Item1.2
- Item2
  1. Item2.1
  2. Item2.2
- Item3
```

### Highlights

`Supplementary explanations and highlighting key points`

**Heading Supplement**

Usually used below H1 main heading, H2 heading, H3 subheading for supplementary explanations.

Can be introduction, outline, subtitle, used to help readers understand chapter content faster.

```markdown
# H1 Main Heading

`H1 Heading - Subtitle`

## H2 Heading

`H2 Heading - Outline`

### H3 Subheading

`H3 Subheading - Workflow`
```

**List Supplement**

Used after list items to supplement other information for that item.

```markdown
- item `2020-10`
  - item `10/20 done`
  - item `10/25 done`
```

**Body Text Highlight**

Highlight text within body text that needs special attention.

```markdown
Only use `+` symbol for bullets, indentation levels maximum three levels
```

### Blocks

`Highlighting important text`

Block text is similar to code blocks, usually used to mark shorter text descriptions.
Since it displays as four spaces in plain text, it's not easy to identify.

If text content is longer, code block symbols are still used.

```markdown
    Text Block
```

### Code

`Code syntax highlighting`

Code syntax highlighting is heavily used in technical tutorials, development documentation, programming notes, etc.

In addition to common programming languages, `diff` for version comparison is also used.

If there's too much explanatory text, code blocks are also used without programming language name,
used as plain text, which can avoid line break issues with plain text.

<pre>
<code>
```
Text - Text Description
```

```java
// Java Code
System.out.println("Hello Word");
```

```diff
+ System.out.println("Hello Word");
- System.out.println("Hello Word");
```
</code>
</pre>

### Horizontal Rules

`Section separation`

Horizontal rules only use `-` symbol, with a quantity of three, meeting only the minimum trigger condition.

This avoids using extra text symbols that take up computer space.

```markdown
---
```

### Hyperlinks

`References and document indexing`

There are three ways to write hyperlinks. Usually only `<url>` and `[title](url)` are used.

**References**

Documents usually have permanent "Table of Contents" and "References".

"Table of Contents" content is presented using **lists**,
"References" uses `H3 Subheading` + `<url>` to present data sources.

```markdown
## References

### Gitlab

<https://gitlab.com/GammaRayStudio>

### Blogger

<https://gamma-ray-studio.blogspot.com/>

### Youtube

<https://www.youtube.com/user/rhxs020>
```

**Document Indexing**

In code projects, an index directory linking all documents is usually established.

Use `[title](url)` to link all development documents,
for quick access to specific development files.

```markdown
# Account Book, Index

`Account Book`

## Project

- [000-0.account-book-index](000-0.account-book-index.md)
- [000-1.account-book-list](000-1.account-book-list.md)
- [000-2.account-book-ref](000-2.account-book-ref.md)
- [000-3.account-book-data](000-3.account-book-data.md)
- [000-4.account-book-issue](000-4.account-book-issue.md)
- [000-5.account-book-task](000-5.account-book-task.md)
- [000-6.account-book-flow](000-6.account-book-flow.md)
- [000-7.account-book-style](000-7.account-book-style.md)
- [000-8.account-book-guide](000-8.account-book-guide.md)

## App

### Feature Requirements

[001-1.account-book-feat](001-1.account-book-feat.md)

### Infrastructure Layer

- [002-1.infra-sa](002-1.infra-sa.md)
- [002-2.infra-spec](002-2.infra-spec.md)

### Domain Layer

- [003-1.domain-sa](003-1.domain-sa.md)
- [003-2.domain-spec](003-2.domain-spec.md)

### Application Layer

- [004-1.application-sa-ux](004-1.application-sa-ux.md)
- [004-2.application-spec](004-2.application-spec.md)

### Presentation Layer

- [005-1.view-sa-ui](005-1.view-sa-ui.md)
- [005-2.view-spec](005-2.view-spec.md)

### About Project

[README](README.md)
```

**The above is an iOS App development project document index.
Each document is prefixed with a three-digit number,
which will be explained in detail in subsequent document tutorials.**

### Images

Markdown images use `![title](url)` format,
where the url hyperlink path is the image to be displayed.

Relative paths are usually used, creating an `assets/` folder with **numbering** in the same directory as the document,
as the image source folder location.

```markdown
![markdown-viewer](assets/002/markdown-viewer.png)
```

![image-position](assets/002/image-position.png)

**For images, besides common png and jpg, svg format is usually recommended**

**When adding to version control, files will be smaller and easier for version control comparison.
This will be covered in detail in subsequent tutorials.**

### Tables

Only use the **simplest** Markdown tables, **left-aligned**

```markdown
| Markdown            | Simple | Table  |
| :------------------ | :----- | :----- |
| left-aligned column | column | column |
| $100                | $100   | $100   |
| $10                 | $10    | $10    |
| $1                  | $1     | $1     |
```

Since tables need to present more complex formats, such as merged cells, etc.,
HTML tag formats must be used.

To present effects at the cost of making the original document hard to read,
which violates the original Markdown principle of being easy to read and write.

```markdown
[Table](assets/002/table.csv)
```

**If complex table formats are still needed, it's recommended to use hyperlinks to connect to other format files,
covering table functions through external expansion.**

## References
