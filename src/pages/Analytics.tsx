import { DashboardLayout } from "@/components/DashboardLayout";
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";

const monthlyAdmissions = [
  { month: "Sep", admissions: 820, discharges: 780 },
  { month: "Oct", admissions: 910, discharges: 850 },
  { month: "Nov", admissions: 1050, discharges: 970 },
  { month: "Dec", admissions: 1200, discharges: 1100 },
  { month: "Jan", admissions: 1150, discharges: 1080 },
  { month: "Feb", admissions: 980, discharges: 920 },
];

const diagnosisDistribution = [
  { name: "Respiratory", value: 30 },
  { name: "Cardiac", value: 22 },
  { name: "Orthopedic", value: 18 },
  { name: "Neurological", value: 15 },
  { name: "Other", value: 15 },
];

const pieColors = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

const oxygenTrend = [
  { week: "W1", usage: 42 },
  { week: "W2", usage: 48 },
  { week: "W3", usage: 45 },
  { week: "W4", usage: 52 },
  { week: "W5", usage: 58 },
  { week: "W6", usage: 55 },
];

const predictions = [
  { label: "Next Week Patient Load", value: "+18%", description: "Expected flu-season surge" },
  { label: "Bed Occupancy Forecast", value: "85%", description: "3-day rolling average projection" },
  { label: "ICU Demand Trend", value: "Stable", description: "No significant change expected" },
  { label: "O₂ Demand Next Week", value: "+22%", description: "Correlated with respiratory admissions" },
];

const chartTooltipStyle = {
  backgroundColor: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "8px",
  fontSize: "12px",
};

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-semibold">Analytics</h1>
          <p className="text-sm text-muted-foreground">Trend analysis & predictions</p>
        </div>

        {/* Prediction Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {predictions.map((p) => (
            <div key={p.label} className="bg-card border border-border rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">{p.label}</p>
              <p className="text-xl font-semibold text-primary">{p.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{p.description}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-sm font-semibold mb-4">Admissions vs Discharges (6 Months)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={monthlyAdmissions}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={chartTooltipStyle} />
                <Area type="monotone" dataKey="admissions" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.15} strokeWidth={2} />
                <Area type="monotone" dataKey="discharges" stroke="hsl(var(--chart-2))" fill="hsl(var(--chart-2))" fillOpacity={0.1} strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-sm font-semibold mb-4">Diagnosis Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={diagnosisDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {diagnosisDistribution.map((_, i) => (
                    <Cell key={i} fill={pieColors[i]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={chartTooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-3 justify-center mt-2">
              {diagnosisDistribution.map((d, i) => (
                <div key={d.name} className="flex items-center gap-1.5 text-xs">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: pieColors[i] }} />
                  {d.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="text-sm font-semibold mb-4">Oxygen Consumption Trend (Weekly)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={oxygenTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="week" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip contentStyle={chartTooltipStyle} />
              <Bar dataKey="usage" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  );
}
