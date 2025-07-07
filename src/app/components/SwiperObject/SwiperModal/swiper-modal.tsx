import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Burger } from '../../../Services/menuItems';
import Image from 'next/image';
import styles from './swiper-modal.module.css';

interface Props {
  burger: Burger | null;
  onClose: () => void;
}

const BootstrapBurgerModal: React.FC<Props> = ({ burger, onClose }) => {
  if (!burger) return null;

  return (
    <Modal show={true} onHide={onClose} centered dialogClassName={styles.modalDialog}
  contentClassName={styles.modalContent}>
      <Modal.Header closeButton className={styles.modalHeader}>
        <Modal.Title  className={styles.modalTitle}>{burger.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <div className={styles.imageWrapper}>
          <Image
            src={burger.imageLargeUrl || '/images/placeholder.png'}
            alt={burger.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p className={styles.description}>{burger.description}</p>
        <h5>INGREDIENTI:</h5>
        <ul className={styles.ingredients}>
          {burger.ingredients.map((ingredient, i) => (
            <li key={i} className={styles.ingredientItem}>{ingredient}</li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer className={styles.modalFooter}>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BootstrapBurgerModal;
