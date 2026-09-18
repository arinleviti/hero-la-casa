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
  title: 'Diario di Bordo – Agosto 2026',
  slug: 'diario-agosto-2026',
  excerpt:
    'Agosto da HERO: la Limited Edition con tartare di cervo, un Ferragosto a base di spiedo con tutto lo staff, e le misteriose Buste segrete di Buon Compleanno HERO in arrivo! 🦌🔥🎁',
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
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1787925925/copertina-agosto_ddpm5v.webp"
     alt="Diario HERO Agosto 2026"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />
 
<p>
Ciao Eroi,<br/>
agosto, per noi, non è mai stato semplicemente "il mese delle ferie".
</p>
<p>
È il mese in cui succedono cose. Cose belle, cose buone, da raccontare.
</p>
<p>
E questo mese abbiamo parecchio da dire.
</p>
 
<h2>🦌 LA LIMITED EDITION DI AGOSTO: TARTARE DI CERVO</h2>
<p>
Per il Limited Edition del mese abbiamo deciso di fare una cosa un po' folle. Prendere un ingrediente selvaggio, elegante, fuori dagli schemi… ovvero la tartare di cervo, e abbiamo fatto quello che sappiamo fare meglio: l'abbiamo messa dentro un burger.
</p>
<p>
Perché evidentemente da Hero non riusciamo a lasciare in pace nessun ingrediente.
</p>
<p>
Il risultato? Un hamburger selvaggio, elegante, deciso e completamente fuori dagli schemi. Un burger per palati curiosi, per chi davanti alla parola "cervo" non scappa… ma dice: "Ok. Fammi provare."
</p>
<p>
Un limited edition che, come tutte le cose davvero speciali, non è destinato a restare per sempre. Quindi, se non l'hai ancora assaggiata, il messaggio è semplice: il cervo corre. E la Limited Edition anche.
</p>
 
<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1787925925/wild_maurino_vzwvfm.webp"
       alt="Limited Edition tartare di cervo – HERO"
       class="half-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1754481682/wild-burger_ixpjwo.webp"
       alt="Wild Burger con tartare di cervo – HERO"
       class="half-img" />
</div>
 
<h2>🔥 A FERRAGOSTO ABBIAMO TRADITO I BURGER</h2>
<p>
Sì. Lo ammettiamo. Per un giorno abbiamo tradito il nostro grande amore. Abbiamo lasciato stare burger, pane e patatine e abbiamo acceso il fuoco.
</p>
<p>
Ferragosto in stile HERO = Spiedo!
</p>
<p>
Carne che gira lentamente. Fuoco acceso. Bicchieri pieni. Risate. E lo staff finalmente seduto dalla parte giusta del tavolo.
</p>
<p>
Quella dove non devi chiedere: "Patatine normali o al cheddar?" Ma puoi semplicemente dire: "Passami quel pezzo lì."
</p>
<p>
Un pranzo tutti insieme, come si deve. Perché dietro ogni burger che arriva caldo sul tuo tavolo c'è una squadra. E ogni tanto questa squadra ha bisogno di mangiare. Parecchio.
</p>
 
<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1787925925/foto_spiedo_1_greniy.webp"
       alt="Ferragosto allo spiedo – team HERO"
       class="half-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1787925925/foto_spiedo_2_uaxbqf.webp"
       alt="Ferragosto allo spiedo – team HERO"
       class="half-img" />
</div>
 
<h2>🎁 STIAMO PREPARANDO QUALCOSA DI PERICOLOSAMENTE BELLO</h2>
<p>
Qui attenzione. Perché abbiamo iniziato a preparare le Buste segrete di Buon Compleanno HERO.
</p>
<p>
Siamo impazienti di iniziare a distribuirle, perché per il nostro compleanno vogliamo fare un regalo noi a voi, che ci supportate e ci scegliete.
</p>
<p>
Non sai cosa sono? E no, non possiamo ancora raccontarti tutto.
</p>
 
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1787925925/foto_buste_xavdtk.webp"
     alt="Buste segrete di Buon Compleanno HERO"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />
 
<p>
Agosto ci ha ricordato una cosa semplice: che Hero non è solo quello che succede davanti alla piastra. È tutto quello che succede prima, durante e dopo un burger.
</p>
<p>
E noi siamo felici di raccontartelo.
</p>
<p>
E settembre? Beh… meglio non anticipare nulla. Che poi vi abituate.
</p>
<p>
<strong>Ci vediamo da Hero. Portate fame. Al resto pensiamo noi.</strong><br/>
Il team HERO
</p>
  `,
  createdAt: new Date('2026-08-31T10:00:00Z'),
  images: [
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1787925925/copertina-agosto_ddpm5v.webp',
      caption: 'Diario HERO Agosto 2026',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1787925925/wild_maurino_vzwvfm.webp',
      caption: 'Limited Edition tartare di cervo',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1754481682/wild-burger_ixpjwo.webp',
      caption: 'Wild Burger con tartare di cervo',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1787925925/foto_spiedo_1_greniy.webp',
      caption: 'Ferragosto allo spiedo',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1787925925/foto_spiedo_2_uaxbqf.webp',
      caption: 'Ferragosto allo spiedo',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1787925925/foto_buste_xavdtk.webp',
      caption: 'Buste segrete di Buon Compleanno HERO',
    },
  ],
});