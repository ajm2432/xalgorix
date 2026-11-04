import { cn, normalizeSeverity, type Severity } from "@/lib/utils";
import { useI18n } from "@/i18n";

const DOT: Record<Severity, string> = {
  critical: "bg-severity-critical",
  high: "bg-severity-high",
  medium: "bg-severity-medium",
  low: "bg-severity-low",
  info: "bg-severity-info",
};

export function SeverityBadge({
  severity,
  className,
  showDot = true,
}: {
  severity?: string;
  className?: string;
  showDot?: boolean;
}) {
  const { t } = useI18n();
  const sev = normalizeSeverity(severity);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 whitespace-nowrap text-xs text-muted-foreground",
        className,
      )}
    >
      {showDot && <span className={cn("h-2 w-2 rounded-full", DOT[sev])} aria-hidden />}
      {t(`severity.${sev}`)}
    </span>
  );
}
