import { getBlog } from "@/lib/api";
import { NextComponentPropsWithParams } from "@/types/next";
import dayjs from "dayjs";
// import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import blogClasses from "./page.module.css";
// export const dynamic = "force-dynamic";
// export const revalidate = 20;

type BlogPageParams = {
  blogId: string;
};

type BlogPageProps = NextComponentPropsWithParams<BlogPageParams>;

/**
 * `[blogId]` as the __folder name__ provides a params `object` with `blogId` as a key
 *
 */

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await getBlog(params.blogId);
  //   const headersList = headers();
  //   const referer = headersList.get("referer");

  if (!blog) {
    notFound();
  }

  return (
    <section className="my-8 flex flex-col gap-4">
      <Link href="/blogs" className="text-link with-icon">
        <ion-icon name="arrow-back-outline"></ion-icon>
        <p>Back to blogs</p>
      </Link>
      <h1>{blog?.title}</h1>
      {/* <div>Referer: {referer}</div> */}
      <div className="flex gap-2">
        <img
          src={blog.author.profilePictureUrl}
          alt="profilePictureUrl"
          className="w-12 aspect-square rounded-full"
        />
        <div>
          <p>Article by</p>
          <p>{blog.author.name}</p>
        </div>
      </div>
      <p>{blog?.description}</p>
      <p className={blogClasses.content} dangerouslySetInnerHTML={{ __html: blog.content }}></p>
      <div>
        <div className="bg-neutral-100 w-full p-4">
          <p className="text-sm">About the post</p>
          <p>
            Created at {dayjs(blog.createdAt).format("DD MMMM YYYY")} (approx.{" "}
            {dayjs(blog.createdAt).from(dayjs())})
          </p>
        </div>
      </div>
    </section>
  );
}
