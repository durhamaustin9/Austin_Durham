import posthog from "posthog-js";

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;
const uiHost =
  process.env.NEXT_PUBLIC_POSTHOG_UI_HOST ?? "https://us.posthog.com";

if (projectToken && apiHost) {
  try {
    posthog.init(projectToken, {
      api_host: apiHost.replace(/\/+$/, ""),
      ui_host: uiHost.replace(/\/+$/, ""),
      defaults: "2026-05-30",
      capture_exceptions: {
        capture_unhandled_errors: true,
        capture_unhandled_rejections: true,
        capture_console_errors: false,
      },
      debug: process.env.NODE_ENV === "development",
    });
  } catch (error) {
    console.error("PostHog browser instrumentation failed to initialize.", error);
  }
}
