"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import React, { useState } from "react";
import bg from "../../../public/bg.jpg";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  return (
    <div>
      <Navbar showHideSidebar={() => setToggleSidebar(!toggleSidebar)} />
      <div className={`mt-[75px] ${toggleSidebar ? "ml-[250px]" : "ml-[0px]"}`}>
        {toggleSidebar && <Sidebar />}
        <div className="relative min-h-screen">
          <Image src={bg} alt="BG" className="opacity-25" />
          <div className="absolute w-full top-0 p-3">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
