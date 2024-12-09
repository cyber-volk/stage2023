"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function MobileNav() {
  const { t } = useLanguage()
  const pathname = usePathname()

  const navigation = [
    { name: t('navigation.introduction', 'content'), href: '/introduction' },
    { name: t('navigation.skills', 'content'), href: '/skills' },
    { name: t('navigation.challenges', 'content'), href: '/challenges' },
    { name: t('navigation.projects', 'content'), href: '/projects' },
    { name: t('navigation.conclusion', 'content'), href: '/conclusion' },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block px-3 py-2 text-lg font-medium rounded-md transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
