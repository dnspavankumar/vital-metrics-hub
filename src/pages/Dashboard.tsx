import { DashboardLayout } from "@/components/DashboardLayout";
import { KPICard } from "@/components/KPICard";
import { AlertPanel } from "@/components/AlertPanel";
import { Users, BedDouble, HeartPulse, Wind, Stethoscope } from "lucide-react";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const admissionData = [
  { day: "Mon", admissions: 42 },
  { day: "Tue", admissions: 38 },
  { day: "Wed", admissions: 55 },
  { day: "Thu", admissions: 47 },
  { day: "Fri", admissions: 63 },
  { day: "Sat", admissions: 51 },
  { day: "Sun", admissions: 44 },
];

const resourceData = [
  { name: "Beds", used: 78, total: 100 },
  { name: "ICU", used: 18, total: 20 },
  { name: "Ventilators", used: 12, total: 25 },
  { name: "O₂ Cylinders", used: 45, total: 60 },
  { name: "OR Rooms", used: 6, total: 8 },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Real-time hospital overview</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <KPICard
            title="Total Patients"
            value={284}
            subtitle="Today's count"
            icon={Users}
            trend={{ value: 8.2, label: "vs last week" }}
            colorClass="text-kpi-patients"
          />
          <KPICard
            title="Bed Occupancy"
            value="78%"
            subtitle="78 / 100 beds"
            icon={BedDouble}
            trend={{ value: 3.1, label: "vs yesterday" }}
            colorClass="text-kpi-beds"
          />
          <KPICard
            title="ICU Usage"
            value="90%"
            subtitle="18 / 20 beds"
            icon={HeartPulse}
            trend={{ value: -2.4, label: "vs yesterday" }}
            colorClass="text-kpi-icu"
          />
          <KPICard
            title="O₂ Consumption"
            value="75%"
            subtitle="45 / 60 cylinders"
            icon={Wind}
            trend={{ value: 12.5, label: "vs last week" }}
            colorClass="text-kpi-oxygen"
          />
          <KPICard
            title="Available Doctors"
            value={24}
            subtitle="On shift now"
            icon={Stethoscope}
            trend={{ value: -4.0, label: "vs usual" }}
            colorClass="text-kpi-doctors"
          />
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-sm font-semibold mb-4">Patient Admissions (This Week)</h3>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={admissionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="admissions"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))", r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-sm font-semibold mb-4">Resource Utilization</h3>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={resourceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="used" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="Used" />
                <Bar dataKey="total" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} name="Total" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alerts */}
        <AlertPanel />
      </div>
    </DashboardLayout>
  );
}
