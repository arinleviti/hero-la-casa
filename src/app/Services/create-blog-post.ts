//do not run npm run dev or similar commands when executing this script
//npx prisma generate
//npx tsx src\app\Services\create-blog-post.ts

import { PrismaClient } from '../../generated/prisma';

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
  title: 'Diario di Bordo – Novembre 2025',
  slug: 'diario-novembre-2025',
  excerpt:
    'Novembre in casa HERO: tra le famose buste segrete, la tradizione di San Martino e il ritorno del Krampus Burger, un mese pieno di gusto, sorprese e allegria! 🎁👹🍔',
  content: `
<style>
  .gallery { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
  .gallery img { border-radius: 10px; height: auto; margin-bottom: 10px; }
  .half-img { max-width: 48%; }
  @media (max-width: 600px) {
    .half-img { max-width: 100%; }
  }
</style>

<!-- Presentation image -->
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1765302235/copertinaNovembre25_mtz95f.webp"
     alt="HERO la casa del burger - Novembre 2025"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />

<p>Che mese incredibile è stato novembre in casa HERO!<br />
Ecco un piccolo recap di tutto ciò che è successo:</p>

<h2>🎁 LE FAMOSE BUSTE SEGRETE</h2>
<p>Abbiamo inaugurato il mese con l’apertura delle nostre <strong>buste segrete</strong>… e che dire: il vostro entusiasmo ci ha letteralmente travolti!</p>
<p>Ogni giorno vediamo la frenesia con cui venite a scoprire quale premio vi attende e chi sarà il fortunato a vincere il weekend per due persone. L’energia è contagiosa! 😍</p>

<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1765208866/buste1_y9zxwu.webp" alt="Buste Segrete HERO" class="half-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1765208866/Buste2_pfy2cl.webp" alt="Buste Segrete HERO" class="half-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1765208866/Buste3_wwnhvw.webp" alt="Buste Segrete HERO" class="half-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1765311923/Buste4_ivaezh.webp" alt="Buste Segrete HERO" class="half-img" />
</div>

<h2>🔥 SAN MARTINO</h2>
<p>Abbiamo poi celebrato una delle feste di paese più sentite: <strong>San Martino</strong>. Grazie a tutti coloro che hanno condiviso con noi questa piccola tradizione che ci scalda sempre il cuore.</p>

<h2>👹 KRAMPUS BURGER</h2>
<p>Tra le grandi attese del mese, lui non poteva mancare: il <strong>Krampus Burger</strong>!</p>
<p>Ogni anno è uno dei protagonisti più acclamati di casa HERO, e il suo ritorno è stato accolto… con l’acquolina alla bocca!</p>

<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1765208866/Krampus1_akabmp.webp" alt="Krampus Burger HERO" class="half-img" />
</div>

<h2>🎄 IN ARRIVO… DICEMBRE!</h2>
<p>Nel frattempo ci stiamo preparando alle festività.</p>
<p>Dicembre è alle porte e arriverà con tantissime novità, iniziative e qualche sorpresa che non vediamo l’ora di svelarvi.</p>

<p>Grazie per aver reso novembre così speciale. ❤️<br/>
<em>Lo staff di HERO la casa del burger.</em></p>
  `,
  createdAt: new Date('2025-12-09T10:00:00Z'),
  images: [
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1765208866/Krampus1_akabmp.webp', caption: 'Krampus burger' },
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1765208866/Buste2_pfy2cl.webp', caption: 'Buste 2' },
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1765208866/Buste3_wwnhvw.webp', caption: 'Buste 3' },
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1765208866/buste1_y9zxwu.webp', caption: 'Buste 1' },
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1765311923/Buste4_ivaezh.webp', caption: 'Buste 4' },
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1765302235/copertinaNovembre25_mtz95f.webp', caption: 'Copertina Novembre 25' },
  ],
});

