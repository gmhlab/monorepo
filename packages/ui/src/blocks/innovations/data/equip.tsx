import {
  FileText,
  Globe,
  GraduationCap,
  FileDown,
  Settings,
  Users,
  CheckCircle,
  Rocket,
  ClipboardList,
  FolderOpen,
} from "lucide-react";
import type { InnovationData } from "../innovation-page";

export function getEquipData(assetBase: string = "/"): InnovationData {
  return {
    hero: {
      title: "EQUIP Platform",
      subtitle: "Evidence-based quality improvement for mental health services",
    },

    whatIsIt: {
      headline:
        "A structured approach to transforming mental health care quality",
      body: "EQUIP is a competency-based training and supervision system designed to ensure non-specialist providers can deliver high-quality psychological interventions. Developed in partnership with WHO and UNICEF, EQUIP standardizes how we assess, train, and support mental health workers in low-resource settings worldwide.",
      capabilities: [
        {
          label: "Free. Evidence-Based. WHO/UNICEF Backed.",
          detail:
            "EQUIP is a free digital platform developed by WHO and UNICEF over 5 years of rigorous research across 36 countries. No subscription fees, no paywalls—just validated competency assessment tools used in 794 training programs with 10,000+ assessments completed. You get the same quality framework that major humanitarian organizations like UNICEF, IOM, and the Red Cross rely on.",
        },
        {
          label: "Turn Good Trainers into Great Ones.",
          detail:
            "EQUIP doesn't just assess trainees—it transforms trainers. When Josephine in Uganda started using competency-based feedback, she discovered blind spots in her own teaching she'd missed for years. The platform's visual dashboards show patterns across your entire cohort: which skills everyone struggles with, where your curriculum has gaps, and exactly where to focus your limited supervision time.",
        },
        {
          label: "Your Language. Your Context. Your Culture.",
          detail:
            "'Open body posture' means different things in Nairobi and Karachi. EQUIP was co-designed with practitioners in Nepal, Liberia, Uganda, Jordan, Lebanon, Peru, Ethiopia, Kenya, and Zambia—with tools available in 14 languages and guidance on adapting role-plays for local norms around eye contact, physical touch, and emotional expression. This isn't a Western framework dropped into your context. Its a flexible system built to meet you where you are.",
        },
      ],
      highlight:
        "Validated across low- and middle-income country mental health settings",
    },

    howToUse: {
      steps: [
        {
          title: "Prepare",
          description: "Set up your team on the platform.",
          graphic: (
            <img
              src={`${assetBase}prepare.png`}
              alt="Trainer reviewing materials with a mental health worker"
              width={144}
              height={144}
              className="object-cover"
            />
          ),
          icon: Users,
        },
        {
          title: "Observe",
          description: "Watch provider sessions.",
          icon: ClipboardList,
          graphic: (
            <img
              src={`${assetBase}observe.png`}
              alt="Trainer reviewing materials with a mental health worker"
              width={144}
              height={144}
              className="object-cover"
            />
          ),
        },
        {
          title: "Rate",
          description: "Check off the observed behaviors.",
          icon: Settings,
          graphic: (
            <img
              src={`${assetBase}rate.png`}
              alt="Trainer reviewing materials with a mental health worker"
              width={152}
              height={152}
              className="object-cover"
            />
          ),
        },
        {
          title: "Visualize",
          description: "Generate charts and graphs.",
          icon: CheckCircle,
          graphic: (
            <img
              src={`${assetBase}visualize.png`}
              alt="Trainer reviewing materials with a mental health worker"
              width={160}
              height={160}
              className="object-cover"
            />
          ),
        },
        {
          title: "Feedback",
          description: "Give competency-based feedback.",
          icon: Rocket,
          graphic: (
            <img
              src={`${assetBase}feedback.png`}
              alt="Trainer reviewing materials with a mental health worker"
              width={160}
              height={160}
              className="object-cover"
            />
          ),
        },
      ],
    },

    testing: {
      headline: "How did we evaluate EQUIP?",
      body: "EQUIP was evaluated through a stepped-wedge cluster randomized trial across outpatient mental health facilities. Quality scores improved significantly across all six domains over the 18-month study period.",
      callout:
        "Facilities using EQUIP showed a 47% average improvement in overall quality scores compared to control sites.",
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
      storyIntro: "Trainer Spotlight: How EQUIP transformed training in Uganda",
      paragraphs: [
        "After 12 years in mental health, Josephine saw the gap. 'Knowledge tests don't tell you who can actually deliver care safely.'",
        "So she built EQUIP into training for community health workers running Group IPT — role plays drawn from real sessions, ENACT and GroupACT to measure competency, supervision aimed at the behaviors that mattered.",
        "Harmful behaviors dropped 68%. Helpful ones rose 92%. Her workers have since delivered safe care to 190 women, and Josephine has trained 240 people across 971 assessments.",
      ],
      quote:
        "I strongly believe that incorporating the EQUIP approach is necessary in any training. Without it, I would have been unable to provide the level of assistance required...",
      name: "Josephine Akellot, MSc",
      role: "Clinical Psychologist & Mental Health Technical Leader",
      org: "HealthRight Uganda",
    },

    getIt: {
      heading: "Training and Implementation Resources",
      body: "EQUIP is freely available to mental health facilities in LMICs. Access the full implementation package including facilitator guides, assessment tools, and training videos.",
      resources: [
        { icon: FolderOpen, label: "Case Studies", href: "#" },
        {
          icon: Globe,
          label: "EQUIP Platform",
          href: "https://equipcompetency.org",
        },
        { icon: FileText, label: "Project Overview", href: "#" },
        { icon: GraduationCap, label: "Research & Publications", href: "#" },
        { icon: FileDown, label: "Training Manual", href: "#" },
      ],
      highlight:
        "All EQUIP materials are open-access and available in multiple languages.",
    },

    cta: {
      label: "Get EQUIP Materials",
      href: "#",
    },

    navigation: {
      items: [
        { href: "/innovations/equip", label: "EQUIP" },
        { href: "/innovations/photovoice", label: "Photovoice" },
        { href: "/innovations/sensingtech", label: "SensingTech" },
      ],
      current: 1,
    },
  };
}
