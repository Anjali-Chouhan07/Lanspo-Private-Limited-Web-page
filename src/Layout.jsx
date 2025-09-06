
import React from "react";
import { CTA, Footer } from "./components";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <CTA />
      <Footer />
    </>
  );
};

export default Layout;
