
import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Nunito, Oswald, Anton, Alfa_Slab_One, Kalam } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import Overlay from "./components/LandingPage/overlay";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ['100', '400', '700'], // choose weights you need
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const nunito = Nunito({
  weight: ['200', '400', '900'],
  subsets: ['latin'],
  variable: '--font-nunito',
});

const oswald = Oswald({
  weight: ['300', '400', '700'], // choose the weights you need
  subsets: ['latin'],
  variable: '--font-oswald',
});

const anton = Anton({
  weight: '400', // only available weight
  subsets: ['latin'],
  variable: '--font-anton',
});
const alfaSlab = Alfa_Slab_One({
  weight: "400", // Only one weight available
  subsets: ["latin"],
  variable: "--font-alfa-slab",
});

const kalam = Kalam({
  weight: ["300", "400", "700"], // all available weights
  subsets: ["latin"],
  variable: "--font-kalam",
});

export const metadata: Metadata = {
  title: "HERO - La Casa del Burger",
  description: "Hero Burger a Predazzo ti accoglie con hamburger gourmet di carne, pesce e opzioni vegan o gluten free. Locale moderno e raffinato, patatine non fritte e salse gourmet, atmosfera calda e accogliente. Scopri il nostro menu e vivi un’esperienza unica oltre i confini del burger.",
  icons: {
    icon: "/logo-colors-mini.ico",
  },
   robots: {
    index: true,      // allow indexing
    follow: true,     // allow following links
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="it">
      <head>
        <Script
          id="cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="875fb5f8-87be-41db-8302-6fba0521f651"
          //strategy="afterInteractive" ensures the script only executes after the page becomes interactive on the client-side, not during server rendering.
          strategy="afterInteractive"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${nunito.variable} ${oswald.variable} ${anton.variable} ${alfaSlab.variable} ${kalam.variable}`}>

        <Overlay/>
        
        <Navbar />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
