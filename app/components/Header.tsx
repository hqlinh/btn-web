"use client";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex items-center justify-between relative">
          {/* Left Navigation */}
          <nav className="flex items-center gap-6">
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
          </nav>

          {/* Logo - Centered */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <a href="/" className="text-3xl font-serif font-bold text-gray-900">
              Stablo
            </a>
          </div>

          {/* Right Navigation */}
          <nav className="flex items-center gap-6">
            <a
              href="/archive"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Archive
            </a>
            <a
              href="/pro"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors flex items-center gap-1"
            >
              Pro Version
              <span className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded">
                new
              </span>
            </a>
            <a
              href="/download"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Download
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
