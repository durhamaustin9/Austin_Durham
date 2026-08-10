import { SeverityNumber, type Logger } from "@opentelemetry/api-logs";
import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";
import { resourceFromAttributes } from "@opentelemetry/resources";
import {
  LoggerProvider,
  SimpleLogRecordProcessor,
} from "@opentelemetry/sdk-logs";

const serviceName = "austin-durham-portfolio";

declare global {
  var __posthogLogger: Logger | undefined;
  var __posthogLoggerProvider: LoggerProvider | undefined;
}

export function registerPostHogServerLogging() {
  if (globalThis.__posthogLogger) {
    return globalThis.__posthogLogger;
  }

  const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (!projectToken || !apiHost) {
    console.warn(
      "PostHog server logging is disabled because its project token or host is missing.",
    );
    return undefined;
  }

  const exporter = new OTLPLogExporter({
    url: `${apiHost.replace(/\/$/, "")}/otlp/v1/logs`,
    headers: {
      Authorization: `Bearer ${projectToken}`,
    },
  });

  const loggerProvider = new LoggerProvider({
    resource: resourceFromAttributes({
      "service.name": serviceName,
      "deployment.environment.name":
        process.env.CF_PAGES_BRANCH ?? process.env.NODE_ENV ?? "unknown",
    }),
    processors: [new SimpleLogRecordProcessor({ exporter })],
  });

  const logger = loggerProvider.getLogger(serviceName);

  globalThis.__posthogLogger = logger;
  globalThis.__posthogLoggerProvider = loggerProvider;

  logger.emit({
    severityNumber: SeverityNumber.INFO,
    severityText: "INFO",
    body: "Application server started",
    attributes: {
      "event.name": "application.server.started",
    },
  });

  return logger;
}

export function getPostHogServerLogger() {
  return globalThis.__posthogLogger;
}
