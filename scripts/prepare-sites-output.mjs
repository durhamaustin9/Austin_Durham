import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const projectRoot = process.cwd();
const openNextOutput = resolve(projectRoot, ".open-next");
const sitesOutput = resolve(projectRoot, "dist");
const sitesServer = resolve(sitesOutput, "server");

await rm(sitesOutput, { recursive: true, force: true });
await cp(openNextOutput, sitesOutput, { recursive: true });
await mkdir(sitesServer, { recursive: true });
await writeFile(
  resolve(sitesServer, "index.js"),
  'export { default } from "../worker.js";\n',
  "utf8",
);
