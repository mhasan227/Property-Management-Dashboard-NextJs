'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useDarkMode } from "../hooks/useDarkMode";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:text-white text-gray-800">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png" 
            alt="Logo"
            className="w-10 h-10"
            width={100}
            height={100}
          />
          <h1 className="text-xl font-bold">My Website</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Middle Nav (Hidden on Mobile) */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-gray-500">
            Home
          </a>
          <a href="#about" className="hover:text-gray-500">
            About
          </a>
          <a href="#services" className="hover:text-gray-500">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-500">
            Contact
          </a>
        </nav>

        {/* Right Profile Image & Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-900"
          >
            {isDarkMode ? (

                          <svg width="30" height="30" id="light-icon">
                              <circle cx="15" cy="15" r="6" fill="currentColor" />

                              <line
                                  id="ray"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  x1="15"
                                  y1="1"
                                  x2="15"
                                  y2="4"
                              ></line>

                              <use href="#ray" transform="rotate(45 15 15)" />
                              <use href="#ray" transform="rotate(90 15 15)" />
                              <use href="#ray" transform="rotate(135 15 15)" />
                              <use href="#ray" transform="rotate(180 15 15)" />
                              <use href="#ray" transform="rotate(225 15 15)" />
                              <use href="#ray" transform="rotate(270 15 15)" />
                              <use href="#ray" transform="rotate(315 15 15)" />
                          </svg>
            ) : (
                <svg width="30" height="30" id="dark-icon">
                    <path
                    fill="currentColor"
                    d="
                    M 23, 5
                    A 12 12 0 1 0 23, 25
                    A 12 12 0 0 1 23, 5"
                    />
                </svg>
            )}
          </button>

          <Image
            src="/avatar.png"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-900"
            width={100}
            height={100}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#home" className="hover:text-gray-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-500">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-500">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
