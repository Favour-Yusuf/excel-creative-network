import { motion } from "framer-motion";

export default function ToughInfrastructureSection() {
  return (
    <section className="w-full pb-20 bg-white overflow-hidden">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 md:px-12 pt-24">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src="/Section.png"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <p className="uppercase tracking-widest text-gray-500 mb-3">
            What Drives Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Solving Tough{" "}
            <span className="bg-yellow-300 px-2">Infrastructure</span>
            <br />
            Challenges
          </h2>

          <p className="text-gray-600 text-lg mt-6 leading-relaxed">
            We bring engineering, construction, and lifecycle maintenance
            together — a process that moves from concept to commissioning
            without friction. Every step, every detail, we get it right the
            first time so you can operate and build once, confidently.
          </p>
        </motion.div>

      </div>

      {/* YELLOW STAT BAND */}
      <div className="relative mt-16">
        <div className="absolute inset-0 bg-yellow-300 skew-y-3 origin-top"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 text-center py-20 px-6 md:px-12">
          
          {/* STAT 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="font-semibold text-gray-900"
          >
            <h3 className="text-5xl font-bold">50+</h3>
            <p className="mt-3 text-gray-800 text-lg">Projects Delivered</p>
          </motion.div>

          {/* STAT 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="font-semibold text-gray-900"
          >
            <h3 className="text-5xl font-bold">97%</h3>
            <p className="mt-3 text-gray-800 text-lg">On-Time Emergency Response</p>
          </motion.div>

          {/* STAT 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="font-semibold text-gray-900"
          >
            <h3 className="text-5xl font-bold">98%</h3>
            <p className="mt-3 text-gray-800 text-lg">QA/QC Passed First Time</p>
          </motion.div>

        </div>
      </div>

      {/* BLACK SAFETY SECTION */}
      <div className="max-w-7xl mx-auto mt-24 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-black text-white p-12 md:p-16 rounded-2xl relative shadow-2xl"
        >
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Safeguarding <br />
            What Matters <span className="text-yellow-300">Most</span>
          </h2>

          <p className="text-gray-300 text-lg mt-6 max-w-xl leading-relaxed">
            With a focus on safety across electrical, industrial, civil,
            and pipeline work, we protect the people, assets, and
            communities that drive progress forward.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 px-6 py-3 border border-white rounded-full text-lg hover:bg-white hover:text-black transition"
          >
            Explore Our Safety Commitment →
          </motion.button>

        </motion.div>
      </div>

    </section>
  );
}
