'use client';

import React from 'react';
import { Card } from 'react-bootstrap';
import {Beer } from '../../../Services/menuItems'; // adjust the path if needed
import styles from './beer-card.module.css'; // optional if you want custom styles

interface Props {
  beer: Beer;
  onClick: () => void;
}

export default function BeerCard({ beer, onClick }: Props) {
  return (
    <Card
      className={`beer-card h-100  border-0 hover-zoom ${styles.card}`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      {beer.imageSmallUrl && (
        <div className={styles.beerCardImageWrapper}>
        <Card.Img
          variant="top"
          src={beer.imageSmallUrl}
          alt={beer.name}
          style={{ objectFit: 'contain', height: '200px', padding: '1rem' }}
        />
        </div>
      )}

      <Card.Body className={`${styles.beerCardBody}`}>
        <Card.Title className={`${styles.beerCardTitle} text-center `}>
          {beer.name}
        </Card.Title>

        <Card.Text className={styles.beerCardIngredients} >
          {beer.beerType}
        </Card.Text>

        {beer.priceOptions?.length > 0 && (
          <p className={`${styles.beerCardPrice} text-center `}>
            da €{beer.priceOptions[0].price.toFixed(2)}
          </p>
        )}
      </Card.Body>
    </Card>
  );
}
