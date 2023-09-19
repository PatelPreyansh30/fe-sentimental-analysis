"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ApplicationConstant } from "@/constant/applicationConstant";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace(ApplicationConstant.HOME_PATH);
  }, [router]);

  return <></>;
}
