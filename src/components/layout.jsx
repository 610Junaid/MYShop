import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
