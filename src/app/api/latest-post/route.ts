import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  const post = await prisma.post.findFirst({
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(post);
}
