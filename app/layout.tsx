import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Disovera",
  description:
    "Find podcast episodes by searching on key terms.",
  keywords: ["podcast search", "podcast content"],
  author: "Sarah Hunt",
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
       <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}