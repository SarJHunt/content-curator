import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AI consultancy | AI training | Building AI",
  description:
    "Professional AI consulting services to help businesses implement effective AI solutions and strategies.",
  keywords: ["AI consulting", "AI strategy", "AI implementation", "machine learning"],
  author: "Chris Meah",
  charset: "UTF-8",
}

// Move viewport to a separate export
export const viewport = "width=device-width, initial-scale=1.0"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}