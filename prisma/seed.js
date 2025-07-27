import { PrismaClient } from '../src/generated/prisma/client.js';
import { blogPosts } from '../src/app/Services/seedBlogData.js';

const prisma = new PrismaClient();

async function main() {
  console.log('🧹 Cleaning existing data...');
  await prisma.comment.deleteMany();
  await prisma.image.deleteMany();
  await prisma.post.deleteMany();

  console.log('🌱 Seeding posts...');
  for (const post of blogPosts) {
    await prisma.post.create({
      data: {
        title: post.title,
        slug: post.slug,
        content: post.content,
        createdAt: post.createdAt,
        images: {
          create: post.images?.map(image => ({
            url: image.url,
            caption: image.caption,
          })) ?? [],
        },
        comments: {
          create: post.comments?.map(comment => ({
            name: comment.name,
            email: comment.email,
            content: comment.content,
            createdAt: comment.createdAt,
          })) ?? [],
        },
      },
    });
  }
  console.log('✅ Seeding complete!');
}

main()
  .catch(e => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());


/* import { PrismaClient } from '../src/generated/prisma/client';
import { blogPosts } from '../src/app/Services/seedBlogData';


const prisma = new PrismaClient();

async function main() {
    console.log('🧹 Cleaning existing data...');
    await prisma.comment.deleteMany();
    await prisma.image.deleteMany();
    await prisma.post.deleteMany();

    console.log('🌱 Seeding posts...');
    for (const post of blogPosts) {
        await prisma.post.create({
            data: {
                title: post.title,
                slug: post.slug,
                content: post.content,
                createdAt: post.createdAt,
                images: {
                    create: post.images?.map((image) => ({
                        url: image?.url,
                        caption: image?.caption,
                    })) ?? [],
                },
                comments: {
                    create: post.comments?.map((comment) => ({
                        name: comment.name,
                        email: comment.email,
                        content: comment.content,
                        createdAt: comment.createdAt,
                    })) ?? [],
                },
            },
        });
    }
    console.log('✅ Seeding complete!');
}

main()
    .catch((e) => {
        console.error('❌ Seeding failed:', e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect()); */