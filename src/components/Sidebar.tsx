import React from "react";
import { Home, Troubleshoot } from "@mui/icons-material";
import { ApplicationConstant } from "@/constant/applicationConstant";
import Link from "next/link";

const sidebarRoutes = [
  {
    state: "Home",
    path: ApplicationConstant.HOME_PATH,
    icon: <Home />,
  },
  {
    state: "Bulk Analysis",
    icon: <Troubleshoot />,
    path: ApplicationConstant.BULK_ANALYSIS_PATH,
  },
];

const Sidebar = () => {
  return (
    <div className="fixed left-0 w-[250px] h-screen p-2 bg-gray-100">
      {sidebarRoutes.map((item, index) => (
        // <Link
        //   href={item.path}
        //   className="flex m-2 p-3 px-7 hover:bg-gray-200 hover:rounded-md"
        //   key={`sidebar-item-index:${index}`}
        // >
        //   {item.icon}
        //   <p className="mx-2 ">{item.state}</p>
        // </Link>
        <a
          href={item.path}
          className="flex m-2 p-3 px-7 hover:bg-gray-200 hover:rounded-md"
          key={`sidebar-item-index:${index}`}
        >
          {item.icon}
          <p className="mx-2 ">{item.state}</p>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
