"use client"

import dynamic from "next/dynamic"

// Dynamically import DynamicBackground with SSR disabled
const DynamicBackground = dynamic(() => import("./dynamic-background"), { ssr: false })

export default function DynamicBackgroundWrapper() {
  return <DynamicBackground />
}