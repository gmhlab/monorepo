import { BookOpen, FileText, Video, Download, Settings, Users, CheckCircle, Rocket, ClipboardList } from "lucide-react";
import type { InnovationData } from "@repo/ui";

export const equipData: InnovationData = {
  hero: {
    title: "EQUIP",
    subtitle: "Evidence-based quality improvement for mental health services",
  },

  whatIsIt: {
    headline: "A structured approach to transforming mental health care quality",
    body: "EQUIP is a collaborative quality improvement intervention that brings together mental health service users, caregivers, and providers to identify gaps and drive meaningful change in care delivery.",
    capabilities: [
      {
        label: "Collaborative assessment",
        detail: "Facilitates structured dialogue between service users, caregivers, and clinicians to surface real-world quality gaps.",
      },
      {
        label: "Action planning",
        detail: "Teams co-develop concrete, time-bound action plans targeting the highest-priority quality issues.",
      },
      {
        label: "Progress monitoring",
        detail: "Regular review cycles with standardized metrics track improvement over time.",
      },
    ],
    highlight: "Validated across low- and middle-income country mental health settings",
  },

  howToUse: {
    steps: [
      {
        title: "Form your QI team",
        description: "Recruit a multidisciplinary team including at least one service user, one caregiver, and clinical staff.",
        icon: Users,
      },
      {
        title: "Assess current quality",
        description: "Use the EQUIP assessment guide to identify gaps across six quality domains.",
        icon: ClipboardList,
      },
      {
        title: "Prioritize and plan",
        description: "Select the top priority areas and co-develop specific, measurable action steps.",
        icon: Settings,
      },
      {
        title: "Implement changes",
        description: "Carry out planned changes over a defined improvement cycle (typically 3–6 months).",
        icon: CheckCircle,
      },
      {
        title: "Review and iterate",
        description: "Measure outcomes, share learnings, and begin the next improvement cycle.",
        icon: Rocket,
      },
    ],
  },

  testing: {
    headline: "How did we evaluate EQUIP?",
    body: "EQUIP was evaluated through a stepped-wedge cluster randomized trial across outpatient mental health facilities. Quality scores improved significantly across all six domains over the 18-month study period.",
    callout: "Facilities using EQUIP showed a 47% average improvement in overall quality scores compared to control sites.",
    barData: [
      { name: "Month 3", value: 38 },
      { name: "Month 6", value: 52 },
      { name: "Month 9", value: 61 },
      { name: "Month 12", value: 74 },
      { name: "Month 15", value: 83 },
      { name: "Month 18", value: 91 },
    ],
    pieData1: [
      { name: "Met", value: 78 },
      { name: "Not met", value: 22 },
    ],
    pieData2: [
      { name: "Improved", value: 85 },
      { name: "Unchanged", value: 15 },
    ],
  },

  userStory: {
    storyIntro: "A community mental health nurse's experience with EQUIP",
    paragraphs: [
      "Before EQUIP, our team rarely sat down with service users to talk about what was missing in our care. We assumed we knew what people needed. The QI process changed that — it gave us a structure for listening.",
      "During our first assessment cycle we discovered that nearly half of our clients didn't understand their diagnosis. That was confronting, but it gave us something concrete to act on. Within three months we'd redesigned how clinicians deliver psychoeducation.",
      "The most unexpected outcome was the shift in team culture. Providers started asking for user feedback proactively rather than waiting for the formal review meetings.",
    ],
    quote: "EQUIP didn't just improve our scores — it changed how we relate to the people we're trying to help.",
    name: "Amara Diallo",
    role: "Community Mental Health Nurse",
    org: "Regional Outpatient Mental Health Clinic",
  },

  getIt: {
    heading: "Training and Implementation Resources",
    body: "EQUIP is freely available to mental health facilities in LMICs. Access the full implementation package including facilitator guides, assessment tools, and training videos.",
    resources: [
      { icon: BookOpen, label: "EQUIP Implementation Guide", href: "#" },
      { icon: Video, label: "Facilitator Training Videos", href: "#" },
      { icon: FileText, label: "Quality Assessment Tools", href: "#" },
      { icon: Download, label: "Full Resource Package", href: "#" },
    ],
    highlight: "All EQUIP materials are open-access and available in multiple languages.",
  },

  cta: {
    label: "Get EQUIP Materials",
    href: "#",
  },

  navigation: {
    prevHref: undefined,
    nextHref: "/innovations/photovoice",
    current: 1,
    total: 2,
  },
};
