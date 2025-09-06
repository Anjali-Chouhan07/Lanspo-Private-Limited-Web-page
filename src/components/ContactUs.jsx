// ContactUs.jsx
import React from "react";
import { FaPhone, FaMapMarkerAlt, FaShareAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactUs = () => {
  return (
    <section className="bg-primary py-24 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>

        {/* Card */}
        <motion.div
          className="bg-[#1f1f1f] p-10 rounded-3xl shadow-xl mb-16"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt size={32} className="mb-4 text-red-600" />
              <h3 className="font-semibold text-lg mb-2 text-gray-300">Address</h3>
              <p className="text-gray-400">123 React Street, Web City, India</p>
            </div>
            <div className="flex flex-col items-center">
              <FaPhone size={32} className="mb-4 text-green-600" />
              <h3 className="font-semibold text-lg mb-2 text-gray-300">Phone</h3>
              <p className="text-gray-400">+91 98765 43210</p>
            </div>
            <div className="flex flex-col items-center">
              <FaShareAlt size={32} className="mb-4 text-blue-600" />
              <h3 className="font-semibold text-lg mb-2 text-gray-300">Share</h3>
              <p className="text-gray-400">Follow us on social media</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-[#1f1f1f] p-10 rounded-3xl shadow-xl"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            Send Us a Message
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl bg-gray-800 border border-gray-700 text-gray-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl bg-gray-800 border border-gray-700 text-gray-300"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-4 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 md:col-span-2"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-4 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 md:col-span-2"
            ></textarea>
            <button
              type="submit"
              className="px-0 py-3 bg-gradient-to-r from-pink-400 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:opacity-90 transition">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
    
  );
};

export default ContactUs;
