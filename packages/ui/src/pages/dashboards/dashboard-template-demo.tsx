"use client";

import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
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
import { Progress } from "../../primitives/progress";
import { Separator } from "../../primitives/separator";
import { Tabs, TabsList, TabsTrigger } from "../../primitives/tabs";
import { Avatar, AvatarFallback } from "../../primitives/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../primitives/table";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "../../primitives/sidebar";

const stats = [
  {
    title: "Total Users",
    value: "2,450",
    change: "+12%",
    up: true,
    progress: 72,
    icon: Users,
  },
  {
    title: "Assessments",
    value: "15,500",
    change: "+8%",
    up: true,
    progress: 64,
    icon: BarChart3,
  },
  {
    title: "Countries",
    value: "36",
    change: "+3",
    up: true,
    progress: 48,
    icon: Globe,
  },
  {
    title: "Completion Rate",
    value: "78%",
    change: "-2%",
    up: false,
    progress: 78,
    icon: TrendingUp,
  },
];

const navItems = [
  { label: "Overview", icon: Activity, active: true },
  { label: "Reports", icon: BarChart3, active: false },
  { label: "Audiences", icon: Users, active: false },
  { label: "Settings", icon: Settings, active: false },
];

const programs = [
  { name: "EQUIP Competency Training", region: "Uganda", value: 86 },
  { name: "Photovoice Workshop", region: "Kenya", value: 64 },
  { name: "Group IPT Supervision", region: "Nepal", value: 52 },
  { name: "Wellbeing Survey rollout", region: "Jordan", value: 38 },
];

const assessments = [
  { name: "Sarah K.", country: "Uganda", score: 87, status: "Passed" },
  { name: "James O.", country: "Kenya", score: 92, status: "Passed" },
  { name: "Amina T.", country: "Nepal", score: 74, status: "Review" },
  { name: "Daniel M.", country: "Jordan", score: 61, status: "Review" },
];

const activity = [
  { who: "Sarah K.", what: "completed EQUIP module 4", when: "2m" },
  { who: "James O.", what: "submitted a Photovoice entry", when: "18m" },
  { who: "Amina T.", what: "scored 74% on supervision", when: "1h" },
  { who: "Daniel M.", what: "joined the Jordan cohort", when: "3h" },
];

const regions = [
  { name: "East Africa", value: 42 },
  { name: "South Asia", value: 31 },
  { name: "Middle East", value: 19 },
  { name: "Latin America", value: 8 },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("");

/**
 * DashboardTemplate in context: dropped straight into AppTemplate's `content`
 * slot. AppTemplate owns the shell (sidebar + sticky header); DashboardTemplate
 * owns the page scaffold (header, toolbar, metrics, body + aside).
 *
 * A deliberately dense composition — KPI cards, a tabbed toolbar, a completion
 * panel, a data table, and an aside feed — to show the template carrying a busy
 * page while keeping a single, legible vertical rhythm.
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
          eyebrow="Platform · Live"
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
          toolbar={
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="programs">Programs</TabsTrigger>
                <TabsTrigger value="assessments">Assessments</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
            </Tabs>
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
                <Flex direction="column" gap="200">
                  <Badge
                    variant={stat.up ? "secondary" : "destructive"}
                    className="gap-1"
                  >
                    {stat.up ? (
                      <ArrowUpRight className="size-3" />
                    ) : (
                      <ArrowDownRight className="size-3" />
                    )}
                    {stat.change}
                  </Badge>
                  <Progress value={stat.progress} />
                </Flex>
              </CardContent>
            </Card>
          ))}
          aside={
            <Flex direction="column" gap="600" className="h-full">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Latest updates across programs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Flex direction="column" gap="300">
                    {activity.map((a, i) => (
                      <div key={a.who}>
                        <Flex alignSecondary="center" gap="300">
                          <Avatar size="sm">
                            <AvatarFallback>{initials(a.who)}</AvatarFallback>
                          </Avatar>
                          <div className="min-w-0 grow">
                            <p className="truncate text-sm">
                              <span className="font-medium">{a.who}</span>{" "}
                              <span className="text-muted-foreground">
                                {a.what}
                              </span>
                            </p>
                          </div>
                          <span className="shrink-0 text-xs text-muted-foreground">
                            {a.when}
                          </span>
                        </Flex>
                        {i < activity.length - 1 && (
                          <Separator className="mt-3" />
                        )}
                      </div>
                    ))}
                  </Flex>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Regions</CardTitle>
                  <CardDescription>Share of active assessments</CardDescription>
                </CardHeader>
                <CardContent>
                  <Flex direction="column" gap="300">
                    {regions.map((r) => (
                      <Flex key={r.name} direction="column" gap="100">
                        <Flex
                          alignPrimary="space-between"
                          alignSecondary="center"
                        >
                          <span className="text-sm">{r.name}</span>
                          <span className="text-sm font-medium tabular-nums">
                            {r.value}%
                          </span>
                        </Flex>
                        <Progress value={r.value} />
                      </Flex>
                    ))}
                  </Flex>
                </CardContent>
              </Card>
            </Flex>
          }
        >
          <Flex direction="column" gap="600">
            <Card>
              <CardHeader>
                <Flex alignPrimary="space-between" alignSecondary="center">
                  <div>
                    <CardTitle>Program Completion</CardTitle>
                    <CardDescription>
                      Active programs this quarter
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">Live</Badge>
                </Flex>
              </CardHeader>
              <CardContent>
                <Flex direction="column" gap="400">
                  {programs.map((p) => (
                    <Flex key={p.name} direction="column" gap="100">
                      <Flex
                        alignPrimary="space-between"
                        alignSecondary="center"
                      >
                        <span className="text-sm font-medium">{p.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {p.region} · {p.value}%
                        </span>
                      </Flex>
                      <Progress value={p.value} />
                    </Flex>
                  ))}
                </Flex>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Assessments</CardTitle>
                <CardDescription>
                  Competency evaluations completed this week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Participant</TableHead>
                      <TableHead>Country</TableHead>
                      <TableHead className="text-right">Score</TableHead>
                      <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {assessments.map((a) => (
                      <TableRow key={a.name}>
                        <TableCell className="font-medium">{a.name}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {a.country}
                        </TableCell>
                        <TableCell className="text-right tabular-nums">
                          {a.score}%
                        </TableCell>
                        <TableCell className="text-right">
                          <Badge
                            variant={
                              a.status === "Passed" ? "secondary" : "outline"
                            }
                          >
                            {a.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </Flex>
        </DashboardTemplate>
      }
    />
  );
}
