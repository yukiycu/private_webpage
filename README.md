# Portfolio Site

Personal researcher website built with Next.js, React, TypeScript, Tailwind CSS, and Markdown blog files.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

## Blog

Add Markdown or MDX files to `content/blog`.

Each post uses frontmatter:

```md
---
title: "Post title"
date: "2026-05-17"
excerpt: "Short summary."
---
```

The blog list is shown on the home page, and each post is available at `/blog/[slug]`.

## Profile

Edit profile content in `data/profile.ts`.

Place the profile photo at:

```text
public/images/profile.jpg
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository from Vercel.
3. Use the default Next.js settings.
4. Deploy on the free Hobby plan.
