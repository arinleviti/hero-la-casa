'use client'

import Image from 'next/image';
import styles from './hero-section.module.css';
import {Container, Row, Col, Button } from 'react-bootstrap';
/* import { motion } from 'framer-motion'; */

interface HeroSectionProps {
  textData: {
    title1: string;
    title2: string;
    text: string;
  };
  imageData: {
    src: string;
    alt: string;
  };
}

export default function HeroSection({ textData, imageData }: HeroSectionProps) {
    return (
        <section className={styles.heroWrapper}>
      <Container fluid>
        <Row className="align-items-center">
          {/* === Left Column: Text === */}
          <Col md={6} className={styles.heroText}>
            <h1>{textData.title1}</h1>
            <h1>{textData.title2}</h1>
            <h3>{textData.text}</h3>
            <div className={styles.buttonContainer}>
              <Button className={styles.reserveButton}>
                RISERVA UN TAVOLO
              </Button>
            </div>
          </Col>

          {/* === Right Column: Image === */}
          <Col md={6} className={styles.heroImage}>
  <div className={styles.heroImageWrapper}>
    <Image
      src={imageData.src}
      alt={imageData.alt}
      fill
      className={styles.heroImg}
      sizes="(max-width: 768px) 80vw, 50vw"
      priority
    />
  </div>
</Col>
        </Row>
      </Container>
    </section>
    )
}