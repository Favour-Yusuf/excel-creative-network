import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/heroImg.png')" }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Dark Overlay */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 1.5 }}
      />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-8 md:px-20 max-w-2xl text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Ready-to-Operate <br /> Infrastructure
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-200 mb-8"
        >
          We are a professional engineering, infrastructure and services company, with expertise in the development and improvement of physical and social infrastructure.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition text-lg w-fit"
        >
          <Link to="/contact">
          View Quotes →
          </Link>
        </motion.button>
      </div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
      >
        <ArrowDown className="animate-bounce w-8 h-8" />
        <span className="mt-2 text-sm tracking-widest uppercase">Scroll</span>
      </motion.div>
    </div>
  );
}
