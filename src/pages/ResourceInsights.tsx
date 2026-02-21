import { DashboardLayout } from "@/components/DashboardLayout";
import { BedDouble, Wind, UserCog, TrendingUp, AlertTriangle } from "lucide-react";

const insights = [
  {
    icon: BedDouble,
    title: "Bed Forecast",
    value: "92 beds needed",
    period: "Next 7 days",
    current: "78 / 100 occupied",
    recommendation: "Prepare 14 additional beds. Consider temporary ward expansion.",
    severity: "warning" as const,
  },
  {
    icon: Wind,
    title: "Oxygen Cylinder Demand",
    value: "72 cylinders",
    period: "Next 7 days",
    current: "45 / 60 in use",
    recommendation: "Order 30 additional cylinders by Wednesday. Respiratory cases trending up.",
    severity: "critical" as const,
  },
  {
    icon: UserCog,
    title: "Staff Requirement",
    value: "8 additional staff",
    period: "Next 7 days",
    current: "24 doctors, 48 nurses on roster",
    recommendation: "3 additional nurses for night shifts, 2 doctors for ER, 3 support staff.",
    severity: "info" as const,
  },
  {
    icon: TrendingUp,
    title: "Patient Load Projection",
    value: "+20% increase",
    period: "Next 14 days",
    current: "Avg 284 patients/day",
    recommendation: "Flu season approaching. Activate contingency protocols.",
    severity: "warning" as const,
  },
];

const severityBorder = {
  warning: "border-l-warning",
  critical: "border-l-destructive",
  info: "border-l-primary",
};

const severityIcon = {
  warning: "text-warning",
  critical: "text-destructive",
  info: "text-primary",
};

export default function ResourceInsights() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-semibold">Resource Insights</h1>
          <p className="text-sm text-muted-foreground">AI-generated operational recommendations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {insights.map((insight) => (
            <div
              key={insight.title}
              className={`bg-card border border-border rounded-lg p-5 border-l-4 ${severityBorder[insight.severity]}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <insight.icon className={`h-5 w-5 ${severityIcon[insight.severity]}`} />
                  <h3 className="text-sm font-semibold">{insight.title}</h3>
                </div>
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                  {insight.period}
                </span>
              </div>
              <p className="text-2xl font-semibold mb-1">{insight.value}</p>
              <p className="text-xs text-muted-foreground mb-3">{insight.current}</p>
              <div className="flex items-start gap-2 bg-secondary/50 rounded-md p-3">
                <AlertTriangle className="h-3.5 w-3.5 text-muted-foreground shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">{insight.recommendation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
