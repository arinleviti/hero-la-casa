'use client';

import React from 'react';
import { Card } from 'react-bootstrap';
import { Burger } from '../../../Services/menuItems'; // adjust the path if needed
import styles from './burger-card.module.css'; // optional if you want custom styles
import { style } from 'framer-motion/client';

interface Props {
  burger: Burger;
  onClick: () => void;
}

export default function BurgerCard({ burger, onClick }: Props) {
  return (
    <Card
      className={`burger-card h-100  border-0 hover-zoom ${styles.card}`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      {burger.imageSmallUrl && (
        <div className={styles.burgerCardImageWrapper}>
        <Card.Img
          variant="top"
          src={burger.imageSmallUrl}
          alt={burger.name}
          style={{ objectFit: 'contain', height: '200px', padding: '1rem' }}
        />
        </div>
      )}

      <Card.Body className={`${styles.burgerCardBody}`}>
        <Card.Title className={`${styles.burgerCardTitle} text-center `} style={{ fontSize: '1.2rem' }}>
          {burger.name}
        </Card.Title>

        <Card.Text className={styles.burgerCardIngredients} >
          {burger.ingredients.slice(0, 3).join(', ')}...
        </Card.Text>

        {burger.priceOptions?.length > 0 && (
          <p className={`${styles.burgerCardPrice} text-center `}>
            da €{burger.priceOptions[0].price.toFixed(2)}
          </p>
        )}
      </Card.Body>
    </Card>
  );
}
