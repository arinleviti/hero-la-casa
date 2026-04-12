'use client';
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Burger } from '../../../Services/menuItems';
import Image from 'next/image';
import styles from './swiper-modal.module.css';
import {sendGAEvent} from '@next/third-parties/google'; 
interface Props {
  burger: Burger | null;
  onClose: () => void;
}

const getCategoryIconPath = (category: string): string => {
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
    case 'cervo':
      return '/CategoryIcons/deer.webp';
    case 'piccante':
      return '/CategoryIcons/hot.png';
    case 'pollo':
      return '/CategoryIcons/chicken.png';
    case 'maiale':
      return '/CategoryIcons/pig.webp';
    default:
      return '/images/default-icon.png';
  }
};

const BootstrapBurgerModal: React.FC<Props> = ({ burger, onClose }) => {
  if (!burger) return null;

  const isHero = Boolean(burger.burgHeroUrl);
  const imageSrc =
    burger.burgHeroUrl || burger.imageLargeUrl || '/images/placeholder.png';

    const handleReserveClick = () => {
  sendGAEvent('event', 'prenota_click', { 
    button_location: 'burger_modal',
    burger_name: burger?.name || 'unknown',
    restaurant: 'Hero Burger Predazzo'
  });
};
  return (
    <div className={styles.modalWrapper}>
      <Modal
        show={true}
        onHide={onClose}
        centered
        dialogClassName={styles.modalDialog}
        contentClassName={styles.modalContent}
      >
        {/* HEADER */}
        <Modal.Header closeButton className={styles.modalHeader}>
          <div className={styles.headerContent}>
            <Modal.Title className={styles.modalTitle}>
              {burger.name}
            </Modal.Title>
            <div className={styles.categoryIcons}>
              {burger.categories.map(
                (category, i) =>
                  category !== 'burgHero' && (
                    <Image
                      key={i}
                      src={getCategoryIconPath(category)}
                      alt={category}
                      width={35}
                      height={35}
                      title={category}
                    />
                  )
              )}
            </div>
          </div>
        </Modal.Header>

        {/* BODY */}
        <Modal.Body className={styles.modalBody}>
          <div className={styles.modalContentOverlay}>
            <div
              className={
                isHero ? styles.heroImageWrapper : styles.imageWrapper
              }
            >
              <Image
                src={imageSrc}
                alt={burger.name}
                fill
                className={styles.someImageClass}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
              />
              {isHero && (
                <Image
                  src="/CategoryIcons/burgerViaggSmall.png"
                  alt="Viaggio"
                  width={100}
                  height={100}
                  className={styles.planeImage}
                />
              )}
            </div>

            <p className={styles.description}>{burger.modalDescription}</p>
            <h5>INGREDIENTI:</h5>
            <ul className={styles.ingredients}>
              {burger.ingredients.map((ingredient, i) => (
                <li key={i} className={styles.ingredientItem}>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </Modal.Body>

        {/* FOOTER */}
        <Modal.Footer className={styles.modalFooter}>
          <Button
            href="/menu-page"
            className={styles.goToMenuButton}
            onClick={onClose}
          >
            VAI AL MENU COMPLETO
          </Button>
          <Button className={styles.reserveButton} onClick={() => {
            handleReserveClick();   // 🔥 send event
            onClose();
            window.open('https://heroburger.plateform.app/', '_blank');
          }}>
            RISERVA UN TAVOLO
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BootstrapBurgerModal;
