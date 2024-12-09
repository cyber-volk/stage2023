"use client"

import * as React from "react"
import { ThemeProvider } from "next-themes"
import { LanguageProvider } from "@/lib/i18n/LanguageContext"
import { NavigationProvider } from "@/contexts/NavigationContext"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        <NavigationProvider>
          {children}
        </NavigationProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
