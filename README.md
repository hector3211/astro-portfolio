# Hector Oropesa Portfolio

Personal portfolio site built with Astro, React, and Tailwind CSS.

It includes:

- a landing page for projects and contact info
- a blog powered by Astro Content Collections
- a Vercel-ready Astro server build

## Stack

- Astro
- React
- Tailwind CSS
- TypeScript
- Vercel adapter

## Project Structure

```text
.
├── public/
├── scripts/
├── src/
│   ├── components/
│   ├── content/
│   │   └── blog/
│   ├── layouts/
│   ├── pages/
│   │   ├── blog/
│   │   └── index.astro
│   └── styles/
├── astro.config.mjs
├── package.json
└── tailwind.config.cjs
```

## Commands

Run commands from the project root.

| Command                   | Action                                        |
| ------------------------- | --------------------------------------------- |
| `npm install`             | Install dependencies                          |
| `npm run dev`             | Start the local dev server                    |
| `npm run build`           | Build the site for production                 |
| `npm run preview`         | Preview the production build locally          |
| `npm run new-post <slug>` | Create a new blog post folder with `index.md` |

## Blog Posts

Blog content lives in `src/content/blog/`.

Each post should use its own folder so the markdown and images stay together:

```text
src/content/blog/my-post/
├── index.md
└── image.png
```
