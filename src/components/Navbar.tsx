import { MenuRounded } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";

const Navbar = (props: { showHideSidebar: any }) => {
  return (
    <div className="fixed w-full top-0 flex justify-between items-center px-[25px] py-[15px] bg-white shadow-md z-10">
      <Tooltip title="Menu" placement="right">
        <MenuRounded
          className="cursor-pointer text-4xl"
          onClick={props.showHideSidebar}
        />
      </Tooltip>
      <p className="font-sans text-4xl font-bold text-green-500">
        {"Review Analysis "}
        <span className="px-2 font-mono bg-orange-500 text-white">AI</span>
      </p>
    </div>
  );
};

export default Navbar;
