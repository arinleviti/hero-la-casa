

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // <-- ADD THIS
import { Container, Row, Col } from 'react-bootstrap';
// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './swiper-object.module.css'; // You can create this for custom styles

// Swiper modules
import { Burger } from '../../Services/menuItems'; // Adjust the import path as necessary
import BurgerModal from './SwiperModal/swiper-modal';
import BurgerCardSwiper from './BurgerCardSwiper/burger-card-swiper';

interface Props {
  burgers: Burger[];
}

const BurgerSwiper = ({ burgers }: Props) => {
  const [selectedBurger, setSelectedBurger] = useState<Burger | null>(null);

  return (
    <Container fluid className={styles.mySwiperWrapper}>
      <Row className="align-items-center">
        <Col md={4} className="mb-4 mb-md-0 px-md-5">
          <h1>BURGER PER TUTTI I GUSTI</h1>
          <p>Preparati freschi ogni giorno, avete una vasta scelta di hamburger di carne, veggie o pesce, accompagnati con patatine non fritte e salse gourmet</p>
        </Col>
        <Col md={8} className={styles.noPaddingRight}>
        <div className={`${styles.sliderContainer} ${styles.swiperFix}`}>
          <Swiper
            modules={[ Autoplay]} // <-- Register Pagination here
            slidesPerView={5}
            spaceBetween={1}
            loop={true}
            className={styles.mySwiper}
            speed={4000}   // duration of slide animation in ms
            autoplay={{
              delay: 1,        // no delay between slides
              disableOnInteraction: false,
            }}
          >
            {burgers.map((burger) => (
              <SwiperSlide key={burger.id}>
                <BurgerCardSwiper
                  burger={burger}
                  onClick={() => setSelectedBurger(burger)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.fadeLeft}></div>
          </div>
        </Col>
      </Row>
      {selectedBurger && (
        <BurgerModal burger={selectedBurger} onClose={() => setSelectedBurger(null)} />
      )}
    </Container>
  );
};

export default BurgerSwiper;

