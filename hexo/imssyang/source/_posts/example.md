---
title: example
tags: [test, example]
---

### pdf

{% pdf http://192.168.5.220/rfc5389.pdf %}

### mermaid

{% mermaid graph TD %}
A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
{% endmermaid %}

{% mermaid gantt %}
section Section
Completed :done,    des1, 2014-01-06,2014-01-08
Active        :active,  des2, 2014-01-07, 3d
Parallel 1   :         des3, after des1, 1d
Parallel 2   :         des4, after des1, 1d
Parallel 3   :         des5, after des3, 1d
Parallel 4   :         des6, after des4, 1d
{% endmermaid %}

