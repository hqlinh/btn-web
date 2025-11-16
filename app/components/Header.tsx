"use client";

import { useState } from "react";

export default function Header() {
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-teal-500 rounded-lg relative">
              {/* Worm with glasses reading book icon */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                {/* Book */}
                <rect x="8" y="10" width="10" height="12" fill="white" rx="1" />
                <line
                  x1="13"
                  y1="10"
                  x2="13"
                  y2="22"
                  stroke="#14b8a6"
                  strokeWidth="1.5"
                />
                {/* Glasses */}
                <circle
                  cx="10"
                  cy="14"
                  r="2.5"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <circle
                  cx="18"
                  cy="14"
                  r="2.5"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <line
                  x1="12.5"
                  y1="14"
                  x2="15.5"
                  y2="14"
                  stroke="white"
                  strokeWidth="1.5"
                />
                {/* Worm body */}
                <ellipse cx="14" cy="18" rx="6" ry="4" fill="white" />
                <circle cx="10" cy="17" r="1.5" fill="#14b8a6" />
                <circle cx="18" cy="17" r="1.5" fill="#14b8a6" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900">Bookworm</span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a
              href="/"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Contact
            </a>
            <div className="relative">
              <button
                onClick={() => setIsPagesOpen(!isPagesOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Pages
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform ${
                    isPagesOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {isPagesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-10">
                  <a
                    href="/pages/page1"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Page 1
                  </a>
                  <a
                    href="/pages/page2"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Page 2
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Search Icon */}
          <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
