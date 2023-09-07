import blogs from "@/assets/data/blogs";
import { NextComponentPropsWithParams } from "@/types/next";
import dayjs from "dayjs";
import Link from "next/link";
import blogClasses from "./page.module.css";

type BlogPageParams = {
  blogId: string;
};

type BlogPageProps = NextComponentPropsWithParams<BlogPageParams>;

/**
 * `[blogId]` as the __folder name__ provides a params `object` with `blogId` as a key
 */
export default async function BlogPage({ params }: BlogPageProps) {
  const blog = blogs.find((b) => b.id === params.blogId);

  if (!blog) {
    return null;
  }

  return (
    <section className="my-8 flex flex-col gap-4">
      <Link href=".." className="text-link with-icon">
        <ion-icon name="arrow-back-outline"></ion-icon>
        <p>Back to blogs</p>
      </Link>
      <h1>{blog?.title}</h1>
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
