export interface NewsItems {
    id: number;
    pic?: string;
    header1: string;
    header2?: string;
    urlLink?: string;
    newsModalContent?: NewsModalContent;
    
}
export interface NewsModalContent {
    title: string;
    imgUrl: string;
    modalLink?: string;
}
export const newsItems: NewsItems[] = [

     {
        id: 1,
        pic: "/MarqueeImgs/envelopes_stack_shrunk.png",
        header1: "19 sett 🔜 Buste del Compleanno Hero!",
        header2: "Leggi il regolamento",
        urlLink: "/buste"
       
    },
    {
        id: 2,
        pic: "/MarqueeImgs/hero-burger-sleeping.png",
        header1: "Hero si prende una pausa",
        header2: "Chiusura 7 -20 settembre",
    },
    {
        id: 3,
        pic: "/CategoryIcons/hamb_olimpici_logo.png",
        header1: "Il Nostro Viaggio Olimpico",
        header2: "raccontato qui",
        urlLink: "/olympics"
    }
    , 
    {
        id: 4,
        pic: "/MarqueeImgs/accademiaPanino.webp",
        header1: "Ne parla il Corriere!",
        header2: "Il nostro panino di trota conquista Milano.",
        urlLink: "https://corrieredeltrentino.corriere.it/notizie/cronaca/25_agosto_25/tartare-di-trota-in-un-hamburger-la-risposta-trentina-al-sushi-premiata-dall-accademia-del-panino-cinque-mesi-per-farlo-26daf0a9-ca3e-4bc6-be05-bff5d5420xlk.shtml"
    },
     
   /*  {
        id: 4,
        pic: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1780315833/inFerie_b0dzln.webp",
        header1: "Siamo in Ferie!",
        header2: "Fino al 7 giugno 🌴",
        newsModalContent:
            {
                title: "Siamo in Ferie fino al 7 giugno 🌴!",
                imgUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1780315833/inFerie_b0dzln.webp"
            }
       
    }, */
    /* {
        id: 4,
        pic: "/MarqueeImgs/pumpkin.webp",
        header1: "Calendario eventi Ottobre - 🐄🍺Clicca qui!🎃🍂",
        newsModalContent:
            {
                title: "Non perderti gli eventi di questo mese!",
                imgUrl: "/MarqueeImgs/eventiOttobre.webp"
            }
       
    } */
]

