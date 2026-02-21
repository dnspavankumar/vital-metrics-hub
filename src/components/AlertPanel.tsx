import { AlertTriangle, TrendingUp, Info } from "lucide-react";

interface Alert {
  id: string;
  type: "warning" | "info" | "critical";
  message: string;
}

const alerts: Alert[] = [
  { id: "1", type: "warning", message: "Increase oxygen supply by 15% next week based on admission trends." },
  { id: "2", type: "critical", message: "ICU bed occupancy at 92%. Consider contingency planning." },
  { id: "3", type: "info", message: "Predicted patient load increase of 20% during flu season (next month)." },
  { id: "4", type: "warning", message: "Staffing shortfall anticipated for night shifts — 3 additional nurses needed." },
];

const iconMap = {
  warning: AlertTriangle,
  critical: AlertTriangle,
  info: Info,
};

const styleMap = {
  warning: "border-l-warning text-warning",
  critical: "border-l-destructive text-destructive",
  info: "border-l-primary text-primary",
};

export function AlertPanel() {
  return (
    <div className="bg-card rounded-lg border border-border p-5">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-4 w-4 text-primary" />
        <h3 className="text-sm font-semibold">AI Recommendations</h3>
      </div>
      <div className="space-y-3">
        {alerts.map((alert) => {
          const Icon = iconMap[alert.type];
          return (
            <div
              key={alert.id}
              className={`flex items-start gap-3 p-3 rounded-md bg-secondary/50 border-l-2 ${styleMap[alert.type]}`}
            >
              <Icon className="h-4 w-4 shrink-0 mt-0.5" />
              <p className="text-sm text-card-foreground">{alert.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
