// app/api/comments/route.ts
import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    // Parse incoming form data (from <form method="POST">) into easy key-value pairs
    const formData = await req.formData();
    const postId = Number(formData.get('postId'));
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const content = formData.get('content') as string;

    if (!postId || !name || !email || !content) {
      return NextResponse.json({ error: 'Tutti i campi sono obbligatori' }, { status: 400 });
    }

    // Save comment to the database
    await prisma.comment.create({
      data: {
        postId,
        name,
        email,
        content,
      },
    });

    // ✅ Redirect back to the blog page after submission
    // req.headers.get('referer') gives the current page URL
    const referer = req.headers.get('referer') || '/blog/1';
    return NextResponse.redirect(referer);

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'A causa di un errore, il tuo commento non è stato registrato' }, { status: 500 });
  }
}
