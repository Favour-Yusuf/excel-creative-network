import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const whyItems = [
    { label: "Safety & Compliance", value: 100 },
    { label: "Built to Last", value: 100 },
    { label: "Transparency", value: 100 },
    { label: "On-Time Delivery", value: 100 },
    { label: "QA/QC Passed First Time", value: 100 },
    { label: "Customer Satisfaction", value: 100 },
    { label: "Response SLA Met", value: 100 },
    { label: "First Time Acceptance", value: 100 },
  ];

  const values = [
    "Integrity",
    "Excellence",
    "Innovation",
    "Safety",
    "Collaboration",
    "Accountability",
  ];

  return (
    <div className="w-full" ref={ref}>

      {/* -------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------- */}

      <section className="relative h-[90vh] w-full overflow-hidden bg-[#050c1b] text-white flex items-center">
  <motion.div
    style={{ y: yParallax }}
    className="absolute inset-0 opacity-40"
  >
    <img
      src="/heroImg.png"
      alt="About Background"
      className="w-full h-full object-cover"
    />
  </motion.div>

  <div className="relative z-10 px-6 max-w-6xl mx-auto">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl font-bold leading-tight max-w-3xl"
    >
      Building With Precision.
      <span className="text-[#d8e200]"> Leading With Integrity.</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-lg max-w-xl mt-6 text-gray-200"
    >
      For over a decade, we’ve delivered high-impact engineering,
      infrastructure, EPC/MEC, and mission-critical solutions that
      stand the test of time.
    </motion.p>

    {/* DOWNLOAD BUTTON */}
    <motion.a
      href="/Excel Creative profile .pdf"
      download
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="inline-flex items-center gap-2 mt-8 bg-[#d8e200] text-black font-medium px-6 py-3 rounded-full shadow-lg hover:bg-[#c7d300] transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Download Company Profile
    </motion.a>
  </div>
</section>


      {/* -------------------------------- */}
      {/* TEAM SECTION */}
      {/* -------------------------------- */}

      {/* <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12"
          >
            Meet Our Leadership
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer group"
              >
                <img
                  src={`/team/team-${i}.jpg`}
                  alt="Team Member"
                  className="w-full h-80 object-cover group-hover:brightness-75 transition"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold">Team Member {i}</h3>
                  <p className="text-gray-600 text-sm">Leadership Role</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* -------------------------------- */}
      {/* COMPANY VALUES */}
      {/* -------------------------------- */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-[#d8e200]"
              >
                <h3 className="text-xl font-semibold mb-4">{item}</h3>
                <p className="text-gray-600">
                  We uphold this value in everything we do, from engineering
                  excellence to customer satisfaction.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------- */}
      {/* WHY CHOOSE US */}
      {/* -------------------------------- */}

      <section className="py-24 bg-[#050c1b] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-16"
          >
            Why Choose Us
          </motion.h2>

          <div className="space-y-10">
            {whyItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-lg">{item.label}</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-[#d8e200] font-semibold"
                  >
                    {item.value}%
                  </motion.span>
                </div>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  transition={{ duration: 1 }}
                  className="h-3 rounded-full bg-[#d8e200]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
