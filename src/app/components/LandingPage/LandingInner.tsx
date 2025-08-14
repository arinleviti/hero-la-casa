'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from './landing-page.module.css';
import { useEffect, useState } from 'react';

export default function LandingInner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 990); // breakpoint at 990px
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollY } = useScroll();

  // --- Fixed scroll distance for consistent animation ---
  const maxScroll = 300; // ~matches your current average feel
  const moveDistance = 280; // how far the logo moves upward

  // Scroll ranges (mobile completes animation faster)
  const desktopScrollRange = maxScroll;
  const mobileScrollRange = maxScroll * 1;

  // Logo vertical movement
  const logoY = useTransform(
    scrollY,
    [0, isMobile ? mobileScrollRange : desktopScrollRange],
    [0, -moveDistance]
  );

  // Logo scale
  const logoScale = useTransform(
    scrollY,
    [0, maxScroll],
    [1, isMobile ? 0.35 : 0.40]
  );

  // --- Opacity ---
  // Desktop opacity fade points (pixels)
  const desktopOpacityPoints = [0, 280, 285, 300];
  const opacityValuesDesktop = [1, 1, 0, 0];

  // Mobile opacity fades faster
  const mobileOpacityPoints = [0, 280, 285, 300];
  const opacityValuesMobile = [1, 1, 0, 0];

  const logoOpacity = useTransform(
    scrollY,
    isMobile ? mobileOpacityPoints : desktopOpacityPoints,
    isMobile ? opacityValuesMobile : opacityValuesDesktop
  );

  // Background fade out
  const bgOpacity = useTransform(scrollY, [0, maxScroll], [1, 0]);

  // Scroll icon fades out early
  const scrollIconOpacity = useTransform(scrollY, [0, maxScroll * 0.07], [1, 0]);

  return (
    <section id="landing" className={styles.landingSection}>
      {/* Background image */}
      <motion.div style={{ opacity: bgOpacity }} className={styles.landingBgWrapper}>
        <Image
          src={isMobile ? "/LandingPageImgs/landing-img-mobile5.webp" : "/LandingPageImgs/landing-img6.webp"}
          alt="Il team di Hero Burger pronto a servirvi deliziosi hamburger"
          fill
          className={styles.landingBg}
          priority
        />
      </motion.div>

      <div className={styles.logoWrapper}>
        {/* Animated logo */}
        <motion.div
          style={{ y: logoY, scale: logoScale, opacity: logoOpacity }}
          className={styles.landingLogoWrapper}
        >
          <Image
            src="/logos/logo-crema.svg"
            alt="Big landing logo"
            width={250}
            height={220}
            className={styles.landingLogo}
            priority
          />
        </motion.div>

        {/* Scroll down icon */}
        <motion.div
          style={{ scale: logoScale, opacity: scrollIconOpacity }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Image
            src="/scroll-down.png"
            alt="Scroll down icon"
            width={50}
            height={50}
            className={styles.scrollLogo}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
