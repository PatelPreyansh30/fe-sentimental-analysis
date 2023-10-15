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
      <p className="font-poppins text-3xl font-bold text-indigo-500">
        {"Review Analyzer "}
        <span className="px-2 text-2xl font-mono bg-indigo-500 text-white">
          {"EmoVibe"}
        </span>
      </p>
    </div>
  );
};

export default Navbar;
