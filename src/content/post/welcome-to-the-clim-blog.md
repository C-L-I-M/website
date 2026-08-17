---
publishDate: 2026-08-17T00:00:00Z
title: Welcome to the CLIM blog
excerpt: Why we are starting a blog, what you will find here, and how you can write the next post.
image: ~/assets/images/default.png
category: Announcements
tags:
  - clim
  - devops
  - community
author: CLIM
metadata:
  canonical: https://www.clim.dev/welcome-to-the-clim-blog
---

CLIM exists so people can learn devops by actually doing it: running services,
automating the boring parts, and dealing with the consequences when something
breaks at 2am. A lot of that knowledge currently lives in chat threads and in
people's heads. This blog is where we write it down.

## What you will find here

- **Post-mortems.** What broke, why it broke, and the change that keeps it from
  happening again.
- **Walkthroughs.** Concrete setups — CI pipelines, container builds,
  monitoring, infrastructure-as-code — with the configuration we actually run.
- **Notes from the trenches.** Short pieces about a tool we tried, a migration
  we survived, or a decision we later regretted.

No listicles, no "10 devops tools you must know in 2026". If we did not run it
ourselves, we will not write about it.

## An example, so this page is not empty

Here is the smallest useful thing in a devops toolbox: a health check that
fails loudly instead of silently.

```bash
#!/usr/bin/env bash
set -euo pipefail

URL="${1:?usage: healthcheck.sh <url>}"

status=$(curl -sS -o /dev/null -w '%{http_code}' --max-time 5 "$URL")

if [[ "$status" != "200" ]]; then
  echo "unhealthy: $URL returned $status" >&2
  exit 1
fi

echo "healthy: $URL"
```

Three details matter more than the script itself:

1. `set -euo pipefail` — the script stops at the first failure instead of
   marching on with an empty variable.
2. `--max-time 5` — a hanging request is a failure too, and without a timeout
   your monitoring hangs with it.
3. Errors go to `stderr` and the exit code is non-zero, so whatever runs this
   (cron, systemd, a CI job, Kubernetes) can actually notice.

> Anything that can fail silently eventually will, and you will find out from a
> user rather than from a dashboard.

### Formatting reference

Because this is also the reference post for authors, here is what renders
nicely out of the box:

| Element      | Syntax                     |
| ------------ | -------------------------- |
| Inline code  | `` `docker compose up` ``  |
| Bold         | `**important**`            |
| Link         | `[text](https://clim.dev)` |
| Task list    | `- [ ] not done yet`       |

Inline code such as `kubectl get pods -A`, [links](https://github.com/C-L-I-M),
and **emphasis** all work as expected.

## Write the next one

Posts live in `src/content/post/` as Markdown files. Copy this file, change the
frontmatter, write your piece, and open a pull request:

```bash
git switch -c blog/my-post
cp src/content/post/welcome-to-the-clim-blog.md src/content/post/my-post.md
npm run dev   # http://localhost:3000/blog
```

The file name becomes the URL. Set `draft: true` in the frontmatter while you
are still working on it, and the post stays out of the build until you remove
it.

See you in the next post.
