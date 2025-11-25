import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { blogService } from "@/services/blog/blog.service";
import { formatDate } from "@/utils";

export default async function Home() {
  const blogs = await blogService.getPublishedBlog();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[blogs[0], blogs[1]].map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id}>
              <article className="cursor-pointer group">
                {/* Article Image */}
                <div
                  className="w-full bg-gray-200 rounded-lg mb-4 overflow-hidden group-hover:opacity-90 transition-opacity"
                  style={{
                    aspectRatio: "4/3",
                    backgroundImage: `url(${blog.cover})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-gray-600 uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Article Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
                  {blog.title}
                </h2>

                {/* Author and Date */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Author</span>
                  <span>•</span>
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.slice(2).map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id}>
              <article className="cursor-pointer group">
                {/* Article Image */}
                <div
                  className="w-full bg-gray-200 rounded-lg mb-4 overflow-hidden group-hover:opacity-90 transition-opacity"
                  style={{
                    aspectRatio: "4/3",
                    backgroundImage: `url(${blog.cover})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-gray-600 uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Article Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
                  {blog.title}
                </h2>

                {/* Author and Date */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Author</span>
                  <span>•</span>
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View all Posts Button */}
        <div className="flex justify-center">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
            View all Posts
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
