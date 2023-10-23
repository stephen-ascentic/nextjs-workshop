export const dynamic = "force-dynamic";

import { revalidatePath } from "next/cache";
// import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(new Date().getTime());
}

export async function POST() {
  //   revalidateTag("categories");
  revalidatePath("/categories");
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
