
import React from "react";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <section className="bg-primary min-h-screen py-32 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Terms & Conditions
        </motion.h1>

        {/* Content */}
        <motion.div
          className="space-y-6 text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>
            Welcome to Lanspo Private Limited. By accessing our website and
            services, you agree to comply with and be bound by the following
            Terms & Conditions. Please read them carefully before using our
            services.
          </p>

          <p>
            <strong>1. Use of Website:</strong> You agree to use this website
            only for lawful purposes and in a manner that does not infringe the
            rights of, restrict, or inhibit anyone else's use of the website.
          </p>

          <p>
            <strong>2. Intellectual Property:</strong> All content, logos,
            graphics, and software are property of Lanspo Private Limited and
            protected under intellectual property laws. Unauthorized use is
            prohibited.
          </p>

          <p>
            <strong>3. User Responsibilities:</strong> You are responsible for
            your actions while using our services, including providing accurate
            information and maintaining security of your account details.
          </p>

          <p>
            <strong>4. Limitation of Liability:</strong> Lanspo Private Limited
            shall not be liable for any direct or indirect damages arising from
            the use of our services or website. Users agree to use the website
            at their own risk.
          </p>

          <p>
            <strong>5. Modifications:</strong> We reserve the right to modify
            these Terms & Conditions at any time. Changes will be updated on
            this page, and continued use of the website signifies acceptance of
            the updated terms.
          </p>

          <p>
            <strong>6. Governing Law:</strong> These terms are governed by the
            laws of India. Any disputes arising from the use of our website
            shall be subject to the exclusive jurisdiction of Indian courts.
          </p>

          <p>
            By using our services, you acknowledge that you have read, understood,
            and agreed to these Terms & Conditions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Terms;
