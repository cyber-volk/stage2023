import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Header } from "@/components/Header"
import { SidebarContent } from "@/components/SidebarContent"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Internship Report 2023",
  description: "A comprehensive report of my internship experience at Tunisie Telecom",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <SidebarProvider>
            <div className="flex h-screen w-full overflow-hidden">
              <div className="hidden md:block">
                <SidebarContent />
              </div>
              <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 overflow-auto">
                  {children}
                </main>
              </div>
            </div>
          </SidebarProvider>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
