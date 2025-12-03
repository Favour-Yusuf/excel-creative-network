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
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764703185/electrical/bending_bm2lsm.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764703197/electrical/Excel_Company_PH-39_z9uvhl.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764703185/electrical/induction_axhdmm.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764703186/electrical/instalation_eri7tj.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764703185/electrical/installatio_induc_lgyxzh.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764703186/electrical/installation_3_wrsrvz.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764703186/electrical/installation_4_memltq.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764703186/electrical/installation_5_e6fm11.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764703187/electrical/installation_nrzi5k.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764703187/electrical/Machine_installation__j0udji.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764703187/electrical/pipe_wccmox.jpg",
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
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705824/wact/ONNE_1_sjeezd.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705824/wact/MAST_POLE_e5zwfc.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705834/wact/p19_jiozxh.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705825/wact/PHOTO-2024-12-30-16-52-34_use3yh.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705825/wact/REEFER_RACK_1_qbeeyl.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705831/wact/REEFER_RACK_ptsxpx.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705832/wact/thumbnail_-_2024-12-30T185640.404_h288vg.jpg",
      
    ]
  },
  {
    title: "Low and Medium Voltage Installation",
    description:
      "Installation of 2500Amp LV distribution board and 1.5MVA package substation. Testing and commissioning.",
    client: "International Breweries — Onitsha Plant",
    services: ["MEP"],
    images: [
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705875/InternationBrewies/IMG_20230404_134002_74_fxaq1c.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705911/InternationBrewies/Copy_of_IMG_20230407_135353_657_cembb0.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705886/InternationBrewies/Copy_of_IMG_20230426_150241_945_vwycy2.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705886/InternationBrewies/Copy_of_IMG_20230502_110715_679_mcrlqk.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705878/InternationBrewies/Guiness_project_image_bhwhrx.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705917/InternationBrewies/IMG_20230407_135353_657_k1a9ff.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705896/InternationBrewies/IMG_20230420_112502_547_cbtuoz.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705899/InternationBrewies/IMG_20230420_153008_161_bjo3wj.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705904/InternationBrewies/IMG_20230422_111843_580_lreafm.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705916/InternationBrewies/IMG_20230426_150241_945_ndv2d5.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705896/InternationBrewies/IMG_20230426_153911_787_undllq.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705897/InternationBrewies/IMG_20230429_145805_207_uiwrsf.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705914/InternationBrewies/IMG_20230429_150344_033_zjhdaq.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705914/InternationBrewies/p4_ebmrda.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705877/InternationBrewies/p7_zn5tdc.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705874/InternationBrewies/p17_mmx7z2.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705875/InternationBrewies/thumbnail_76_tjwmtp.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705875/InternationBrewies/thumbnail_82_mnxggs.jpg",
    ]
  },
  {
    title: "12-Storey Crown Hotel Building",
    description:
      "Installation of power distribution, lighting, plumbing, heating, HVAC systems, including testing and commissioning.",
    services: ["MEP"],
    images: [
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705761/Luxery-Hotel/Aba_ksd0ee.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705758/Luxery-Hotel/2_iop5to.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705757/Luxery-Hotel/3_dwbunq.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705758/Luxery-Hotel/4_q6wrf1.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705758/Luxery-Hotel/5_fkubug.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705759/Luxery-Hotel/6_vyjtiz.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705761/Luxery-Hotel/7_ahx1nk.jpg",
      "https://res.cloudinary.com/dcuad6p9z/image/upload/v1764705759/Luxery-Hotel/8_aqb4d5.jpg",
      "https://res.cloudinary.com/dcuad6p9z/video/upload/v1764705793/Luxery-Hotel/Twelve_12_story_hotel_construction_project._Aba_npyf3w.mp4",
      
      
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
