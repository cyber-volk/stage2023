'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { Button } from './ui/button'
import { MoonIcon, SunIcon, GlobeIcon } from '@radix-ui/react-icons'
import { HamburgerMenu } from './HamburgerMenu'

export function Header() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = React.useState(false)

  // After mounting, we have access to the theme
  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <div className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="flex h-16 items-center px-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          title="Toggle theme"
          className="flex items-center gap-2 px-3"
        >
          {theme === 'light' ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5" />
          )}
        </Button>
        <HamburgerMenu />
        <div className="ml-auto flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            title="Toggle language"
            className="flex items-center gap-2 px-3 hidden sm:flex"
          >
            <GlobeIcon className="h-5 w-5" />
            <span className="text-sm">
              {language.toUpperCase()}
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
} 