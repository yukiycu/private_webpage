# Portfolio Site

Personal researcher website built with Next.js, React, TypeScript, and Tailwind CSS.

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

## Profile

Edit profile content in `data/profile.ts`.

Presentation formats use `口頭発表` or `ポスター発表`. Set `format` to `null`
until the format is verified; the badge is then omitted. Verification sources and
pending entries are recorded in `STATUS.md`.

Place the profile photo at:

```text
public/images/profile.jpg
```

The profile image is served in responsive sizes through Next.js Image Optimization.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository from Vercel.
3. Use the default Next.js settings.
4. Deploy on the free Hobby plan.
