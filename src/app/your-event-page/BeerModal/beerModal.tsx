'use client';
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Beer } from '../../Services/menuItems';
import Image from 'next/image';
import styles from './beerModal.module.css';

interface Props {
  beer: Beer | null;
  onClose: () => void;
}

const BootstrapBeerModal: React.FC<Props> = ({ beer, onClose }: Props) => {
  if (!beer) return null;

  const imageSrc = beer.imageLargeUrl?.trim()
    ? beer.imageLargeUrl
    : beer.imageSmallUrl?.trim()
    ? beer.imageSmallUrl
    : '/images/placeholder.png';

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
              {beer.name}
            </Modal.Title>
          </div>
        </Modal.Header>

        {/* BODY */}
        <Modal.Body className={styles.modalBody}>
          <div className={styles.modalContentOverlay}>
            <div className={styles.imageWrapper}>
              <Image
                src={imageSrc}
                alt={beer.name}
                fill
                className={styles.someImageClass}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
              />
            </div>

            <h5>{beer.beerType}</h5>

            <ul className={styles.ingredients}>
              {beer.characteristics.map((c, i) => (
                <li key={i} className={styles.ingredientItem}>
                  {c}
                </li>
              ))}
            </ul>

            <p className={styles.description}>{beer.description}</p>
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
          <Button
            className={styles.reserveButton}
            onClick={() => {
              onClose();
              window.open('https://heroburger.plateform.app/', '_blank');
            }}
          >
            RISERVA UN TAVOLO
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BootstrapBeerModal;

