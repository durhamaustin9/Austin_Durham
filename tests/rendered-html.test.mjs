import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);
const port = 3199;
const url = `http://127.0.0.1:${port}`;
let server;

test.before(async () => {
  const nextBinary = new URL("../node_modules/next/dist/bin/next", import.meta.url);
  server = spawn(process.execPath, [nextBinary.pathname, "start", "-p", String(port)], {
    cwd: projectRoot.pathname,
    env: {
      ...process.env,
      DEPLOYMENT_VERSION: "test-deployment",
      NODE_ENV: "production",
    },
    stdio: ["ignore", "pipe", "pipe"],
  });

  let output = "";
  server.stdout.on("data", (chunk) => { output += chunk.toString(); });
  server.stderr.on("data", (chunk) => { output += chunk.toString(); });

  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (server.exitCode !== null) {
      throw new Error(`Next.js server exited before startup:\n${output}`);
    }

    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // The server is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  throw new Error(`Next.js server did not become ready:\n${output}`);
});

test.after(async () => {
  if (!server || server.exitCode !== null) return;
  server.kill("SIGTERM");
  await new Promise((resolve) => {
    const timeout = setTimeout(resolve, 2_000);
    server.once("exit", () => {
      clearTimeout(timeout);
      resolve();
    });
  });
});

test("renders Austin Durham's portfolio with standard Next.js", async () => {
  const response = await fetch(url);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Austin Durham \| Full-Stack Software Engineer<\/title>/i);
  assert.match(html, /I build software that makes the business/);
  assert.match(html, /Built to be inspected/);
  assert.match(html, /Galileo-AI/);
  assert.match(html, /Private source by design/);
  assert.match(html, /448/);
  assert.match(html, /14,508/);
  assert.match(html, /BeatFlight/);
  assert.match(html, /QuickCalc/);
  assert.match(html, /PiRouter/);
  assert.match(html, /DisplayLink clean-room research/);
  assert.match(html, /Safe demo data/);
  assert.match(html, /Proof in production/);
  assert.match(html, /Armstrong Construction Group/);
  assert.match(html, /FarmFlight/);
  assert.match(html, /contact@austindurham\.info/);
  assert.match(html, /Austin-Durham-Resume\.pdf/);
  const resumeLink = html.match(
    /<a\b[^>]*href="\/Austin-Durham-Resume\.pdf"[^>]*>/,
  )?.[0];
  assert.ok(resumeLink, "expected a link to the résumé PDF");
  assert.match(resumeLink, /target="_blank"/);
  assert.match(resumeLink, /rel="noopener noreferrer"/);
  assert.match(html, /View résumé/);
  assert.match(html, /Skip to main content/);
  assert.match(html, /"@type":"Person"/);
  assert.match(html, /rel="canonical" href="https:\/\/austindurham\.info\/?"/);
  assert.match(html, /href="https:\/\/beatflight\.austindurham\.info"/);
  assert.match(html, /href="https:\/\/github\.com\/durhamaustin9\/CalculatorApp"/);
  assert.match(html, /href="https:\/\/github\.com\/durhamaustin9\/PiRouter"/);
  assert.match(
    html,
    /href="https:\/\/github\.com\/durhamaustin9\/DisplayLink-Drivers-Reconstruct"/,
  );
  assert.doesNotMatch(html, /href="https?:\/\/[^"]*galileo/i);
  assert.doesNotMatch(html, /Download résumé/);
  assert.doesNotMatch(html, /vinext|vite|mantine|codex-preview|Your site is taking shape/i);
});

test("keeps the résumé and Turbopack-based Next.js scripts", async () => {
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");
  assert.match(packageJson, /"dev": "next dev --turbopack"/);
  assert.match(packageJson, /"build": "next build --turbopack"/);
  assert.doesNotMatch(packageJson, /vinext|vite/i);
  await access(new URL("../public/Austin-Durham-Resume.pdf", import.meta.url));
  await access(new URL("../public/projects/beatflight.png", import.meta.url));
});

test("routes PostHog browser events through the proxy and server logs directly", async () => {
  const [browserInstrumentation, serverLogging, exampleEnvironment] =
    await Promise.all([
      readFile(new URL("../instrumentation-client.ts", import.meta.url), "utf8"),
      readFile(new URL("../lib/posthog-server-logging.ts", import.meta.url), "utf8"),
      readFile(new URL("../.env.example", import.meta.url), "utf8"),
    ]);

  assert.match(browserInstrumentation, /ui_host:\s*uiHost/);
  assert.match(browserInstrumentation, /defaults:\s*"2026-05-30"/);
  assert.match(
    exampleEnvironment,
    /NEXT_PUBLIC_POSTHOG_HOST=https:\/\/b\.austindurham\.info/,
  );
  assert.match(serverLogging, /process\.env\.POSTHOG_LOGS_HOST/);
  assert.doesNotMatch(serverLogging, /NEXT_PUBLIC_POSTHOG_HOST/);
  assert.match(serverLogging, /\/i\/v1\/logs/);
  assert.doesNotMatch(serverLogging, /\/otlp\/v1\/logs/);
  assert.match(serverLogging, /"Content-Type":\s*"application\/json"/);
});

test("publishes crawlable canonical metadata without exposing API routes", async () => {
  const robotsResponse = await fetch(`${url}/robots.txt`);
  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  assert.match(robots, /Allow: \//);
  assert.match(robots, /Disallow: \/api\//);
  assert.match(robots, /Sitemap: https:\/\/austindurham\.info\/sitemap\.xml/);

  const sitemapResponse = await fetch(`${url}/sitemap.xml`);
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  assert.match(sitemap, /<loc>https:\/\/austindurham\.info<\/loc>/);
  assert.match(sitemap, /projects\/beatflight\.png/);
});

test("reports the running deployment identity without caching", async () => {
  const response = await fetch(`${url}/api/health`);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.equal(await response.text(), "test-deployment");
});
