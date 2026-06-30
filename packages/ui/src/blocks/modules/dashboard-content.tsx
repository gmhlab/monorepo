"use client"

import { Users, BarChart3, Globe, TrendingUp } from "lucide-react"
import { Flex, Grid, Section } from "../../layout"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../primitives/card"
import { TextContentHeading } from "../../primitives/Text/Text"

const stats = [
  { title: "Total Users", value: "2,450", change: "+12%", icon: Users },
  { title: "Assessments", value: "15,500", change: "+8%", icon: BarChart3 },
  { title: "Countries", value: "36", change: "+3", icon: Globe },
  { title: "Completion Rate", value: "78%", change: "+5%", icon: TrendingUp },
]

export function DashboardPage() {
  return (
    <Section padding="600" variant="stroke">
      <Flex direction="column" gap="600" className="mb-8">
      <TextContentHeading
        heading="Key Metrics"
        subheading="Overview of platform activity and key metrics."
      />

      <Grid columns="repeat(auto-fit, minmax(12rem, 1fr))" gap="400" className="mb-8 w-full">
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
      </Flex>
      <Flex direction="column" gap="600" className="mb-8">  

      <TextContentHeading
        heading="Recent Activity"
        subheading="Latest updates across the platform"
      />

      <Grid columns="repeat(auto-fit, minmax(20rem, 1fr))" gap="600" className="w-full">
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
      </Flex>
    </Section>
  )
}

/** Placeholder dashboard content — the card grid + main panel. */
export function DashboardContent() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  )
}