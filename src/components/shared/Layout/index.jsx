import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className=" mx-auto">
      <Navbar />
      <div className="mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
