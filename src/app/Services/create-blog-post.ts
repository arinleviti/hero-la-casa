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
  title: 'Diario di Bordo – Ottobre 2025',
  slug: 'diario-ottobre-2025',
  excerpt:
    'Ottobre di gusto e tradizione! Tra Bavarian Fest, nuovi sapori autunnali e una serata di Halloween da brividi. 🎃🍔',
  content: `
<style>
  .gallery { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
  .gallery img { border-radius: 10px; height: auto; margin-bottom: 10px; }
  .cheers-img { max-width: 48%; }
  .halloween-img { max-width: 48%; }
  @media (max-width: 600px) {
    .cheers-img, .halloween-img { max-width: 100%; }
  }
</style>

<!-- Presentation image -->
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1762891059/copertinaOttobre25_pw0ced.webp"
     alt="HERO la casa del burger - Ottobre 2025"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />

<p>Ottobre è stato un mese pieno di gusto, musica e divertimento… e vogliamo raccontarvi tutto!</p>

<h2>🍺 BAVARIAN FEST & DESMONTEGADA</h2>
<p>E’ iniziato con la “BAVARIAN FEST”: tre giorni in stile bavarese che si sono conclusi con la 30ª edizione de <strong>La Desmontegada de le Vache</strong>, e le abbiamo viste sfilare proprio davanti al nostro locale!</p>
<p>Un momento di tradizione e festa che abbiamo celebrato con un menù dedicato per l’occasione! 🍔</p>

<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1762890474/cheers1_ukjwqc.webp" alt="Bavarian Fest HERO" class="cheers-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1762890474/cheers2_xxqyo6.webp" alt="Bavarian Fest HERO" class="cheers-img" />
</div>

<h2>🎶 BURGER & JUKEBOX</h2>
<p>Il nostro jukebox ha continuato a farvi divertire in una serata speciale tutta dedicata a brani di altri tempi. Ogni primo e terzo giovedì del mese, la nostra serata <strong>BURGER & JUKEBOX</strong> – ormai un appuntamento fisso – riscuote sempre un enorme successo!</p>

<h2>🍂 NUOVO MENÙ D’AUTUNNO</h2>
<p>È arrivato il profumo dell’autunno con il <strong>nuovo menù stagionale</strong>: tante ricette nuove, ingredienti di stagione e, come sempre, tanta passione! 🍂✨ Nei prossimi giorni la nostra chef Anna vi racconterà tutte le novità.</p>

<h2>👻 HALLOWEEN NIGHT</h2>
<p>Tra i burger più attesi, l’<strong>Halloween Burger</strong>, un’edizione limitata da paura! Con ben due salse nuove create solo per l’occasione.</p>
<p>Con questo speciale burger abbiamo chiuso il mese in grande stile, celebrando ormai da tre anni la <strong>sera di Halloween</strong> con una serata speciale: travestimenti, risate e un dolce alla zucca realizzato da Anna – una vera magia! 🧙‍♀️</p>

<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1762890474/halloween1_s27zpn.webp" alt="Halloween HERO" class="halloween-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1762890473/halloween2_qkdsqb.webp" alt="Halloween HERO" class="halloween-img" />
</div>

<h2>🎁 NOVITÀ E SORPRESE</h2>
<p>Finalmente abbiamo terminato la distribuzione delle nostre <strong>buste segrete</strong> (grazie a tutti per aver partecipato con tanto entusiasmo!) e siamo partiti con l’apertura che già sta regalando emozioni.</p>
<p>Grazie a tutti voi che siete passati, avete condiviso sorrisi, foto e serate con noi.</p>

<p><em>Lo staff di HERO la casa del burger.</em></p>
  `,
  createdAt: new Date('2025-11-05T10:00:00Z'),
  images: [
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1762891059/copertinaOttobre25_pw0ced.webp', caption: 'Presentazione ottobre' },
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1762890474/cheers1_ukjwqc.webp', caption: 'Bavarian Fest HERO1' },
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1762890474/cheers2_xxqyo6.webp', caption: 'Bavarian Fest HERO2' },
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1762890474/halloween1_s27zpn.webp', caption: 'Halloween HERO1' },
    { url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1762890473/halloween2_qkdsqb.webp', caption: 'Halloween HERO2' },
  ],
});

