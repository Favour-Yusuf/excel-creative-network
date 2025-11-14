import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function LetsConnect() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">

        {/* Left Title */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold leading-tight"
        >
          Let's <br /> Connect
        </motion.h2>

        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="bg-white text-black rounded-lg p-10 shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-3">Collaborate With Us</h3>
          <button className="flex items-center gap-2 text-gray-600 hover:text-black transition">
            Contact Us <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="bg-white text-black rounded-lg p-10 shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-3">Join Our Team</h3>
          <button className="flex items-center gap-2 text-gray-600 hover:text-black transition">
            Explore Careers <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
