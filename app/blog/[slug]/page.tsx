import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SimilarPosts from "../../components/SimilarPosts";
import { blogService } from "@/services/blog/blog.service";
import { formatDate } from "@/utils";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://groweveryday.com";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await blogService.getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Post Not Found",
    };
  }

  const url = `${siteUrl}/blog/${slug}`;
  const description =
    blog.description.length > 160
      ? blog.description.substring(0, 157) + "..."
      : blog.description;

  return {
    title: blog.title,
    description,
    keywords: blog.tags,
    authors: [{ name: "groweveryday" }],
    openGraph: {
      title: blog.title,
      description,
      url,
      type: "article",
      publishedTime: blog.createdAt,
      authors: ["groweveryday"],
      tags: blog.tags,
      images: blog.cover
        ? [
            {
              url: blog.cover,
              width: 1200,
              height: 630,
              alt: blog.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description,
      images: blog.cover ? [blog.cover] : [],
    },
    alternates: {
      canonical: url,
    },
  };
}

export async function generateStaticParams() {
  const { blogs } = await blogService.getPublishedBlog();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = await blogService.getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-12 grow max-w-4xl">
        {/* Article Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
          {blog.title}
        </h1>

        {/* Author and Date */}
        <div className="flex items-center justify-center gap-3 mb-8 text-sm text-gray-600">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <svg
              width="20"
              height="20"
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
          <span className="font-medium">Author</span>
          <span>•</span>
          <span>{formatDate(blog.createdAt)}</span>
          {blog.tags.length > 0 && (
            <>
              <span>•</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-teal-500 rounded"></div>
                <span>{blog.tags[0]}</span>
              </div>
            </>
          )}
        </div>

        {/* Featured Image */}
        {blog.cover && (
          <div
            className="w-full h-[400px] rounded-lg mb-8 overflow-hidden"
            style={{
              backgroundImage: `url(${blog.cover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}

        {/* Article Content */}
        {blog.markdown && (
          <article className="markdown-content">
            <Markdown rehypePlugins={[rehypeRaw]}>
              {blog.markdown}
            </Markdown>
          </article>
        )}

        {/* Tags and Social Share */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-12 pt-8 border-t border-gray-200">
          {/* Tags */}
          {blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Social Share Icons */}
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors text-gray-700"
              aria-label="Share on Facebook"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 10a8 8 0 1 0-9.25 7.903v-5.59H6.719v-2.313h2.031V8.281c0-2.005 1.194-3.109 3.022-3.109.875 0 1.79.156 1.79.156v1.969h-1.009c-.993 0-1.303.617-1.303 1.25v1.5h2.219l-.354 2.313h-1.865v5.59A8.001 8.001 0 0 0 18 10z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors text-gray-700"
              aria-label="Share on Twitter"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.616 11.616 0 0 0 6.29 1.84" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors text-gray-700"
              aria-label="Share on LinkedIn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors text-gray-700"
              aria-label="Share on Pinterest"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 0C4.477 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.599-.299-1.484c0-1.388.805-2.425 1.809-2.425.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.807 1.481 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.223-.334.135-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.292-1.155l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S15.523 0 10 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Similar Posts */}
        <SimilarPosts />
      </main>

      <Footer />
    </div>
  );
}

