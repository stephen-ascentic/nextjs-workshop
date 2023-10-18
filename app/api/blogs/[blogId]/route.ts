export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';

import blogs from '@/assets/data/blogs';
import { sleep } from '@/lib/utils';

export async function GET(request: Request, { params }: { params: { blogId: string } }) {
  await sleep(3000);
  const blog = blogs.find(b => b.id === params.blogId);

  if (!blog) {
    return new Response(null, { status: 404 });
  }

  return NextResponse.json(blog);
}
