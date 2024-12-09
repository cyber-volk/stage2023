'use client'

import React from 'react'
import { useNavigation } from '@/contexts/NavigationContext'
import { sections } from '@/app/page'

interface SidebarContentProps {
  onClose: () => void;
}

export function SidebarContent({ onClose }: SidebarContentProps) {
  const { activeSection, setActiveSection } = useNavigation()

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    onClose();
  };

  return (
    <div className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contents</h2>
      </div>
      <nav className="space-y-1">
        {sections.map((section) => (
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