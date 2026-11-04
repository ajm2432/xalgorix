import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n";

const STYLES: Record<string, { className: string; label: string }> = {
  running: { className: "bg-brand", label: "Running" },
  pending: { className: "bg-warning", label: "Pending" },
  paused: { className: "bg-warning", label: "Paused" },
  saved: { className: "bg-severity-info", label: "Saved" },
  finished: { className: "bg-success", label: "Completed" },
  completed: { className: "bg-success", label: "Completed" },
  stopped: { className: "bg-severity-info", label: "Stopped" },
  failed: { className: "bg-destructive", label: "Failed" },
};

export function ScanStatusPill({
  status,
  className,
}: {
  status?: string;
  className?: string;
}) {
  const { t } = useI18n();
  const key = (status || "").toLowerCase();
  const meta = STYLES[key] || {
    className: "bg-severity-info",
    label: status || "Unknown",
  };
  // Localize known statuses; fall back to the built-in English label.
  const localizedLabel = STYLES[key] ? t(`status.${key}`) : meta.label;
  const dotPulse =
    key === "running" || key === "pending" ? "pulse-dot" : "";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 whitespace-nowrap text-xs text-muted-foreground",
        className,
      )}
    >
      <span
        className={cn("h-2 w-2 rounded-full", meta.className, dotPulse)}
        aria-hidden
      />
      {localizedLabel}
    </span>
  );
}
