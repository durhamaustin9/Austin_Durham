# Austin Durham — Portfolio

A responsive résumé and professional portfolio site for Austin Durham, a
full-stack software engineer focused on cloud, platform, and business systems.

## Stack

- Next.js 16 App Router
- Turbopack for development and production builds
- React 19
- Mantine UI
- Tailwind CSS
- Standalone Node.js deployment on the Atlas VPS

The site is intentionally static. It does not use a database because all
content is curated résumé and portfolio information.

## Local development

```bash
npm install
npm run dev
```

Both local development and production application builds run through the
standard Next.js CLI with Turbopack. Vite is not part of the project.

Production builds emit Next.js standalone output for deployment behind Nginx
on the Atlas VPS.

## Validation

```bash
npm test
```

The test command creates a production build and verifies the rendered portfolio
content, metadata, résumé download, and removal of the temporary starter UI.

## Production deployment

Pushes to `master` run GitHub Actions validation and then deploy an atomic
standalone release to `/var/www/austindurham.info` on Atlas. Nginx continues to
proxy the public site to the application on `127.0.0.1:3000`.

See `ops/atlas/README.md` for the one-time Atlas setup and required GitHub
Actions configuration.
