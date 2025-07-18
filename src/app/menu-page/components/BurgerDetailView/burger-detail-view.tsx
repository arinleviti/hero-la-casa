'use client';

import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Burger } from './../../../Services/menuItems';
import Image from 'next/image';
import styles from './burger-detail-view.module.css';
import { motion } from 'framer-motion';

export default function BurgerDetailView({
  burger,
  onBack,
}: {
  burger: Burger;
  onBack: () => void;
}) {

  const getCategoryPath = (category: string): string => {
    switch (category) {
      case 'manzo':
        return '/CategoryIcons/meat.png';
      case 'vegano':
        return '/CategoryIcons/vegan.png';
      case 'vegetariano':
        return '/CategoryIcons/vegetarian.png';
      case 'gluten-free':
        return '/CategoryIcons/gluten-free.png';
      case 'pesce':
        return '/CategoryIcons/fish.png';
      case 'leggermente piccante':
        return '/CategoryIcons/mildlyHot.png';
      case 'piccante':
        return '/CategoryIcons/hot.png';
         case 'pollo':
        return '/CategoryIcons/chicken.png';
      default:
        return '/images/default-icon.png';
    }
  };
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
                  src={burger.imageLargeUrl ?? '/fallback-image.png'}
                  alt={burger.name}
                  width={400}
                  height={400}
                  className={styles.burgerImage}
                />
              </motion.div>
              <Image
                src="/shadow.png"
                alt="shadow"
                width={550}
                height={100}
              />
              {burger.origin && 
              <div className={styles.origin}>
                <Image 
                  src="/location.png"
                  alt="location"
                  width={35}
                  height={40}
                />
                <h2>{burger.origin}</h2>
                </div>}

            </div>
          </Col>

          {/* Right: Details */}
          <Col xs={12} md={7} className={styles.infoCol}>
            <div
              className={styles.backgroundImage}
              style={{ backgroundImage: `url(${burger.backgroundImage})` }}
            />
            <div className={styles.textContent}>
              <div className={styles.burgerTitle}>

                <h2>{burger.name}</h2>
                <div className={styles.categoryIcons}>
                  {burger.categories.map((category, index) => (
                    <Image
                      key={index}
                      src={getCategoryPath(category)}
                      alt={category}
                      width={40}
                      height={40}
                    />
                  ))}
                </div>
              </div>
              <p><strong></strong> {burger.description}</p>
              <p><strong>INGREDIENTI:</strong> {burger.ingredients.join(', ')}</p>
              <p><strong>CONTORNO:</strong> {burger.side}</p>
              <p><strong>ALLERGENI:</strong> {burger.allergens.join(', ') || 'None'}</p>

              <div>
                <strong>PREZZO:</strong>
                <ul>
                  {burger.priceOptions.map((option, index) => (
                    <li key={index}>
                      Burger da {option.weight} g - €{option.price.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>

              {burger.extras && burger.extras.length > 0 && (
                <div>
                  <strong>AGGIUNGI:</strong>
                  <ul>
                    {burger.extras.map((extra, index) => (
                      <li key={index}>
                        {extra.name} (+€{extra.price.toFixed(2)})
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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
