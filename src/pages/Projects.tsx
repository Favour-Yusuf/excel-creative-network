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
      "/electrical/bending.jpg",
      "/electrical/Excel Company PH-39.jpg",
      "/electrical/induction.jpg",
      "/electrical/instalation.jpg",
      "/electrical/installatio induc.jpg",
      "/electrical/installation 3.jpg",
      "/electrical/installation 4.jpg",
      "/electrical/installation 5.jpg",
      "/electrical/installation.jpg",
      "/electrical/Machine installation_.jpg",
      "/electrical/pipe.jpg",
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
      "/wact/ONNE 1.jpg",
      "/wact/MAST POLE.jpg",
      "/wact/p19.JPG",
      "/wact/PHOTO-2024-12-30-16-52-34.jpg",
      "/wact/REEFER RACK 1.jpg",
      "/wact/REEFER RACK.jpg",
      "/wact/thumbnail - 2024-12-30T185640.404.jpg",
      
    ]
  },
  {
    title: "Low and Medium Voltage Installation",
    description:
      "Installation of 2500Amp LV distribution board and 1.5MVA package substation. Testing and commissioning.",
    client: "International Breweries — Onitsha Plant",
    services: ["MEP"],
    images: [
      "/InternationBrewies/IMG_20230404_134002_74.jpg",
      "/InternationBrewies/Copy of IMG_20230407_135353_657.jpg",
      "/InternationBrewies/Copy of IMG_20230426_150241_945.jpg",
      "/InternationBrewies/Copy of IMG_20230502_110715_679.jpg",
      "/InternationBrewies/Guiness project image.JPG",
      "/InternationBrewies/IMG_20230407_135353_657.jpg",
      "/InternationBrewies/IMG_20230420_112502_547.jpg",
      "/InternationBrewies/IMG_20230420_153008_161.jpg",
      "/InternationBrewies/IMG_20230422_111843_580.jpg",
      "/InternationBrewies/IMG_20230426_150241_945.jpg",
      "/InternationBrewies/IMG_20230426_153911_787.jpg",
      "/InternationBrewies/IMG_20230429_145805_207.jpg",
      "/InternationBrewies/IMG_20230429_150344_033.jpg",
      "/InternationBrewies/p4.jpg",
      "/InternationBrewies/p7.jpg",
      "/InternationBrewies/p17.jpg",
      "/InternationBrewies/thumbnail (76).jpg",
      "/InternationBrewies/thumbnail (82).jpg",
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
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-lg flex items-center justify-center"
    >
      {/* Prevent background scrolling */}
      <div
        className="absolute inset-0 overflow-y-auto py-10 px-4"
        onClick={() => setSelectedImages(null)} // close when clicking background
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImages(null)}
            className="absolute top-4 right-4 z-50 bg-black/80 hover:bg-black text-white p-2 rounded-full shadow-lg transition"
          >
            <X size={22} />
          </button>

          {/* Scrollable Image Grid */}
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[80vh] overflow-y-auto">
            {selectedImages.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-60 object-cover rounded-xl shadow-sm"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
};

export default Projects;
