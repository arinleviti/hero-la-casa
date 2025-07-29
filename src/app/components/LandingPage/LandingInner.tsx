'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from './landing-page.module.css';

import { useEffect, useState } from 'react';

export default function LandingInner() {

const [isMobile, setIsMobile] = useState(false);

 useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

const { scrollY } = useScroll();

  // 🎯 Replace scrollYProgress with fixed pixel ranges
  const bgOpacity = useTransform(scrollY, [0, 250], [1, 0]);
  const desktopScale = useTransform(scrollY, [0, 300], [1, 0.43]);
  const desktopY = useTransform(scrollY, [0, 300], [0, -270]);
  const desktopOpacity = useTransform(scrollY, [0, 280, 295, 300], [1, 1, 0.3, 0]);
  const scrollIconOpacity = useTransform(scrollY, [0, 20], [1, 0]);

 // Mobile ranges
  const mobileScale = useTransform(scrollY, [0, 250], [1, 0.35]);
  const mobileY = useTransform(scrollY, [0, 250], [0, -280]);
  const mobileOpacity = useTransform(scrollY, [0, 220, 240, 250], [1, 1, 0.3, 0]);

  const logoScale = isMobile ? mobileScale : desktopScale;
  const logoY = isMobile ? mobileY : desktopY;
  const logoOpacity = isMobile ? mobileOpacity : desktopOpacity;

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
