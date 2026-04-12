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
  title: 'Diario di Bordo – Marzo 2026',
  slug: 'diario-marzo-2026',
  excerpt:
    'Marzo a casa HERO è stato incredibile: paralimpiadi, omaggi per le donne e il nostro San Patrizio a tutto verde! 🍀✨',
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
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1775648090/diario_aprile_copertina_s6isrg.webp"
     alt="Diario HERO Marzo 2026"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />

<p><strong>Anche questo mese vogliamo portarvi dentro quello che è successo a casa HERO… e marzo è stato davvero indimenticabile. 🤩</strong></p>

<h2>🏅 PARALIMPIADI – Spirito olimpico in ogni gesto</h2>
<p>
Lo spirito olimpico è continuato con le <strong>Paralimpiadi</strong>: un’esperienza incredibile che ci ha fatto incontrare persone speciali da tutto il mondo.
</p>

<p>
In particolare, una sera abbiamo avuto l’onore di ospitare un atleta paralimpico canadese pluri-medagliato con tutta la sua famiglia e… sì, abbiamo visto una medaglia paralimpica dal vivo [spoiler: è pesantissima! 😮‍💨]
</p>

<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1775648278/atleta_dgitzb.webp"
       alt="Atleta paralimpico canadese a casa HERO"
       class="half-img" />
</div>

<h2>💖 FESTA DELLE DONNE – Omaggio speciale</h2>
<p>
Quest’anno l’8 marzo non abbiamo potuto festeggiarlo con le <strong>nostre donne</strong>, ma non ce ne siamo dimenticati.
</p>
<p>
Dal 9 al 15 marzo abbiamo dedicato un <strong>omaggio speciale</strong> a tutte le donne che sono venute a trovarci, regalando loro un pensiero firmato <strong>SEPHORA</strong>. Un piccolo gesto per dire grazie per la fiducia e l’affetto dimostrati ogni giorno.
</p>

<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1775648278/creme_sk1048.webp"
       alt="Omaggio per le donne da Sephora"
       class="half-img" />
</div>

<h2>🍀 SAN PATRIZIO – Casa HERO si tinge di verde</h2>
<p>
E per chiudere il mese in bellezza… ci siamo tinti di verde! Come ogni anno HERO vola in Irlanda per la festa più verde dell’anno.
</p>

<p>
4 giorni di festa a tema: casa HERO si è trasformata, tra decorazioni, musica, burger speciale e la famosissima birra irlandese <strong>GUINNESS</strong>.
</p>

<p>
Per farvi entrare ancora di più nel <strong>MOOD SAN PATRIZIO</strong> abbiamo creato dei gratta e vinci: proprio come i folletti alla ricerca della loro pentola d’oro, ogni cliente aveva la possibilità di trovare il proprio “premio” nascosto… perché a San Patrizio, la fortuna può spuntare quando meno te lo aspetti. ☘️
</p>

<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1775648370/san_patrizio1_pn7sg0.webp"
       alt="Decorazioni di San Patrizio a casa HERO"
       class="half-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1775648371/san_patrizio2_qttee2.webp"
       alt="Festa di San Patrizio con burger e Guinness"
       class="half-img" />
</div>

<p>
Marzo è finito, ma noi siamo più carichi che mai. Tante novità in serbo… e come sempre, non ci fermiamo mai.
</p>

<p>
Ci vediamo nel mese di <strong>APRILE</strong> da HERO!<br/>
Il team HERO
</p>
  `,
  createdAt: new Date('2026-03-31T10:00:00Z'),
  images: [
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1775648090/diario_aprile_copertina_s6isrg.webp',
      caption: 'Copertina Marzo 2026',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1775648278/atleta_dgitzb.webp',
      caption: 'Atleta paralimpico canadese a casa HERO',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1775648278/creme_sk1048.webp',
      caption: 'Omaggio per le donne da Sephora',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1775648370/san_patrizio1_pn7sg0.webp',
      caption: 'Decorazioni di San Patrizio a casa HERO',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1775648371/san_patrizio2_qttee2.webp',
      caption: 'Festa di San Patrizio con burger e Guinness',
    },
  ],
});

