'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from './landing-page.module.css';


export default function LandingInner() {
  const { scrollYProgress } = useScroll();

  // Scroll-based animations.
  //When scrollYProgress is 0 → make opacity 1 (fully visible) 
  //When scrollYProgress reaches 0.3 → make opacity 0 (fully invisible)
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const logoScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
  const logoY = useTransform(scrollYProgress, [0, 0.3], [0, -250]);
  const logoOpacity = useTransform(scrollYProgress, [0,0.29, 0.3], [1,1, 0]);


  return (
    <section id="landing" className={styles.landingSection}>
      {/* Background image with fade out */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className={styles.landingBgWrapper}
      >
        <Image
          src="/LandingPageImgs/hero-squad.webp"
          alt="Landing background"
          fill
          className={styles.landingBg}
          priority
        />
      </motion.div>

      {/* Animated logo */}
      <motion.div
        style={{ scale: logoScale, y: logoY, opacity: logoOpacity }}
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
    </section>
  );
}
