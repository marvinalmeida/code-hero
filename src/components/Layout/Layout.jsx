import React from "react";
import Header from "../Header/Header";
import "./Layout.css";

const Layout = ({ children, disableHeader = false }) => (
  <div className="layout">
    { !disableHeader && <Header /> }
    {children}
  </div>
);

export default Layout;
