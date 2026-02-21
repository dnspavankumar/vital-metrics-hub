import { DashboardLayout } from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const patients = [
  { id: "P-1001", name: "Rajesh Kumar", age: 45, diagnosis: "Pneumonia", date: "2026-02-19", status: "Admitted" },
  { id: "P-1002", name: "Anita Sharma", age: 32, diagnosis: "Fracture - Left Arm", date: "2026-02-20", status: "Under Treatment" },
  { id: "P-1003", name: "Mohammed Ali", age: 67, diagnosis: "Cardiac Arrest", date: "2026-02-18", status: "ICU" },
  { id: "P-1004", name: "Priya Patel", age: 28, diagnosis: "Appendicitis", date: "2026-02-21", status: "Pre-Surgery" },
  { id: "P-1005", name: "Suresh Reddy", age: 55, diagnosis: "Diabetes - Type 2", date: "2026-02-15", status: "Discharged" },
  { id: "P-1006", name: "Fatima Begum", age: 41, diagnosis: "Dengue Fever", date: "2026-02-20", status: "Admitted" },
  { id: "P-1007", name: "Vikram Singh", age: 73, diagnosis: "COPD Exacerbation", date: "2026-02-17", status: "ICU" },
  { id: "P-1008", name: "Lakshmi Nair", age: 36, diagnosis: "Migraine", date: "2026-02-21", status: "Outpatient" },
];

const statusStyles: Record<string, string> = {
  Admitted: "bg-primary/10 text-primary border-primary/20",
  "Under Treatment": "bg-warning/10 text-warning border-warning/20",
  ICU: "bg-destructive/10 text-destructive border-destructive/20",
  "Pre-Surgery": "bg-kpi-beds/10 text-kpi-beds border-kpi-beds/20",
  Discharged: "bg-success/10 text-success border-success/20",
  Outpatient: "bg-muted text-muted-foreground border-border",
};

export default function Patients() {
  return (
    <DashboardLayout>
      <div className="space-y-5">
        <div>
          <h1 className="text-xl font-semibold">Patients</h1>
          <p className="text-sm text-muted-foreground">Manage patient records</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by name, ID, diagnosis..." className="pl-9 bg-card" />
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-3.5 w-3.5" /> Filters
          </Button>
        </div>

        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-xs">Patient ID</TableHead>
                <TableHead className="text-xs">Name</TableHead>
                <TableHead className="text-xs">Age</TableHead>
                <TableHead className="text-xs">Diagnosis</TableHead>
                <TableHead className="text-xs">Admission Date</TableHead>
                <TableHead className="text-xs">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((p) => (
                <TableRow key={p.id} className="cursor-pointer">
                  <TableCell className="text-sm font-mono text-muted-foreground">{p.id}</TableCell>
                  <TableCell className="text-sm font-medium">{p.name}</TableCell>
                  <TableCell className="text-sm">{p.age}</TableCell>
                  <TableCell className="text-sm">{p.diagnosis}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{p.date}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`text-xs ${statusStyles[p.status] || ""}`}>
                      {p.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
}
