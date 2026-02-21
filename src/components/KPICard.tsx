import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: { value: number; label: string };
  colorClass?: string;
}

export function KPICard({ title, value, subtitle, icon: Icon, trend, colorClass = "text-primary" }: KPICardProps) {
  return (
    <div className="bg-card rounded-lg p-5 kpi-shadow hover:kpi-shadow-hover transition-shadow border border-border">
      <div className="flex items-start justify-between mb-3">
        <p className="text-sm text-muted-foreground font-medium">{title}</p>
        <div className={`p-2 rounded-md bg-secondary ${colorClass}`}>
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <p className="text-2xl font-semibold tracking-tight">{value}</p>
      {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
      {trend && (
        <div className="flex items-center gap-1 mt-2">
          <span className={`text-xs font-medium ${trend.value >= 0 ? "text-success" : "text-destructive"}`}>
            {trend.value >= 0 ? "+" : ""}{trend.value}%
          </span>
          <span className="text-xs text-muted-foreground">{trend.label}</span>
        </div>
      )}
    </div>
  );
}
