// src/pages/ServiceDetails.tsx
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { servicesBySlug,type ServiceItem } from "../data/servicesData";
import { ArrowRight } from "lucide-react";

export default function ServiceDetails() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const service: ServiceItem | undefined = servicesBySlug[slug];

  if (!service) {
    // If not found, redirect to services list (or show 404)
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="relative h-72 bg-neutral-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-white text-3xl md:text-5xl font-bold"
        >
          {service.title}
        </motion.h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-8">
        <img src={service.image} alt={service.title} className="w-full h-80 object-cover rounded-xl shadow-lg mb-8" />

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="prose prose-lg text-gray-700">
            <p>{service.longContent ?? service.description}</p>

            {/* Example structure — you can replace with richer content */}
            <h3>What we deliver</h3>
            <ul>
              <li>Design & engineering</li>
              <li>Procurement & supply chain management</li>
              <li>Installation and test & commissioning</li>
              <li>Lifecyle O&M & training</li>
            </ul>

            <h3 className="mt-6">Downloadables</h3>
            <p>If you have PDFs, link them here (O&M, datasheets, method statements).</p>
          </div>

          <div className="mt-10 flex gap-4">
            <Link to="/services" className="inline-flex items-center gap-2 text-gray-700 hover:text-black">
              ← Back to Services
            </Link>

            <a href="#contact" className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full">
              Request Quote <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
