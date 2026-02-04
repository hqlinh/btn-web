"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex items-center justify-between relative">
          {/* Left Navigation */}
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Logo - Centered */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className="text-3xl font-serif font-bold text-gray-900"
            >
              groweveryday
            </Link>
          </div>

          {/* Right Navigation */}
          <nav className="flex items-center gap-6">
            {/* Right navigation items removed */}
          </nav>
        </div>
      </div>
    </header>
  );
}
