'use client';

import React from 'react';
import { Card } from 'react-bootstrap';
import { Burger } from '../../../Services/menuItems'; // adjust the path if needed
import styles from './burger-card.module.css'; // optional if you want custom styles

interface Props {
  burger: Burger;
  onClick: () => void;
}

export default function BurgerCard({ burger, onClick }: Props) {
  return (
    <Card
      className="h-100 shadow-sm border-0 hover-zoom"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      {burger.imageSmallUrl && (
        <Card.Img
          variant="top"
          src={burger.imageSmallUrl}
          alt={burger.name}
          style={{ objectFit: 'contain', height: '200px', padding: '1rem' }}
        />
      )}

      <Card.Body>
        <Card.Title className="text-center fw-bold" style={{ fontSize: '1.2rem' }}>
          {burger.name}
        </Card.Title>

        <Card.Text className="text-muted small text-center">
          {burger.ingredients.slice(0, 3).join(', ')}...
        </Card.Text>

        {burger.priceOptions?.length > 0 && (
          <p className="text-center fw-semibold mt-2">
            da €{burger.priceOptions[0].price.toFixed(2)}
          </p>
        )}
      </Card.Body>
    </Card>
  );
}
