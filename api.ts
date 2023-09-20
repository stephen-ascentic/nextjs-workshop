import { Blog } from "@/assets/data/blogs";

export const getBlogs = async () => {
  // const res = await fetch("http://localhost:3000/api/blogs");
  const res = await fetch("http://localhost:3000/api/blogs", { cache: "no-store" });
  const blogs: Blog[] = await res.json();
  return blogs;
};

export const getBlog = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`);
  // const res = await fetch(`http://localhost:3000/api/blogs/${id}`, { cache: "no-store" });
  const blogs: Blog = await res.json();
  return blogs;
};

export const getTime = async () => {
  // const res = await fetch("http://localhost:3000/api/time"});
  // const res = await fetch("http://localhost:3000/api/time", {cache:"no-store"});
  const res = await fetch("http://localhost:3000/api/time", { next: { revalidate: 5 } });
  const data = await res.json();
  return data.date;
};
