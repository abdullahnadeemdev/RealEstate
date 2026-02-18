import React from "react";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      {/* footer */}
    </div>
  );
};

export default Layout;
