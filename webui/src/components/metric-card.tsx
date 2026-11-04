import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function MetricCard({
  label,
  value,
  hint,
  icon,
  to,
  className,
  accent,
}: {
  label: string;
  value: ReactNode;
  hint?: ReactNode;
  icon?: ReactNode;
  to?: string;
  className?: string;
  accent?: "default" | "critical" | "warning" | "success";
}) {
  const accentClass =
    accent === "critical"
      ? "bg-severity-critical"
      : accent === "warning"
        ? "bg-warning"
        : accent === "success"
          ? "bg-success"
          : null;

  const body = (
    <div
      className={cn(
        // h-full + flex column keeps every card in a row the same height,
        // even when some have a hint and others don't, and prevents the
        // 6-col grid from looking ragged when labels truncate differently.
        "group flex h-full flex-col rounded-lg border border-border bg-card p-5 transition-colors card-hover",
        to && "cursor-pointer",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="flex min-w-0 items-center gap-2 text-[13px] text-muted-foreground">
          {accentClass && <span className={cn("h-2 w-2 shrink-0 rounded-full", accentClass)} aria-hidden />}
          <span className="truncate">{label}</span>
        </p>
        {icon && <span className="shrink-0 text-muted-foreground">{icon}</span>}
      </div>
      <div
        className="mt-2 truncate text-[28px] font-medium leading-9 tabular-nums text-foreground"
        title={typeof value === "string" || typeof value === "number" ? String(value) : undefined}
      >
        {value}
      </div>
      {hint != null && (
        <div className="mt-auto pt-2 text-xs text-muted-foreground truncate">
          {hint}
        </div>
      )}
    </div>
  );
  return to ? (
    <Link to={to} className="block focus:outline-none focus:ring-1 focus:ring-ring rounded-lg">
      {body}
    </Link>
  ) : (
    body
  );
}
