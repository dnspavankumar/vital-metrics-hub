import { DashboardLayout } from "@/components/DashboardLayout";
import { Building2, TrendingUp, BedDouble, Wrench } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const expansionData = [
  { department: "ER", current: 20, needed: 28 },
  { department: "ICU", current: 20, needed: 25 },
  { department: "General", current: 60, needed: 72 },
  { department: "Pediatric", current: 15, needed: 18 },
  { department: "Maternity", current: 12, needed: 15 },
];

const plans = [
  { icon: BedDouble, title: "Ward Expansion", status: "Planning", detail: "Add 20 beds to General Ward by Q3 2026" },
  { icon: Wrench, title: "Equipment Upgrade", status: "In Progress", detail: "Ventilator fleet upgrade - 10 new units arriving March 2026" },
  { icon: Building2, title: "New ICU Wing", status: "Proposed", detail: "5-bed ICU extension pending board approval" },
  { icon: TrendingUp, title: "Digital Infrastructure", status: "Active", detail: "EHR system modernization and IoT sensor deployment" },
];

const statusStyle: Record<string, string> = {
  Planning: "bg-warning/10 text-warning",
  "In Progress": "bg-primary/10 text-primary",
  Proposed: "bg-muted text-muted-foreground",
  Active: "bg-success/10 text-success",
};

export default function InfrastructurePlanning() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-semibold">Infrastructure Planning</h1>
          <p className="text-sm text-muted-foreground">Capacity planning and expansion tracking</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="text-sm font-semibold mb-4">Department Capacity: Current vs Needed</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={expansionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="department" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} />
              <Bar dataKey="current" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} name="Current" />
              <Bar dataKey="needed" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} name="Needed" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {plans.map((plan) => (
            <div key={plan.title} className="bg-card border border-border rounded-lg p-5 flex items-start gap-4">
              <div className="p-2 rounded-md bg-secondary">
                <plan.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-semibold">{plan.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded ${statusStyle[plan.status]}`}>{plan.status}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
