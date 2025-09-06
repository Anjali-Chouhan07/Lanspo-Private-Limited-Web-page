
import React from "react";
import { motion } from "framer-motion";
import {
  agr1,
  agri2,
  agri3,
  bank1,
  bank2,
  bank3,
  ree1,
  re2,
  re3,
  whe1,
  whe2,
  whe3,
} from "../assets";

const companies = [
  {
    id: 1,
    name: "MG Nidhi Bank",
    overview:
      "MG Nidhi Bank is a leading financial institution providing secure banking solutions for individuals and businesses. With a strong commitment to innovation, we ensure our customers experience seamless, reliable, and personalized banking services across India.",
    services: [
      { title: "Savings & Current Accounts", description: "Flexible and secure accounts to manage your finances effectively." },
      { title: "Loans & Credit", description: "Personal, home, and business loans at competitive rates." },
      { title: "Investment Solutions", description: "Wealth management, mutual funds, and retirement planning tailored to you." },
      { title: "Digital Banking", description: "24/7 online banking with enhanced security and convenience." },
    ],
    projects: [
      { title: "Digital Branch Expansion", description: "Modernized 50+ branches with advanced digital infrastructure." },
      { title: "SME Lending Program", description: "Provided loans to over 200 small and medium enterprises." },
      { title: "Mobile Banking App Upgrade", description: "Enhanced app experience with faster transactions and improved UX." },
    ],
    images: [bank1, bank2, bank3],
  },
  {
    id: 2,
    name: "2-Wheeler EV Company",
    overview:
      "Our 2-Wheeler EV Company is revolutionizing urban mobility with sustainable electric vehicles. We combine innovative design, smart battery technology, and eco-friendly solutions to provide a greener alternative to traditional transportation.",
    services: [
      { title: "EV Design & Manufacturing", description: "State-of-the-art electric scooters and bikes designed for efficiency." },
      { title: "Battery Management", description: "Advanced battery solutions for longevity and safety." },
      { title: "Charging Infrastructure", description: "Seamless charging solutions for city-wide deployment." },
    ],
    projects: [
      { title: "City EV Deployment", description: "Launched 1000+ EVs across major metropolitan areas." },
      { title: "Battery Swapping Stations", description: "Set up network of 50+ battery swap points for convenience." },
      { title: "Smart Mobility App", description: "Integrated mobile app for booking, monitoring, and navigation." },
    ],
    images: [whe1, whe2, whe3],
  },
  {
    id: 3,
    name: "AgriTech Solutions",
    overview:
      "AgriTech Solutions empowers farmers with cutting-edge technology. From IoT sensors to AI-driven crop monitoring, we aim to optimize farming practices and increase yield, promoting sustainable agriculture and food security.",
    services: [
      { title: "Smart Farming Solutions", description: "IoT-enabled tools for precision agriculture and soil management." },
      { title: "AI Crop Monitoring", description: "Predictive analytics to improve crop yield and health." },
      { title: "Sustainable Practices", description: "Eco-friendly farming practices for long-term benefits." },
    ],
    projects: [
      { title: "Precision Farming Pilot", description: "Implemented IoT-based farming solutions in 500+ farms." },
      { title: "AI Crop Analytics Platform", description: "Developed platform to analyze crop health in real-time." },
      { title: "Farm-to-Market Initiative", description: "Connected farmers directly to buyers to reduce middlemen." },
    ],
    images: [agr1, agri2, agri3],
  },
  {
    id: 4,
    name: "Real Estate & Infrastructure",
    overview:
      "We focus on sustainable real estate projects and smart infrastructure. Combining modern architecture with eco-friendly practices, our developments aim to improve living standards and urban landscapes responsibly.",
    services: [
      { title: "Project Management", description: "Efficient planning and execution of real estate projects." },
      { title: "Smart Building Solutions", description: "Integration of IoT and energy-saving technologies." },
      { title: "Eco-friendly Construction", description: "Green buildings with sustainable materials and practices." },
    ],
    projects: [
      { title: "Green Residential Complex", description: "Developed eco-friendly housing projects with smart features." },
      { title: "Commercial Smart Office", description: "Modern offices with energy-efficient systems." },
      { title: "Sustainable Urban Planning", description: "Long-term planning for community and infrastructure development." },
    ],
    images: [ree1, re2, re3],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const GroupCompanies = () => {
  return (
    <section className="bg-primary py-32 px-6 min-h-screen space-y-32">
      <div className="max-w-7xl mx-auto space-y-32">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Group Companies
        </motion.h2>

        {companies.map((company) => (
          <motion.div
            key={company.id}
            className="space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            {/* Overview */}
            <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-900/80 p-12 rounded-3xl shadow-xl hover:shadow-2xl">
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-white">{company.name}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{company.overview}</p>
              </div>
              <div className="h-64">
                <img
                  src={company.images[0]}
                  alt={company.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Services */}
            <div className="space-y-8">
              <h4 className="text-3xl font-bold text-[#6c5ce7]">Services</h4>
              <div className="grid md:grid-cols-2 gap-8">
                {company.services.map((service, i) => (
                  <div
                    key={i}
                    className="bg-gray-800/70 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1"
                  >
                    <h5 className="text-2xl font-semibold text-gray-200">{service.title}</h5>
                    <p className="text-gray-300 mt-2">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-8">
              <h4 className="text-3xl font-bold text-[#fdcb6e]">Key Projects</h4>
              <div className="grid md:grid-cols-2 gap-8">
                {company.projects.map((proj, i) => (
                  <div
                    key={i}
                    className="bg-gray-800/70 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1"
                  >
                    <h5 className="text-xl font-semibold text-gray-200">{proj.title}</h5>
                    <p className="text-gray-300 mt-2">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="space-y-8">
              <h4 className="text-3xl font-bold text-[#00b894]">Photo Gallery</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {company.images.map((img, i) => (
                  <div key={i} className="h-48">
                    <img
                      src={img}
                      alt={`${company.name} ${i + 1}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GroupCompanies;
