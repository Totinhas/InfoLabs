---
level: Foundational
tags: tech, coding, GitHub
status: Published
---

# How to setup a labs repo

## Overview

Step by step instructions of how to set up the repo to be able to create labs (one repo let's you create as many labs as you want).

### Context

Developers always shared information between them, not only ideas but also code and solutions.

### Problem

We need a platform to publish labs to be easily consumed by users.

### Solution

Create a website that transforms markdown into HTML and uses the different weight headers to create a hyperlinked index with anchor links, making it easily searchable and sharable.

### Prerequisites

- GitHub account
- Access to a code/text editor
- Access to a Browser
- Prior knowledge of markdown
- Hosting (AWS)

## 1. Create a repo

Log in into GitHub.

Access the InfoLabs GitHub.

Select `Use this template` - This will create a new repository with all the contents of the InfoLabs one.

Choose a name for your new repository.
(Optional) Include all branches

## 2. Configure hosting access

When you first set up the repo, the first time the actions run and fail.

Go to the settings of your new repo and select `Secrets`
Select `New repository secret`
You will need to create 5 secrets:

- AWS_ACCESS_KEY_ID
- AWS_DEFAULT_REGION
- AWS_SECRET_ACCESS_KEY
- AWS_S3_BUCKET_NAME
- AWS_CLOUDFRONT_DISTRIBUTION_ID

## 3. Make your first commit

Once you do your first commit to the main branch, the actions will run again and publish to the website.

## Verify

Visit the website, you should be able to see a list of all the labs.

## Summary

You can now use your new repo to publish as many labs as you want.

### Next Steps

- [How to create a lab](how-to-create-a-lab)
