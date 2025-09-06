
import React from "react";
import { motion } from "framer-motion";

const Disclaimer = () => {
  return (
    <section className="bg-primary min-h-screen py-32 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Page Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Disclaimer
        </motion.h1>

        {/* Content */}
        <motion.div
          className="space-y-6 text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>
            The information provided on the Lanspo Private Limited website is
            for general informational purposes only. All content is provided “as
            is” without any warranties, express or implied.
          </p>

          <p>
            <strong>1. Accuracy of Information:</strong> While we strive to
            provide accurate and up-to-date information, we make no
            representations or warranties of any kind regarding the completeness,
            accuracy, or reliability of any content on the website.
          </p>

          <p>
            <strong>2. No Professional Advice:</strong> The content on this
            website does not constitute professional advice. Users should
            consult relevant experts or authorities before making decisions based
            on the information provided here.
          </p>

          <p>
            <strong>3. External Links:</strong> Our website may contain links
            to third-party websites. We are not responsible for the content or
            practices of these external sites and do not endorse them.
          </p>

          <p>
            <strong>4. Limitation of Liability:</strong> Lanspo Private Limited
            will not be liable for any damages arising from the use or inability
            to use this website. Users assume full responsibility for any
            actions taken based on the content.
          </p>

          <p>
            <strong>5. Updates:</strong> We reserve the right to update or
            remove content at any time without prior notice. Users are encouraged
            to review this disclaimer periodically.
          </p>

          <p>
            By using this website, you acknowledge that you have read and
            understood this Disclaimer and agree to its terms.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Disclaimer;
