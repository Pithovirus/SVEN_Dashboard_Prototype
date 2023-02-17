import React from "react";
import SideNavbar from "@/components/SideNavbar";

const Layout = () => {
  return (
    <div className="h-screen flex justify-start">
      <SideNavbar />
      <div className="border-spacing-1">Hello World</div>
    </div>
  );
};

export default Layout;
