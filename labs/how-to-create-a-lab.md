---
level: Foundational
tags: tech, markdown, GitHub
status: Published
---

# How to create a lab

## Overview

this is a lab on how to create a lab

### Context

Developers always shared information between them, not only ideas but also code and solutions.

### Problem

We need to guide users on how to create a lab.

### Solution

Create a lab on how to create a lab!

### Prerequisites

- Labs platform
- [GitHub repo](how-to-setup-labs-repo)
- Labs template
- Prior knowledge of markdown
- Code/text editor

## Create a new file with the template

There are two templates available to create a lab:

- [Minimum necessary structure to create a lab](template-minimal)
- [Recommended structure to create a lab](template-recommended)

### Save the file and give it a name

The name of this file will be used as a URL.

Best practice is keep words lower case separated by dashes. Do not use any special characters.

Example:

```text
how-to-create-a-lab.md
```

## Edit the tags

For this, use a code editor.

There are different tags available:

```md
---
level: [Foundational | Intermediate | Advanced]
tags: [comma separated words]
status: [Published | Draft]
---
```

## Choose a title

Give a title to your lab.

```md
# Example
```

## Add one or more steps

You can also add substeps for each step.

```md
## Step 1 [0 to N Steps]

The actual steps to achieve the goal of the lab. Feel free to use the full potential of markdown.

### Step 1.1 [0 to N Sub Steps]

A sub step, the index will show up to this level only
```

## Use markdown

You can use markdown freely, to add images, links, lists, code, etc.

```js
const crypto = require("crypto");

function hash7(string) {
  const hash = crypto.createHash("sha256");
  hash.update(string);
  return hash.digest("hex").substring(0, 7);
}
```

## Commit and publish

Commit your code, once commited the automation will pusblish your code to the website.

### Resources

links to external resources

- [GitHub repo](how-to-setup-labs-repo)
- [Minimum necessary structure to create a lab](template-minimal)
- [Recommended structure to create a lab](template-recommended)
