import { AppSidebar } from "./components/app-sidebar/app-sidebar"
import { SiteHeader } from "./components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "../../ui/sidebar"
import { ComponentExample } from "../example-01/page"

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <ComponentExample />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
