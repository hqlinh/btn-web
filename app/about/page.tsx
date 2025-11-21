// "use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
// import { useEffect } from "react";
import { blogService } from "@/services/blog/blog.service";

export default function AboutPage() {
  blogService.getPublishedBlog();
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 flex-grow max-w-4xl">
        {/* Hero Section */}
        <div className="w-full h-[500px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-12 flex items-center justify-center overflow-hidden">
          {/* 3D Illustration - Man working at desk */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Desk */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                {/* Desk top */}
                <div className="w-96 h-32 bg-amber-100 rounded-lg shadow-lg"></div>
                {/* Desk legs */}
                <div className="absolute -bottom-16 left-4 w-2 h-16 bg-white"></div>
                <div className="absolute -bottom-16 right-4 w-2 h-16 bg-white"></div>

                {/* Computer Monitor */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-32 h-24 bg-gray-300 rounded-lg shadow-md flex items-center justify-center">
                    <div className="w-28 h-20 bg-gray-800 rounded"></div>
                  </div>
                  <div className="w-2 h-4 bg-gray-400 mx-auto"></div>
                  <div className="w-16 h-2 bg-gray-400 mx-auto"></div>
                </div>

                {/* Man sitting */}
                <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2">
                  {/* Head */}
                  <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-2 relative">
                    {/* Glasses */}
                    <div className="absolute top-4 left-2 w-12 h-6 border-2 border-gray-600 rounded-full"></div>
                    <div className="absolute top-4 right-2 w-12 h-6 border-2 border-gray-600 rounded-full"></div>
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gray-600"></div>
                  </div>
                  {/* Body - Shirt */}
                  <div className="w-20 h-24 bg-blue-200 rounded-t-lg mx-auto relative">
                    {/* Tie */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-16 bg-gray-800"></div>
                  </div>
                  {/* Pants */}
                  <div className="w-20 h-16 bg-gray-400 rounded-b-lg mx-auto"></div>
                  {/* Chair */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-24 h-2 bg-white"></div>
                    <div className="absolute -bottom-8 left-2 w-2 h-8 bg-amber-600"></div>
                    <div className="absolute -bottom-8 right-2 w-2 h-8 bg-amber-600"></div>
                  </div>
                </div>

                {/* Plant */}
                <div className="absolute top-8 left-8">
                  <div className="w-8 h-12 bg-green-500 rounded-t-full"></div>
                  <div className="w-12 h-4 bg-amber-600 rounded-full mx-auto -mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            I&apos;m John Doe, A content writer based in LDN, currently at
            Bookworm
          </h1>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="#"
              className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors"
              aria-label="Facebook"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path d="M18 10a8 8 0 1 0-9.25 7.903v-5.59H6.719v-2.313h2.031V8.281c0-2.005 1.194-3.109 3.022-3.109.875 0 1.79.156 1.79.156v1.969h-1.009c-.993 0-1.303.617-1.303 1.25v1.5h2.219l-.354 2.313h-1.865v5.59A8.001 8.001 0 0 0 18 10z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors"
              aria-label="Twitter"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.616 11.616 0 0 0 6.29 1.84" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors"
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path d="M10 0C7.284 0 6.944.012 5.877.048 4.812.084 4.016.222 3.304.42a5.917 5.917 0 0 0-2.128 1.308A5.927 5.927 0 0 0 .42 3.304C.222 4.016.084 4.812.048 5.877.012 6.944 0 7.284 0 10s.012 3.056.048 4.123c.036 1.065.174 1.861.372 2.573a5.917 5.917 0 0 0 1.308 2.128 5.927 5.927 0 0 0 2.128 1.308c.712.198 1.508.336 2.573.372C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.048c1.065-.036 1.861-.174 2.573-.372a5.917 5.917 0 0 0 2.128-1.308 5.927 5.927 0 0 0 1.308-2.128c.198-.712.336-1.508.372-2.573C19.988 13.056 20 12.716 20 10s-.012-3.056-.048-4.123c-.036-1.065-.174-1.861-.372-2.573a5.917 5.917 0 0 0-1.308-2.128A5.927 5.927 0 0 0 15.696.42c-.712-.198-1.508-.336-2.573-.372C12.056.012 11.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.042.048.877.036 1.354.166 1.671.275.421.113.722.248 1.037.453.315.205.572.462.777.777.205.315.34.616.453 1.037.11.317.24.794.275 1.671.037 1.054.048 1.37.048 4.041 0 2.67-.01 2.987-.048 4.042-.036.877-.166 1.354-.275 1.671a3.27 3.27 0 0 1-.453 1.037 3.27 3.27 0 0 1-.777.777c-.315.205-.616.34-1.037.453-.317.11-.794.24-1.671.275-1.055.037-1.37.048-4.042.048-2.67 0-2.987-.01-4.042-.048-.877-.036-1.354-.166-1.671-.275a3.27 3.27 0 0 1-1.037-.453 3.27 3.27 0 0 1-.777-.777 3.27 3.27 0 0 1-.453-1.037c-.11-.317-.24-.794-.275-1.671C1.81 12.987 1.8 12.67 1.8 10c0-2.67.01-2.987.048-4.042.036-.877.166-1.354.275-1.671.113-.421.248-.722.453-1.037.205-.315.462-.572.777-.777.315-.205.616-.34 1.037-.453.317-.11.794-.24 1.671-.275C7.013 1.81 7.33 1.8 10 1.8zm0 3.678a4.522 4.522 0 1 0 0 9.044 4.522 4.522 0 0 0 0-9.044zM10 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm4.965-8.405a1.056 1.056 0 1 1-2.112 0 1.056 1.056 0 0 1 2.112 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
