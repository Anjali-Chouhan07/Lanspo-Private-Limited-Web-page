import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaCar, FaLeaf, FaBuilding } from "react-icons/fa";
import styles, { layout } from "../style";

const positions = [
  {
    id: 1,
    title: "Frontend Developer (React)",
    location: "Remote / India",
    type: "Full-time",
    icon: <FaLaptopCode size={28} className="text-[#8e44ad]" />,
    description: "Develop and maintain responsive web interfaces using React and Tailwind CSS.",
  },
  {
    id: 2,
    title: "Backend Developer (Node.js / FastAPI)",
    location: "Remote / India",
    type: "Full-time",
    icon: <FaLaptopCode size={28} className="text-[#3498db]" />,
    description: "Build scalable APIs, handle database integration, and ensure backend performance.",
  },
  {
    id: 3,
    title: "2-Wheeler EV Engineer",
    location: "Remote / India",
    type: "Full-time",
    icon: <FaCar size={28} className="text-[#e67e22]" />,
    description: "Work on electric vehicle design, battery management, and performance optimization.",
  },
  {
    id: 4,
    title: "AgriTech Specialist",
    location: "Remote / India",
    type: "Full-time",
    icon: <FaLeaf size={28} className="text-[#27ae60]" />,
    description: "Implement smart farming solutions, IoT sensors, and AI-based crop monitoring.",
  },
  {
    id: 5,
    title: "Real Estate Project Manager",
    location: "Remote / India",
    type: "Full-time",
    icon: <FaBuilding size={28} className="text-[#f39c12]" />,
    description: "Manage real estate projects, sustainable construction, and smart building initiatives.",
  },
];

const benefits = [
  "Flexible working hours & remote-friendly culture",
  "Health insurance & wellness programs",
  "Professional growth & learning opportunities",
  "Inclusive & collaborative environment",
  "Team-building events & recreational activities",
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Career = () => {
  return (
    <section className="bg-primary min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-32">

        {/* Heading */}
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join Our Team
        </motion.h2>

        {/* Open Positions */}
        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-6 text-[#8e44ad]">Open Positions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {positions.map((pos) => (
              <motion.div
                key={pos.id}
                className="bg-gray-800/70 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1 border-l-4 border-[#8e44ad]"
                variants={cardVariants}
              >
                <div className="flex items-center gap-4 mb-4">
                  {pos.icon}
                  <h4 className="text-2xl font-semibold text-gray-200">{pos.title}</h4>
                </div>
                <p className="text-gray-400 text-sm mb-4">{pos.location} | {pos.type}</p>
                <p className="text-gray-300 text-lg">{pos.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Culture */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-6 text-[#3498db]">Our Culture</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Innovation, collaboration, and inclusivity define our work environment. We encourage ideas, teamwork, and creativity across all levels.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Work-life balance and continuous learning are key pillars that help our employees grow personally and professionally.
          </p>
        </motion.div>

        {/* Company Benefits */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-6 text-[#f39c12]">Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/70 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 border-l-4 border-[#f39c12] text-gray-300 text-lg"
                variants={cardVariants}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Apply Online Form */}
        <motion.div
          className="bg-gray-800/60 backdrop-blur-md p-12 rounded-3xl shadow-lg space-y-6 border-l-4 border-[#8e44ad]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-6 text-center text-[#8e44ad]">Apply Online</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input type="text" placeholder="Full Name" className="p-4 rounded-xl bg-gray-700 border border-gray-600 text-gray-300" />
            <input type="email" placeholder="Email" className="p-4 rounded-xl bg-gray-700 border border-gray-600 text-gray-300" />
            <input type="text" placeholder="Phone Number" className="p-4 rounded-xl bg-gray-700 border border-gray-600 text-gray-300" />
            <input type="text" placeholder="Position Applying For" className="p-4 rounded-xl bg-gray-700 border border-gray-600 text-gray-300" />
            <textarea placeholder="Cover Letter" rows="5" className="p-4 rounded-xl bg-gray-700 border border-gray-600 text-gray-300 md:col-span-2"></textarea>
            <button type="submit" className="md:col-span-2 bg-gradient-to-r from-[#8e44ad] to-[#a29bfe] text-white font-semibold py-4 rounded-xl hover:scale-105 transition transform">
              Submit Application
            </button>
          </form>
        </motion.div>
      </div>
    </section>
    
  );
};

export default Career;
