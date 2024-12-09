'use client'

import React, { useState, useEffect, useRef } from 'react';
import { SidebarContent } from './SidebarContent';

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="p-2 text-gray-700 dark:text-gray-300 focus:outline-none md:hidden"
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

      {(isOpen || window.innerWidth >= 768) && (
        <div className="absolute md:static top-0 left-0 w-full md:w-auto bg-white dark:bg-gray-900 shadow-lg z-50">
          <SidebarContent onClose={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
} 