'use client';

import React from 'react';
import { Button } from 'react-bootstrap';
import { Burger } from './../../../Services/menuItems';
import Image from 'next/image';

export default function BurgerDetailView({burger,onBack,}: {burger: Burger; onBack: () => void;}) {

  return (
    <div>
      <h2>{burger.name}</h2>
      <Image
        src={burger.imageLargeUrl ?? '/fallback-image.png'}
        alt={burger.name}
        style={{ maxWidth: '100%', marginBottom: '1rem' }}
        width={"450"}
        height={"450"}
      />
      <p>{burger.description}</p>
      <Button onClick={onBack} variant="secondary">
        Back
      </Button>
    </div>
  );
}