"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  return (
    <div>
      <Navbar showHideSidebar={() => setToggleSidebar(!toggleSidebar)} />
      <div className={`mt-[75px] ${toggleSidebar ? "ml-[250px]" : "ml-[0px]"}`}>
        {toggleSidebar && <Sidebar />}
        <div className="w-full p-6">{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
