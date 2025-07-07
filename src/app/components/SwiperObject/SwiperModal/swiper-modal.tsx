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
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{burger.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.imageWrapper}>
          <Image
            src={burger.imageLargeUrl || '/images/placeholder.png'}
            alt={burger.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className={styles.description}>{burger.description}</p>
        <h5>Ingredients:</h5>
        <ul className={styles.ingredients}>
          {burger.ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BootstrapBurgerModal;
