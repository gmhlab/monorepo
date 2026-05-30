"use client";

import {
  Activity,
  BarChart3,
  Download,
  Globe,
  Plus,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";
import { AppTemplate, DashboardTemplate } from "../../templates";
import { Flex } from "../../layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../primitives/card";
import { Button } from "../../primitives/button";
import { Badge } from "../../primitives/badge";
import { Separator } from "../../primitives/separator";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "../../primitives/sidebar";

const stats = [
  { title: "Total Users", value: "2,450", change: "+12%", icon: Users },
  { title: "Assessments", value: "15,500", change: "+8%", icon: BarChart3 },
  { title: "Countries", value: "36", change: "+3", icon: Globe },
  { title: "Completion Rate", value: "78%", change: "+5%", icon: TrendingUp },
];

const navItems = [
  { label: "Overview", icon: Activity, active: true },
  { label: "Reports", icon: BarChart3, active: false },
  { label: "Audiences", icon: Users, active: false },
  { label: "Settings", icon: Settings, active: false },
];

const feed = [
  "EQUIP Competency Training — Uganda",
  "Photovoice Workshop — Kenya",
  "Group IPT Supervision — Nepal",
  "Wellbeing Survey rollout — Jordan",
];

/**
 * DashboardTemplate in context: dropped straight into AppTemplate's `content`
 * slot. AppTemplate owns the shell (sidebar + sticky header); DashboardTemplate
 * owns the page scaffold (header, toolbar, metrics, body + aside).
 */
export function DashboardTemplateDemo() {
  return (
    <AppTemplate
      sidebarHeader={<div className="font-semibold">GMH Lab</div>}
      nav={
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton isActive={item.active}>
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      }
      header={
        <Flex alignSecondary="center" gap="300" className="w-full py-3">
          <SidebarTrigger />
          <span className="text-sm font-medium">Dashboard</span>
        </Flex>
      }
      content={
        <DashboardTemplate
          eyebrow="Platform"
          title="Dashboard"
          description="Overview of platform activity and key metrics across all programs."
          actions={
            <>
              <Button variant="outline" size="sm">
                <Download />
                Export
              </Button>
              <Button size="sm">
                <Plus />
                New report
              </Button>
            </>
          }
          metrics={stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader>
                <Flex alignPrimary="space-between" alignSecondary="center">
                  <CardDescription>{stat.title}</CardDescription>
                  <stat.icon className="size-4 text-muted-foreground" />
                </Flex>
                <CardTitle className="text-3xl">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-emerald-600">
                    {stat.change}
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          ))}
          aside={
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Latest updates across programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Flex direction="column" gap="300">
                  {feed.map((item, i) => (
                    <div key={item}>
                      <Flex alignSecondary="center" gap="300">
                        <div className="size-2 shrink-0 rounded-full bg-emerald-500" />
                        <span className="text-sm">{item}</span>
                      </Flex>
                      {i < feed.length - 1 && <Separator className="mt-3" />}
                    </div>
                  ))}
                </Flex>
              </CardContent>
            </Card>
          }
        >
          <Card>
            <CardHeader>
              <Flex alignPrimary="space-between" alignSecondary="center">
                <div>
                  <CardTitle>Training Sessions</CardTitle>
                  <CardDescription>
                    Active programs this quarter
                  </CardDescription>
                </div>
                <Badge variant="secondary">Live</Badge>
              </Flex>
            </CardHeader>
            <CardContent>
              <Flex direction="column" gap="200">
                {feed.slice(0, 3).map((item) => (
                  <Flex
                    key={item}
                    alignPrimary="space-between"
                    alignSecondary="center"
                    className="rounded-md border border-border/40 p-3 text-sm"
                  >
                    <span>{item}</span>
                    <span className="text-muted-foreground">In progress</span>
                  </Flex>
                ))}
              </Flex>
            </CardContent>
          </Card>
        </DashboardTemplate>
      }
    />
  );
}
