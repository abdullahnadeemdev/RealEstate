import React from "react";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div className="max-w-360 mx-auto">
      <Navbar />
      <div>{children}</div>
      {/* footer */}
    </div>
  );
};

export default Layout;
