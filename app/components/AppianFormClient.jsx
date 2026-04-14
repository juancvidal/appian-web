"use client";

import dynamic from "next/dynamic";

const AppianForm = dynamic(() => import("./AppianForm"), { ssr: false });

export default function AppianFormClient() {
  return <AppianForm />;
}
