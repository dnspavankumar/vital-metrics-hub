import { DashboardLayout } from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { UserCog, Users, Clock } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const staffData = [
  { dept: "ER", doctors: 8, nurses: 16, required_doctors: 10, required_nurses: 20 },
  { dept: "ICU", doctors: 5, nurses: 12, required_doctors: 6, required_nurses: 14 },
  { dept: "General", doctors: 6, nurses: 14, required_doctors: 6, required_nurses: 16 },
  { dept: "Surgery", doctors: 5, nurses: 6, required_doctors: 5, required_nurses: 8 },
];

const shiftChart = [
  { shift: "Morning", doctors: 12, nurses: 24 },
  { shift: "Afternoon", doctors: 8, nurses: 16 },
  { shift: "Night", doctors: 4, nurses: 8 },
];

const stats = [
  { icon: UserCog, label: "Total Staff", value: "96" },
  { icon: Users, label: "On Duty Now", value: "72" },
  { icon: Clock, label: "Avg Shift Hours", value: "8.5h" },
];

export default function StaffManagement() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-semibold">Staff Management</h1>
          <p className="text-sm text-muted-foreground">Staff allocation and shift planning</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-lg p-4 flex items-center gap-3">
              <div className="p-2 rounded-md bg-secondary">
                <s.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className="text-lg font-semibold">{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="p-4 border-b border-border">
            <h3 className="text-sm font-semibold">Department Staffing</h3>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-xs">Department</TableHead>
                <TableHead className="text-xs">Doctors</TableHead>
                <TableHead className="text-xs">Nurses</TableHead>
                <TableHead className="text-xs">Doctor Gap</TableHead>
                <TableHead className="text-xs">Nurse Gap</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staffData.map((s) => {
                const docGap = s.required_doctors - s.doctors;
                const nurseGap = s.required_nurses - s.nurses;
                return (
                  <TableRow key={s.dept}>
                    <TableCell className="text-sm font-medium">{s.dept}</TableCell>
                    <TableCell className="text-sm">{s.doctors} / {s.required_doctors}</TableCell>
                    <TableCell className="text-sm">{s.nurses} / {s.required_nurses}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={docGap > 0 ? "text-destructive border-destructive/20" : "text-success border-success/20"}>
                        {docGap > 0 ? `-${docGap}` : "OK"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={nurseGap > 0 ? "text-destructive border-destructive/20" : "text-success border-success/20"}>
                        {nurseGap > 0 ? `-${nurseGap}` : "OK"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="text-sm font-semibold mb-4">Staff by Shift</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={shiftChart}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="shift" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} />
              <Bar dataKey="doctors" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} name="Doctors" />
              <Bar dataKey="nurses" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} name="Nurses" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  );
}
