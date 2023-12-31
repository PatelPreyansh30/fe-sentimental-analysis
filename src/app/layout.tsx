import ToastifyAlerts from "@/utils/ToastifyContainer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EmoVibe: Review Analyzer",
  description:
    "Boost your business with our cutting-edge review analysis AI web app. Gain valuable customer insights, enhance user experience, and make data-driven decisions. Try it today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-50 ${inter.className}`}>
        <ToastifyAlerts />
        {children}
      </body>
    </html>
  );
}
