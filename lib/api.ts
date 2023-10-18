import { Blog } from "@/assets/data/blogs";

export const getBlogs = async () => {
  const res = await fetch("http://localhost:3000/api/blogs");
  //   const res = await fetch("http://localhost:3000/api/blogs", { cache: "no-store" });
  //   const res = await fetch("http://localhost:3000/api/blogs", { next: { revalidate: 5 } });
  //   const res = await fetch("http://localhost:3000/api/blogs", { next: { tags: ["blogs"] } });
  //   revalidateTag("time");
  const blogs: Blog[] = await res.json();
  return blogs;
};

export const getBlog = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`);
  //   const res = await fetch(`http://localhost:3000/api/blogs/${id}`, { cache: "no-store" });
  //   const res = await fetch(`http://localhost:3000/api/blogs/${id}`, { next: { revalidate: 20 } });
  const blogs: Blog = await res.json();
  return blogs;
};

export const getTime = async () => {
  const res = await fetch("http://localhost:3000/api/time");
  //   const res = await fetch("http://localhost:3000/api/time", { cache: "no-store" });
  //   const res = await fetch("http://localhost:3000/api/time", { next: { revalidate: 5 } });
  //   const res = await fetch("http://localhost:3000/api/time", { next: { tags: ["time"] } });
  const data = await res.json();
  return data.date;
};

export const refreshTime = async () => {
  const res = await fetch("http://localhost:3000/api/time", { method: "POST" });
};

export const getCategory = async () => {
  //   const { signal } = new AbortController();
  //   const res = await fetch("http://localhost:3000/api/categories");
  //   const res = await fetch("http://localhost:3000/api/categories", { signal });
  //   const res = await fetch("http://localhost:3000/api/categories", { cache: "no-store" });
  const res = await fetch("http://localhost:3000/api/categories", { next: { revalidate: 5 } });
  //   const res = await fetch("http://localhost:3000/api/categories", { next: { tags: ["categories"] } });
  //   revalidatePath("/");
  //   revalidateTag("time");
  const category: string = await res.json();

  return category;
};
