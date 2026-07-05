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
        pic: "/burger-jukebox-tiny.webp",
        header1: "🎶 con Kanta Game - Tornerà a settembre 2026!",
        newsModalContent:
            {
                title: "Prossimi appuntamenti settembre 2026!",
                imgUrl: "/MarqueeImgs/burgerJukebox.webp"
            }
       
    },
    {
        id: 2,
        pic: "/logo-news.png",
        header1: "Le novità dell'estate 2026!",
        newsModalContent:
            {
                title: "Da provare assolutamente",
                imgUrl: "/MarqueeImgs/novita_estive26.webp"
            }
       
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

