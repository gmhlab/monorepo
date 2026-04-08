import { BookOpen, FileText, Video, Download, Camera, Users, MessageSquare, Share2, Presentation } from "lucide-react";
import type { InnovationData } from "@repo/ui";

export const photovoiceData: InnovationData = {
  hero: {
    title: "Photovoice",
    subtitle: "Community-led research through the lens of lived experience",
  },

  whatIsIt: {
    headline: "A participatory research method that amplifies community voices",
    body: "Photovoice is a community-based participatory research approach where participants use photography to document their lived experiences, spark critical dialogue, and advocate for social change.",
    capabilities: [
      {
        label: "Participatory photography",
        detail: "Community members photograph issues that matter to them, building agency and narrative ownership.",
      },
      {
        label: "Facilitated reflection (SHOWeD)",
        detail: "Structured discussion methodology guides groups to analyze photos and identify root causes.",
      },
      {
        label: "Policy translation",
        detail: "Findings are compiled into advocacy materials shared with decision-makers and community stakeholders.",
      },
    ],
    highlight: "Developed by Wang & Burris — used in mental health research across 30+ countries",
  },

  howToUse: {
    steps: [
      {
        title: "Recruit participants",
        description: "Identify 8–12 community members with lived experience of the issue being studied.",
        icon: Users,
      },
      {
        title: "Train and orient",
        description: "Provide camera training, ethics guidance (consent, privacy), and introduce the research themes.",
        icon: Camera,
      },
      {
        title: "Photograph",
        description: "Participants document their experiences over 2–4 weeks using cameras or smartphones.",
        icon: Camera,
      },
      {
        title: "Discuss (SHOWeD)",
        description: "Facilitate group sessions where participants select and reflect on their images together.",
        icon: MessageSquare,
      },
      {
        title: "Share and advocate",
        description: "Present findings to policymakers, community leaders, and the public through exhibitions or reports.",
        icon: Share2,
      },
      {
        title: "Disseminate",
        description: "Publish findings and return results to the community in accessible formats.",
        icon: Presentation,
      },
    ],
  },

  testing: {
    headline: "How was Photovoice evaluated in a mental health context?",
    body: "A mixed-methods evaluation was conducted across three Photovoice projects in sub-Saharan Africa, measuring participant empowerment, stigma reduction, and policy uptake before and after the intervention.",
    callout: "Participants reported a 62% increase in sense of agency and 74% reported sharing their experiences with community members for the first time.",
    barData: [
      { name: "Week 2", value: 28 },
      { name: "Week 4", value: 45 },
      { name: "Week 6", value: 59 },
      { name: "Week 8", value: 72 },
      { name: "Week 10", value: 81 },
      { name: "Week 12", value: 88 },
    ],
    pieData1: [
      { name: "Empowered", value: 82 },
      { name: "Neutral/No change", value: 18 },
    ],
    pieData2: [
      { name: "Reduced stigma", value: 69 },
      { name: "Unchanged", value: 31 },
    ],
  },

  userStory: {
    storyIntro: "A participant's journey from silence to advocacy",
    paragraphs: [
      "I had never told anyone outside my family about my son's illness. The stigma in our community made it feel impossible. When I joined the Photovoice group I thought I would just take some pictures. I didn't expect it to change how I saw myself.",
      "One photo I took — of an empty chair at a community meeting — became the center of a two-hour conversation about exclusion. That photograph said what I had never been able to put into words.",
      "Six months later, I presented our group's findings to the district health board. They changed the community mental health outreach schedule based on what we showed them. I was part of making that happen.",
    ],
    quote: "Photovoice gave me a voice I didn't know I had. And it gave that voice somewhere to go.",
    name: "Grace Mwangi",
    role: "Caregiver & Community Advocate",
    org: "Nairobi Community Mental Health Network",
  },

  getIt: {
    heading: "Run Photovoice in Your Community",
    body: "Download the full facilitator toolkit, ethics templates, and SHOWeD discussion guides. All resources are open-access and adaptable for your local context.",
    resources: [
      { icon: BookOpen, label: "Facilitator Handbook", href: "#" },
      { icon: Video, label: "Training and Orientation Videos", href: "#" },
      { icon: FileText, label: "Consent and Ethics Templates", href: "#" },
      { icon: Download, label: "Full Photovoice Toolkit", href: "#" },
    ],
    highlight: "Toolkits available in English, French, Swahili, and Portuguese.",
  },

  cta: {
    label: "Get Photovoice Materials",
    href: "#",
  },

  navigation: {
    prevHref: "/innovations/equip",
    nextHref: undefined,
    current: 2,
    total: 2,
  },
};
