import { DashboardShell } from "@repo/ui";
import { mount } from "../bootstrap";
import { DashboardContent } from "@repo/ui";

mount(
  <DashboardShell>
    <DashboardContent />
  </DashboardShell>,
);