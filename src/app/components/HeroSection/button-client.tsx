'use client';
import styles from './hero-section.module.css';
import { Button } from 'react-bootstrap';
// 1. Import the GA helper
import { sendGAEvent } from '@next/third-parties/google';

export default function HeroButton() {
// 2. Helper to send the event
  const handleHeroClick = () => {
    sendGAEvent('event', 'prenota_click', { 
      button_location: 'hero_section',
      restaurant: 'Hero Burger Predazzo' 
    });
  };
  return (
    <Button    as="a"
      href="https://heroburger.plateform.app/"
      target="_blank"  // optional: opens in new tab
      rel="noopener noreferrer"
      onClick={handleHeroClick}
      className={styles.reserveButton}>
                RISERVA UN TAVOLO
              </Button>
  );
}