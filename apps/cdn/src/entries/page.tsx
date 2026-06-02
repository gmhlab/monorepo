import ShadcnDashboard from "@repo/ui/blocks/dashboards/shadcn-dashboard";
import { mount } from "../bootstrap";

/**
 * CDN `page` entry — renders the shadcn dashboard page.
 *
 * `ShadcnDashboard` is a self-contained page: it ships its own
 * `SidebarProvider` + `SidebarInset` shell, so we mount it directly.
 */
mount(<ShadcnDashboard />);
