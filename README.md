# Austin Durham — Portfolio

A responsive résumé and professional portfolio site for Austin Durham, a
full-stack software engineer focused on cloud, platform, and business systems.
The first major section gives recruiters direct, inspectable evidence through
four public projects instead of relying only on résumé claims.

## Project presentation

- **BeatFlight** links to the deployed browser game and its public source.
- **QuickCalc** includes a keyboard-accessible web sampler that mirrors the
  public C# and Avalonia desktop application.
- **PiRouter** includes a clearly labeled synthetic-data console so the product
  can be explored without exposing a private network dashboard.
- **DisplayLink clean-room research** is presented as an evidence dossier with
  its current limits, safety gate, test scale, and public audit visible.

## Stack

- Next.js 16 App Router
- Turbopack for development and production builds
- React 19
- Semantic server-rendered HTML with focused client components for demos
- Tailwind CSS pipeline and custom design tokens
- Tabler icons
- Standalone Node.js deployment on the Atlas VPS

The site is intentionally static. It does not use a database because all
content is curated résumé and portfolio information. Project demos are
deterministic and run entirely in the browser.

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
content, public project links, metadata, crawler files, résumé access, and
removal of temporary starter UI.

## Production deployment

Pushes to `master` run GitHub Actions validation and then deploy an atomic
standalone release to `/var/www/austindurham.info` on Atlas. Nginx continues to
proxy the public site to the application on `127.0.0.1:3000`.

See `ops/atlas/README.md` for the one-time Atlas setup and required GitHub
Actions configuration.
