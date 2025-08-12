//npx tsx src\app\Services\modify-blog-post.ts

import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

interface NewPost {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  createdAt?: Date;
  images?: { url: string; caption?: string }[];
}

const updatedData: Partial<NewPost> = {
  title: 'Diario di Bordo – Luglio 2025',
  slug: 'diario-luglio-2025',
  excerpt: 'Luglio è stato un mese ricco di eventi e successi, consolidando la nostra proposta di qualità e divertimento.',
  content: `

  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1754914562/jukebox_d8pvej.webp" alt="Burger & Jukebox" style="display:block; margin: 0 auto; max-width:100%; padding-bottom:1rem;" />

<p>Il mese di luglio si è rivelato un mese ricco di eventi e successi, consolidando sempre più la nostra proposta di qualità e divertimento. Ecco un riepilogo delle principali novità e appuntamenti di questo mese.</p>

<h2>"Burger & Jukebox" – American Dinner</h2>

<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1754914561/burgerJukebox_yxdari.webp" alt="Burger & Jukebox" style="display:block; margin: 0 auto; max-width:100%; padding-bottom:1rem;" />
<p>Il 10 e il 24 luglio si sono tenute le serate speciali immerse negli affascinanti anni '60/'70/'80.</p>

<p>Queste serate sono state un enorme successo in cui i clienti hanno potuto ascoltare le mitiche note provenienti da un vecchio jukebox, con dischi in vinile che risuonavano tra le mura del nostro ristorante.</p>

<p>L'atmosfera è stata resa ancora più coinvolgente grazie allo Smash Burger arrivato in Val di Fiemme a casa HERO direttamente dall’America, accompagnato dalle deliziose Sweet Potatoes (patate dolci).
I clienti hanno potuto gustare così un BURGER a STELLE E STRISCE.</p>

<p>Per aggiungere un tocco di divertimento, ogni tavolo poteva scegliere una canzone dal jukebox e
partecipare al nostro gioco: indovinare la traccia misteriosa per vincere una Gift Card da 20 euro.
Molti clienti si sono divertiti ascoltando e canticchiando le canzoni italiane e straniere degli anni ’60/’70/’80, creando un’atmosfera di condivisione e allegria.</p>

<p>A metà Luglio è arrivato il Limited Edition "El Pardacian”, Hamburger nato nel 2017 per onorare PREDAZZO e il suo PATRONO, il 25 Luglio. Questo gustoso BURGER è entrato nel cuore della gente diventando un appuntamento fisso ogni volta che entra nel menù, aggiungendo un tocco di esclusività e cultura locale alla nostra offerta.</p>

<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1754850287/pardacian_qtjeup.webp" alt="El Pardacian" style="display:block; margin: 0 auto; max-width:100%; padding-bottom:1rem;" />

<p>È stato un mese pieno di EMOZIONI, RISATE, BUONA MUSICA e BUON CIBO.</p>

<p>Vi ringraziamo per averci accompagnato in queste avventure e vi aspettiamo ancora più motivati e pronti a sorprendervi nei prossimi mesi!</p>
  `,
  createdAt: new Date('2025-08-11T10:00:00Z'),
  images: [
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1754914562/jukebox_d8pvej.webp',
      caption: 'Copertina diario luglio 2025'
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1754914561/burgerJukebox_yxdari.webp',
      caption: 'Burger & Jukebox staff'
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1754850287/pardacian_qtjeup.webp',
      caption: 'Pardacian'
    }
  ]
};

async function modifyPost(postId: number) {
  try {
    // Using a transaction to ensure deleting old images and updating the post happen atomically—either both succeed or both fail.
    const updatedPost = await prisma.$transaction(async (tx) => {
      // Delete old images
      const deleteResult = await tx.image.deleteMany({
        where: { postId }
      });
      console.log(`🗑 Deleted ${deleteResult.count} old images`);

      // Update post with new data
      return tx.post.update({
        where: { id: postId },
        data: {
          title: updatedData.title,
          slug: updatedData.slug,
          excerpt: updatedData.excerpt,
          content: updatedData.content,
          createdAt: updatedData.createdAt,
          images: updatedData.images
            ? { create: updatedData.images }
            : undefined
        },
        include: { images: true }
      });
    });

    console.log('✅ Post updated successfully:', updatedPost);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('❌ Error modifying post:', error.message);
    } else {
      console.error('❌ Unknown error modifying post:', error);
    }
    throw new Error('Could not modify post');
  } finally {
    await prisma.$disconnect();
  }
}

modifyPost(18);
