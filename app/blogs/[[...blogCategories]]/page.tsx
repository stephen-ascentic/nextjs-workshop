import { NextComponentPropsWithParams } from '@/types/next';
import BlogsSection from './_components/BlogsSection';

//export const revalidate = 10;
export const dynamic = 'force-dynamic';

type BlogsCategoryFilterPageProps = NextComponentPropsWithParams<{
  blogCategories?: string[];
}>;

/**
 * This page acts as both the catch-all page as well as the main page for /blogs
 */
export default function BlogsCategoryFilterPage({ params }: BlogsCategoryFilterPageProps) {
  return (
    <>
      <BlogsSection blogCategories={params.blogCategories} />
      {/* <Suspense fallback={<p>Loading blogs...</p>}>
        <BlogsSection blogCategories={params.blogCategories} />
      </Suspense> */}
    </>
  );
}
