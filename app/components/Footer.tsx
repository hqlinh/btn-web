export default function Footer() {
  return (
    <footer className="w-full bg-slate-800 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6">
            <a
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="/elements"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Elements
            </a>
            <a
              href="/privacy"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors"
              aria-label="Facebook"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 10a8 8 0 1 0-9.25 7.903v-5.59H6.719v-2.313h2.031V8.281c0-2.005 1.194-3.109 3.022-3.109.875 0 1.79.156 1.79.156v1.969h-1.009c-.993 0-1.303.617-1.303 1.25v1.5h2.219l-.354 2.313h-1.865v5.59A8.001 8.001 0 0 0 18 10z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors"
              aria-label="Twitter"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.616 11.616 0 0 0 6.29 1.84" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors"
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 0C7.284 0 6.944.012 5.877.048 4.812.084 4.016.222 3.304.42a5.917 5.917 0 0 0-2.128 1.308A5.927 5.927 0 0 0 .42 3.304C.222 4.016.084 4.812.048 5.877.012 6.944 0 7.284 0 10s.012 3.056.048 4.123c.036 1.065.174 1.861.372 2.573a5.917 5.917 0 0 0 1.308 2.128 5.927 5.927 0 0 0 2.128 1.308c.712.198 1.508.336 2.573.372C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.048c1.065-.036 1.861-.174 2.573-.372a5.917 5.917 0 0 0 2.128-1.308 5.927 5.927 0 0 0 1.308-2.128c.198-.712.336-1.508.372-2.573C19.988 13.056 20 12.716 20 10s-.012-3.056-.048-4.123c-.036-1.065-.174-1.861-.372-2.573a5.917 5.917 0 0 0-1.308-2.128A5.927 5.927 0 0 0 15.696.42c-.712-.198-1.508-.336-2.573-.372C12.056.012 11.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.042.048.877.036 1.354.166 1.671.275.421.113.722.248 1.037.453.315.205.572.462.777.777.205.315.34.616.453 1.037.11.317.24.794.275 1.671.037 1.054.048 1.37.048 4.041 0 2.67-.01 2.987-.048 4.042-.036.877-.166 1.354-.275 1.671a3.27 3.27 0 0 1-.453 1.037 3.27 3.27 0 0 1-.777.777c-.315.205-.616.34-1.037.453-.317.11-.794.24-1.671.275-1.055.037-1.37.048-4.042.048-2.67 0-2.987-.01-4.042-.048-.877-.036-1.354-.166-1.671-.275a3.27 3.27 0 0 1-1.037-.453 3.27 3.27 0 0 1-.777-.777 3.27 3.27 0 0 1-.453-1.037c-.11-.317-.24-.794-.275-1.671C1.81 12.987 1.8 12.67 1.8 10c0-2.67.01-2.987.048-4.042.036-.877.166-1.354.275-1.671.113-.421.248-.722.453-1.037.205-.315.462-.572.777-.777.315-.205.616-.34 1.037-.453.317-.11.794-.24 1.671-.275C7.013 1.81 7.33 1.8 10 1.8zm0 3.678a4.522 4.522 0 1 0 0 9.044 4.522 4.522 0 0 0 0-9.044zM10 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm4.965-8.405a1.056 1.056 0 1 1-2.112 0 1.056 1.056 0 0 1 2.112 0z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors"
              aria-label="YouTube"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

