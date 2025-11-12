export interface StaffCard {
    imageUrl: string;
    name: string;
    description: string
}

export const staffCards = [
    {
        imageUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1753101475/staffMauro_frvw0n.jpg",
        name: "Mauro",
        description: "Titolare e ideatore"
    },
    {
        imageUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1753101476/staffChantal_cle2xw.jpg",
        name: "Chantal",
        description: "Responsabile accoglienza e sala"
    },
    {
        imageUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1753101475/staffAnna_hhzhgs.jpg",
        name: "Anna",
        description: "Responsabile cucina"
    },
    /* {
        imageUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1753101475/staffKristian_urr86t.webp",
        name: "Kristian",
        description: "Aiuto cucina"
    }, */
    {
        imageUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1753101475/staffLaura_fe2mhh.webp",
        name: "Laura",
        description: "Resp. allestimento e pulizie"
    },
    {
        imageUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1753101476/sabrinaStaff_twtkdy.jpg",
        name: "Sabrina",
        description: "Operatrice di sala e accoglienza"
    }
] as StaffCard[]