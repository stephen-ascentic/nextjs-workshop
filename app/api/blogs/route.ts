export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

import blogs from "@/assets/data/blogs";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET() {
  await sleep(2000);
  return NextResponse.json(blogs);
}
