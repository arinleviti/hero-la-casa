import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Type for new posts
interface NewPost {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  createdAt?: Date;
  images?: { url: string; caption?: string }[];
}

// Main function
async function createPost(postData: NewPost) {
  try {
    const hasImages = postData.images && postData.images.length > 0;

    const newPost = await prisma.post.create({
      data: {
        title: postData.title,
        slug: postData.slug,
        excerpt: postData.excerpt || null,
        content: postData.content,
        createdAt: postData.createdAt || new Date(),
        images: hasImages
          ? {
              create: postData.images!.map((img) => ({
                url: img.url,
                caption: img.caption || null,
              })),
            }
          : undefined,
      },
      // Only include images if they exist
      include: hasImages ? { images: true } : undefined,
    });

    console.log('✅ Post created successfully:', newPost);
  } catch (error) {
    console.error('❌ Error creating post:', error);
  } finally {
    await prisma.$disconnect();
    process.exit(0); // ensure Node exits
  }
}

// Example usage
createPost({
  title: 'Diario di bordo – Dicembre 2024',
  slug: 'diario-dicembre-2024',
  excerpt:
    'Dicembre è stato un mese straordinario qui a Hero, ricco di novità, emozioni festive e momenti da condividere.',
  content: `
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/w_700,c_fill/v1753435607/diario-dicembre24-1_gphooh.jpg" alt="Dicembre Hero" />

<p>Dicembre è stato un mese straordinario qui a Hero, ricco di novità, emozioni festive e momenti da condividere...</p>
  `,
  createdAt: new Date('2025-01-07T10:00:00Z'),
  images: [
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/w_700,c_fill/v1753435607/diario-dicembre24-1_gphooh.jpg',
      caption: 'Our beach view in July',
    },
  ],
});
