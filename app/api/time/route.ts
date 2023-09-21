export const dynamic = "force-dynamic";

import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ date: new Date().getTime() });
}

export async function POST() {
  revalidateTag("time"); 
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
