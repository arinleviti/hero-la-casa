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
  title: 'Diario di Bordo – Gennaio e Febbraio 2026',
  slug: 'diario-gennaio-febbraio-2026',
  excerpt:
    'In due mesi abbiamo fatto il giro del mondo senza lasciare casa: tra Olimpiadi HERO, nuovi burger e ospiti da ogni parte del mondo, gennaio e febbraio sono stati pieni di emozioni. 🍔🔥',
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
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1773045436/copertina_gen_feb_amfb4p.webp"
     alt="Diario HERO Gennaio Febbraio 2026"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />

<p><strong>Se vi dicessimo che in soli due mesi abbiamo fatto il giro del mondo… senza mai lasciare casa?</strong></p>

<p>
Gennaio e febbraio sono stati un concentrato di emozioni, sapori, sorrisi e momenti che meritano di essere raccontati.
Mettetevi comodi, perché questo non è solo un aggiornamento… è il nostro <strong>Diario di Bordo 💛</strong>
</p>

<h2>✨ GENNAIO – Nuovo anno, nuove sfide, stesso spirito HERO</h2>

<p>
L’anno è iniziato con l’energia delle grandi occasioni. Abbiamo lavorato dietro le quinte,
studiato, assaggiato, sperimentato… perché le <strong>Olimpiadi HERO</strong> non si improvvisano!
</p>

<p>
Il momento più speciale? La prima cena dell’anno insieme agli <strong>AMICI di HERO</strong>.
Una serata esclusiva, intima e piena di entusiasmo, dove in anteprima assoluta avete assaggiato
i nostri burger olimpici.
</p>

<p>
Vedere i vostri occhi curiosi al primo morso è stata la conferma che stavamo preparando qualcosa di davvero speciale.
</p>

<div class="gallery">
  <img
    src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1773045436/ristorante_busy_m0xj3h.webp"
    alt="Serata HERO con il ristorante pieno"
    class="half-img"
  />
  <img
    src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1773046654/olympic_burger5_npcuus.webp"
    alt="Burger Olimpico hero Asia"
    class="half-img"
  />
</div>

<p>
Gennaio è stato il mese della preparazione, della condivisione e di quell’adrenalina
che precede qualcosa di grande.
</p>

<h2>🔥 FEBBRAIO – Accendiamo la fiamma</h2>

<p>
Il <strong>6 febbraio</strong> si parte ufficialmente con le <strong>Olimpiadi HERO</strong>!
</p>

<p>
E mentre l’atmosfera olimpica accendeva il territorio con le gare di
<strong>Milano Cortina 2026</strong> ospitate anche a Predazzo, noi abbiamo acceso la nostra fiamma… in cucina.
</p>

<p>
I nostri <strong>5 burger olimpici</strong>, dopo aver viaggiato simbolicamente tra i continenti,
sono arrivati “a casa” ed entrati ufficialmente nel menù.
</p>

<p><strong>Risultato? Un successone.</strong></p>

<p>
Li avete scelti, raccontati, fotografati, condivisi.
E noi non potremmo essere più orgogliosi.
</p>

<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1773045436/olympic_burger1_kw1thx.webp"
       alt="Burger olimpico Africa"
       class="half-img" />

  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1773045437/olympic_burger2_fxnupc.webp"
       alt="Burger olimpico America"
       class="half-img" />

  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1773045439/olympic_burger3_gkqp3f.webp"
       alt="Burger olimpico Oceania"
       class="half-img" />

  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1773045945/olympic_burger4_lsqtcv.webp"
       alt="Burger olimpico Europa"
       class="half-img" />

</div>

<p>
Sui social sono nate le <strong>OLIMP-HERO</strong>: ogni giorno una medaglia, ogni giorno una sfida,
ogni giorno un podio diverso.
</p>

<p>
È stato bellissimo vedere il tifo, i commenti e le preferenze accendersi
come vere competizioni sportive.
</p>

<p>
Ma la cosa più straordinaria è stata un’altra.
</p>

<p>
A casa HERO abbiamo ospitato <strong>persone di ogni nazionalità</strong>.
Abbiamo ascoltato lingue diverse, condiviso esperienze e brindato a sorrisi
che non hanno bisogno di traduzione.
</p>

<p>
È stato un vero viaggio nel mondo… restando nel nostro territorio.
</p>

<p>
E mentre i nostri ospiti viaggiavano tra i sapori locali e nazionali,
noi viaggiavamo insieme a loro attraverso storie, racconti e nuove amicizie.
</p>

<p>
Gennaio e febbraio ci hanno ricordato perché facciamo tutto questo:
<strong>non solo per creare burger, ma per creare momenti.</strong>
</p>

<h2>✨ E ORA?</h2>

<p>
Marzo è alle porte… e possiamo dirvi solo una cosa:
<strong>stiamo preparando qualcosa che vi farà parlare, assaggiare e condividere ancora di più.</strong>
</p>

<p>
Una sorpresa che cambierà il ritmo delle vostre serate da HERO.
</p>

<p><strong>Restate connessi.</strong></p>

<p>
Il bello deve ancora arrivare 😉
</p>

<p>
Grazie per essere parte della nostra squadra.<br/>
Grazie per tifare HERO.
</p>

<p><strong>Ci vediamo al prossimo morso. 🍔</strong></p>

<em>Lo staff di HERO la casa del burger.</em>
  `,
  createdAt: new Date('2026-03-09T10:00:00Z'),
  images: [
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1773045436/copertina_gen_feb_amfb4p.webp',
      caption: 'Copertina Gennaio Febbraio 2026',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1773045436/ristorante_busy_m0xj3h.webp',
      caption: 'Serata HERO con il ristorante pieno',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1773045436/olympic_burger1_kw1thx.webp',
      caption: 'Burger olimpico HERO',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1773045437/olympic_burger2_fxnupc.webp',
      caption: 'Burger olimpico HERO',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1773045439/olympic_burger3_gkqp3f.webp',
      caption: 'Burger olimpico HERO',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1773045945/olympic_burger4_lsqtcv.webp',
      caption: 'Burger olimpico HERO',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1773046654/olympic_burger5_npcuus.webp',
      caption: 'Burger olimpico HERO',
    }

  ],
});

