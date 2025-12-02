import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Low and Medium Voltage Installation",
    tag: "MEP",
    image: "/featured1.png",
  },
  {
    title: "Installation of Reefer Rack and Power supply",
    tag: "MEP",
    image: "/Featured2.png",
  },
  {
    title: "pipe bending and coating machine installation",
    tag: "MEP",
    image: "/Featured3.png",
  },
  {
    title: "Gantry and Quenching facility",
    tag: "MEP",
    image: "/Featured4.png",
  },
];

export function FeaturedProjects() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Featured Projects
        </h2>

      <Link to="/projects">
        <button className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-black transition">
          View All <ArrowRight className="w-4 h-4" />
        </button></Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg group cursor-pointer shadow-md"
          >
            {/* Image */}
            <img
              src={p.image}
              className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

            {/* Text */}
            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-sm tracking-widest opacity-80">{p.tag}</p>
              <p className="text-lg font-semibold max-w-[90%]">{p.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
