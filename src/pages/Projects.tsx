import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  client?: string;
  services: string[];
  images: string[];
};

const projects: Project[] = [
  {
    title: "Induction Pipe Bending Machine Facility",
    description:
      "Electrical installation for power supply and installation of induction pipe bending machine equipment, including testing and commissioning.",
    client: "Brentex Petroleum Services Limited",
    services: ["MEP"],
    images: [
      "/electrical/bending machine installation 2.jpg",
      "/electrical/induction bending machine 4.jpg",
      "/projects/pipe3.jpg"
    ]
  },
  {
    title:
      "Comprehensive Electrical & Infrastructural Installation for Reefer Rack, Office Complex & Outdoor Lighting",
    description:
      "Installation of reefer rack, office complex lighting and power supply, earthing, lightning protection, and light mast installation. Testing and commissioning.",
    client: "WACT",
    services: ["MEP"],
    images: [
      "/projects/reefer1.jpg",
      "/projects/reefer2.jpg",
      "/projects/reefer3.jpg"
    ]
  },
  {
    title: "Low and Medium Voltage Installation",
    description:
      "Installation of 2500Amp LV distribution board and 1.5MVA package substation. Testing and commissioning.",
    client: "International Breweries — Onitsha Plant",
    services: ["MEP"],
    images: [
      "/projects/lv1.jpg",
      "/projects/lv2.jpg"
    ]
  },
  {
    title: "12-Storey Luxury Hotel Construction",
    description:
      "Installation of power distribution, lighting, plumbing, heating, HVAC systems, including testing and commissioning.",
    services: ["MEP"],
    images: [
      "/projects/hotel1.jpg",
      "/projects/hotel2.jpg",
      "/projects/hotel3.jpg"
    ]
  }
];

const services = ["All", "MEP"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(p => p.services.includes(activeFilter));

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero */}
      <div className="relative h-[300px] bg-neutral-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/30"></div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-white text-5xl md:text-6xl font-bold tracking-tight"
        >
          Our Projects
        </motion.h1>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-6 mt-12 flex gap-4 flex-wrap">
        {services.map((service, i) => (
          <motion.button
            key={service}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
            onClick={() => setActiveFilter(service)}
            className={`px-5 py-2 rounded-full border transition-all
              ${
                activeFilter === service
                  ? "bg-blue-600 text-white shadow-lg"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
          >
            {service}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-6 mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-200 group overflow-hidden"
          >
            {/* Preview Image */}
            <div
              className="h-48 w-full bg-gray-200 cursor-pointer"
              onClick={() => setSelectedImages(project.images)}
            >
              <img
                src={project.images[0]}
                className="w-full h-full object-cover group-hover:scale-105 duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.description}
              </p>

              {project.client && (
                <p className="mt-3 text-sm text-gray-700">
                  <span className="font-semibold">Client:</span>{" "}
                  {project.client}
                </p>
              )}

              <div className="flex gap-2 mt-4 flex-wrap">
                {project.services.map(service => (
                  <span
                    key={service}
                    className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedImages(project.images)}
                className="mt-4 flex items-center gap-2 text-blue-600 hover:gap-3 transition-all"
              >
                View Gallery <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Gallery Modal */}
      <AnimatePresence>
        {selectedImages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4"
          >
            <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-xl">
              <button
                onClick={() => setSelectedImages(null)}
                className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded-full"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
                {selectedImages.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
