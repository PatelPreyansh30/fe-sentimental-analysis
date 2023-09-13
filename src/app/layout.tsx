"use client";

import ToastifyAlerts from "@/utils/ToastifyContainer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Review Analysis AI",
  description:
    "Boost your business with our cutting-edge review analysis AI web app. Gain valuable customer insights, enhance user experience, and make data-driven decisions. Try it today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  return (
    <html lang="en">
      <body className={`bg-slate-50 ${inter.className}`}>
        <ToastifyAlerts />
        <Navbar showHideSidebar={() => setToggleSidebar(!toggleSidebar)} />
        <div
          className={`mt-[75px] ${toggleSidebar ? "ml-[250px]" : "ml-[0px]"}`}
        >
          {toggleSidebar && <Sidebar />}
          {children}
        </div>
      </body>
    </html>
  );
}
