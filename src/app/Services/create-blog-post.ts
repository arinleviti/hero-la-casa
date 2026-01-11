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
  title: 'Diario di Bordo – Dicembre 2025',
  slug: 'diario-dicembre-2025',
  excerpt:
    'Dicembre è stato un mese indimenticabile in casa HERO: Krampus, Avatar Burger, Natale con i più piccoli e un Capodanno pieno di emozioni. ❤️🎄🍔',
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
     alt="HERO la casa del burger - Dicembre 2025"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />

<p><strong>Dicembre è stato un mese semplicemente indimenticabile in casa HERO 🍔✨</strong></p>

<p>
Non ci siamo mai fermati, non ci siamo mai annoiati… e abbiamo concluso questo mese e questo anno incredibile,
pieno di soddisfazioni che ci avete trasmesso con i vostri sorrisi e il vostro affetto,
festeggiando insieme il Capodanno.
</p>

<p>
Un viaggio fatto di emozioni, tradizione, creatività e tanta magia… vogliamo ripercorrerlo insieme a voi.
</p>

<p><strong>Brindiamo a un nuovo anno che sarà ricco di emozioni, novità e tante sorprese.</strong></p>

<h2>👹 I KRAMPUS A CASA HERO</h2>

<p>
Abbiamo iniziato il mese con una serata davvero speciale: l’arrivo dei <strong>Krampus in hamburgheria</strong>.
Un evento suggestivo, intenso e affascinante, che ci ha fatto respirare a pieno la magia della tradizione
e ci ha regalato un’atmosfera unica, grazie agli amici dei <strong>KrAMPUS DI FIEMME</strong>.
</p>

<div class="gallery">
  <img
    src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1768163890/foto_gruppo_krampus_kpil5q.webp"
    alt="Krampus a casa HERO"
    class="half-img"
  />
  <img
    src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1768163886/fotobimbakrampus_w6es7g.webp"
    alt="Bimba Krampus a casa HERO"
    class="half-img"
  />
</div>

<h2>🌌 L’AVATAR DI UN HAMBURGER</h2>

<p>
Subito dopo abbiamo deciso di spingerci oltre l’ordinario, dando vita a qualcosa di mai visto prima.
In occasione dell’uscita del terzo film della saga Avatar, abbiamo voluto rendergli omaggio creando
un burger dove nulla era come sembrava.
</p>

<p>
Così è nato <strong>l’AVATAR di un hamburger</strong>: ciò che vedevi e mangiavi non era ciò che pensavi.
Un’esperienza visiva e di gusto che ha sorpreso tutti.
</p>

<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1768164206/avatar_pp4dqz.webp"
       alt="Avatar Burger HERO"
       class="half-img" />
</div>

<h2>🎄 IL NATALE DEI PICCOLI EROI</h2>

<p>
Con l’arrivo del Natale non potevamo non ispirarci alla festa più calda dell’inverno.
Per i nostri piccoli eroi abbiamo creato due burger speciali: <strong>il Grinch e il Babbo</strong>,
menu pensati apposta per i più piccoli.
</p>

<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1768163887/foto_babbo_da_cucina_gg2g1s.webp"
       alt="Babbo Natale in cucina da HERO"
       class="half-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1768163887/foto_grinch_tj13xc.webp"
       alt="Grinch Burger per bambini"
       class="half-img" />
</div>

<p>
Ad accompagnarli è arrivato anche il <strong>Christmas Burger</strong> in edizione limitata,
pensato per celebrare le feste con sapori speciali e un tocco di magia natalizia.
</p>

<h2>🎅 BABBO NATALE A CASA HERO</h2>

<p>
Il 23 dicembre Babbo Natale 🎅 in persona è arrivato da HERO per distribuire caramelle e cioccolatini
a tutti i bambini, regalando sorrisi, momenti di pura felicità e una foto ricordo
nel nostro salottino natalizio.
</p>

<p><strong>Un ricordo lo abbiamo anche noi ❤️</strong></p>

<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1768163889/foto_ns_ynobwe.webp"
       alt="Lo staff di HERO"
       class="half-img" />
</div>

<p>
Grazie di cuore a tutti voi per aver reso questo dicembre così speciale ❤️<br/>
<strong>Il bello… è che siamo solo all’inizio.</strong>
</p>
<em>Lo staff di HERO la casa del burger.</em></p>
  `,
  createdAt: new Date('2026-01-11T10:00:00Z'),
 images: [
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1765302235/copertinaNovembre25_mtz95f.webp',
      caption: 'Copertina placeholder',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1768163890/foto_gruppo_krampus_kpil5q.webp',
      caption: 'Krampus a casa HERO',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1768163886/fotobimbakrampus_w6es7g.webp',
      caption: 'Bimba e Krampus a casa HERO',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1768164206/avatar_pp4dqz.webp',
      caption: 'Avatar Burger',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1768163887/foto_babbo_da_cucina_gg2g1s.webp',
      caption: 'Babbo Natale in cucina',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1768163887/foto_grinch_tj13xc.webp',
      caption: 'Grinch Burger',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1768163889/foto_ns_ynobwe.webp',
      caption: 'Lo staff di HERO',
    },
  ],
});

