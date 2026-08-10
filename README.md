# Austin Durham — Portfolio

A responsive résumé and professional portfolio site for Austin Durham, a
full-stack software engineer focused on cloud, platform, and business systems.

## Stack

- Next.js-compatible app routing through vinext
- React 19
- Mantine UI
- Tailwind CSS
- Cloudflare Workers-compatible deployment through Sites

The site is intentionally static. It does not use a database because all
content is curated résumé and portfolio information.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm test
```

The test command creates a production build and verifies the rendered portfolio
content, metadata, résumé download, and removal of the temporary starter UI.
