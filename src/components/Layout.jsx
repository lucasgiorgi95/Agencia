import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import WhatsAppButton from "./WhatsAppButton";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Contact />
      <WhatsAppButton />
    </>
  );
};

export default Layout;
