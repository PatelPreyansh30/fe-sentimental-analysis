import React from "react";
import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <div className="fixed top-0 flex items-center justify-center h-screen w-full bg-slate-800/[0.05]">
      <CircularProgress />
    </div>
  );
};

export default Loader;
