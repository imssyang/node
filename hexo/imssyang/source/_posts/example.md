---
title: example
tags:
  - program
  - diary
  - web
sitemap: false
---

Welcome to [Just Do It](https://imssyang.com)! This is a sample article. Let's add some tags as above.
<!-- more -->

## Tag Plugins

### Button

{% button #, Text %}
{% btn #, Text %}{% btn #, Text & Title,, Title %}


### pdf

{% pdf /docs/rfc5389.pdf %}

### mermaid

```
{% mermaid graph TD %}
A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
{% endmermaid %}
```
this is test.

{% mermaid graph TD %}
    A[Hard] -->|Text| B(Round)
    B --> C{Decision}
    C -->|One| D[Result 1]
    C -->|Two| E[Result 2]
{% endmermaid %}

this is test.

### tags

{% tabs First unique name %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

### note

{% note default %}
#### Default Header
Welcome to [Hexo!](https://hexo.io)
{% endnote %}

{% note info %}
#### Info Header
**Welcome** to [Hexo!](https://hexo.io)
{% endnote %}


