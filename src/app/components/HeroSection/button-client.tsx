'use client';
import styles from './hero-section.module.css';
import { Button } from 'react-bootstrap';

export default function HeroButton() {
  function handleClick() {
    alert('Reservation flow would start here!');
  }

  return (
    <Button onClick={handleClick} className={styles.reserveButton}>
                RISERVA UN TAVOLO
              </Button>
  );
}