'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, /* useScroll, useTransform */ } from 'framer-motion';
import styles from './olympic-hero.module.css';
import { Burger } from '../../Services/menuItems';
import HeroButton from './button-client'; // Client-side button component

interface OlympicHeroProps {
  burgers: Burger[];
}

export default function OlympicHero({ burgers }: OlympicHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const olympicBurgers = burgers.filter((b) => b.olympian === true);

  const getFeaturedBurger = () => {
    if (olympicBurgers.length === 0) return null;
    const today = new Date();
    const index = (today.getFullYear() + today.getMonth() + today.getDate()) % olympicBurgers.length;
    return olympicBurgers[index];
  };

  const featured = getFeaturedBurger();

  // Scroll logic strictly for the daily burger
 /*  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  }); */
/* 
  // Moves the burger as you scroll
  const burgerY = useTransform(scrollYProgress, [0, 1], [100, -100]); */

  if (!featured) return null;

  return (
    <section ref={sectionRef} className={styles.heroWrapper}>
      <Container>
        <Row className="align-items-center">

          {/* LEFT: STATIC CAMPAIGN IMAGE */}
          <Col lg={7} md={12} className={styles.campaignCol}>
            <div className={styles.textLayerTop}>
              <h1 className={styles.antonTitle}>Arrivano i</h1>
            </div>

            <div className={styles.mainImageWrapper}>
              <Image
                src="/HeroImage/burger-olimpici.png"
                alt="Collezione Burger Olimpici"
                width={1000}
                height={1000}
                className={styles.groupImg}
                priority
              />
            </div>

            <div className={styles.textLayerBottom}>
              <h1 className={styles.antonTitle}>Burger Olimpici!</h1>
            </div>
          </Col>

          {/* RIGHT: THE BURGER OF THE DAY (MOVING) */}
          <Col lg={5} md={12} className={styles.discoveryCol}>
            {/* Wrap everything in a helper div or let the Col handle alignment */}
            <div className={styles.flexCenterContainer}>

              {/* Outer div handles the Scroll Parallax */}
              <div className={styles.scrollWrapper}>
                <p className={styles.kalamLabel}>Il vincitore di oggi:</p>

                <motion.div
                  className={styles.singleBurgerImg}
                  whileHover={{ scale: 1.1, rotate: 5, y: -20 }}
                  whileTap={{ scale: 0.95, rotate: -2 }}        // Mobile/Touch feedback
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src={featured.imageLargeUrl || '/logo-nero.png'}
                    alt={featured.name}
                    width={450}
                    height={450}
                    className={styles.floatingBurger}
                    priority
                  />
                </motion.div>

                <h2 className={styles.burgerName}>{featured.name}</h2>
              </div>

              {/* Button placed here, now naturally centered by the parent flexbox */}
              <div className={styles.buttonContainer}>
                <HeroButton />
              </div>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}