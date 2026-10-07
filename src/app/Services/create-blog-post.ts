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
  title: 'Diario di Bordo – Settembre 2026',
  slug: 'diario-settembre-2026',
  excerpt:
    'Settembre da HERO: una serata con il Timber Team Giacomelli e la ruota della fortuna, la Festa del Boscaiolo, le ferie (anche Mauro!) e il nuovo menu autunnale! 🌲🍔🍂',
  content: `
<style>
  .gallery { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
  .gallery img { border-radius: 10px; height: auto; margin-bottom: 10px; }
  .half-img { max-width: 48%; }
  .third-img { max-width: 31%; }
  @media (max-width: 600px) {
    .half-img { max-width: 100%; }
    .third-img { max-width: 100%; }
  }
</style>
 
<!-- Presentation image -->
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1791358260/copertina-settembre-26_zylb6h.webp"
     alt="Diario HERO Settembre 2026"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />
 
<p>
Ciao Eroi,<br/>
settembre è stato un mese bello pieno, e prima di tuffarci completamente nell'autunno vogliamo raccontarti un po' di quello che è successo da Hero – La Casa del Burger.
</p>
 
<h2>🌲 UNA SERATA CON IL TIMBER TEAM</h2>
<p>
Abbiamo iniziato il mese a bomba, con una serata dedicata agli amanti del bosco e, soprattutto, al nostro Timber Team Giacomelli, con cui condividiamo una bella collaborazione. Li abbiamo avuti a cena insieme al Team Bucci, anche loro protagonisti di Undercut.
</p>
<p>
Sabato, per l'occasione, chi ordinava il Timber burger aveva la possibilità di girare la nostra ruota della fortuna e provare a portarsi a casa uno dei premi in palio: la maglietta ufficiale del team, il cappellino oppure una foto insieme a uno dei ragazzi del Timber Team.
</p>
 
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1791358094/foto_timber_obxu7r.webp"
     alt="Serata Timber Team Giacomelli – HERO"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />
 
<p>
Una serata diversa dal solito, tra burger, boschi, risate e un bel po' di fortuna.
</p>
 
<h2>🪓 ALLA FESTA DEL BOSCAIOLO</h2>
<p>
E non ci siamo fermati lì.
</p>
<p>
La domenica siamo andati alla Festa del Boscaiolo, questa volta dall'altra parte del bancone: tutti insieme a fare il tifo per il Timber Team e a vivere una giornata all'insegna della passione per il bosco e per quello che rappresenta.
</p>
<p>
Ma soprattutto siamo andati di persona a controllare che chi aveva vinto la maglietta o il cappellino la sera prima lo stesse sfoggiando. E secondo te…? Avevano la nostra maglietta?
</p>
 
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1791358094/foto_maglietta_mp6q52.webp"
     alt="La maglietta del Timber Team alla Festa del Boscaiolo – HERO"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />
 
<h2>🏖️ SIAMO ANDATI IN FERIE!</h2>
<p>
Poi, finalmente, è arrivato il momento di staccare.
</p>
<p>
Abbiamo cambiato aria, chi scegliendo il mare, chi la città… insomma, ognuno ha ricaricato le batterie a modo suo.
</p>
<p>
<strong>E ANCHE MAURO È ANDATO IN FERIE.</strong> Cosa incredibile! Non ha perso il vizio di mangiare hamburger e si è sacrificato provando nuovi posti e ricette.
</p>
 
<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1791358093/foto_mauro_qn1ibt.webp"
       alt="Mauro in ferie – HERO"
       class="half-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1791358093/foto_mauro_2_tcgwek.webp"
       alt="Mauro in ferie – HERO"
       class="half-img" />
</div>
 
<h2>🍂 È ARRIVATO IL NUOVO MENU AUTUNNALE!</h2>
<p>
Abbiamo inserito nuove ricette, rispolverato alcuni best seller che sappiamo essere tra i vostri preferiti e, come sempre, abbiamo cercato di portare in tavola qualcosa che abbia quel sapore che ormai conoscete bene: quello di Hero.
</p>
 
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1791358093/foto_menu_beovig.webp"
     alt="Nuovo menu autunnale – HERO"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />
 
<p>
Settembre ci ha regalato una bella ripartenza.
</p>
<p>
Ottobre è appena iniziato e abbiamo già tante cose da raccontarvi.
</p>
<p>
<strong>Noi siamo pronti. E voi?</strong><br/>
Il team HERO
</p>
  `,
  createdAt: new Date('2026-09-30T10:00:00Z'),
  images: [
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1791358260/copertina-settembre-26_zylb6h.webp',
      caption: 'Diario HERO Settembre 2026',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1791358094/foto_timber_obxu7r.webp',
      caption: 'Serata con il Timber Team Giacomelli',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1791358094/foto_maglietta_mp6q52.webp',
      caption: 'La maglietta del Timber Team alla Festa del Boscaiolo',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1791358093/foto_mauro_qn1ibt.webp',
      caption: 'Mauro in ferie',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1791358093/foto_mauro_2_tcgwek.webp',
      caption: 'Mauro in ferie',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1791358093/foto_menu_beovig.webp',
      caption: 'Nuovo menu autunnale',
    },
  ],
});