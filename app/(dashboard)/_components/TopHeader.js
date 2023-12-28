import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import React from "react";

const TopHeader = ({ toggleSideNav }) => {
  return (
    <div className="flex p-5 border-b items-center justify-between md:justify-end">
      <button onClick={toggleSideNav} className="md:hidden">
        <AlignJustify />
      </button>
      <img
        alt="sharable"
        src="https://outscal.com/_next/image?url=%2Fassets%2Fimages%2Fanimatedlogo.gif&w=32&q=1"
        width={50}
        height={25}
        className="md:hidden"
      />
      <UserButton />
    </div>
  );
};

export default TopHeader;
