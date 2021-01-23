import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
