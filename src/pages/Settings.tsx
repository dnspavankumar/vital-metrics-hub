import { DashboardLayout } from "@/components/DashboardLayout";
import { Settings as SettingsIcon, User, Bell, Shield, Database } from "lucide-react";

const sections = [
  { icon: User, title: "Profile Settings", description: "Manage your account details and preferences" },
  { icon: Bell, title: "Notifications", description: "Configure alert and notification preferences" },
  { icon: Shield, title: "Security", description: "Password, two-factor authentication, sessions" },
  { icon: Database, title: "Data Management", description: "Export data, manage backups, storage settings" },
];

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-5">
        <div>
          <h1 className="text-xl font-semibold">Settings</h1>
          <p className="text-sm text-muted-foreground">System configuration</p>
        </div>

        <div className="grid gap-3 max-w-2xl">
          {sections.map((s) => (
            <div key={s.title} className="bg-card border border-border rounded-lg p-4 flex items-center gap-4 hover:border-primary/30 transition-colors cursor-pointer">
              <div className="p-2 bg-secondary rounded-md">
                <s.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">{s.title}</p>
                <p className="text-xs text-muted-foreground">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
