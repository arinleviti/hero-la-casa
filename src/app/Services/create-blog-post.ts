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
  title: 'Diario di Bordo – Giugno 2026',
  slug: 'diario-giugno-2026',
  excerpt:
    'Giugno da HERO: l\'ultimo Kanta Game prima della pausa estiva, il nuovo menu estivo con l\'Altamura, l\'apertura a pranzo in arrivo e il primo anno nella nuova sede! 🎤🍔☀️',
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
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1783257014/copertina_diario_giu26_tw4ncq.webp"
     alt="Diario HERO Giugno 2026"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />
 
<p>
Giugno è stato uno di quei mesi che ci ricorderemo a lungo. Un mix di energia, novità e tanta voglia di fare che ci ha accompagnati dall'inizio alla fine.
</p>
 
<h2>🎤 ULTIMO KANTA GAME</h2>
<p>
Siamo tornati dalle ferie con il botto, inaugurando il mese con l'ultimo Kanta Game prima della pausa estiva. È la cena cantata più figa della Val di Fiemme, una serata piena di divertimento, sfide e risate, proprio come piace a noi.
</p>
<p>
Ora ci prendiamo una piccola pausa, ma niente paura: il Kanta Game tornerà a settembre, ancora più carico.
</p>
 
<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1778004260/kanta_game1_at0heq.webp"
       alt="Kanta Game – serata HERO"
       class="half-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1778004260/kanta_game2_tr0dzf.webp"
       alt="Kanta Game – cena cantata HERO"
       class="half-img" />
</div>
 
<h2>☀️ NUOVO MENU ESTIVO</h2>
<p>
Tra le novità più attese c'è stato anche il cambio di menu. È arrivato il nostro menu estivo, ricco di nuovi sapori, proposte fresche e qualche sorpresa che non vedevamo l'ora di farvi assaggiare.
</p>
<p>
Una novità? <strong>L'Altamura</strong>, una ricetta completamente inedita che racconta un pezzo della Puglia. Ci siamo lasciati ispirare dalla tradizionale parmigiana pugliese rivisitandola per creare un burger dal carattere deciso, ricco di gusto e con un'identità tutta sua. È una di quelle ricette che nascono dalla voglia di sperimentare, senza dimenticare le proprie radici.
</p>
 
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1783253510/Altamura_zix7uj.webp"
     alt="Burger Altamura – novità menu estivo HERO"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />
 
<h2>🍽️ APERTURA A PRANZO</h2>
<p>
Nel frattempo abbiamo lavorato dietro le quinte per un'altra importante novità: l'apertura anche a pranzo. Stiamo preparando tutto per offrirvi HERO in un nuovo momento della giornata. Non vediamo l'ora di accogliervi.
</p>
 
<h2>🎂 UN ANNO NELLA NUOVA SEDE</h2>
<p>
E poi c'è un traguardo che ci emoziona particolarmente.
</p>
<p>
È passato un anno da quando Hero – La Casa del Burger si è trasferito nella nuova sede.
</p>
 
<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1783255506/foto_inizio1_nklz2z.webp"
       alt="Lavori nuova sede HERO – inizio"
       class="half-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1783255504/foto_inizio2_lzbvsx.webp"
       alt="Lavori nuova sede HERO – fine"
       class="half-img" />
</div>
 
<p>
Sembra ieri che aprivamo le porte con l'entusiasmo, l'ansia e i mille pensieri di un nuovo inizio. In questi dodici mesi sono successe tantissime cose: abbiamo conosciuto nuovi clienti, rivisto tantissimi volti amici, creato nuove ricette, organizzato eventi e vissuto momenti che porteremo sempre con noi.
</p>
<p>
Tra emozioni, sfide e tantissime cose da fare, questo primo anno è davvero volato.
</p>
<p>
E tutto questo è stato possibile anche grazie a voi, che ogni giorno scegliete Hero, ci sostenete e ci date la motivazione per migliorarci continuamente.
</p>
 
<p>
Se giugno è stato così intenso, possiamo solo immaginare quello che ci aspetta nei prossimi mesi.
</p>
<p>
<strong>Noi siamo pronti. E voi?</strong><br/>
Il team HERO
</p>
  `,
  createdAt: new Date('2026-06-30T10:00:00Z'),
  images: [
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1778004260/kanta_game1_at0heq.webp',
      caption: 'Kanta Game – serata HERO',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1778004260/kanta_game2_tr0dzf.webp',
      caption: 'Kanta Game – cena cantata HERO',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1783253510/Altamura_zix7uj.webp',
      caption: 'Burger Altamura – novità menu estivo',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1783255506/foto_inizio1_nklz2z.webp',
      caption: 'Lavori nuova sede HERO – inizio',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1783255504/foto_inizio2_lzbvsx.webp',
      caption: 'Lavori nuova sede HERO – fine',
    },
  ],
});
