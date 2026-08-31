"use client";

import { useReducer, useRef, useState } from "react";
import posthog from "posthog-js";

type CalculatorOperation = "add" | "subtract" | "multiply" | "divide";

type CalculatorState = {
  accumulator: number | null;
  display: string;
  error: string | null;
  expression: string;
  justEvaluated: boolean;
  lastOperand: number | null;
  lastOperation: CalculatorOperation | null;
  pending: CalculatorOperation | null;
  startNew: boolean;
};

const initialCalculatorState: CalculatorState = {
  accumulator: null,
  display: "0",
  error: null,
  expression: "Ready",
  justEvaluated: false,
  lastOperand: null,
  lastOperation: null,
  pending: null,
  startNew: true,
};

const operationSymbols: Record<CalculatorOperation, string> = {
  add: "+",
  subtract: "−",
  multiply: "×",
  divide: "÷",
};

const operationKeys: Record<string, CalculatorOperation> = {
  "+": "add",
  "−": "subtract",
  "×": "multiply",
  "÷": "divide",
};

const calculatorKeys = [
  "⌫",
  "AC",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "−",
  "1",
  "2",
  "3",
  "+",
  "±",
  "0",
  ".",
  "=",
] as const;

function formatNumber(value: number) {
  if (!Number.isFinite(value)) return "Error";
  const rounded = Number.parseFloat(value.toPrecision(12));
  const plain = String(rounded);
  return plain.length <= 16 ? plain : rounded.toExponential(8);
}

function calculate(left: number, right: number, operation: CalculatorOperation) {
  if (operation === "divide" && right === 0) return null;

  switch (operation) {
    case "add":
      return left + right;
    case "subtract":
      return left - right;
    case "multiply":
      return left * right;
    case "divide":
      return left / right;
  }
}

function calculatorError(message: string): CalculatorState {
  return {
    ...initialCalculatorState,
    display: "Error",
    error: message,
    expression: message,
  };
}

function calculatorReducer(state: CalculatorState, key: string): CalculatorState {
  if (key === "AC") return initialCalculatorState;

  let current = state.error ? initialCalculatorState : state;

  if (/^\d$/.test(key)) {
    if (current.justEvaluated && !current.pending) {
      current = initialCalculatorState;
    }

    const digitCount = current.display.replace(/\D/g, "").length;
    if (!current.startNew && digitCount >= 16) return current;

    return {
      ...current,
      display:
        current.startNew || current.display === "0"
          ? key
          : `${current.display}${key}`,
      justEvaluated: false,
      startNew: false,
    };
  }

  if (key === ".") {
    if (current.justEvaluated && !current.pending) {
      current = initialCalculatorState;
    }
    if (!current.startNew && current.display.includes(".")) return current;

    return {
      ...current,
      display: current.startNew ? "0." : `${current.display}.`,
      justEvaluated: false,
      startNew: false,
    };
  }

  if (key === "±") {
    if (current.display === "0") return current;
    return {
      ...current,
      display: current.display.startsWith("-")
        ? current.display.slice(1)
        : `-${current.display}`,
    };
  }

  if (key === "%") {
    const value = Number(current.display);
    return {
      ...current,
      display: formatNumber(value / 100),
      justEvaluated: false,
      startNew: true,
    };
  }

  if (key === "⌫") {
    if (current.startNew) return current;
    const next = current.display.length <= 1 ? "0" : current.display.slice(0, -1);
    return {
      ...current,
      display: next === "-" ? "0" : next,
    };
  }

  if (key in operationKeys) {
    const operation = operationKeys[key];
    const entry = Number(current.display);

    if (current.startNew && current.pending && current.accumulator !== null) {
      return {
        ...current,
        expression: `${formatNumber(current.accumulator)} ${operationSymbols[operation]}`,
        pending: operation,
      };
    }

    let accumulator = entry;
    if (current.pending && current.accumulator !== null) {
      const result = calculate(current.accumulator, entry, current.pending);
      if (result === null) return calculatorError("Cannot divide by zero");
      accumulator = result;
    }

    return {
      ...current,
      accumulator,
      display: formatNumber(accumulator),
      error: null,
      expression: `${formatNumber(accumulator)} ${operationSymbols[operation]}`,
      justEvaluated: false,
      pending: operation,
      startNew: true,
    };
  }

  if (key === "=") {
    let operation = current.pending;
    let left = current.accumulator;
    let right = current.startNew ? current.accumulator : Number(current.display);

    if (!operation && current.justEvaluated) {
      operation = current.lastOperation;
      left = Number(current.display);
      right = current.lastOperand;
    }

    if (!operation || left === null || right === null) return current;
    const result = calculate(left, right, operation);
    if (result === null) return calculatorError("Cannot divide by zero");

    return {
      ...current,
      accumulator: result,
      display: formatNumber(result),
      expression: `${formatNumber(left)} ${operationSymbols[operation]} ${formatNumber(right)} =`,
      justEvaluated: true,
      lastOperand: right,
      lastOperation: operation,
      pending: null,
      startNew: true,
    };
  }

  return current;
}

function calculatorKeyLabel(key: string) {
  const labels: Record<string, string> = {
    "⌫": "Backspace",
    "AC": "Clear calculator",
    "%": "Percent",
    "÷": "Divide",
    "×": "Multiply",
    "−": "Subtract",
    "+": "Add",
    "±": "Toggle positive or negative",
    ".": "Decimal point",
    "=": "Equals",
  };
  return labels[key] ?? key;
}

export function QuickCalcDemo() {
  const [state, dispatch] = useReducer(calculatorReducer, initialCalculatorState);
  const started = useRef(false);

  const enterKey = (key: string) => {
    if (!started.current) {
      started.current = true;
      posthog.capture("project_demo_started", { project: "quickcalc" });
    }
    dispatch(key);
  };

  const handleKeyboard = (event: React.KeyboardEvent<HTMLElement>) => {
    if (
      event.target instanceof HTMLButtonElement &&
      (event.key === "Enter" || event.key === " ")
    ) {
      return;
    }

    const keyMap: Record<string, string> = {
      "*": "×",
      "/": "÷",
      "-": "−",
      Enter: "=",
      Escape: "AC",
      Backspace: "⌫",
    };
    const key = keyMap[event.key] ?? event.key;
    if (/^\d$/.test(key) || ["+", "−", "×", "÷", ".", "%", "="].includes(key)) {
      event.preventDefault();
      enterKey(key);
    } else if (key === "AC" || key === "⌫") {
      event.preventDefault();
      enterKey(key);
    }
  };

  return (
    <section
      className="quickcalc-demo"
      aria-label="Interactive QuickCalc browser sampler"
    >
      <div className="quickcalc-chrome" aria-hidden="true">
        <span />
        <span />
        <span />
        <code>C#</code>
      </div>
      <div className="quickcalc-display" aria-live="polite" aria-atomic="true">
        <span>{state.expression}</span>
        <output>{state.display}</output>
      </div>
      <div className="quickcalc-grid">
        {calculatorKeys.map((key) => {
          const isOperator = key in operationKeys || key === "=";
          const isUtility = ["⌫", "AC", "%"].includes(key);
          return (
            <button
              type="button"
              key={key}
              aria-label={calculatorKeyLabel(key)}
              aria-pressed={key in operationKeys ? state.pending === operationKeys[key] : undefined}
              className={`${isOperator ? "operator" : ""} ${isUtility ? "utility" : ""}`}
              onClick={() => enterKey(key)}
              onKeyDown={handleKeyboard}
            >
              {key}
            </button>
          );
        })}
      </div>
    </section>
  );
}

type PiView = "overview" | "network" | "services" | "system";

const piViews: Array<{ id: PiView; label: string }> = [
  { id: "overview", label: "Overview" },
  { id: "network", label: "Network" },
  { id: "services", label: "Services" },
  { id: "system", label: "System" },
];

const piViewData: Record<
  PiView,
  { eyebrow: string; headline: string; metrics: Array<{ label: string; value: string; tone?: string }> }
> = {
  overview: {
    eyebrow: "Network health · 96 / 100",
    headline: "All systems nominal",
    metrics: [
      { label: "Download", value: "42.8 Mb/s", tone: "green" },
      { label: "Latency", value: "8.4 ms", tone: "cyan" },
      { label: "Last backup", value: "18 min", tone: "green" },
      { label: "Pi temperature", value: "51° C" },
    ],
  },
  network: {
    eyebrow: "Interface · eth0",
    headline: "Stable wired route",
    metrics: [
      { label: "Link", value: "1,000 Mb/s", tone: "green" },
      { label: "Upload", value: "6.2 Mb/s", tone: "cyan" },
      { label: "Packet loss", value: "0%", tone: "green" },
      { label: "DNS", value: "Healthy", tone: "green" },
    ],
  },
  services: {
    eyebrow: "Backup and access",
    headline: "Protected on two paths",
    metrics: [
      { label: "Time Machine", value: "Current", tone: "green" },
      { label: "Restic archive", value: "Verified", tone: "green" },
      { label: "Tailscale", value: "6 peers", tone: "cyan" },
      { label: "Endpoint", value: "Online", tone: "green" },
    ],
  },
  system: {
    eyebrow: "Raspberry Pi 5",
    headline: "18 days of uptime",
    metrics: [
      { label: "CPU", value: "22%", tone: "green" },
      { label: "Memory", value: "36%" },
      { label: "SSD", value: "42%" },
      { label: "Temperature", value: "51° C", tone: "green" },
    ],
  },
};

export function PiRouterDemo() {
  const [view, setView] = useState<PiView>("overview");
  const data = piViewData[view];

  return (
    <div className="pirouter-demo">
      <div className="pirouter-demo-bar">
        <div>
          <span className="pirouter-demo-mark" aria-hidden="true">⌁</span>
          <strong>PiRouter</strong>
        </div>
        <span><i /> Safe demo data</span>
      </div>

      <div
        className="pirouter-demo-panel"
        role="region"
        aria-live="polite"
        aria-label={`${piViewData[view].headline} demo metrics`}
      >
        <div className="pirouter-health">
          <strong>{view === "overview" ? "96" : "●"}</strong>
          <span>{data.eyebrow}</span>
          <h4>{data.headline}</h4>
        </div>
        <div className="pirouter-metrics">
          {data.metrics.map((metric) => (
            <div key={metric.label}>
              <span>{metric.label}</span>
              <strong className={metric.tone ?? ""}>{metric.value}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="pirouter-tabs" aria-label="PiRouter demo views">
        {piViews.map((item) => (
          <button
            type="button"
            key={item.id}
            aria-pressed={view === item.id}
            onClick={() => {
              setView(item.id);
              posthog.capture("project_demo_viewed", {
                project: "pirouter",
                view: item.id,
              });
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
