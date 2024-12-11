'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { HamburgerMenu } from './HamburgerMenu'
import { Download } from 'lucide-react'

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const handleDownloadPDF = () => {
    const link = document.createElement('a')
    link.href = '/frenchpdf/Rapport_Stage_sep2023.pdf'
    link.download = 'Rapport_Stage_sep2023.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
            variant="outline"
            onClick={handleDownloadPDF}
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            <span>Download PDF</span>
          </Button>
        </div>
      </div>
    </div>
  )
}