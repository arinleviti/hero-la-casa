'use client';
import styles from './hero-section.module.css';
import { Button } from 'react-bootstrap';

export default function HeroButton() {

  return (
    <Button    as="a"
      href="https://heroburger.plateform.app/"
      target="_blank"  // optional: opens in new tab
      rel="noopener noreferrer"
      className={styles.reserveButton}>
                RISERVA UN TAVOLO
              </Button>
  );
}