'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from './landing-page.module.css';
import { useEffect, useState } from 'react';

export default function LandingInner() {
  const [isMobile, setIsMobile] = useState(false);
  const [vh, setVh] = useState(800);

  useEffect(() => {
    const updateSizes = () => {
      setIsMobile(window.innerWidth < 990); // breakpoint at 990px
      setVh(window.innerHeight);
    };

    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  const { scrollY } = useScroll();

  // Scroll animation range based on viewport height
  const maxScroll = Math.min(Math.max(vh * 0.4, 250), 400);

  // Fixed move up distance (pixels)
  const moveDistance = 280;

  // Scroll ranges: mobile completes animation quicker
  const desktopScrollRange = maxScroll;
  const mobileScrollRange = maxScroll * 0.95;

  // Position Y moves from 0 to -moveDistance faster on mobile
  const logoY = useTransform(
    scrollY,
    [0, isMobile ? mobileScrollRange : desktopScrollRange],
    [0, -moveDistance]
  );

  // Scale changes depending on screen width
  const logoScale = useTransform(
    scrollY,
    [0, maxScroll],
    [1, isMobile ? 0.30 : 0.40]
  );

  // Minimum pixel values for opacity fade points to avoid fading too early on short viewports
  const MIN_OPACITY_FADE_START = 240;
  const MIN_OPACITY_FADE_NEAR_END = 280;
  const MIN_OPACITY_FADE_END = 370;

  // Desktop opacity breakpoints with clamping
  const desktopOpacityPoints = [
    0,
    Math.max(maxScroll * 0.92, MIN_OPACITY_FADE_START),
    Math.max(maxScroll * 0.95, MIN_OPACITY_FADE_NEAR_END),
    Math.max(maxScroll, MIN_OPACITY_FADE_END),
  ];

  // Mobile opacity breakpoints with clamping
  const mobileOpacityPoints = [
    0,
    Math.max(maxScroll * 0.60, MIN_OPACITY_FADE_START),
    Math.max(maxScroll * 0.65, MIN_OPACITY_FADE_NEAR_END),
    Math.max(maxScroll, MIN_OPACITY_FADE_END),
  ];

  // Opacity values same as before
  const opacityValuesDesktop = [1, 1, 0, 0];
  const opacityValuesMobile = [1, 1, 0, 0];

  // Create transforms for opacity
  const desktopLogoOpacity = useTransform(scrollY, desktopOpacityPoints, opacityValuesDesktop);
  const mobileLogoOpacity = useTransform(scrollY, mobileOpacityPoints, opacityValuesMobile);

  // Choose based on device
  const logoOpacity = isMobile ? mobileLogoOpacity : desktopLogoOpacity;

  // Background fade out (keep using maxScroll)
  const bgOpacity = useTransform(scrollY, [0, maxScroll], [1, 0]);

  // Scroll icon fade out early
  const scrollIconOpacity = useTransform(scrollY, [0, maxScroll * 0.07], [1, 0]);

  return (
    <section id="landing" className={styles.landingSection}>
      {/* Background image */}
      <motion.div style={{ opacity: bgOpacity }} className={styles.landingBgWrapper}>
        <Image
          src="/LandingPageImgs/hero-squad.webp"
          alt="Landing background"
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
