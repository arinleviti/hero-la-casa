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
        header1: "🎶Ogni 1° e 3° giovedì del mese - Clicca qui!",
        newsModalContent:
            {
                title: "SERATA JUKEBOX - 1° e 3° giovedì del mese",
                imgUrl: "/MarqueeImgs/burgerJukeboxGeneral.webp"
            }
       
    },
    {
        id: 2,
        pic: "/CategoryIcons/hamb_olimpici_logo.png",
        header1: "Il Nostro Viaggio Olimpico",
        header2: "raccontato qui",
        urlLink: "/olympics"
    }
    , 
    {
        id: 3,
        pic: "/MarqueeImgs/accademiaPanino.webp",
        header1: "Ne parla il Corriere!",
        header2: "Il nostro panino di trota conquista Milano.",
        urlLink: "https://corrieredeltrentino.corriere.it/notizie/cronaca/25_agosto_25/tartare-di-trota-in-un-hamburger-la-risposta-trentina-al-sushi-premiata-dall-accademia-del-panino-cinque-mesi-per-farlo-26daf0a9-ca3e-4bc6-be05-bff5d5420xlk.shtml"
    },
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

