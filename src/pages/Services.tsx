import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesList } from "../data/servicesData";



const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 }
};

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header Section */}
      <div className="relative w-full h-80 bg-neutral-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/40" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-6xl font-bold tracking-tight"
        >
          Our Services
        </motion.h1>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {servicesList.map((service, i) => (
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            key={service.title}
            className="bg-white shadow-sm rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="w-full h-56 bg-gray-200">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>

                <Link
                to={`/services/${service.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
