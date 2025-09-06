// Investors.jsx
import React from "react";
import { motion } from "framer-motion";

const Investors = () => {
  return (
    <section className="bg-primary min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* 1️⃣ News & Press Releases */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-12">
            News & Press Releases
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Launch of New EV Division
              </h2>
              <p className="text-gray-300">
                Lanspo Private Limited announced the launch of its new EV
                division aimed at sustainable mobility solutions. This initiative
                strengthens the company’s commitment towards eco-friendly
                transportation.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Strategic Partnership with MG Nidhi Bank
              </h2>
              <p className="text-gray-300">
                Lanspo has partnered with MG Nidhi Bank to enhance financial
                services for agricultural and real estate clients, ensuring
                better loan access and investment opportunities.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Renewable Agriculture Initiative
              </h2>
              <p className="text-gray-300">
                Lanspo launches a renewable agriculture program to support
                sustainable farming practices, providing farmers with resources
                for green growth and productivity.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Real Estate Expansion
              </h2>
              <p className="text-gray-300">
                The company expands its real estate portfolio across India,
                focusing on eco-friendly, modern housing projects aligned with
                sustainable urban development.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 2️⃣ Annual Reports & Downloads */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-12">
            Annual Reports & Downloads
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex flex-col justify-between">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Annual Report 2024
              </h2>
              <p className="text-gray-300 mb-4">
                Comprehensive overview of Lanspo’s performance in 2024 across
                all divisions, highlighting growth and strategic initiatives.
              </p>
              <button className="bg-yellow-400 text-gray-900 font-semibold py-2 rounded-lg hover:bg-yellow-500 transition w-40">
                Download PDF
              </button>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex flex-col justify-between">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Annual Report 2023
              </h2>
              <p className="text-gray-300 mb-4">
                Detailed insights into Lanspo’s 2023 achievements, financial
                results, and market strategies for investors.
              </p>
              <button className="bg-yellow-400 text-gray-900 font-semibold py-2 rounded-lg hover:bg-yellow-500 transition w-40">
                Download PDF
              </button>
            </div>
          </div>
        </motion.div>

        {/* 3️⃣ Media Coverage */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-12">
            Media Coverage
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-white mb-2">
                Economic Times Feature
              </h2>
              <p className="text-gray-300">
                Lanspo highlighted in Economic Times for innovative EV
                initiatives and sustainable growth strategies.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-white mb-2">
                Business Today Interview
              </h2>
              <p className="text-gray-300">
                CEO of Lanspo shares company vision and expansion plans for
                renewable energy and agriculture sectors.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-white mb-2">
                Times of India Coverage
              </h2>
              <p className="text-gray-300">
                Lanspo’s sustainable housing and eco-friendly projects get
                featured as part of modern real estate developments.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Investors;
