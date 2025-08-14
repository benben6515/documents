# Naming is hard

## **Mac File Naming Cheat Sheet**

(optimized for **Terminal searching**, **macOS Finder sorting**, and **cross-platform sanity**).

---

### **1. Core Rules**

✅ **No spaces** — use `-` or `_` instead.
✅ **Use zero-padding** for numbers (`001`, `002`, …) so sorting works naturally.
✅ **Stick to lowercase** for faster typing & consistency.
✅ **Avoid shell-special characters**:

```
&  *  ?  (  )  !  $  '  "  [  ]  {  }  <  >  ;  |  \  ~  `
```

✅ **Keep names short** but descriptive (20–40 chars is nice).

---

### **2. Recommended Format**

```
NNN-keywords-here.md
```

- **NNN** = zero-padded number for order
- **keywords-here** = lower-case words separated by hyphens
- Example:

```
001-markdown-template.md
002-css-style-guide.md
003-python-scripts.md
```

---

### **3. Why Hyphens Win**

- No escape characters needed in Terminal
- Works great in URLs
- Looks cleaner than `_underscore_style`
- Finder and `ls` sort exactly as expected

---

### **4. Useful Terminal Tricks**

| Action                    | Command               | Example                              |
| ------------------------- | --------------------- | ------------------------------------ |
| List all files            | `ls`                  | `ls`                                 |
| List only certain numbers | `ls 00[1-3]*`         | lists `001` to `003`                 |
| Search by keyword         | `ls *markdown*`       | finds all files with “markdown”      |
| Fuzzy search              | `fzf`                 | search interactively (needs install) |
| Open in default app       | `open file.md`        | opens in default editor              |
| Batch rename              | `rename` or `mv` loop | rename all with a pattern            |

---

### **5. Optional Category Prefix**

For super-fast filtering:

```
M01-markdown-template.md   # markdown
C01-css-style-guide.md     # css
P01-python-scripts.md      # python
```

Then you can:

```
ls M*
```

to list only Markdown docs.

---

### **6. Example Workflow**

```bash
touch 001-markdown-template.md
touch 002-css-style-guide.md
touch 003-python-scripts.md

ls 00[1-2]*     # only files 001–002
ls *template*   # any file with 'template'
```

## **Mac Folder Naming Cheat Sheet**

For **folder naming**, the principles are almost the same as files, but with a few extra considerations since folders are often used for grouping and long-term organization.

Here's your **Mac Folder Naming Cheat Sheet** (Terminal-friendly).

---

### **1. Core Rules for Folders**

✅ **No spaces** — same as files, stick to `-` or `_`.
✅ **Zero-padding** for ordered sequences: `001-project-a`, `002-project-b`.
✅ **Lowercase** for consistency and easy typing.
✅ **Avoid shell-special characters** (same forbidden list as files).
✅ **Be descriptive** — folders are often searched months later, so avoid vague names like `misc` or `test`.

---

### **2. Recommended Formats**

#### **A. Simple Numbered + Keywords**

```
001-photos-2025
002-client-reports
003-marketing-assets
```

#### **B. Category Prefix + Number + Keywords**

Useful when you have mixed types of folders:

```
DOC-001-annual-reports
IMG-002-event-photos
DEV-003-javascript-scripts
```

- You can `ls DOC*` to see only documents.

#### **C. Date Prefix (YYYY-MM-DD or YYYY-MM)**

Great for chronological projects:

```
2025-08-13-meeting-notes
2025-08-client-onboarding
```

- Sorts perfectly in Finder & Terminal.
- `ls 2025-08*` shows all August 2025 folders.

---

### **3. Terminal Search Tips**

| Action            | Command                            | Example                     |
| ----------------- | ---------------------------------- | --------------------------- |
| List only folders | `ls -d */`                         | shows only folder names     |
| Search by keyword | `ls -d *report*/`                  | folders containing "report" |
| Search by range   | `ls -d 00[1-5]*/`                  | folders 001–005             |
| Navigate quickly  | `cd 002-client-reports`            | jump into folder            |
| Fuzzy find folder | `fd . -t d` (needs `fd` installed) | interactive search          |

---

### **4. Special macOS Tip**

- In Finder, you can **color-tag** folders (e.g., red for urgent, blue for archive) without changing the name — works well alongside a naming convention.
- If you use **Spotlight** (`cmd + space`), your consistent folder names become instantly searchable.

---

### **5. Good vs. Bad Examples**

**Good**

```
001-project-alpha
002-project-beta
2025-01-tax-documents
IMG-005-family-photos
```

**Bad**

```
project 1     # spaces cause quoting hassles
final!!!      # special chars make terminal messy
backup-old    # unclear date or version
```
