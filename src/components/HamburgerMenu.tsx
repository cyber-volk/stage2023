'use client'

import React, { useState, useEffect, useRef } from 'react';
import { SidebarContent } from './SidebarContent';
import { useIsMobile } from '@/hooks/use-mobile';

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="p-2 text-gray-700 dark:text-gray-300 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-50">
          <SidebarContent onClose={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
}