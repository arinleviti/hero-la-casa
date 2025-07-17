export interface StoryBlock {
    year: string;
    title: string;
    text: string;
    imageUrl: string;
    reverse?: boolean;
}

export const storyBlocks: StoryBlock[] = [
    {
        year: "2009",
        title: "Come tutto è iniziato",
        text: "Mauro rileva un bar con una piccola proposta cucina all’interno di un centro sportivo che, dopo una gestione fallimentare, riesce a rimettere a regime",
        imageUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_454,c_limit,f_auto,q_auto/v1752768762/storia1_x55dtu.jpg",
        reverse: false
    },
     {
        year: "2016",
        title: "L'idea prende forma",
        text: "Nel 2016 decide di spostare il core buisness del bar sugli hamburger classici, e nello stesso anno conosce Anna e Chantal che iniziano a lavorare con lui, rispettivamente in cucina e in sala",
        imageUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_454,c_limit,f_auto,q_auto/v1752768762/storia2_bmbvse.jpg",
        reverse: true
    },
    {
        year: "2017",
        title: "La squadra si divide i compiti e il successo si moltiplica",
        text: "Mauro, Anna e Chantal , volevano però fare il salto di qualità, cambiando la proposta e la location. Lidea era quella di proporre degli hamburger ricercati nella scelta delle materie primee negli accostamenti, calati all’interno di un contesto più elegante e con un servizio formale",
        imageUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_454,c_limit,f_auto,q_auto/v1752768762/storia3_tclhk2.jpg",
        reverse: false
    },
    {
        year: "2018",
        title: "I sogni si avverano",
        text: "I ragazzi realizzano il loro sogno nel 2018, rilevando un locale a Predazzo, in provincia di Trento. A seguito di una totale ristrutturazione del locale nasce la nuova attività: Hero.",
        imageUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_454,c_limit,f_auto,q_auto/v1752768761/storia4_uheikb.jpg",
        reverse: true
    },
    {
        year: "Oggi",
        title: "Il viaggio di HERO continua!",
        text: "Hero è il viaggio del Burger, che dopo aver gironzolato per diversi luoghi rientra nella sua casa, La Casa del Burger, per portare colori, sapori e ingredienti dal mondo e racchiuderli all’interno dei BurgHero – i Burger di Hero. I BurgHero sono i nostri Burger itineranti: in base al viaggio cambiano forme, ingredienti, accostamenti e colori.",
       imageUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_454,c_limit,f_auto,q_auto/v1752768760/storia5_tfaqt2.svg",
        reverse: false
    },
]