import { NextComponentPropsWithParams } from "@/types/next";
// import { headers } from "next/headers";
import { Suspense } from "react";
import BlogsSection from "./_components/BlogsSection";
// export const dynamic = "force-dynamic";
export const revalidate = 5;

type BlogsCategoryFilterPageProps = NextComponentPropsWithParams<{
  blogCategories?: string[];
}>;

/**
 * This page acts as both the catch-all page as well as the main page for /blogs
 */
const BlogsCategoryFilterPage = ({ params }: BlogsCategoryFilterPageProps) => {
  //   const headersList = headers();
  //   const referer = headersList.get("referer");
  return (
    <>
      <h1>Hello</h1>
      {/* <div>Referer: {referer}</div>; */}
      {/* <BlogsSection blogCategories={params.blogCategories} /> */}
      <Suspense fallback={<p>Loading blogs...</p>}>
        <BlogsSection blogCategories={params.blogCategories} />
      </Suspense>
    </>
  );
};

export default BlogsCategoryFilterPage;
