import { BookOpen, FileText, Video, Download, Settings, Users, CheckCircle, Rocket, ClipboardList } from "lucide-react";
import type { InnovationData } from "../types";

export const equipData: InnovationData = {
  hero: {
    title: "EQUIP Platform",
    subtitle: "Evidence-based quality improvement for mental health services",
  },

  whatIsIt: {
    headline: "A structured approach to transforming mental health care quality",
    body: "EQUIP is a competency-based training and supervision system designed to ensure non-specialist providers can deliver high-quality psychological interventions. Developed in partnership with WHO and UNICEF, EQUIP standardizes how we assess, train, and support mental health workers in low-resource settings worldwide.",
    capabilities: [
      {
        label: "Free. Evidence-Based. WHO/UNICEF Backed.",
        detail: "EQUIP is a free digital platform developed by WHO and UNICEF over 5 years of rigorous research across 36 countries. No subscription fees, no paywalls—just validated competency assessment tools used in 794 training programs with 10,000+ assessments completed. You get the same quality framework that major humanitarian organizations like UNICEF, IOM, and the Red Cross rely on.",
      },
      {
        label: "Turn Good Trainers into Great Ones.",
        detail: "EQUIP doesn't just assess trainees—it transforms trainers. When Josephine in Uganda started using competency-based feedback, she discovered blind spots in her own teaching she'd missed for years. The platform's visual dashboards show patterns across your entire cohort: which skills everyone struggles with, where your curriculum has gaps, and exactly where to focus your limited supervision time.",
      },
      {
        label: "Your Language. Your Context. Your Culture.",
        detail: "'Open body posture' means different things in Nairobi and Karachi. EQUIP was co-designed with practitioners in Nepal, Liberia, Uganda, Jordan, Lebanon, Peru, Ethiopia, Kenya, and Zambia—with tools available in 14 languages and guidance on adapting role-plays for local norms around eye contact, physical touch, and emotional expression. This isn't a Western framework dropped into your context. Its a flexible system built to meet you where you are.",
      }
    ],
    highlight: "Validated across low- and middle-income country mental health settings",
  },

  howToUse: {
    steps: [
      {
        title: "Prepare",
        description: "Set up your team on the platform.",
        graphic: <img src="/prepare.png" 
          alt="Trainer reviewing materials with a mental health worker" 
          width={144} 
          height={144} 
          className="object-cover" 
        />,
        icon: Users,
      },
      {
        title: "Observe",
        description: "Watch provider sessions.",
        icon: ClipboardList,
        graphic: <img src="/observe.png" 
          alt="Trainer reviewing materials with a mental health worker" 
          width={144} 
          height={144} 
          className="object-cover" 
        />,
      },
      {
        title: "Rate",
        description: "Check off the observed behaviors.",
        icon: Settings,
        graphic: <img src="/rate.png" 
          alt="Trainer reviewing materials with a mental health worker" 
          width={152} 
          height={152} 
          className="object-cover" 
        />,
      },
      {
        title: "Visualize",
        description: "Generate charts and graphs.",
        icon: CheckCircle,
        graphic: <img src="/visualize.png" 
          alt="Trainer reviewing materials with a mental health worker" 
          width={160} 
          height={160} 
          className="object-cover" 
        />,
      },
      {
        title: "Feedback",
        description: "Give competency-based feedback.",
        icon: Rocket,
        graphic: <img src="/feedback.png" 
          alt="Trainer reviewing materials with a mental health worker" 
          width={160} 
          height={160} 
          className="object-cover" 
        />,
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
