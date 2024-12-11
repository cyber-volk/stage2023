"use client"

import * as React from "react"
import { ThemeProvider } from "next-themes"
import { NavigationProvider } from "@/contexts/NavigationContext"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NavigationProvider>
        {children}
      </NavigationProvider>
    </ThemeProvider>
  )
}
