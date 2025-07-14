import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Burger } from '../../../Services/menuItems';
import Image from 'next/image';
import styles from './swiper-modal.module.css';

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
    case 'leggermente piccante':
      return '/CategoryIcons/mildlyHot.png';
    case 'piccante':
      return '/CategoryIcons/hot.png';
    default:
      return '/images/default-icon.png';
  }
}

const BootstrapBurgerModal: React.FC<Props> = ({ burger, onClose }) => {
  if (!burger) return null;

  return (

    <div className={styles.modalWrapper}>


      <Modal show={true} onHide={onClose} centered dialogClassName={styles.modalDialog}
        contentClassName={styles.modalContent}>


        <Modal.Header closeButton className={styles.modalHeader}>
          <div className={styles.headerContent}>
            <Modal.Title className={styles.modalTitle}>{burger.name}</Modal.Title>
            <div className={styles.categoryIcons}>
              {burger.categories.map((category, i) => (
                <Image
                  key={i}
                  src={getCategoryIconPath(category)}
                  alt={category}
                  width={35}
                  height={35}
                  title={category}
                />
              ))}
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <div
            className={styles.backgroundImage}
            style={{ backgroundImage: `url(${burger.backgroundImage})` }}
          />
          <div className={burger.backgroundImage ? styles.imageWrapperWithOrigin : styles.imageWrapper}>
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
          <Button href="/menu-page" className={styles.goToMenuButton} onClick={onClose}>
            VAI AL MENU COMPLETO
          </Button>
          <Button className={styles.reserveButton} onClick={onClose}>
            RISERVA UN TAVOLO
          </Button>
        </Modal.Footer>

      </Modal>
    </div>
  );
};

export default BootstrapBurgerModal;
