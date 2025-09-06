
import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaCar, FaLeaf, FaBuilding, FaChartLine, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Banking Services",
    icon: <FaLaptopCode size={28} className="text-[#8e44ad]" />,
    description:
      "Comprehensive banking solutions including digital banking, payment processing, and financial management for individuals and businesses.",
  },
  {
    id: 2,
    title: "Electric Vehicle Solutions",
    icon: <FaCar size={28} className="text-[#e67e22]" />,
    description:
      "Providing innovative EV solutions including design, battery management, and charging infrastructure for sustainable mobility.",
  },
  {
    id: 3,
    title: "AgriTech Innovations",
    icon: <FaLeaf size={28} className="text-[#27ae60]" />,
    description:
      "Smart farming solutions using IoT, AI, and modern techniques to improve yield, efficiency, and sustainability for the agriculture sector.",
  },
  {
    id: 4,
    title: "Real Estate & Infrastructure",
    icon: <FaBuilding size={28} className="text-[#f39c12]" />,
    description:
      "End-to-end project management for real estate and construction projects, focusing on eco-friendly and smart infrastructure.",
  },
  {
    id: 5,
    title: "Financial & Investment Services",
    icon: <FaChartLine size={28} className="text-[#3498db]" />,
    description:
      "Comprehensive financial planning, investment advisory, and consolidated services for businesses and individual clients.",
  },
  {
    id: 6,
    title: "Digital Transformation",
    icon: <FaMobileAlt size={28} className="text-[#00b894]" />,
    description:
      "Helping companies transform digitally through software, cloud services, automation, and analytics to boost efficiency.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  return (
    <section className="bg-primary min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-32">

        
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>

        
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-gray-800/70 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 border-l-4 border-[#8e44ad] space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="flex items-center gap-4">
              {service.icon}
              <h3 className="text-2xl font-semibold text-gray-200">{service.title}</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
          </motion.div>
        ))}

        {/* Optional closing section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-[#00b894] mb-4">Tailored Solutions for Every Business</h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Lanspo provides consolidated services across multiple sectors, combining technology, innovation, and industry expertise to ensure growth and efficiency for all our partner companies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
