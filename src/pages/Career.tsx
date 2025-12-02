import { motion } from "framer-motion";
import { ArrowRight, Building2, Users, Lightbulb } from "lucide-react";

export default function Career() {
  const jobs = [
    {
      title: "Electrical Engineer (LV/MV Systems)",
      location: "Lagos, Nigeria",
      type: "Full-Time",
    },
    {
      title: "Mechanical Engineer (HVAC & Plumbing)",
      location: "Port Harcourt, Nigeria",
      type: "Full-Time",
    },
    {
      title: "Project Manager (Construction / MEP)",
      location: "Lagos, Nigeria",
      type: "Full-Time",
    },
    {
      title: "Fabrication Technician / Welder",
      location: "Onitsha, Nigeria",
      type: "Full-Time",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">

      {/* === HERO === */}
      <div className="relative h-80 bg-neutral-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/40"></div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-6xl font-bold tracking-tight text-center"
        >
          Join Our Team
        </motion.h1>
      </div>

      {/* === INTRO SECTION === */}
      <div className="max-w-5xl mx-auto px-6 mt-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          We are a growing company dedicated to delivering high-quality services.
          Join us as we build, innovate, and create impact together.
        </motion.p>
      </div>

      {/* === CULTURE SECTION === */}
      <div className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-8 border hover:shadow-xl transition"
        >
          <Building2 className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Build With Purpose</h3>
          <p className="text-gray-600 text-sm">
            Work on real infrastructure projects that improve communities and
            enable businesses to operate safely and efficiently.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-8 border hover:shadow-xl transition"
        >
          <Users className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">A Team That Grows Together</h3>
          <p className="text-gray-600 text-sm">
            We invest in training, certifications, mentorship, and continuous
            learning to help every team member advance in their career.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-8 border hover:shadow-xl transition"
        >
          <Lightbulb className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Innovate & Solve Problems</h3>
          <p className="text-gray-600 text-sm">
            From fabrication to electrical systems to solar engineering—your
            ideas will help shape the future of technical excellence.
          </p>
        </motion.div>
      </div>

      {/* === JOB LISTINGS === */}
      {/* <div className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Open Positions</h2>

        <div className="space-y-6">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                 */}
                {/* Job Title & Meta */}
                {/* <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {job.location} • {job.type}
                  </p>
                </div> */}

                {/* Apply Button */}
                {/* <button className="flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all">
                  Apply Now
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* === FINAL CTA === */}
      {/* <div className="max-w-5xl mx-auto px-6 mt-24 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-gray-900 mb-6"
        >
          No Role That Fits Yet?
        </motion.h2>

        <p className="text-gray-700 mb-6">
          We’re always looking for exceptional talent. Send us your CV and we’ll
          reach out when the right opportunity opens up.
        </p>

        <a
          href="mailto:hr@excelcreativenetwork.com"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Send Your CV
        </a>
      </div> */}
    </div>
  );
}
