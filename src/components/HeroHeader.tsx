import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowDown } from "lucide-react";

export default function HeroHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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

      {/* Dark overlay animation */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 1.5 }}
      />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 px-6 md:px-10 py-5 flex items-center justify-between
        ${scrolled ? "bg-black/60 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      >
        <img src="/logo.png" alt="Logo" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-white text-lg">
          <a href="#aboutus" className="hover:text-gray-300 transition">Who We Are</a>
          <a href="#featured" className="hover:text-gray-300 transition">What We Do</a>
          <a href="#" className="hover:text-gray-300 transition">Careers</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
          <Menu className="w-8 h-8" />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-lg z-40 flex flex-col p-10 space-y-8 text-white text-2xl"
        >
          <button className="self-end mb-10" onClick={() => setIsOpen(false)}>
            <X className="w-8 h-8" />
          </button>

          <a href="#" className="hover:text-gray-300">Who We Are</a>
          <a href="#" className="hover:text-gray-300">What We Do</a>
          <a href="#" className="hover:text-gray-300">Careers</a>
          <a href="#" className="hover:text-gray-300">Contact Us</a>
        </motion.div>
      )}

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
          Construction management, electrical & solar, mechanical & plumbing, and facilities support—
          delivered safely, on schedule, and ready to operate.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition text-lg w-fit"
        >
          View Quotes →
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
