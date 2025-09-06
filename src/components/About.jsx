import React from "react";
import { missions } from "../constants";
import { features } from "../constants";
import styles, { layout } from "../style";

import { footerLinks, socialMedia } from '../constants';
import { motion } from "framer-motion";
import { variants } from "../library/framer";

// Feature Card Component
const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card relative bg-gray-800/80 backdrop-blur-md shadow-xl`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue z-10`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 z-10">
      <h4 className="font-poppins font-semibold text-white text-[20px] leading-[28px] mb-2">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[17px] leading-[28px]">
        {content}
      </p>
    </div>
  </div>
);

// Team Members Array
const teamMembers = [
  { name: "Amit Sharma", role: "CEO", img: "images/t1.webp" },
  { name: "Priya Mehta", role: "Head of Finance", img: "images/t2.jpg" },
  { name: "Rohan Verma", role: "Tech Lead", img: "images/t3.jpg" },
  { name: "Sneha Kapoor", role: "Marketing Manager", img: "images/t4.jpg" },
  { name: "Arjun Rao", role: "Operations Head", img: "images/t5.jpg" },
  { name: "Neha Singh", role: "Creative Director", img: "images/t6.jpg" },
];

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen px-8 py-20">
      
      {/* Main Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Learn more about our journey, our mission, and the people who make it possible.
        </p>
      </div>

      {/* About Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-24">
        <div className="flex justify-center">
          <img
            src="images/sean-pollock-PhYq704ffdA-unsplash.jpg"
            alt="About Us"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
          <p className="text-gray-300 text-[18px] leading-[30px] mb-6">
            Our parent company is a dynamic and future-focused business group
            committed to driving innovation, sustainability, and growth across
            multiple industries. We operate in Finance, Real Estate, Agriculture,
            Technology, Electric Vehicles, and Renewable Energy.
            <br /><br />
            Our goal is to build sustainable businesses that create economic value
            while uplifting society and empowering communities.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:opacity-90 transition" onClick={() => window.location.href = '/group'}>
            Explore More
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className={`${layout.section} mb-24`}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={variants}
          className={layout.sectionInfo}
        >
          <h2 className={styles.heading2}>
            Lanspo <br className="sm:block hidden" /> Private Limited
          </h2>
          <p className={`${styles.paragraph} max-w-[600px] mt-6 text-lg leading-[30px]`}>
            Innovation + Sustainability + Trust = Long-term Growth.
          </p>
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={variants}
          className={`${layout.sectionImg} flex-col`}
        >
          {missions.map((missions, index) => (
            <FeatureCard key={missions.id} {...missions} index={index} />
          ))}
        </motion.div>
      </section>

      {/* Our History Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Our History</h2>
          <p className="text-gray-300 text-[18px] leading-[30px] mb-6">
            Founded with the vision to connect innovation with tradition, our
            company has grown from a small initiative to a diversified group
            of successful ventures, emphasizing transparency, integrity, and forward-thinking ideas.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:opacity-90 transition"onClick={() => window.location.href = '/group'}>
          
            Explore More
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src="images/re3.jpg"
            alt="Our History"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Our Team Section */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl font-semibold mb-10">Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl p-6 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition transform"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      
      
    </div>
  );
};

export default About;
