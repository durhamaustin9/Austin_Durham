# Austin Durham — Portfolio

A responsive résumé and professional portfolio site for Austin Durham, a
full-stack software engineer focused on cloud, platform, and business systems.

## Stack

- Next.js 16 App Router
- Turbopack for development and production builds
- React 19
- Mantine UI
- Tailwind CSS
- Cloudflare Workers-compatible deployment through OpenNext and Sites

The site is intentionally static. It does not use a database because all
content is curated résumé and portfolio information.

## Local development

```bash
npm install
npm run dev
```

Both local development and production application builds run through the
standard Next.js CLI with Turbopack. Vite is not part of the project.

OpenNext runs only after the Next.js build to package its completed output for
the Cloudflare Workers runtime used by Sites.

## Validation

```bash
npm test
```

The test command creates a production build and verifies the rendered portfolio
content, metadata, résumé download, and removal of the temporary starter UI.

Use `npm run build:cloudflare` when preparing the standard Next.js output for
Cloudflare Workers deployment.
