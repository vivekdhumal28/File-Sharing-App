"use client";
import { File, Shield, Upload } from "lucide-react";
import React, { useState } from "react";

const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: File,
      path: "/files",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="shadow-sm border-r h-full">
      <div className="flex p-5 border-b">
        <img
          src="https://outscal.com/_next/image?url=%2Fassets%2Fimages%2Fanimatedlogo.gif&w=32&q=1"
          alt="sharable"
          width={50}
          height={25}
        />
        <span className=" pt-2 text-2xl"> Sharable</span>
      </div>
      <div className="flex flex-col float-left w-full">
        {menuList.map((item, index) => (
          <button
            className={`flex gap-2 p-4 px-6 hover:bg-gray-100 w-full text-gray-500 ${
              activeIndex == index ? "bg-blue-50 text-primary" : null
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
