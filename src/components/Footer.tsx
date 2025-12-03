import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const socials = [
  { icon: Facebook, url: "https://web.facebook.com/excelcreativeng" },
  { icon: Twitter, url: "https://x.com/Excelcreativeng" },
  // { icon: Linkedin, url: "https://linkedin.com/company/excelcreativenetwork" },
  { icon: Instagram, url: "https://www.instagram.com/excelcreativenetwork" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#071A2E] text-white">
      {/* === CTA BANNER === */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full bg-linear-to-r from-blue-700 to-blue-500 py-12 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Let’s Build Something Extraordinary.
          </h2>
          <Link
            to="/contact"
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>

      {/* === MAIN FOOTER === */}
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 grid md:grid-cols-3 gap-16">
        {/* Column 1: Logo + About */}
        <div>
          <img src="/logo.png" alt="Logo" className="w-44 opacity-95 mb-6" />
          <p className="text-sm opacity-80 leading-relaxed">
            Excel Creative Network delivers world-class Mechanical, Electrical,
            Plumbing, Fabrication, and Construction solutions with engineering
            excellence, safety compliance, and unmatched technical expertise.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm opacity-80">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/career" className="hover:text-white transition">
                Career
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>

          <div className="space-y-4 text-sm opacity-80">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-0.5" />
              <span>+234 (0) 806 015 3312</span>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-0.5" />
              <span>info@excelcreativenetwork.com</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5" />
              <span>
                P27 Osolo Way, Off International Airport Road, Ajao Estate,
                Lagos, Nigeria.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* === SOCIAL & COPYRIGHT === */}
      <div className="border-t border-white/10 py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social icons */}
          <div className="flex gap-6">
            {socials.map(({ icon: Icon, url }, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer">
                <Icon className="w-6 h-6 opacity-70 hover:opacity-100 hover:scale-110 transition cursor-pointer" />
              </a>
            ))}
          </div>

          <p className="text-xs opacity-60 text-center md:text-right">
            © 2025 Excel Creative Network. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
