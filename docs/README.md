# GMH Lab /dist

## iFame Wix Snippets

### Original (Full Page)
``` html
<link rel="stylesheet" crossorigin href="https://gmhlab.github.io/monorepo/assets/index-CRSub3Xk.css">

<script type="module" crossorigin src="https://gmhlab.github.io/monorepo/assets/index-DCAjh5Vj.js"></script>

<div id="root"></div>
```

### Hero Section
``` html
<link rel="stylesheet" href="https://gmhlab.github.io/monorepo/assets/data-table-C6tbjwo4.css">

<div id="hero-section"></div>
<!-- rest of embed code -->

<script type="module">
  import { mount } from 'https://gmhlab.github.io/monorepo/widgets/hero-section.js';

  mount('#hero-section', {
    title: "EQUIP",
    subtitle: "Enhancing Quality of care through Unified training and Integration of Practices"  

  });
</script>
```
### 'What Is It' Section
``` html
<link rel="stylesheet" href="https://gmhlab.github.io/monorepo/assets/data-table-C6tbjwo4.css">

<div id="what-is-section"></div>
<!-- rest of embed code -->

<script type="module">
  import { mount } from 'https://gmhlab.github.io/monorepo/widgets/what-is-section.js';

  mount('#what-is-section', {
    headline: "A digital training platform for mental health workers",
    body: "EQUIP provides evidence-based training modules designed to build capacity among healthcare workers in low-resource settings.",
    capabilities: [
      { label: "Self-paced learning", detail: "Complete modules at your own pace with progress tracking." },
      { label: "Evidence-based content", detail: "All content is developed from WHO guidelines and research." },
      { label: "Offline access", detail: "Download modules for use in areas with limited connectivity." },
    ],
    highlight: "500+ trained providers",
  });
</script>
```

### Partner Marquee
``` html
<link rel="stylesheet" href="https://gmhlab.github.io/monorepo/assets/data-table-C6tbjwo4.css">

<div id="partner-marquee"></div>

<script type="module">
  import { mount } from 'https://gmhlab.github.io/monorepo/widgets/partner-marquee.js';

  mount('#partner-marquee');
</script>
```

### How To Section
``` html
<link rel="stylesheet" href="https://gmhlab.github.io/monorepo/assets/data-table-C6tbjwo4.css">

<div id="how-to-section"></div>

<script type="module">
  import { mount } from 'https://gmhlab.github.io/monorepo/widgets/how-to-section.js';

  mount('#how-to-section', {
    steps: [
      { title: "Prepare", description: "Set up your team on the platform.", graphicUrl: "https://gmhlab.github.io/monorepo/prepare.png", graphicWidth: 144, graphicHeight: 144 },
      { title: "Observe", description: "Watch provider sessions.", graphicUrl: "https://gmhlab.github.io/monorepo/observe.png", graphicWidth: 144, graphicHeight: 144 },
      { title: "Rate", description: "Check off the observed behaviors.", graphicUrl: "https://gmhlab.github.io/monorepo/rate.png", graphicWidth: 152, graphicHeight: 152 },
      { title: "Visualize", description: "Generate charts and graphs.", graphicUrl: "https://gmhlab.github.io/monorepo/visualize.png", graphicWidth: 160, graphicHeight: 160 },
      { title: "Feedback", description: "Give competency-based feedback.", graphicUrl: "https://gmhlab.github.io/monorepo/feedback.png", graphicWidth: 160, graphicHeight: 160 },
    ],
  });
</script>
```

## Sample Data

``` tsx
// Sample data for preview - replace with actual data or import from @repo/ui
const sampleData = {
  hero: {
    title: "EQUIP",
    subtitle: "Enhancing Quality of care through Unified Training and Integration of Practices",
  },
  whatIsIt: {
    headline: "A digital training platform for mental health workers",
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
```

## Notes

https://equipcompetency.org/en-gb

https://equipcompetency.org/en-gb/resources/7810

https://www.comfy.org/

# Innovations

## EQUIP Hero Contact Sumbission Form 

### Fields:
 - Name
 - Organization
 - Country
 - Text area 

 ## "Trusted Partners"
 - HealthRight International
 - Socios En Salud
 - Center for Victims of Torture
 - HealthyBlue
 - NYC Mayor's Office of Community Mental Health
 - Transcultural Psychosocial Organization Nepal
 - Lebanon Minsitry of Health
 - YouBelong Uganda
 - Hospital Moinhos de Vento
 - WHO 
 - UNICEF
 - UNHCR
 - Medicins Sans Frontiers
 - World Bank
 
 ## How How Have We Tested It
- 1 billion lack access to effective mental healthcare
  - 1 in 7
- %increase in improvement
- Number of Trainees Assessed
- Culmulative Number of Assessements

## Who Has Used It
- Josephine

## How Do I Get It?
- Real World Examples 
- Equip Competency .org 
- Equip Project Page
- Publications Equip Page.
- EQUIP Foundational Skills Training Manual

## CTA Button
- Equip Competency .org 