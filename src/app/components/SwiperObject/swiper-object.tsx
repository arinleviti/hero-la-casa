

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

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
    <div className={styles.mySwiperWrapper}>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        className="mySwiper"
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

      {selectedBurger && (
        <BurgerModal burger={selectedBurger} onClose={() => setSelectedBurger(null)} />
      )}
    </div>
  );
};

export default BurgerSwiper;

