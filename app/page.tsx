import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Featured Article */}
        <article className="mb-16">
          {/* Featured Image */}
          <div className="w-full h-[500px] bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Placeholder illustration - shipping containers */}
              <div className="flex items-end gap-4">
                <div className="w-32 h-32 bg-yellow-400 rounded-sm shadow-lg flex items-center justify-center">
                  <div className="w-full h-full border-4 border-yellow-500"></div>
                </div>
                <div className="w-32 h-32 bg-yellow-400 rounded-sm shadow-lg flex items-center justify-center">
                  <div className="w-full h-full border-4 border-yellow-500"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-20 h-20 bg-white rounded shadow-md"></div>
                  <div className="w-20 h-20 bg-white rounded shadow-md"></div>
                </div>
                <div className="w-16 h-16 bg-yellow-400 rounded-sm shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Author and Date */}
          <div className="flex items-center gap-3 mb-4 text-sm text-gray-600">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 0 0-4 4v1h8v-1a4 4 0 0 0-4-4z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="font-medium">Mark Dinn</span>
            <span>•</span>
            <span>03 Apr 2023</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-teal-500 rounded"></div>
              <span>Art</span>
            </div>
          </div>

          {/* Article Title */}
          <Link href="/blog/1">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 hover:text-teal-600 transition-colors cursor-pointer">
              How to make toys from old Olarpaper
            </h1>
          </Link>

          {/* Article Excerpt */}
          <p className="text-lg text-gray-600 leading-relaxed">
            Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin
            urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus
            vestibulum maximus suscipit. Quisque vitae nibh iaculis neque
            blan...
          </p>
        </article>

        {/* Article Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Article Preview */}
          <Link href="/blog/2">
            <article className="cursor-pointer group">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                {/* Blue bananas illustration */}
                <div className="flex items-center justify-center gap-2">
                  <div className="w-12 h-20 bg-blue-600 rounded-full transform -rotate-12"></div>
                  <div className="w-12 h-20 bg-blue-600 rounded-full transform rotate-6"></div>
                  <div className="w-12 h-20 bg-yellow-400 rounded-full transform -rotate-6 relative">
                    <div className="absolute top-4 left-2 w-8 h-12 bg-white rounded-full"></div>
                  </div>
                  <div className="w-12 h-20 bg-blue-600 rounded-full transform rotate-12"></div>
                  <div className="w-12 h-20 bg-blue-600 rounded-full transform -rotate-6"></div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2 text-sm text-gray-600">
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 0 0-4 4v1h8v-1a4 4 0 0 0-4-4z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span className="font-medium">Mark Dinn</span>
                <span>•</span>
                <span>11 Aug 2022</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-teal-500 rounded"></div>
                  <span>Art</span>
                </div>
              </div>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                DIY Paper Diamond Tutorial with HUNGRY HEART
              </h2>
            </article>
          </Link>

          {/* Right Article Preview */}
          <Link href="/blog/3">
            <article className="cursor-pointer group">
              <div className="w-full aspect-square bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg mb-4 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                {/* Pink alarm clock illustration */}
                <div className="relative">
                  <div className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-1 h-8 bg-gray-800 mx-auto mb-1"></div>
                        <div className="w-8 h-1 bg-gray-800"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  {/* Sound waves */}
                  <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                    <div className="flex gap-1">
                      <div className="w-1 h-8 bg-white rounded-full"></div>
                      <div className="w-1 h-12 bg-white rounded-full"></div>
                      <div className="w-1 h-8 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2 text-sm text-gray-600">
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 0 0-4 4v1h8v-1a4 4 0 0 0-4-4z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span className="font-medium">Mark Dinn</span>
                <span>•</span>
                <span>01 Jan 2022</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-teal-500 rounded"></div>
                  <span>Art</span>
                </div>
              </div>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                What you need to know about Photography
              </h2>
            </article>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
