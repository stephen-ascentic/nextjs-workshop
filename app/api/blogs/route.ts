export const dynamic = "force-dynamic";

import { sleep } from "@/lib/utils";
import { NextResponse } from "next/server";

import blogs from "@/assets/data/blogs";

export async function GET() {
  await sleep(1000);
  return NextResponse.json(blogs);
}
