import {
  PageHeader,
  SectionHeader,
  FeatureCard,
  EmptyState,
  FormSection,
  ProfileHeader,
  SidebarNav,
  Button,
  Badge,
  Input,
  Label,
  Separator,
  Avatar,
  AvatarImage,
  AvatarFallback,
  SidebarProvider,
} from "@repo/ui";
import {
  Sparkles,
  ShieldCheck,
  Globe,
  Inbox,
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  BarChart3,
} from "lucide-react";
import { mount } from "../bootstrap";

/** A labelled frame around each pattern so the demo reads like a catalog. */
function Specimen({
  name,
  file,
  description,
  children,
}: {
  name: string;
  file: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-12">
      <div className="mb-6 flex flex-col gap-1">
        <div className="flex items-baseline gap-3">
          <h2 className="text-lg font-semibold tracking-tight">{name}</h2>
          <code className="text-xs text-muted-foreground">patterns/{file}</code>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="rounded-lg border border-dashed border-border bg-muted/30 p-6">
        {children}
      </div>
    </section>
  );
}

function PatternsDemo() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-8">
        {/* Intro */}
        <div className="mb-4 flex flex-col gap-3">
          <Badge variant="secondary" className="w-fit">
            @repo/ui · patterns layer
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">Patterns</h1>
          <p className="max-w-2xl text-muted-foreground">
            Stateless UI recipes composed from primitives and layout. Every
            component file in{" "}
            <code className="text-sm">packages/ui/src/patterns/</code> is
            showcased below with representative props.
          </p>
        </div>

        {/* PageHeader */}
        <Specimen
          name="PageHeader"
          file="page-header.tsx"
          description="Top-of-page heading with optional breadcrumb, badge, description, and actions."
        >
          <PageHeader
            breadcrumb={
              <span>
                Studies <span className="px-1">/</span> Active
              </span>
            }
            badge={
              <>
                <Sparkles className="size-3.5" /> New cohort
              </>
            }
            title="Kenya Adolescent Wellbeing"
            description="A longitudinal study tracking mental health outcomes across 12 sites."
            actions={
              <>
                <Button variant="outline" size="sm">
                  Export
                </Button>
                <Button size="sm">Add participant</Button>
              </>
            }
          />
        </Specimen>

        {/* SectionHeader */}
        <Specimen
          name="SectionHeader"
          file="section-header.tsx"
          description="Compact heading for a content section, with optional inline action."
        >
          <SectionHeader
            title="Recent responses"
            description="Survey submissions from the last 24 hours."
            action={
              <Button variant="ghost" size="sm">
                View all
              </Button>
            }
          />
        </Specimen>

        {/* FeatureCard */}
        <Specimen
          name="FeatureCard"
          file="feature-card.tsx"
          description="Card highlighting a single feature with an icon, title, and description."
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <FeatureCard
              icon={
                <div className="mb-4 flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <ShieldCheck className="size-5" />
                </div>
              }
              title="Secure capture"
              description="Collect responses offline and sync to encrypted, consent-aware storage."
            />
            <FeatureCard
              icon={
                <div className="mb-4 flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Globe className="size-5" />
                </div>
              }
              title="Multilingual"
              description="Deliver every screen and instrument in the participant's language."
            />
            <FeatureCard
              title="Default icon"
              description="With no icon prop, the card renders its built-in placeholder block."
            />
          </div>
        </Specimen>

        {/* EmptyState */}
        <Specimen
          name="EmptyState"
          file="empty-state.tsx"
          description="Centered placeholder for empty lists, with icon, copy, and actions."
        >
          <EmptyState
            icon={<Inbox className="size-12" />}
            title="No responses yet"
            description="Once participants begin the survey, their submissions will appear here."
            action={<Button>Share survey link</Button>}
            secondaryAction={
              <Button variant="ghost" size="sm">
                Learn more
              </Button>
            }
          />
        </Specimen>

        {/* FormSection */}
        <Specimen
          name="FormSection"
          file="form-section.tsx"
          description="Two-column form row: a title/description sidebar beside the form fields."
        >
          <FormSection
            title="Study details"
            description="Basic information shown to participants on the consent screen."
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="study-name">Study name</Label>
                <Input
                  id="study-name"
                  defaultValue="Kenya Adolescent Wellbeing"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="pi">Principal investigator</Label>
                <Input id="pi" placeholder="Dr. Jane Doe" />
              </div>
            </div>
          </FormSection>
        </Specimen>

        {/* ProfileHeader */}
        <Specimen
          name="ProfileHeader"
          file="profile-header.tsx"
          description="Avatar, name, and bio header. Supports start / center / end alignment."
        >
          <div className="grid gap-8 sm:grid-cols-2">
            <ProfileHeader
              align="center"
              avatar={
                <Avatar className="size-20">
                  <AvatarImage src="https://i.pravatar.cc/160?img=47" alt="" />
                  <AvatarFallback>AO</AvatarFallback>
                </Avatar>
              }
              heading="Amara Okafor"
              description="Field coordinator, East Africa region."
            />
            <ProfileHeader
              align="start"
              avatar={
                <Avatar className="size-20">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              }
              heading="Dr. Jane Doe"
              description="Principal investigator and clinical psychologist (start-aligned)."
            />
          </div>
        </Specimen>

        {/* SidebarNav */}
        <Specimen
          name="SidebarNav"
          file="sidebar-nav.tsx"
          description="Grouped navigation menu built on the sidebar primitives (needs a SidebarProvider)."
        >
          <SidebarProvider>
            <div className="w-64 rounded-md border border-border bg-sidebar p-2 text-sidebar-foreground">
              <SidebarNav
                groups={[
                  {
                    label: "Overview",
                    items: [
                      { title: "Dashboard", href: "#", icon: LayoutDashboard },
                      { title: "Analytics", href: "#", icon: BarChart3 },
                    ],
                  },
                  {
                    label: "Manage",
                    items: [
                      { title: "Participants", href: "#", icon: Users },
                      { title: "Documents", href: "#", icon: FileText },
                      { title: "Settings", href: "#", icon: Settings },
                    ],
                  },
                ]}
              />
            </div>
          </SidebarProvider>
        </Specimen>

        <Separator className="mt-12" />
        <p className="py-8 text-center text-sm text-muted-foreground">
          7 patterns · GMH Lab design system
        </p>
      </div>
    </div>
  );
}

mount(<PatternsDemo />);
