import { motion } from "framer-motion";

export default function SafetyPage() {
  return (
    <div className="w-full min-h-screen bg-[#050c1b] text-white">

      {/* HERO SECTION */}
      <section className="relative h-[75vh] w-full flex items-center overflow-hidden">
        <img
          src="/safety-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-linear-to-b from-[#050c1b]/40 to-[#050c1b]"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-6xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Safety: <span className="text-[#d8e200]">A Foundational Commitment</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mt-6">
            Our promise: every project, every decision, every action begins with safety.
          </p>
        </motion.div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-16">

        {/* BLOCK 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#0b1629] p-10 rounded-2xl border border-white/10 shadow-xl"
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#d8e200]">
            A Core Value, Not Just a Standard
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            At Excel Creative Network, safety is non-negotiable and woven into the
            fabric of our engineering, infrastructure, and construction services.
            It is the core value that governs every decision, from initial design
            and planning to project execution on site. Our commitment ensures the
            well-being of our employees, partners, and the communities we serve.
          </p>
        </motion.div>

        {/* BLOCK 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="bg-linear-to-br from-[#0d1c33] to-[#071426] p-10 rounded-2xl border border-white/10 shadow-xl"
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#d8e200]">
            Empowerment and Culture
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            We cultivate a strong safety culture where every team member is empowered
            to act and speak up. This means providing the essential training and tools
            necessary for proactive risk mitigation. Our focus extends beyond physical
            safety protocols on the job site to include the mental and emotional
            resilience required to deliver complex infrastructure projects successfully.
          </p>
        </motion.div>

        {/* BLOCK 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-[#0b1527] p-10 rounded-2xl border border-white/10 shadow-xl"
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#d8e200]">
            Safety Goes Where We Go
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Whether we are managing a civil construction project, installing electrical
            systems, or implementing emergency planning, safety standards are embedded
            into our processes. We are dedicated to ensuring that every project is
            completed with professionalism, integrity, and under the highest industry
            safety standards, so everyone involved returns home safely, every day.
          </p>
        </motion.div>
      </section>

    </div>
  );
}
