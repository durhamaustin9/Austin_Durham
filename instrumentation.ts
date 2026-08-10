export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") {
    return;
  }

  const { registerPostHogServerLogging } = await import(
    "./lib/posthog-server-logging"
  );

  registerPostHogServerLogging();
}
