"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import TopHeader from "./_components/TopHeader";

const layout = ({ children }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Home */}
      <div
        className={`h-full md:flex md:w-64 flex-col fixed inset-y-0 z-50 ${
          !isSideNavOpen && "hidden"
        }`}
      >
        <SideNav />
      </div>
      <div className="flex-grow md:ml-64">
        <TopHeader toggleSideNav={toggleSideNav} />
        {children}
      </div>
    </div>
  );
};

export default layout;
