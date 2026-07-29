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
  title: 'Diario di Bordo – Luglio 2026',
  slug: 'diario-luglio-2026',
  excerpt:
    'Luglio da HERO: il Genoa Calcio sceglie HERO per cena durante il ritiro a Moena, il ritorno de El Pardacian e dell\'Avisio, e tante giornate d\'estate tra dehor e grigliate! ⚽🍔☀️',
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
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1785356515/copertinaLuglio26_akstz7.webp"
     alt="Diario HERO Luglio 2026"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />
 
<p>
Luglio è stato un mese con un concentrato di gusto, soddisfazioni ed emozioni che vogliamo condividere con tutti voi.
</p>
 
<h2>⚽ IL GENOA CALCIO SCEGLIE HERO PER CENA</h2>
<p>
Uno dei momenti più emozionanti? Il Genoa Calcio ha scelto HERO la Casa del Burger per una cena durante il loro ritiro a Moena. Vederli seduti ai nostri tavoli è stato un momento di stupore per i clienti che c'erano quella sera e motivo di grande orgoglio, un'esperienza che porteremo con noi.
</p>
 
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1785356514/genova_t8utec.webp"
     alt="Il Genoa Calcio in cena da HERO"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />
 
<h2>🌶️ IL RITORNO DE EL PARDACIAN</h2>
<p>
Abbiamo iniziato il mese con il ritorno del mitico El Pardacian, il nostro hamburger in edizione limitata dedicato al nostro paese. Ormai è una tradizione: ogni anno c'è chi lo aspetta con impazienza e, puntualmente, diventa uno dei panini più richiesti. Vi confessiamo una cosa... questa volta non abbiamo resistito nemmeno noi e ce lo siamo gustato più di una volta!
</p>
 
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1785356514/pardacian_2_lrobdd.webp"
     alt="El Pardacian – edizione limitata HERO"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />
 
<h2>🏔️ L'AVISIO: AUTENTICO PANINO ITALIANO</h2>
<p>
Un altro grande ritorno è l'Avisio, un hamburger che trovate solo durante l'estate e che ha ottenuto il prestigioso riconoscimento come "AUTENTICO PANINO ITALIANO" conferitoci dall'Accademia del Panino Italiano.
</p>
<p>
Un consiglio? Approfittatene ora per provarlo.
</p>
 
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1752839752/Hero-lAvisio_a65ups.png"
     alt="Hamburger Avisio – Autentico Panino Italiano"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />
 
<h2>☀️ ESTATE TRA DEHOR E GRIGLIATE</h2>
<p>
Nel frattempo, il nostro locale continua a vivere a pieno ritmo. Tra pranzi, cene e le splendide giornate estive che ci permettono di sfruttare al massimo il dehor, non ci fermiamo praticamente mai. L'energia è tanta e il lavoro non manca, ma ogni tanto ci concediamo anche qualche momento per goderci l'estate, auto invitandoci a casa di Mauro, accendendo il barbecue e condividendo una bella grigliata in compagnia.
</p>
 
<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1785356515/dehorr_rlckdx.webp"
       alt="Dehor HERO – estate"
       class="half-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1785356514/grigliata_jo2bsu.webp"
       alt="Grigliata in compagnia – team HERO"
       class="half-img" />
</div>
 
<p>
Grazie a tutti voi che continuate a scegliere Hero, a riempire il locale di sorrisi e a rendere ogni mese speciale. Ora siamo pronti a vivere un agosto altrettanto intenso... sempre con il gusto che ci contraddistingue!
</p>
<p>
<strong>Noi siamo pronti. E voi?</strong><br/>
Il team HERO
</p>
  `,
  createdAt: new Date('2026-07-31T10:00:00Z'),
  images: [
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1785356514/genova_t8utec.webp',
      caption: 'Il Genoa Calcio in cena da HERO',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1785356514/pardacian_2_lrobdd.webp',
      caption: 'El Pardacian – edizione limitata',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1752839752/Hero-lAvisio_a65ups.png',
      caption: 'Avisio – Autentico Panino Italiano',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1785356515/dehorr_rlckdx.webp',
      caption: 'Dehor HERO – estate',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1785356514/grigliata_jo2bsu.webp',
      caption: 'Grigliata in compagnia',
    },
  ],
});
