import TagList from "@/app/blogs/[[...blogCategories]]/_components/TagList";
import blogs, { Blog } from "@/assets/data/blogs";
import BlogCard from "@/components/BlogCard";
import { NextComponentPropsWithParams } from "@/types/next";
import Link from "next/link";

type BlogsCategoryFilterPageProps = NextComponentPropsWithParams<{
  blogCategories?: string[];
}>;

/**
 * This page acts as both the catch-all page as well as the main page for /blogs
 */
const BlogsCategoryFilterPage = ({ params }: BlogsCategoryFilterPageProps) => {
  // Catch all routes return data as an array of route params
  // ex: /blogs/x/y/z -> [x, y, z]
  const blogCategories = params.blogCategories;
  let filteredBlogs: Blog[] = blogs;

  // If the blogCategories array is not empty, filter the blogs array
  if (blogCategories) {
    const filteredCategories = blogCategories.filter((c) => c !== "categories");
    if (filteredCategories?.length >= 1) {
      // Filter blogs array so that it only contains blogs that have all the tags in the blogCategories array
      filteredBlogs = blogs.filter((blog) => {
        return filteredCategories.every((category) => {
          return blog.tags.includes(category);
        });
      });
    }
  }

  return (
    <>
      {blogCategories && (
        <Link href="/blogs" className="text-link with-icon mb-4">
          <ion-icon name="arrow-back-outline"></ion-icon>
          <span>All Blogs</span>
        </Link>
      )}
      <h1>Blogs</h1>
      <hr className="w-full mt-4" />
      <TagList tags={[...new Set(filteredBlogs.flatMap((blog) => blog.tags))]} />
      <div className="grid grid-cols-3 gap-4 mt-8">
        {filteredBlogs.map((blog) => (
          <Link href={`/blogs/${blog.id}`}>
            <BlogCard title={blog.title} description={blog.miniDescription} tags={blog.tags} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default BlogsCategoryFilterPage;
