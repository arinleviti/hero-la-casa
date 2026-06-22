"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { olympicBurgers } from '../Services/olympic-burgers';
import { Burger } from '../Services/menuItems';
import { olympicContent } from '../Services/assetsService';
import styles from './page.module.css';
import Image from 'next/image';

export default function Olympics() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className={styles.scrollContainer}>
      <div className={styles.stickyWrapper}>

        {/* 1. Backgrounds - Made them linger slightly longer */}
        <motion.div
          className={styles.backgroundHero}
          style={{
            opacity: useTransform(smoothProgress, [0, 0.15, 0.17, 1], [0, 0.5, 0.2, 0])
          }}
        />

        <motion.div
          className={styles.foregroundHero}
          style={{
            opacity: useTransform(smoothProgress, [0, 0.12, 0.15], [1, 1, 0.6])
          }}
        />

        {/* 2. Sliding Burger Sections */}
        <div className={styles.interactiveLayer}>
          {olympicBurgers
            .filter(burger => burger.olympian)
            .map((burger, index, filteredArr) => (
              <BurgerSection
                key={burger.id}
                burger={burger}
                index={index}
                total={filteredArr.length}
                progress={smoothProgress}
                bgImage={olympicContent[index]}
              />
            ))}
        </div>

        {/* 3. Intro Description - Range changed from 0.05 to 0.15 to stay longer */}
        <motion.div
          className={styles.experienceFooter}
          style={{
            opacity: useTransform(smoothProgress, [0, 0.12, 0.15], [1, 1, 0]),
            pointerEvents: useTransform(smoothProgress, [0, 0.14], ["auto", "none"])
          }}
        >
          <div className={styles.experienceTitle}>
            <h1>Il Viaggio dei Burger Olimpici</h1>
          </div>
          <p>
            Durante le Olimpiadi e Paralimpiadi Invernali, anche la Val di Fiemme ha respirato un’atmosfera speciale. Atleti e da tutto il mondo hanno trasformato il nostro territorio in un vero punto d’incontro internazionale.
         
            Da HERO abbiamo celebrato questo momento creando qualcosa di unico: cinque burger ispirati ai cinque continenti, un piccolo viaggio nei sapori del mondo.
          
            Questi mesi sono stati molto più di un evento sportivo: un’occasione per condividere momenti, incontrare nuove persone e vivere insieme lo spirito olimpico.
          </p>

          <p>
            Questa pagina è il ricordo di quell’esperienza.
          </p>

          <strong>Scorri per iniziare il viaggio</strong>
        </motion.div>
      </div>
    </div>
  );
}
interface BurgerSectionProps {
  burger: Burger;
  index: number;
  total: number;
  progress: MotionValue<number>;
  bgImage: { url: string; alt: string };
}
function BurgerSection({ burger, index, total, progress, bgImage }: BurgerSectionProps) {
  // We use a state to detect mobile for the animation values
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const slice = 0.85 / total;
  const start = 0.15 + index * slice; // Starts after intro fades
  const end = start + slice;

  const midStart = start + slice * 0.2;
  const midEnd = start + slice * 0.8;

  // ANIMATION LOGIC
  // Desktop: Slides from -50% to 0% (horizontal)
  // Mobile: We'll make it "Half seen" by sliding it to a position where it's cropped
  const xValue = isMobile
    ? ["100%", "20%", "20%", "-100%"] // On mobile, centers it but slightly offset to "half-see" it
    : ["-50%", "0%", "0%", "-50%"];

  const x = useTransform(progress, [start, midStart, midEnd, end], xValue);
  const opacity = useTransform(progress, [start, midStart, midEnd, end], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, midStart, midEnd, end], [0.8, 1.2, 1.2, 0.8]); // Bigger scale on mobile

  return (
    <motion.div
      className={styles.burgerFrame}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        opacity,
        pointerEvents: "none",
      }}
    >
      {/* NUOVO: Background Dinamico (sincronizzato con opacity) */}
      <motion.div
        className={styles.burgerBg}
        style={{ opacity }}
      >
        <div className={styles.burgerBgInner}>
        <Image
          src={bgImage.url}
          alt={bgImage.alt}
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center"
          }}
        />
        </div>
      </motion.div>
      {/* Left side: Burger Image */}
      <motion.div
        className={styles.burgerImageWrapper}
        style={{ x, scale }}
      >
        <div style={{ position: 'relative', width: '90%', height: '90%' }}>
          <Image
            src={burger.imageLargeUrl!}
            alt={burger.name}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </motion.div>

      {/* Right side: Description */}
      <motion.div
        className={styles.descriptionWrapper}
        style={{ opacity }}
      >
        <div className={styles.burgerName}>
          <h2>{burger.name}</h2>
        </div>
        <p>{burger.modalDescription}</p>
      </motion.div>
    </motion.div>
  );
}