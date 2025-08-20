

import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Nunito, Oswald, Anton, Alfa_Slab_One, Kalam } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import Overlay from "./components/LandingPage/overlay";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google';

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
  description: "Hero Burger a Predazzo: hamburger gourmet, patatine non fritte, opzioni vegan e gluten free. Locale moderno e atmosfera accogliente.",
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
         {/* Open Graph Meta Tags */}
        <meta property="og:title" content="HERO - La Casa del Burger" />
        <meta property="og:description" content="Hero Burger a Predazzo ti accoglie con hamburger gourmet di carne, pesce e opzioni vegan o gluten free. Locale moderno e raffinato, patatine non fritte e salse gourmet, atmosfera calda e accogliente. Scopri il nostro menu e vivi un’esperienza unica oltre i confini del burger." />
        <meta property="og:image" content="https://herolacasadelburger.it/logos/logo-colors.jpg" />
        <meta property="og:url" content="https://herolacasadelburger.it" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HERO - La Casa del Burger" />
        <meta name="twitter:description" content="Hero Burger a Predazzo ti accoglie con hamburger gourmet di carne, pesce e opzioni vegan o gluten free. Locale moderno e raffinato, patatine non fritte e salse gourmet, atmosfera calda e accogliente. Scopri il nostro menu e vivi un’esperienza unica oltre i confini del burger." />
        <meta name="twitter:image" content="https://herolacasadelburger.it/logos/logo-colors.jpg" />
    <Script
          id="cookie-script"
          src="//cdn.cookie-script.com/s/3c774cdc92826ee08b23abd6f6017a11.js"
          strategy="afterInteractive"
          type="text/javascript"
          charSet="UTF-8"
        />
       
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${nunito.variable} ${oswald.variable} ${anton.variable} ${alfaSlab.variable} ${kalam.variable}`}>

        <Overlay/>
        
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-468DWJLVY4" />
      </body>
    </html>
  );
}
