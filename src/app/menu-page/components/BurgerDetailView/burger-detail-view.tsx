'use client';

import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Burger } from './../../../Services/menuItems';
import Image from 'next/image';
import styles from './burger-detail-view.module.css';

export default function BurgerDetailView({
  burger,
  onBack,
}: {
  burger: Burger;
  onBack: () => void;
}) {
  return (
    <Container className={styles.detailView}>
      <Row>
        {/* Left: Image */}
        <Col xs={12} md={5} className={styles.imageCol}>
          <Image
            src={burger.imageLargeUrl ?? '/fallback-image.png'}
            alt={burger.name}
            width={400}
            height={400}
            className={styles.burgerImage}
          />
        </Col>

        {/* Right: Details */}
        <Col xs={12} md={7} className={styles.infoCol}>
          <h2>{burger.name}</h2>
          <p><strong>Description:</strong> {burger.description}</p>
          <p><strong>Ingredients:</strong> {burger.ingredients.join(', ')}</p>
          <p><strong>Side:</strong> {burger.side}</p>
          <p><strong>Allergens:</strong> {burger.allergens.join(', ') || 'None'}</p>
          <p><strong>Categories:</strong> {burger.categories.join(', ')}</p>

          <div>
            <strong>Price Options:</strong>
            <ul>
              {burger.priceOptions.map((option, index) => (
                <li key={index}>
                  {option.weight}g - ${option.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>

          {burger.extras && burger.extras.length > 0 && (
            <div>
              <strong>Extras:</strong>
              <ul>
                {burger.extras.map((extra, index) => (
                  <li key={index}>
                    {extra.name} (+${extra.price.toFixed(2)})
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Button onClick={onBack} variant="secondary" className="mt-3">
            Back
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
