'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Col } from 'react-bootstrap';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './swiper-object.module.css';

import { Burger } from '../../Services/menuItems';
import BurgerModal from './SwiperModal/swiper-modal';
import BurgerCardSwiper from './BurgerCardSwiper/burger-card-swiper';

interface Props {
  burgers: Burger[];
}

const BurgerSwiperClient = ({ burgers }: Props) => {
  const [selectedBurger, setSelectedBurger] = useState<Burger | null>(null);

  // Filter out olympian burgers
  const visibleBurgers = burgers.filter(burger => !burger.olympian);

  return (
    <Col md={8} className={styles.noPaddingRight}>
      <div className={`${styles.sliderContainer} ${styles.swiperFix}`}>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={1}
          loop={true}
          className={styles.mySwiper}
          speed={4000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 2 },
            360: { slidesPerView: 2 },
            480: { slidesPerView: 2.5 },
            640: { slidesPerView: 3.5 },
            768: { slidesPerView: 4 },
            900: { slidesPerView: 4.5 },
            1024: { slidesPerView: 5 },
          }}
        >
          {visibleBurgers.map((burger) => (
            <SwiperSlide key={burger.id}>
              <BurgerCardSwiper burger={burger} onClick={() => setSelectedBurger(burger)} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.fadeLeft}></div>
      </div>
      {selectedBurger && (
        <BurgerModal burger={selectedBurger} onClose={() => setSelectedBurger(null)} />
      )}
    </Col>
  );
};

export default BurgerSwiperClient;