"use client"

import { AppShellTemplate } from "../../templates";
import { SidebarTrigger } from "../../primitives/sidebar";
import {
  WhiteboardSidebarHeader,
  WhiteboardNav,
  WhiteboardProTip,
  WhiteboardContent,
} from "./two-sided-dash";

export function TesterWhiteboard() {
  return (
    <AppShellTemplate
      sidebarHeader={<WhiteboardSidebarHeader />}
      nav={<WhiteboardNav />}
      sidebarFooter={<WhiteboardProTip />}
      header={
        <div className="flex w-full items-center gap-3">
          <SidebarTrigger />
          <span className="font-['Bebas_Neue'] text-2xl tracking-wide">CREATOR OS // DASHBOARD</span>
        </div>
      }
      content={<WhiteboardContent />}
    />
  );
}
