export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

import blogs from "@/assets/data/blogs";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET(request: Request, { params }: { params: { blogId: string } }) {
  console.log(params);

  await sleep(2000);
  const blog = blogs.find((b) => b.id === params.blogId);
  if (!blog) {
    return new Response(null, { status: 404 });
  }
  return NextResponse.json(blog);
}
