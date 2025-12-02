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
      "We design, install, and upgrade critical mechanical systems—chillers and VRF/VRV, AHUs/FCUs, ventilation, pumps, and compressors—to improve comfort, reliability, and efficiency. Our engineers size equipment correctly, optimize duct and piping layouts, integrate controls and VFDs, and plan phased works so live operations continue with minimal disruption. Beyond install day, we provide lifecycle support: preventive maintenance plans, vibration and thermographic trending, water‑treatment routines, and recommissioning to recover lost performance. Every project is delivered with method statements, risk assessments, ITPs, commissioning records, and clear O&M manuals so your teams can operate safely and confidently."
  },
  {
    slug: "electrical",
    title: "Electrical Services",
    image: "/Electrical.jpg",
    description:
      "Safe, code-compliant LV/MV systems, transformers, switchgear, UPS integration and QA/QC for reliable power.",
    longContent:
      "From concept to energization, we deliver safe, code‑compliant power systems: LV/MV distribution boards and busways, transformers and generators, switchgear and protection, earthing/lightning, lighting and small power, and UPS integration. Designs include single‑line diagrams, load flow and coordination studies, arc‑flash labeling, and metering for visibility of consumption and power quality. Our field teams execute with disciplined QA/QC—proper terminations and torque logs, cable identification and testing (IR/continuity/hipot), primary/secondary injection, relay settings, and functional interlock checks. We plan shutdowns precisely, keep accurate test records for audit, and provide thermography and power‑quality monitoring to prevent failures and reduce OPEX."
  },
  {
    slug: "construction-management",
    title: "Construction Management",
    image: "/Construction.jpg",
    description:
      "Pre-construction planning, budgets, procurement and on-site coordination to de-risk projects and deliver predictable outcomes.",
    longContent:
      "We de‑risk projects with a structured CM approach: pre‑construction planning and constructability, accurate budgets and schedules, disciplined procurement, and day‑to‑day site coordination across trades. Controls include look‑ahead planning, earned‑value tracking, and formal change management so scope, time, and cost stay predictable. Quality and safety underpin everything—ITPs and inspection logs, toolbox talks and permit‑to‑work, digital snagging, and independent audits. At handover you receive complete as‑builts, commissioning and test packs, O&M manuals, training, and a clear warranty/defects process so the asset is ready to operate from day one."
  },
  {
    slug: "solar",
    title: "Solar",
    image: "/Solar.jpg",
    description:
      "Bankable solar solutions (PVsyst yield modelling, BOS, monitoring) and O&M programs to protect ROI.",
    longContent: "We engineer bankable solar solutions that deliver measurable savings. Feasibility includes tariff and load analysis, shading studies, and PVsyst yield models. Systems are designed with robust balance‑of‑system (mounting, protection, monitoring) and can integrate with grid, generators, and storage to support critical loads and smooth switchover. During operation, our O&M programs protect your investment: scheduled cleaning, IV‑curve and insulation testing, performance ratio tracking, and proactive fault response. You’ll get clear monthly reports comparing expected vs. actual generation, with recommendations to sustain output and extend equipment life."
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    image: "/Plumbing.jpg",
    description:
      "Potable/hot water systems, drainage, grease separation, LPG/NG systems, commissioning and O&M.",
    longContent: "We provide end‑to‑end plumbing works for commercial and industrial facilities—potable and hot water systems, circulation and boosting, sanitary drainage and venting, grease/oil separation, and rainwater management. Gas services include LPG/NG piping and appliance connections with appropriate ventilation and safety devices. Commissioning is thorough and documented: pressure and leak testing, disinfection and quality certificates, backflow testing and registration where required. For operations, we offer hydrojetting, CCTV inspections, leak detection, and planned maintenance so systems remain compliant and downtime stays low."
  },
  {
    slug: "emergency-planning",
    title: "Emergency Planning",
    image: "/Emergency.jpg",
    description:
      "Risk assessment, playbooks, drills, 24/7 escalation and post-event RCA & corrective actions.",
    longContent: "Readiness is built before incidents occur. We assess risks and critical assets, write simple, role‑based playbooks, and train teams through tabletop and live drills. Business‑continuity priorities—power, water, HVAC, and communications—are mapped with staging plans, spares, and vendor call trees to shorten recovery time. When events happen, a 24/7 hotline and escalation path put specialists in motion under clear SLAs. After stabilization, we deliver root‑cause analysis and corrective actions, update procedures, and log evidence for insurers and regulators—turning each event into lasting improvement."
  },
  {
    slug: "welding-fabrication",
    title: "Welding & Fabrication",
    image: "/Welding.jpg",
    description:
      "Shop fabrication and site erection with certified WPS/PQR, NDT and full traceability.",
    longContent: "We fabricate structural steel and pipe spools with certified weld procedures and qualified welders, from shop drawings and nesting through fit‑up, welding, and dimensional checks. Capabilities include platforms and supports, ladders and handrails, manifolds and utility skids, with surface preparation and protective coatings tailored to service conditions. Quality is traceable end to end—material heat numbers, WPS/PQR packs, welder qualifications, and NDT (VT/PT/MT/UT, with RT via partners). We handle transport and site erection with lifting plans and hot‑work controls, then deliver complete dossiers for compliance and maintenance."
  }
];

export const servicesBySlug: Record<string, ServiceItem> = servicesList.reduce(
  (acc, s) => {
    acc[s.slug] = s;
    return acc;
  },
  {} as Record<string, ServiceItem>
);
