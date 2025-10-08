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
  title: 'Diario di Bordo – Settembre 2025',
  slug: 'diario-settembre-2025',
  excerpt:
    'Settembre di festa! Quattro serate per celebrare il compleanno di HERO tra musica, burger speciali e tanta allegria.',
  content: `
<style>
  .gallery { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
  .gallery img { border-radius: 10px; height: auto; margin-bottom: 10px; }
  .burger-img { max-width: 32%; }
  .bavarian-img { max-width: 48%; }
  .birthday-wide { max-width: 100%; }
  @media (max-width: 600px) {
    .burger-img, .bavarian-img { max-width: 48%; }
  }
</style>

<!-- Presentation image -->
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1759910385/WhatsApp_Image_2025-10-08_at_09.53.35_e8a8894f_zpfyqf.jpg"
     alt="HERO la casa del burger - Presentazione Settembre"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />

<p>Cari amici di HERO la casa del burger, anche questo mese ci ha regalato emozioni, sorrisi e sapori indimenticabili! Settembre è stato un mese speciale, ricco di eventi dedicati a festeggiare il nostro compleanno e a condividere con voi i momenti più gustosi dell’anno.</p>

<h2>🧀🍔 Giovedì: BURGER & JUKEBOX versione Gold</h2>
<p>Una serata all’insegna della musica dal vivo e dei nostri burger più gustosi, accompagnati dalle hit più scatenate e dalle atmosfere vintage. Grazie a tutti coloro che hanno partecipato!</p>

<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908092/IMG-20251007-WA0013_ehpuuk.jpg" alt="Burger & Jukebox Gold" class="burger-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908062/IMG-20251007-WA0014_c2cbk4.jpg" alt="Burger & Jukebox Gold" class="burger-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908062/IMG-20251007-WA0012_rnwyes.jpg" alt="Burger & Jukebox Gold" class="burger-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908061/IMG-20251007-WA0011_ugqvna.jpg" alt="Burger & Jukebox Gold" class="burger-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908061/IMG-20251007-WA0010_ouzttk.jpg" alt="Burger & Jukebox Gold" class="burger-img" />
</div>

<h2>🍺🎉 Venerdì: La prima serata della BAVARIAN FEST</h2>
<p>Un hamburger speciale, ispirato alle tradizioni bavaresi, accompagnato da un’atmosfera festosa e tanta allegria!</p>

<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908024/IMG-20251007-WA0006_pjlvk3.jpg" alt="Bavarian Fest" class="bavarian-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908024/IMG-20251007-WA0009_fgl0lk.jpg" alt="Bavarian Fest" class="bavarian-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908024/IMG-20251007-WA0007_xwd0eg.jpg" alt="Bavarian Fest" class="bavarian-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908024/IMG-20251007-WA0005_resized_xopvgm.jpg" alt="Bavarian Fest" class="bavarian-img" />
</div>

<h2>🎂🥂 Sabato: HAPPY BIRTHDAY HERO</h2>

<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908122/20092025-DSC01156_fyluav.jpg" alt="Happy Birthday HERO" class="birthday-wide" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908121/20092025-DSC01127_q0oeif.jpg" alt="Happy Birthday HERO" class="burger-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908121/20092025-DSC01093_yr3gk8.jpg" alt="Happy Birthday HERO" class="burger-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908119/20092025-DSC01017_okpdkl.jpg" alt="Happy Birthday HERO" class="burger-img" />
</div>

<h2>Domenica: Buon Compleanno HERO!</h2>
<p>Distribuzione delle buste “Buon Compleanno HERO” e ringraziamenti a tutti i partecipanti!</p>
<p><em>Lo staff di HERO la casa del burger.</em></p>
  `,
  createdAt: new Date('2025-10-05T10:00:00Z'),
  images: [
     { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1759910385/WhatsApp_Image_2025-10-08_at_09.53.35_e8a8894f_zpfyqf.jpg', caption: 'Presentazione settembre' },
    // Burger & Jukebox
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908092/IMG-20251007-WA0013_ehpuuk.jpg', caption: 'Burger & Jukebox Gold1' },
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908062/IMG-20251007-WA0014_c2cbk4.jpg', caption: 'Burger & Jukebox Gold2' },
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908062/IMG-20251007-WA0012_rnwyes.jpg', caption: 'Burger & Jukebox Gold3' },
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908061/IMG-20251007-WA0011_ugqvna.jpg', caption: 'Burger & Jukebox Gold4' },
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908061/IMG-20251007-WA0010_ouzttk.jpg', caption: 'Burger & Jukebox Gold5' },

    // Bavarian Fest
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908024/IMG-20251007-WA0006_pjlvk3.jpg', caption: 'Bavarian Fest1' },
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908024/IMG-20251007-WA0009_fgl0lk.jpg', caption: 'Bavarian Fest2' },
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908024/IMG-20251007-WA0007_xwd0eg.jpg', caption: 'Bavarian Fest3' },
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908024/IMG-20251007-WA0005_resized_xopvgm.jpg', caption: 'Bavarian Fest4' },

    // Happy Birthday HERO
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908122/20092025-DSC01156_fyluav.jpg', caption: 'Happy Birthday HERO1' },
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908121/20092025-DSC01127_q0oeif.jpg', caption: 'Happy Birthday HERO2' },
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908121/20092025-DSC01093_yr3gk8.jpg', caption: 'Happy Birthday HERO3' },
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1759908119/20092025-DSC01017_okpdkl.jpg', caption: 'Happy Birthday HERO4' },
  ],
});

