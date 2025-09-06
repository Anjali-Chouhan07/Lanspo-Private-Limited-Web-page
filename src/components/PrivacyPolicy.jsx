
import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <section className="bg-primary min-h-screen py-32 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Privacy & Policy
        </motion.h1>

        {/* Content */}
        <motion.div
          className="space-y-6 text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>
            We at [Company Name] value your privacy and are committed to protecting your personal information. This Privacy Policy outlines the types of data we collect, how we use it, and the measures we take to ensure its security.
          </p>

          <p>
            <strong>1. Information We Collect:</strong> We may collect personal information such as your name, email address, phone number, and any other details you provide when using our services. Additionally, we may collect non-personal information like browser type, IP address, and usage patterns to improve our services.
          </p>

          <p>
            <strong>2. How We Use Your Information:</strong> Your information helps us provide, maintain, and improve our services. We use it for communication, sending updates, personalizing your experience, and ensuring the security and integrity of our platform.
          </p>

          <p>
            <strong>3. Sharing Your Information:</strong> We do not sell or rent your personal information to third parties. Information may be shared with trusted partners who help us operate our services, comply with legal obligations, or protect our rights and property.
          </p>

          <p>
            <strong>4. Cookies and Tracking Technologies:</strong> Our website uses cookies and similar technologies to enhance user experience, analyze trends, and gather demographic information. You can control cookie usage through your browser settings.
          </p>

          <p>
            <strong>5. Data Security:</strong> We implement appropriate technical and organizational measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no transmission over the internet is entirely secure, and we cannot guarantee absolute security.
          </p>

          <p>
            <strong>6. Your Rights:</strong> You have the right to access, update, or delete your personal information. You can also opt-out of communications or withdraw consent at any time by contacting us.
          </p>

          <p>
            <strong>7. Changes to This Policy:</strong> We may update this Privacy Policy periodically. Any changes will be reflected on this page with the effective date. We encourage you to review this policy regularly to stay informed about how we protect your information.
          </p>

          <p>
            <strong>8. Contact Us:</strong> If you have any questions or concerns regarding our Privacy Policy or data practices, please contact us at privacy@[companyname].com. We are committed to addressing your inquiries promptly.
          </p>

          <p>
            By using our website and services, you agree to the terms outlined in this Privacy Policy. Your trust is important to us, and we strive to maintain transparency and integrity in all our operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
