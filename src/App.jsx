import React from "react";
import { Routes, Route } from "react-router-dom";
import Investors from "./components/Investors";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Group from "./components/Group";
import styles from "./style";

import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/TermsAndCondition";
import Disclaimer from "./components/Disclaimer";
import ScrollToTop from "./ScrollToTop";

import {
  Billing,
  Business,
  CardDeal,
  CTA,
  Footer,
  About,
  Careers,
  Blog,
  Navbar,
  Hero,
} from "./components";

import Layout from "./Layout";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <ScrollToTop />
      
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <Layout>
              <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Hero />
                </div>
              </div>

              <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Business />
                  <Billing />
                  <CardDeal />
                </div>
              </div>
            </Layout>
          }
        />

        {/* Other Pages */}
        <Route path="/About" element={<Layout><About /></Layout>} />
        <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/careers" element={<Layout><Careers /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms" element={<Layout><Terms /></Layout>} />
        <Route path="/disclaimer" element={<Layout><Disclaimer /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/investors" element={<Layout><Investors /></Layout>} />
        <Route path="/group" element={<Layout><Group /></Layout>} />
      </Routes>
    </div>
  );
};

export default App;
