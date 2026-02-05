'use client';
import styles from './olympic-hero.module.css';
import { Button } from 'react-bootstrap';

export default function HeroButton() {

  return (
    <Button    as="a"
      href="/menu-page"
      rel="noopener noreferrer"
      className={styles.reserveButton}>
                SCOPRILI TUTTI !
              </Button>
  );
}