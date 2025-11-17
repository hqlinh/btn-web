import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { blogService } from "@/services/blog/blog.service";
import { formatDate } from "@/utils";

export default async function Home() {
  const [featuredBlog, ...otherBlogs] = await blogService.getPublishedBlog();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Featured Article */}
        <article className="mb-16">
          {/* Featured Image */}
          <div
            className="w-full h-[500px] bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: `url(${featuredBlog.cover})` }}
          ></div>

          {/* Author and Date */}
          <div className="flex items-center gap-3 mb-4 text-sm text-gray-600">
            <span>{formatDate(featuredBlog.createdAt)}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              {featuredBlog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article Title */}
          <Link href={`/blog/${featuredBlog.slug}`}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 hover:text-teal-600 transition-colors cursor-pointer">
              {featuredBlog.title}
            </h1>
          </Link>

          {/* Article Excerpt */}
          <p className="text-lg text-gray-600 leading-relaxed">
            {featuredBlog.description}
          </p>
        </article>

        {/* Article Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Article Preview */}
          {otherBlogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id}>
              <article className="cursor-pointer group">
                <div
                  className="w-full aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform"
                  style={{ backgroundImage: `url(${blog.cover})` }}
                ></div>
                <div className="flex items-center gap-3 mb-2 text-sm text-gray-600">
                  <span>{formatDate(blog.createdAt)}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-teal-500 rounded"></div>
                    <span>{blog.tags.join(", ")}</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                  {blog.title}
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {blog.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
