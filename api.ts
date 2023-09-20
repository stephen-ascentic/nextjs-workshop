import { Blog } from "@/assets/data/blogs";

export const getBlogs = async () => {
  const res = await fetch("https://nextjs-workshop-git-pt-3-data-fetching-manupadev.vercel.app/api/blogs");
  const blogs: Blog[] = await res.json();
  return blogs;
};
