"use client"

import { Users, BarChart3, Globe, TrendingUp } from "lucide-react"
import { PageHeader } from "../../patterns/page-header"
import { SectionHeader } from "../../patterns/section-header"
import { Flex, Grid, Section } from "../../layout"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../primitives/card"

const stats = [
  { title: "Total Users", value: "2,450", change: "+12%", icon: Users },
  { title: "Assessments", value: "15,500", change: "+8%", icon: BarChart3 },
  { title: "Countries", value: "36", change: "+3", icon: Globe },
  { title: "Completion Rate", value: "78%", change: "+5%", icon: TrendingUp },
]

export function DashboardPage() {
  return (
    <Section padding="1200" variant="stroke">
      <PageHeader
        title="Dashboard"
        description="Overview of platform activity and key metrics."
      />

      <Grid columns="repeat(auto-fit, minmax(12rem, 1fr))" gap="400" className="mb-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardDescription>{stat.title}</CardDescription>
                <stat.icon className="size-4 text-muted-foreground" />
              </div>
              <CardTitle className="text-3xl">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                <span className="text-emerald-600 font-medium">
                  {stat.change}
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </Grid>

      <SectionHeader
        title="Recent Activity"
        description="Latest updates across the platform"
      />

      <Grid columns="repeat(auto-fit, minmax(20rem, 1fr))" gap="600">
        <Card>
          <CardHeader>
            <CardTitle>Training Sessions</CardTitle>
            <CardDescription>
              Active training programs this quarter
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Flex direction="column" gap="200">
              {[
                "EQUIP Competency Training — Uganda",
                "Photovoice Workshop — Kenya",
                "Group IPT Supervision — Nepal",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-md border border-border/40 p-3 text-sm"
                >
                  <div className="size-2 rounded-full bg-emerald-500" />
                  {item}
                </div>
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
            <Flex direction="column" gap="200">
              {[
                { name: "Sarah K.", score: "87%" },
                { name: "James O.", score: "92%" },
                { name: "Amina T.", score: "74%" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-md border border-border/40 p-3 text-sm"
                >
                  <span>{item.name}</span>
                  <span className="font-medium">{item.score}</span>
                </div>
              ))}
            </Flex>
          </CardContent>
        </Card>
      </Grid>
    </Section>
  )
}
