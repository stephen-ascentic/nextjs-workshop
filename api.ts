import { Blog } from "@/assets/data/blogs";

export const getBlogs = async () => {
  const res = await fetch("http://localhost:3000/api/blogs");
  const blogs: Blog[] = await res.json();
  return blogs;
};
