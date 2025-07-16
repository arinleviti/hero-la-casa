'use client';

import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Beer } from '../../../Services/menuItems';
import Image from 'next/image';
import styles from './beer-detail-view.module.css'; // create similar styles as burger-detail-view.module.css
import { motion } from 'framer-motion';

export default function BeerDetailView({
  beer,
  onBack,
}: {
  beer: Beer;
  onBack: () => void;
}) {
  return (
    <div className={styles.detailViewWrapper}>
      <Container className={`${styles.detailView} rounded-3`}>
        <Row>
          {/* Left: Image */}
          <Col xs={12} md={5} className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src={beer.imageLargeUrl || '/fallback-image.png'}
                  alt={beer.name}
                  width={400}
                  height={400}
                  className={styles.beerImage}
                />
              </motion.div>
              <Image src="/shadow.png" alt="shadow" width={550} height={100} />
            </div>
          </Col>

          {/* Right: Details */}
          <Col xs={12} md={7} className={styles.infoCol}>
            <div
              className={styles.backgroundImage}
              style={{ backgroundImage: `url(${beer.backgroundImage || ''})` }}
            />
            <div className={styles.textContent}>
              <h2>{beer.name}</h2>
              <p><strong>Tipo di birra:</strong> {beer.beerType}</p>

              {/* Show characteristics as list */}
              {beer.characteristics && beer.characteristics.length > 0 && (
                <div>
                  <strong>Caratteristiche:</strong>
                  <ul>
                    {beer.characteristics.map((charac, i) => (
                      <li key={i}>{charac}</li>
                    ))}
                  </ul>
                </div>
              )}

              <p>{beer.description}</p>

              <div>
                <strong>Prezzi:</strong>
                <ul>
                  {beer.priceOptions.map((option, index) => (
                    <li key={index}>
                      {option.weight ? `${option.weight * 1000} ml` : ''} - €{option.price.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.reserveButtonWrapper}>
                <Button onClick={onBack} variant="secondary" className={styles.reserveButton}>
                  Torna al menu
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}