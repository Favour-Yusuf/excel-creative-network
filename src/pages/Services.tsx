import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ServiceItem = {
  title: string;
  image: string;
  description: string;
};

const services: ServiceItem[] = [
  {
    title: "Mechanical Services",
    image: "/images/services/mechanical.jpg",
    description:
      "We design, install, and upgrade critical mechanical systems—chillers, VRF/VRV, AHUs/FCUs, ventilation, pumps, and compressors. Our engineers optimize equipment sizing, ductwork, piping layouts, controls, VFDs, and phased works to avoid downtime. Full lifecycle support includes preventive maintenance, vibration and thermographic trending, water treatment, recommissioning, and delivery of MS/RAs, ITPs, commissioning records, and O&M manuals."
  },
  {
    title: "Electrical Services",
    image: "/images/services/electrical.jpg",
    description:
      "We deliver safe, code-compliant power systems from design to energization—LV/MV distribution, switchgear, generators, earthing, lighting, UPS and protection systems. Designs include SLDs, load flow/coordination studies, metering, and arc-flash assessments. Field teams execute with disciplined QA/QC: torque logs, testing (IR/continuity/hipot), relay settings, interlock checks, shutdown planning, thermography, and power-quality monitoring."
  },
  {
    title: "Construction Management",
    image: "/images/services/construction.jpg",
    description:
      "We de-risk projects with structured CM—pre-construction planning, accurate budgets/schedules, disciplined procurement, and site coordination. Controls include look-ahead planning, earned-value tracking, and formal change management. Quality and safety drive our work through ITPs, digital snagging, PTW systems, toolbox talks, audits, and complete handover packs: as-builts, commissioning reports, O&M manuals, and training."
  },
  {
    title: "Solar",
    image: "/images/services/solar.jpg",
    description:
      "We engineer bankable solar solutions—load analysis, shading studies, and PVsyst yield modelling. Systems integrate with grid, generators, and storage. O&M programs include cleaning, IV-curve and insulation testing, PR tracking, and fault response. Monthly reports compare expected vs. actual generation with optimization recommendations."
  },
  {
    title: "Plumbing",
    image: "/images/services/plumbing.jpg",
    description:
      "We provide end-to-end plumbing systems—potable/hot water, boosting, sanitary drainage, grease/oil separation, and rainwater management. Gas systems include LPG/NG piping with all safety controls. Commissioning includes pressure tests, disinfection, quality certificates, and backflow testing. Operations include hydro-jetting, CCTV inspections, leak detection, and planned maintenance."
  },
  {
    title: "Emergency Planning",
    image: "/images/services/emergency.jpg",
    description:
      "We build readiness through risk assessments, role-based playbooks, and team training via tabletop and live drills. Business continuity plans prioritize critical systems with staging plans, spares, and vendor call trees. In events, a 24/7 hotline and escalation path deploy specialists. After resolution we deliver RCA, corrective actions, and insurer-ready documentation."
  },
  {
    title: "Welding & Fabrication",
    image: "/images/services/welding.jpg",
    description:
      "We fabricate structural steel and pipe spools with certified weld procedures and qualified welders. Capabilities include platforms, supports, ladders, handrails, manifolds, and skids with tailored coatings. Quality is traceable via heat numbers, WPS/PQR packs, welder qualifications, and NDT (VT/PT/MT/UT). We manage transport, lifting plans, hot-work controls, and deliver full compliance dossiers."
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 }
};

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header Section */}
      <div className="relative w-full h-[320px] bg-neutral-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-6xl font-bold tracking-tight"
        >
          Our Services
        </motion.h1>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            key={service.title}
            className="bg-white shadow-sm rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="w-full h-56 bg-gray-200">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>

              <button className="mt-4 flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all">
                Learn More
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
