import { DashboardLayout } from "@/components/DashboardLayout";
import { FileText, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const records = [
  { id: "R-3001", patient: "Rajesh Kumar", type: "Lab Report", date: "2026-02-19", doctor: "Dr. Mehta" },
  { id: "R-3002", patient: "Anita Sharma", type: "X-Ray", date: "2026-02-20", doctor: "Dr. Gupta" },
  { id: "R-3003", patient: "Mohammed Ali", type: "ECG Report", date: "2026-02-18", doctor: "Dr. Khan" },
  { id: "R-3004", patient: "Priya Patel", type: "Blood Work", date: "2026-02-21", doctor: "Dr. Shah" },
  { id: "R-3005", patient: "Suresh Reddy", type: "Prescription", date: "2026-02-15", doctor: "Dr. Rao" },
  { id: "R-3006", patient: "Fatima Begum", type: "Discharge Summary", date: "2026-02-20", doctor: "Dr. Ahmed" },
];

export default function Records() {
  return (
    <DashboardLayout>
      <div className="space-y-5">
        <div>
          <h1 className="text-xl font-semibold">Records</h1>
          <p className="text-sm text-muted-foreground">Medical records and documents</p>
        </div>

        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search records..." className="pl-9 bg-card" />
        </div>

        <div className="grid gap-3">
          {records.map((r) => (
            <div key={r.id} className="bg-card border border-border rounded-lg p-4 flex items-center gap-4 hover:border-primary/30 transition-colors cursor-pointer">
              <div className="p-2 bg-secondary rounded-md">
                <FileText className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">{r.type}</p>
                  <span className="text-xs text-muted-foreground font-mono">{r.id}</span>
                </div>
                <p className="text-xs text-muted-foreground">{r.patient} · {r.doctor} · {r.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
