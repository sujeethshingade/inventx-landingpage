import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
  // other metadata
};

const BlogPage = async () => {
  return (
    <>
    {/* <!-- ===== Blog Title Start ===== --> */}
    <section className="py-30">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
          <h1 className="text-5xl font-bold text-center">All Blogs</h1>
        </div>
      </section>
      {/* <!-- ===== Blog Title End ===== --> */}
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-0 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
