
import React from "react";
import { motion } from "framer-motion";
import { FaNewspaper, FaIndustry, FaRegLightbulb } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title: "Emerging Trends in FinTech",
    category: "Finance",
    icon: <FaNewspaper size={28} className="text-[#00f6ff]" />, 
    summary:
      "Discover the latest innovations in financial technology and how they’re reshaping banking and payments globally.",
    content:
      "FinTech is evolving rapidly with AI-driven insights, blockchain integration, and mobile-first solutions. Companies are adopting digital wallets, peer-to-peer lending, and smart contracts to enhance customer experience and security...",
  },
  {
    id: 2,
    title: "Electric Vehicles: The Future of Mobility",
    category: "EV",
    icon: <FaRegLightbulb size={28} className="text-[#33bbcf]" />, 
    summary:
      "Explore how electric vehicles and green energy are transforming transportation for a sustainable future.",
    content:
      "The EV sector is booming with advancements in battery technology, charging infrastructure, and smart energy management. Leading startups and established players are competing to deliver efficient, affordable, and eco-friendly mobility solutions...",
  },
  {
    id: 3,
    title: "Smart Agriculture & IoT",
    category: "Agriculture",
    icon: <FaIndustry size={28} className="text-[#6c63ff]" />, 
    summary:
      "Smart farming and IoT are revolutionizing agriculture with data-driven solutions and precision techniques.",
    content:
      "Modern agriculture leverages sensors, drones, and AI analytics to monitor crop health, optimize irrigation, and increase yield. Startups are creating solutions that help farmers make informed decisions, reduce waste, and increase profitability...",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Blog = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f0f1a] via-[#0b0b13] to-[#0f0f1a] py-32 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-32">
      
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Insights & Updates
        </motion.h2>

        {/* Featured Articles */}
        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-6 text-[#00f6ff]">
            Latest Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {articles.map((article) => (
              <motion.div
                key={article.id}
                className="bg-gradient-to-br from-[#141422] via-[#0f0f1a] to-[#141422] p-10 rounded-3xl shadow-2xl hover:shadow-[#00f6ff]/30 hover:-translate-y-2 transition border-l-4 border-[#00f6ff]"
                variants={cardVariants}
              >
                <div className="flex items-center gap-4 mb-4">
                  {article.icon}
                  <h4 className="text-3xl font-semibold text-white">
                    {article.title}
                  </h4>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {article.category}
                </p>
                <p className="text-gray-300 text-lg mb-4">
                  {article.summary}
                </p>
                <p className="text-gray-400 text-base">{article.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Insights Section */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-6 text-[#6c63ff]">
            Industry Updates
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Stay ahead with curated insights from finance, electric vehicles,
            agriculture, and real estate. Our goal is to keep you informed about
            the latest innovations, policies, and market trends.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We analyze data, report on technology adoption, and highlight
            successful strategies from leading companies across various sectors.
            This section helps professionals and enthusiasts make informed
            decisions.
          </p>
        </motion.div>

        {/* Subscribe Section */}
        <motion.div
          className="bg-[#141422]/80 backdrop-blur-md p-12 rounded-3xl shadow-2xl space-y-6 border-l-4 border-[#33bbcf]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-6 text-center text-[#00f6ff]">
            Subscribe for Updates
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 rounded-xl bg-[#0b0b13] border border-gray-700 text-gray-300"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-4 rounded-xl bg-[#0b0b13] border border-gray-700 text-gray-300"
            />
            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-[#00f6ff] to-[#6c63ff] text-white font-semibold py-4 rounded-xl hover:scale-105 transition"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
