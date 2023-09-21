import { NextComponentPropsWithParams } from "@/types/next";
import BlogsSection from "./_components/BlogsSection";
import { Suspense } from "react";

type BlogsCategoryFilterPageProps = NextComponentPropsWithParams<{
  blogCategories?: string[];
}>;

/**
 * This page acts as both the catch-all page as well as the main page for /blogs
 */
const BlogsCategoryFilterPage = ({ params }: BlogsCategoryFilterPageProps) => {
  return (
    <>
      <h1>Hello</h1>
      {/* <BlogsSection blogCategories={params.blogCategories} /> */}
      <Suspense fallback={<p>Loading blogs...</p>}>
        <BlogsSection blogCategories={params.blogCategories} />
      </Suspense>
    </>
  );
};

export default BlogsCategoryFilterPage;
