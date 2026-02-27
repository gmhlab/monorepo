import { HeroSection, WhatIsItSection, HowToUseSection } from "@repo/ui";

// Sample data for preview - replace with actual data or import from @repo/ui
const sampleData = {
  hero: {
    title: "EQUIP",
    subtitle: "Enhancing Quality of care through Unified training and Integration of Practices",
  },
  whatIsIt: {
    headline: "A digital training platform for mental health",
    body: "EQUIP provides evidence-based training modules designed to build capacity among healthcare workers in low-resource settings.",
    capabilities: [
      { label: "Self-paced learning", detail: "Complete modules at your own pace with progress tracking." },
      { label: "Evidence-based content", detail: "All content is developed from WHO guidelines and research." },
      { label: "Offline access", detail: "Download modules for use in areas with limited connectivity." },
    ],
    highlight: "500+ trained providers",
  },
  howToUse: {
    steps: [
      { title: "Register", 
        description: "Create an account on the EQUIP platform.", 
        graphic: <img src="/prepare.png" 
          alt="Trainer reviewing materials with a mental health worker" 
          width={144} 
          height={144} 
          className="object-cover" 
        />,
      },
      { title: "Select modules", 
        description: "Choose the training modules relevant to your practice.",
        graphic: <img src="/observe.png" 
          alt="Trainer reviewing materials with a mental health worker" 
          width={144} 
          height={144} 
          className="object-cover" 
        />,
      },
      { title: "Complete training", 
        description: "Work through interactive content and assessments.",
        graphic: <img src="/rate.png" 
          alt="Trainer reviewing materials with a mental health worker" 
          width={152} 
          height={152} 
          className="object-cover" 
        />,
      },
      { title: "Get certified", 
        description: "Receive certification upon successful completion.",
        graphic: <img src="/visualize.png" 
          alt="Trainer reviewing materials with a mental health worker" 
          width={160} 
          height={160} 
          className="object-cover" 
        />,
      },
    ],
  },
};

export function App() {
  return (
    <div className="">
      <HeroSection
        title={sampleData.hero.title}
        subtitle={sampleData.hero.subtitle}
      />
      <WhatIsItSection {...sampleData.whatIsIt} />
      <HowToUseSection {...sampleData.howToUse} />
    </div>
  );
}

export default App;
