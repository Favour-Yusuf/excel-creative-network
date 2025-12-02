// src/data/servicesData.ts
export type ServiceItem = {
  slug: string;
  title: string;
  image: string;
  description: string;
  longContent?: string; // optional extended content (HTML/markdown/plain)
};

export const servicesList: ServiceItem[] = [
  {
    slug: "mechanical",
    title: "Mechanical Services",
    image: "/mechanical.jpg",
    description:
      "We design, install, and upgrade critical mechanical systems—chillers, VRF/VRV, AHUs/FCUs, ventilation, pumps, and compressors.",
    longContent:
      "Full long-form content for Mechanical Services goes here. Include bullet lists, commissioning steps, lifecycle support details, and any downloadable docs links."
  },
  {
    slug: "electrical",
    title: "Electrical Services",
    image: "/Electrical.jpg",
    description:
      "Safe, code-compliant LV/MV systems, transformers, switchgear, UPS integration and QA/QC for reliable power.",
    longContent:
      "Detailed electrical content: testing protocols, arc-flash study notes, commissioning steps, maintenance packages, test records, etc."
  },
  {
    slug: "construction-management",
    title: "Construction Management",
    image: "/Construction.jpg",
    description:
      "Pre-construction planning, budgets, procurement and on-site coordination to de-risk projects and deliver predictable outcomes.",
    longContent:
      "Detailed CM content: earned-value tracking, change control, digital snagging, handover packs and training."
  },
  {
    slug: "solar",
    title: "Solar",
    image: "/Solar.jpg",
    description:
      "Bankable solar solutions (PVsyst yield modelling, BOS, monitoring) and O&M programs to protect ROI.",
    longContent: "Detailed solar content..."
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    image: "/Plumbing.jpg",
    description:
      "Potable/hot water systems, drainage, grease separation, LPG/NG systems, commissioning and O&M.",
    longContent: "Detailed plumbing content..."
  },
  {
    slug: "emergency-planning",
    title: "Emergency Planning",
    image: "/Emergency.jpg",
    description:
      "Risk assessment, playbooks, drills, 24/7 escalation and post-event RCA & corrective actions.",
    longContent: "Detailed emergency planning content..."
  },
  {
    slug: "welding-fabrication",
    title: "Welding & Fabrication",
    image: "/Welding.jpg",
    description:
      "Shop fabrication and site erection with certified WPS/PQR, NDT and full traceability.",
    longContent: "Detailed welding & fabrication content..."
  }
];

export const servicesBySlug: Record<string, ServiceItem> = servicesList.reduce(
  (acc, s) => {
    acc[s.slug] = s;
    return acc;
  },
  {} as Record<string, ServiceItem>
);
