import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

async function getDeploymentId() {
  try {
    return (await readFile(path.join(process.cwd(), ".deployment-id"), "utf8")).trim();
  } catch (error) {
    if (
      error instanceof Error &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return process.env.DEPLOYMENT_VERSION ?? "local";
    }

    throw error;
  }
}

export async function GET() {
  return new Response(await getDeploymentId(), {
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
