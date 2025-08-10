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
  title: 'Diario di Bordo – Luglio 2025',
  slug: 'diario-luglio-2025',
  excerpt:
    'Luglio è stato un mese ricco di eventi e successi, consolidando la nostra proposta di qualità e divertimento.',
  content: `
<p>Il mese di luglio si è rivelato un mese ricco di eventi e successi, consolidando sempre più la nostra proposta di qualità e divertimento. Ecco un riepilogo delle principali novità e appuntamenti di questo mese.</p>

<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1754850381/Screenshot_2025-07-15_alle_10.58.33_ydtdrp.webp" alt="Burger & Jukebox" style="display:block; margin: 0 auto; max-width:100%;" />

<h2>"Burger & Jukebox" – American Dinner</h2>
<p>Il 10 e il 24 luglio si sono tenute le serate speciali immerse negli affascinanti anni '60/'70/'80.</p>

<p>Queste serate sono state un enorme successo in cui i clienti hanno potuto ascoltare le mitiche note provenienti da un vecchio jukebox, con dischi in vinile che risuonavano tra le mura del nostro ristorante.</p>

<p>L'atmosfera è stata resa ancora più coinvolgente grazie allo Smash Burger arrivato in Val di Fiemme a casa HERO direttamente dall’America, accompagnato dalle deliziose Sweet Potatoes (patate dolci).
I clienti hanno potuto gustare così un BURGER a STELLE E STRISCE.</p>

<p>Per aggiungere un tocco di divertimento, ogni tavolo poteva scegliere una canzone dal jukebox e
partecipare al nostro gioco: indovinare la traccia misteriosa per vincere una Gift Card da 20 euro.
Molti clienti si sono divertiti ascoltando e canticchiando le canzoni italiane e straniere degli anni ’60/’70/’80, creando un’atmosfera di condivisione e allegria.</p>

<p>A metà Luglio è arrivato il Limited Edition "El Pardacian”, Hamburger nato nel 2017 per onorare PREDAZZO e il suo PATRONO, il 25 Luglio. Questo gustoso BURGER è entrato nel cuore della gente diventando un appuntamento fisso ogni volta che entra nel menù, aggiungendo un tocco di esclusività e cultura locale alla nostra offerta.</p>

<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1754850287/pardacian_qtjeup.webp" alt="El Pardacian" style="display:block; margin: 0 auto; max-width:100%;" />

<p>È stato un mese pieno di EMOZIONI, RISATE, BUONA MUSICA e BUON CIBO.</p>

<p>Vi ringraziamo per averci accompagnato in queste avventure e vi aspettiamo ancora più motivati e pronti a sorprendervi nei prossimi mesi!</p>
  `,
  createdAt: new Date('2025-08-10T10:00:00Z'),
  images: [
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1754850381/Screenshot_2025-07-15_alle_10.58.33_ydtdrp.webp',
      caption: 'Serata Burger & Jukebox Luglio 2025',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1754850287/pardacian_qtjeup.webp',
      caption: 'Pardacian Burger',
    }
  ],
});
