import Link from "next/link";

export default function SimilarPosts() {
  const posts = [
    {
      id: 1,
      image: "shipping-containers",
      date: "03 Apr 2023",
      category: "Art",
      title: "How to make toys from old Olarpaper",
    },
    {
      id: 2,
      image: "alarm-clock",
      date: "01 Jun 2022",
      category: "Art",
      title: "What you need to know about Photography",
    },
    {
      id: 3,
      image: "camera-balloons",
      date: "09 Apr 2022",
      category: "Development",
      title: "Why a balloon is a flexible bag",
    },
  ];

  return (
    <section className="mt-16">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
        Similar Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <article className="cursor-pointer group">
              <div
                className={`w-full aspect-[4/3] rounded-lg mb-4 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform ${
                  post.image === "alarm-clock"
                    ? "bg-gradient-to-br from-pink-200 to-pink-300"
                    : post.image === "camera-balloons"
                    ? "bg-gradient-to-br from-amber-50 to-amber-100"
                    : "bg-gradient-to-br from-amber-50 to-amber-100"
                }`}
              >
                {post.image === "shipping-containers" && (
                  <div className="flex items-end gap-4">
                    <div className="w-24 h-24 bg-yellow-400 rounded-sm shadow-lg flex items-center justify-center">
                      <div className="w-full h-full border-4 border-yellow-500"></div>
                    </div>
                    <div className="w-24 h-24 bg-yellow-400 rounded-sm shadow-lg flex items-center justify-center">
                      <div className="w-full h-full border-4 border-yellow-500"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="w-16 h-16 bg-white rounded shadow-md"></div>
                      <div className="w-16 h-16 bg-white rounded shadow-md"></div>
                    </div>
                    <div className="w-12 h-12 bg-yellow-400 rounded-sm shadow-lg"></div>
                  </div>
                )}
                {post.image === "alarm-clock" && (
                  <div className="relative">
                    <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-1 h-6 bg-gray-800 mx-auto mb-1"></div>
                          <div className="w-6 h-1 bg-gray-800"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                )}
                {post.image === "camera-balloons" && (
                  <div className="relative">
                    <div className="w-16 h-16 bg-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-4 h-4 bg-pink-300 rounded-full"></div>
                    <div className="absolute top-0 -left-4 w-3 h-3 bg-blue-300 rounded-full"></div>
                    <div className="absolute -bottom-2 right-2 w-3 h-3 bg-pink-200 rounded-full"></div>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 mb-2 text-sm text-gray-600">
                <span>{post.date}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-teal-500 rounded"></div>
                  <span>{post.category}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                {post.title}
              </h3>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
