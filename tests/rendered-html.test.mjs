import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Austin Durham's portfolio", async () => {
  const response = await render();
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
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("removes disposable starter assets and keeps the résumé download", async () => {
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton|drizzle/);
  await access(new URL("../public/Austin-Durham-Resume.pdf", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview", templateRoot)));
});
