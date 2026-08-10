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
  assert.match(html, /Proof in production/);
  assert.match(html, /Armstrong Construction Group/);
  assert.match(html, /FarmFlight/);
  assert.match(html, /contact@austindurham\.info/);
  assert.match(html, /Austin-Durham-Resume\.pdf/);
  assert.doesNotMatch(html, /vinext|vite|codex-preview|Your site is taking shape/i);
});

test("keeps the résumé and Turbopack-based Next.js scripts", async () => {
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");
  assert.match(packageJson, /"dev": "next dev --turbopack"/);
  assert.match(packageJson, /"build": "next build --turbopack"/);
  assert.doesNotMatch(packageJson, /vinext|vite/i);
  await access(new URL("../public/Austin-Durham-Resume.pdf", import.meta.url));
});

test("reports the running deployment identity without caching", async () => {
  const response = await fetch(`${url}/api/health`);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.equal(await response.text(), "test-deployment");
});
