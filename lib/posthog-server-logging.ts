import { SeverityNumber, type Logger } from "@opentelemetry/api-logs";
import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";
import { resourceFromAttributes } from "@opentelemetry/resources";
import {
  BatchLogRecordProcessor,
  LoggerProvider,
} from "@opentelemetry/sdk-logs";

const serviceName = "austin-durham-portfolio";
const defaultPostHogLogsHost = "https://us.i.posthog.com";

declare global {
  var __posthogLogger: Logger | undefined;
  var __posthogLoggerProvider: LoggerProvider | undefined;
}

export function registerPostHogServerLogging() {
  if (globalThis.__posthogLogger) {
    return globalThis.__posthogLogger;
  }

  const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const logsHost = process.env.POSTHOG_LOGS_HOST ?? defaultPostHogLogsHost;

  if (!projectToken) {
    console.warn(
      "PostHog server logging is disabled because its project token is missing.",
    );
    return undefined;
  }

  const exporter = new OTLPLogExporter({
    url: `${logsHost.replace(/\/+$/, "")}/i/v1/logs`,
    headers: {
      Authorization: `Bearer ${projectToken}`,
      "Content-Type": "application/json",
    },
  });

  const loggerProvider = new LoggerProvider({
    resource: resourceFromAttributes({
      "service.name": serviceName,
      "deployment.environment.name":
        process.env.DEPLOYMENT_ENVIRONMENT ?? process.env.NODE_ENV ?? "unknown",
    }),
    processors: [
      new BatchLogRecordProcessor({
        exporter,
        scheduledDelayMillis: 1_000,
      }),
    ],
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
