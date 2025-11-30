import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-10 py-4 flex items-center justify-between
          ${scrolled ? "bg-black/60 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      >
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="w-32 md:w-40" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-white text-lg">
          <NavLink to="/about" className="hover:text-gray-300 transition">About Us</NavLink>
          <NavLink to="/services" className="hover:text-gray-300 transition">Services</NavLink>
          <NavLink to="/projects" className="hover:text-gray-300 transition">Projects</NavLink>
          <NavLink to="/contact" className="hover:text-gray-300 transition">Contact</NavLink>
          
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
          <Menu className="w-8 h-8" />
        </button>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-lg  flex flex-col p-10 space-y-8 text-white text-2xl"
        >
          <button className="self-end mb-10" onClick={() => setIsOpen(false)}>
            <X className="w-8 h-8" />
          </button>

          <NavLink className="hover:text-gray-300" to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink>
          <NavLink className="hover:text-gray-300" to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink className="hover:text-gray-300" to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink className="hover:text-gray-300" to="/contact" onClick={() => setIsOpen(false)}>Projects</NavLink>
         
        </motion.div>
      )}
    </>
  );
}
