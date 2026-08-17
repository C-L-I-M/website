---
publishDate: 2026-08-17T00:00:00Z
title: Welcome to the CLIM blog
excerpt: Why we are starting a blog, what you will find here, and how you can write the next post.
# image: link to image
category: Announcements
tags:
  - clim
  - community
author: CLIM
metadata:
  canonical: https://www.clim.dev/welcome-to-the-clim-blog
---

We created the CLIM so people can learn infrastrucutre by actually doing it:
running services, automating the boring parts, and dealing with the
consequences when something breaks at 2am. That is usually only learned while
at work, where it's not easy to break things for fun.

A lot of that knowledge currently lives in chat threads and in people's heads.
This blog is where we write it down.

## What you will find here

- **Post-mortems.** What broke, why it broke, and the change that keeps it from
  happening again.
- **Walkthroughs.** Concrete setups, CI pipelines, container builds,
  monitoring, infrastructure-as-code, with the configuration we actually run.
- **Notes from the trenches.** Short pieces about a tool we tried, a migration
  we survived, or a decision we later regretted.

No listicles, no "10 devops tools you must know in 2026". If we did not run it
ourselves, we will not write about it. No AI slop, AI is great to write boring
code and config, but we'll write the blogs.

## To not make this post empty: How to write the next one

Posts live in `src/content/post/` as Markdown files. Copy this file, change the
frontmatter, write your piece, and open a pull request:

```bash
git switch -c blog/my-post
cp src/content/post/welcome-to-the-clim-blog.md src/content/post/my-post.md
npm run dev   # http://localhost:4321/blog
```

The file name becomes the URL. Open the PR and get it merged.

See you in the next post.
