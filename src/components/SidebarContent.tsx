'use client'

import React from 'react'
import { useNavigation } from '@/contexts/NavigationContext'
import { sections } from '@/data/sections'
import { Section } from '@/data/sections'
import { useIsMobile } from '@/hooks/use-mobile'

interface SidebarContentProps {
  onClose?: () => void;
}

export function SidebarContent({ onClose }: SidebarContentProps) {
  const { activeSection, setActiveSection } = useNavigation()
  const isMobile = useIsMobile()

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div className="sticky top-0 p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contents</h2>
      </div>
      <nav className="h-[calc(100vh-5rem)] overflow-y-auto">
        {sections.map((section: Section) => (
          <button
            key={section.id}
            onClick={() => handleSectionClick(section.id)}
            className={`w-full text-left px-4 py-2 transition-colors ${
              activeSection === section.id
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
                : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/50'
            }`}
          >
            {section.title}
          </button>
        ))}
      </nav>
    </div>
  )
}