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
  title: 'Diario di Bordo – Maggio 2026',
  slug: 'diario-maggio-2026',
  excerpt:
    'Maggio da HERO: 10 anni di storia, i burger storici delle origini, il Bevi e Vinci, Sapori di Primavera e la ruota della fortuna de "OK, Il Prezzo è Giusto"! 🎉🍔🍺',
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
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1780315021/copertina_maggio_a1gviu.webp"
     alt="Diario HERO Maggio 2026"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />
 
<p>
Maggio è stato uno di quei mesi dove in cucina, in sala e dietro al bancone non ci siamo annoiati neanche per un secondo. Tra birre, burger storici, ruote della fortuna e tantissime risate, ogni settimana ci ha regalato un'emozione diversa.
</p>
 
<p>Ma questo mese aveva anche qualcosa di ancora più importante per noi.</p>
 
<h2>🎂 10 ANNI!</h2>
<p>
Abbiamo festeggiato un traguardo importantissimo:
</p>
<ul>
  <li>10 anni dal primo burger allo <strong>SPORTING CENTER</strong></li>
  <li>10 anni di collaborazione, crescita e <strong>AMICIZIA</strong> con Anna e Chantal</li>
  <li>10 anni da quando tutto è partito — una storia che racconta il cammino fatto insieme a voi con entusiasmo, fatica, errori, risate ma tanta voglia di costruire qualcosa di speciale.</li>
</ul>
<p>
Sì, avete capito bene — molti di voi sono parte di questo traguardo. <strong>GRAZIE!</strong>
</p>
<p>
Per l'occasione abbiamo deciso di rendere omaggio ai nostri <strong>primi burger</strong>, quelli storici, iconici, quelli che hanno acceso la scintilla di quello che oggi è HERO.
</p>
<p>
È stato emozionante tornare alle origini, rivedere quei sapori, quei nomi, quei ricordi… e soprattutto condividerli con voi, che in questi anni siete diventati parte della nostra storia.
</p>
 
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1780315021/anniversario_xnf88k.webp"
     alt="10 anni di HERO – foto anniversario"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />
 
<h2>🍺 BEVI e VINCI</h2>
<p>
Maggio ha visto protagonista il nostro <strong>Bevi e Vinci</strong>, che ci ha accompagnato per tutto il mese. Ogni birra ordinata, un gratta e vinci consegnato: potevi vincere subito… oppure no.
</p>
<p>
Ma anche chi non trovava la fortuna sul momento aveva comunque una possibilità finale: entrare nell'estrazione del mitico <strong>fusto da 5L di birra</strong>.
</p>
<p>
E diciamolo… vedere i clienti grattare il biglietto con la stessa tensione di una finale mondiale è stato spettacolare.
</p>
 
<h2>🌿 Sapori di Primavera</h2>
<p>
Poi è arrivato lui: <strong>Sapori di Primavera</strong>. Il burger in edizione limitata che ogni anno riesce nell'impresa di conquistare praticamente tutti. Fresco, delicato, ma al tempo stesso di carattere.
</p>
<p>
Uno di quei burger che appena tornano fanno subito dire: <em>"Ok, lo devo assolutamente gustare."</em>
</p>
 
<img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1780315085/sapori_primavera_2_chwocs.webp"
     alt="Burger Sapori di Primavera – edizione limitata"
     style="display: block; margin: 0 auto 20px; max-width: 100%; height: auto; border-radius: 10px;" />
 
<h2>🎡 OK, IL PREZZO È GIUSTO</h2>
<p>
E per chiudere in bellezza prima delle nostre ferie è arrivato il momento più divertente: <strong>"OK, Il Prezzo è Giusto"</strong> — il gioco televisivo anni '80-'90 che molti di voi ricorderanno, ma ovviamente in stile HERO.
</p>
<p>
Alla fine della cena, al momento del conto, ogni cliente poteva scegliere di girare la ruota sfidando la fortuna — e la ruota decideva il destino della tua cena… uno sconto? Il prezzo invariato? Una piccola mancia simbolica per il nostro staff?
</p>
<p>
Non potete immaginare quanto ci siamo divertiti a vedere le facce di chi aspettava il verdetto della ruota. C'è chi ha rischiato senza pensarci due volte e chi invece ha optato senza indugio per la scelta più gradita da tutto lo staff: <strong>LA MANCIA</strong>. 😄
</p>
 
<div class="gallery">
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1780319256/OK_il_prezzo_giusto_1_dplasi.webp"
       alt="OK il Prezzo è Giusto – ruota della fortuna HERO"
       class="half-img" />
  <img src="https://res.cloudinary.com/dvr9t29vj/image/upload/v1780319255/OK_il_prezzo_giusto_2_xc6jya.webp"
       alt="OK il Prezzo è Giusto – serata HERO"
       class="half-img" />
</div>
 
<p>
Ed è proprio questo che ci piace creare da HERO: non solo una cena, ma <strong>momenti da vivere insieme</strong>.
</p>
 
<p>
Ora giugno è alle porte e, come sempre, non abbiamo nessuna intenzione di rallentare. Torneremo ancora più carichi, pieni di idee, novità e voglia di farvi stare bene — e visto il grande successo, quest'estate torneranno degli eventi firmati HERO.
</p>
 
<p>
Ma prima… ci prendiamo un attimo per andare a rilassarci sotto il sole con una <strong>CAMM</strong> bella ghiacciata in mano. Tranquilli, è solo un attimo — quando meno ve lo aspettate siamo già di ritorno.
</p>
 
<p>
<strong>Grazie a tutti voi per aver reso anche questo mese così speciale.</strong><br/>
Il team HERO
</p>
  `,
  createdAt: new Date('2026-05-31T10:00:00Z'),
  images: [
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1780315021/copertina_maggio_a1gviu.webp',
      caption: 'Copertina Maggio 2026',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1780315021/anniversario_xnf88k.webp',
      caption: '10 anni di HERO – foto anniversario',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1780315085/sapori_primavera_2_chwocs.webp',
      caption: 'Burger Sapori di Primavera – edizione limitata',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1780319256/OK_il_prezzo_giusto_1_dplasi.webp',
      caption: 'OK il Prezzo è Giusto – ruota della fortuna HERO',
    },
    {
      url: 'https://res.cloudinary.com/dvr9t29vj/image/upload/v1780319255/OK_il_prezzo_giusto_2_xc6jya.webp',
      caption: 'OK il Prezzo è Giusto – serata HERO',
    },
  ],
});

