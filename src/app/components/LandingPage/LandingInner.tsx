'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from './landing-page.module.css';


export default function LandingInner() {

  /* const { scrollYProgress } = useScroll();

  const bgOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const logoScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.43]);
  const logoY = useTransform(scrollYProgress, [0, 0.2], [0, -270]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.19, 0.195, 0.2], [1, 1, 0.3, 0]);
  const scrollIconOpacity = useTransform(scrollYProgress, [0, 0.01], [1, 0]); */

const { scrollY } = useScroll();

  // 🎯 Replace scrollYProgress with fixed pixel ranges
  const bgOpacity = useTransform(scrollY, [0, 250], [1, 0]);
  const logoScale = useTransform(scrollY, [0, 300], [1, 0.43]);
  const logoY = useTransform(scrollY, [0, 300], [0, -270]);
  const logoOpacity = useTransform(scrollY, [0, 280, 295, 300], [1, 1, 0.3, 0]);
  const scrollIconOpacity = useTransform(scrollY, [0, 20], [1, 0]);

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
      <div className={styles.logoWrapper}>
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
        <motion.div
          style={{scale: logoScale,opacity: scrollIconOpacity }}
          animate= {{y: [0,-10,0]}}
              transition= {{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
          >
        <Image
          src="/scroll-down.png"
          alt="Big landing logo"
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
